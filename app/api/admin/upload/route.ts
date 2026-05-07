import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { ADMIN_PASSWORD } from '@/lib/adminConfig';

function isAuthorized(req: NextRequest) {
  return req.headers.get('x-admin-password') === ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get('file') as File | null;
  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  // Use Vercel Blob in production (filesystem is read-only on Vercel)
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { put } = await import('@vercel/blob');
      const ext = path.extname(file.name) || '.jpg';
      const filename = `products/${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
      const blob = await put(filename, file, { access: 'public' });
      return NextResponse.json({ url: blob.url });
    } catch (err) {
      console.error('Vercel Blob upload failed:', err);
      return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
  }

  // Local dev fallback — write to public/uploads
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!existsSync(uploadsDir)) mkdirSync(uploadsDir, { recursive: true });
    const bytes = await file.arrayBuffer();
    const ext = path.extname(file.name) || '.jpg';
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
    writeFileSync(path.join(uploadsDir, filename), Buffer.from(bytes));
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (err) {
    console.error('Local upload failed:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
