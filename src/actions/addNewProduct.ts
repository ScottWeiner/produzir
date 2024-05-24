'use server'

import { revalidatePath } from "next/cache"
import { db } from "@/db"
import {z} from 'zod'

const addNewProductSchema = z.object({
    sku: z.string().max(6).min(6),
    description: z.string().min(3).max(20),
    shortDesc: z.string().min(3).max(10),
    packSize: z.string().min(3).max(10),
    weight: z.string(),
    upc: z.string().min(10).max(12), 
    imageUrl: z.string().url()
})

interface AddProductFormState {
    errors: {
        _form?: string[];
        sku?: string[];
        description?: string[];
        shortDesc?: string[];
        packSize?: string[];
        weight?: string[];
        upc?: string[];
        imageUrl?: string[]
        
    };
    success?: boolean | undefined;
}

export async function addNewProduct(addProductFormState:AddProductFormState,addNewProductFormData: FormData): Promise<AddProductFormState>{
    
    console.log("SUBMIT FORM!")

    
    
    const result = addNewProductSchema.safeParse({
        sku: addNewProductFormData.get("sku"),
        description: addNewProductFormData.get('description'),
        shortDesc: addNewProductFormData.get("shortDesc"),
        packSize: addNewProductFormData.get("packSize"),
        weight: addNewProductFormData.get("weight"),
        upc: addNewProductFormData.get("upc"),
        imageUrl: addNewProductFormData.get("imageUrl"),
    })

    
    console.log("field Errors: ", result.error?.flatten().fieldErrors)
    

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    try {
        await db.product.create({
            data: {
                sku: result.data.sku,
                description: result.data.description,
                shortDescription: result.data.shortDesc,
                packSize: result.data.packSize,
                weight: result.data.weight,
                upc: result.data.upc, 
                imageUrl: result.data.imageUrl,
                categoryId: 1,
                subcategoryId: 1
            }
        })           
        
        
    } catch (err) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message],
                },
            };
        } else {
            return {
                errors: {
                    _form: ["Something went wrong..."],
                },
            };
        }
    }

    const newProduct = await db.product.findFirst({
        where: {
            sku: result.data.sku
        }
    })

    if (!newProduct) {
        return {
            errors: {
                _form: ["Failed to retrieve product after save!"]
            }
        }
    }

    revalidatePath(`/products/${newProduct.id}`);
    return {
        errors: {},
        success: true,
    };
}