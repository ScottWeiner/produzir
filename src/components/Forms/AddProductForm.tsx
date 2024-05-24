'use client'

import ButtonPrimary from "../Buttons/ButtonPrimary"
import {useFormState} from'react-dom'
import {  useEffect, useRef, useState} from 'react';

import * as actions from '@/actions'


interface AddProductFormProps {
  params: any
}

export default  function AddProductForm({params}: AddProductFormProps) {

    const {categories,subCategories} = params

    const [filteredSubCategories, setFilteredSubCategories] = useState([])
   
    const ref = useRef<HTMLFormElement | null>(null)
    const [formState, action] = useFormState(
       actions.addNewProduct, {errors:{}}
    )
   

    useEffect(() => {
        if (formState.success) {
            console.log("success: ", formState.success)
          ref.current?.reset();
    
          
        }
      }, [formState]);


      const handleCategorySelection = (event: any) => {
        const cat = event.target.value
        console.log(cat)

        console.log(subCategories)

        const filteredSubCats = subCategories.filter((subcat: any) => {
            return subcat.categoryId == cat
        })

        console.log(filteredSubCats)
        
        setFilteredSubCategories(filteredSubCats)

      }


    return(
        <form action={action} ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4p-4">
            <div className="m-4 flex flex-col">
              <label htmlFor="sku">SKU </label>
              <input id="sku" maxLength={6} minLength={6}  type="number" name="sku"/>
              {formState.errors.sku}
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="description">Description </label>
              <input id="description" type="text" name="description"/>
              {formState.errors.description}
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="shortDesc">Short Desc </label>
              <input id="shortDesc" type="text" name="shortDesc"/>
              {formState.errors.shortDesc}
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="packSize">Pack Size </label>
              <input  id ="packSize"type="text" name="packSize"/>
              {formState.errors.packSize}
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="weight">Weight </label>
              <input id="weight" type="number" name="weight"/>
              {formState.errors.weight}
            </div>
            <div className="m-4 flex flex-col"> 
              <label htmlFor="imageUrl">Image URL </label>
              <input id="imageUrl"type="text" name="imageUrl"/>
              {formState.errors.imageUrl}
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="upc">UPC </label>
              <input id="upc" type="number" name="upc"/>
              {formState.errors.upc}
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="category">Category</label>
              <select onChange={handleCategorySelection} name="category" id="category">
                <option  value="0">Select...</option>
                {categories.map((cat: any) => {
                  return (<option key={cat.id} value={cat.id}>{cat.description}</option>)
                })}

              </select>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="subCategory">Category</label>
              <select name="subCategory" id="subCategory">
                <option value="0">Select...</option>
                {filteredSubCategories.map((subcat:any) => {
                  return (<option key={subcat.id} value={subcat.id}>{subcat.description}</option>)
                })}
               
              </select>
            </div>

         </div>
         {formState.errors._form ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors._form?.join(', ')}
          </div>
        ) : null}
        <div className="m-4 flex items-center justify-center">
       
         <ButtonPrimary text="Add Product"></ButtonPrimary>
         
        </div>
          
        
      </form>
    )

}