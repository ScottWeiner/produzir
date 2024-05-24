'use server'


import { redirect } from 'next/navigation'
import { db } from "@/db"
import {z} from 'zod'

const addNewProductSchema = z.object({
    sku: z.string().max(6).min(6),
    description: z.string().min(3).max(20),
    shortDesc: z.string().min(3).max(10),
    packSize: z.string().min(3).max(10),
    weight: z.string(),
    upc: z.string().min(10).max(12), 
    imageUrl: z.string().url(),
    category: z.string().min(1).max(1),
    subCategory: z.string().min(1).max(1)
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
        imageUrl?: string[];
        category?: string[];
        subCategory?: string[]
        
        
    };
    success?: boolean | undefined;
}

export async function addNewProduct(addProductFormState:AddProductFormState,addNewProductFormData: FormData): Promise<AddProductFormState>{
    
    console.log("SUBMIT FORM!")

    console.log(addNewProductFormData.get("category"))
    
    
    const result = addNewProductSchema.safeParse({
        sku: addNewProductFormData.get("sku"),
        description: addNewProductFormData.get('description'),
        shortDesc: addNewProductFormData.get("shortDesc"),
        packSize: addNewProductFormData.get("packSize"),
        weight: addNewProductFormData.get("weight"),
        upc: addNewProductFormData.get("upc"),
        imageUrl: addNewProductFormData.get("imageUrl"),
        category: addNewProductFormData.get("category"),
        subCategory: addNewProductFormData.get("subCategory")
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
                categoryId: parseInt(result.data.category),
                subcategoryId: parseInt(result.data.subCategory)
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

    redirect(`/products/${newProduct.id}`);
}