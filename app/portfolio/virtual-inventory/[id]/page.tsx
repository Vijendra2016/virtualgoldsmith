import { notFound } from "next/navigation";
import Link from "next/link";
import { virtualInventoryProducts } from "@/app/virtual-inventory/products";
import VirtualInventoryDetailClient from "./VirtualInventoryDetailClient";

export async function generateStaticParams() {
  return virtualInventoryProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = virtualInventoryProducts.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.title} | Virtual Inventory | Virtual Goldsmith`,
    description: product.shortDescription,
  };
}

export default async function VirtualInventoryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = virtualInventoryProducts.find((p) => p.id === id);
  if (!product) notFound();

  return <VirtualInventoryDetailClient product={product} />;
}
