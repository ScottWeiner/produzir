'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { FormEvent } from "react";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";

export default function AddNewProductPage() {

    const onSubmit = (e: FormEvent) => {
      e.preventDefault()
      alert('You manages to hit the onSubmit of the form, dude.')
    }

    return (
      <>
      <Breadcrumb pageName="Add New Product"/>
 
      <form className="" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4p-4">
            <div className="m-4 flex flex-col">
              <label htmlFor="sku">SKU </label>
              <input maxLength={6} minLength={6}  type="number" name="sku"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="description">Description </label>
              <input type="text" name="description"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="shortDescription">Short Desc </label>
              <input type="text" name="shortDescription"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="packSize">Pack Size </label>
              <input type="text" name="packSize"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="weight">Weight </label>
              <input type="number" name="weight"/>
            </div>
            <div className="m-4 flex flex-col"> 
              <label htmlFor="imageUrl">Image URL </label>
              <input type="text" name="imageUrl"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="upc">UPC </label>
              <input  type="number" name="upc"/>
            </div>
         </div>
        <div className="m-4 flex items-center justify-center">
          <ButtonPrimary text="Add Product"/>
        </div>
          
        
      </form>
      </>
    )
}