import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { ADMIN_PASSWORD } from '@/lib/adminConfig';

const dataPath = path.join(process.cwd(), 'data', 'products.json');

function isAuthorized(req: NextRequest) {
  return req.headers.get('x-admin-password') === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const data = JSON.parse(readFileSync(dataPath, 'utf-8'));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const products = await req.json();
  const dir = path.join(process.cwd(), 'data');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(dataPath, JSON.stringify(products, null, 2));
  return NextResponse.json({ ok: true });
}
