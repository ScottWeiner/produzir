import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import { PrismaClient } from "@prisma/client";


interface ProductMasterProps {
    params: {
        id: string
    }
}

export default async function ProductMaster(props: ProductMasterProps) {
    const prisma = new PrismaClient()


    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(props.params.id)
        }
    })

    if (!product) {
        return(
            <>
            <Breadcrumb pageName="Product Master" />
            <h1>Whoopsies... this product does not exist</h1>
            </>
        )
    }

    return (
        <>
            <Breadcrumb pageName="Product Master" />
            <h1>Product master: {props.params.id}</h1>
            <p> SKU: {product.sku}</p>
            <p>Description: {product.description}</p>
        </>

    )
}