import { string, z } from "zod";
import { insertProductSchema } from "@/lib/validators";

export interface Product extends z.infer<typeof insertProductSchema> {
  id: string;
  rating: number;
  createdAt: Date;
}
