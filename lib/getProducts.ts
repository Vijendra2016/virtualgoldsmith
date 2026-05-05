import { readFileSync } from 'fs';
import path from 'path';
import { VirtualInventoryProduct, virtualInventoryProducts as staticProducts } from '@/app/virtual-inventory/products';

export function getProducts(): VirtualInventoryProduct[] {
  try {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    return JSON.parse(readFileSync(filePath, 'utf-8')) as VirtualInventoryProduct[];
  } catch {
    return staticProducts;
  }
}
