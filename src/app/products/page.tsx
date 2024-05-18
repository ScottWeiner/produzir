

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";

import ProductTable from "@/components/Tables/ProductTable";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";




export default async function ProductsPage() {

 
    const prisma = new PrismaClient()

    const products = await prisma.product.findMany({
        include: {
            category: true
        }
    })

   

    return (
        <>
       
        <Breadcrumb pageName="Products" />
        
        <div className="text-right mb-2">
          <Link href="/products/add">
            <ButtonPrimary  text="Add Product" />
        </Link>  
        </div>
        
        
        
        <ProductTable products={products}/>
        
            
    </>
    )
}