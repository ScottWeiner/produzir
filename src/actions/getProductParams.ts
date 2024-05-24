'use server'

import { db } from "@/db"

export default async function getProductParams() {
    const categories = await db.productCategory.findMany()

    const subCategories = await db.productSubCategory.findMany()

    return {
        categories,subCategories
    }

}