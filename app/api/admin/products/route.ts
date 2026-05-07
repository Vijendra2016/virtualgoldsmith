import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { ADMIN_PASSWORD } from '@/lib/adminConfig';

const dataPath = path.join(process.cwd(), 'data', 'products.json');
const BIN_ID = process.env.JSONBIN_BIN_ID;
const API_KEY = process.env.JSONBIN_API_KEY;
const useJSONBin = !!(BIN_ID && API_KEY);

function isAuthorized(req: NextRequest) {
  return req.headers.get('x-admin-password') === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    if (useJSONBin) {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': API_KEY! },
      });
      const data = await res.json();
      if (!res.ok) {
        console.error('JSONBin GET failed:', res.status, data);
        return NextResponse.json([], { status: 200 });
      }
      return NextResponse.json(data.record ?? []);
    }
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'));
    return NextResponse.json(data);
  } catch (err) {
    console.error('GET products error:', err);
    return NextResponse.json([], { status: 200 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const products = await req.json();
  try {
    if (useJSONBin) {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY!,
        },
        body: JSON.stringify(products),
      });
      const data = await res.json();
      if (!res.ok) {
        const msg = data?.message ?? `JSONBin error ${res.status}`;
        console.error('JSONBin PUT failed:', res.status, data);
        return NextResponse.json({ error: msg }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }
    const dir = path.join(process.cwd(), 'data');
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(dataPath, JSON.stringify(products, null, 2));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('PUT products error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
