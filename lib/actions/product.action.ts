"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import { Product } from "@/types";
//Get latest products
export const getLatestProduct = async (): Promise<Product[]> => {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  const array = convertToPlainObject(data);
  return array.map((product) => ({
    ...product,
    price: String(product.price.toString()),
    rating: Number(product.rating.toString()), // 将 Decimal 转换为 number
  }));
};

//get single product by slug
export const getProductBySlug = async (slug: string) => {
  return await prisma.product.findFirst({
    where: { slug },
  });
};
