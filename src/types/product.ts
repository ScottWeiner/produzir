import { Product, ProductCategory } from "@prisma/client";

export type ProductForTable = Product & {
    category: {
        description:string
    }
}