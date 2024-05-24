
import getProductParams from "@/actions/getProductParams";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import AddProductForm from "@/components/Forms/AddProductForm";


export default async function  AddNewProductPage() {

    const productParams = await getProductParams()
    

    return (
      <>
     
        <Breadcrumb navs={['Products']} pageName="Add New Product"/>
 
        {<AddProductForm params={productParams}/>}
          
        
    
      </>
    )
}