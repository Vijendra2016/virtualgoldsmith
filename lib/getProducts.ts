import { readFileSync } from 'fs';
import path from 'path';
import { VirtualInventoryProduct, virtualInventoryProducts as staticProducts } from '@/app/virtual-inventory/products';

function getProductsFromFile(): VirtualInventoryProduct[] {
  try {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    return JSON.parse(readFileSync(filePath, 'utf-8')) as VirtualInventoryProduct[];
  } catch {
    return staticProducts;
  }
}

export async function getProducts(): Promise<VirtualInventoryProduct[]> {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import('@vercel/kv');
      const products = await kv.get<VirtualInventoryProduct[]>('products');
      if (products && Array.isArray(products)) return products;
      // KV is empty — seed it from the local JSON file on first use
      const seed = getProductsFromFile();
      await kv.set('products', seed);
      return seed;
    } catch (err) {
      console.error('KV read failed, falling back to file:', err);
    }
  }
  return getProductsFromFile();
}
