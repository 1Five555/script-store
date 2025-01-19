"use server";
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
import { Product } from "@/types";
//Get latest products
export const getLatestProduct = async (): Promise<Product[]> => {
  const prismaClient = new PrismaClient();
  const data = await prismaClient.product.findMany({
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
