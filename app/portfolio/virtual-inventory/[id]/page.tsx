import { notFound } from "next/navigation";
import { getProducts } from "@/lib/getProducts";
import VirtualInventoryDetailClient from "./VirtualInventoryDetailClient";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getProducts().map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProducts().find((p) => p.id === id);
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
  const product = getProducts().find((p) => p.id === id);
  if (!product) notFound();

  return <VirtualInventoryDetailClient product={product} />;
}
