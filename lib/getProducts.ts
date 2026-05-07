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
  if (process.env.JSONBIN_BIN_ID && process.env.JSONBIN_API_KEY) {
    try {
      const res = await fetch(
        `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_BIN_ID}/latest`,
        {
          headers: { 'X-Master-Key': process.env.JSONBIN_API_KEY },
          next: { revalidate: 0 },
        }
      );
      if (res.ok) {
        const data = await res.json();
        return data.record;
      }
    } catch (err) {
      console.error('JSONBin read failed, falling back to file:', err);
    }
  }
  return getProductsFromFile();
}
