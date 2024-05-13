import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"

interface ProductMasterProps {
    params: {
        id: string
    }
}

export default function ProductMaster(props: ProductMasterProps) {
    return (
        <>
            <Breadcrumb pageName="Product Master" />
            <h1>Product master: {props.params.id}</h1>
        </>

    )
}