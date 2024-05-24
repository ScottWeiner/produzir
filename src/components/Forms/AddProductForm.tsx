'use client'

import ButtonPrimary from "../Buttons/ButtonPrimary"
import {useFormState} from'react-dom'
import { useEffect, useRef, useState} from 'react';

import * as actions from '@/actions'

export default function AddProductForm() {
   
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





    return(
        <form action={action} ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4p-4">
            <div className="m-4 flex flex-col">
              <label htmlFor="sku">SKU </label>
              <input id="sku" maxLength={6} minLength={6}  type="number" name="sku"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="description">Description </label>
              <input id="description" type="text" name="description"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="shortDesc">Short Desc </label>
              <input id="shortDesc" type="text" name="shortDesc"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="packSize">Pack Size </label>
              <input  id ="packSize"type="text" name="packSize"/>
              {formState.errors.packSize}
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="weight">Weight </label>
              <input id="weight" type="number" name="weight"/>
            </div>
            <div className="m-4 flex flex-col"> 
              <label htmlFor="imageUrl">Image URL </label>
              <input id="imageUrl"type="text" name="imageUrl"/>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="upc">UPC </label>
              <input id="upc" type="number" name="upc"/>
            </div>
         </div>
        <div className="m-4 flex items-center justify-center">
        {formState.errors && <div>Here be errors!</div>}
         {/* <ButtonPrimary text="Add Product"></ButtonPrimary>*/}
         <button type={'submit'}>SUbmit</button>
        </div>
          
        
      </form>
    )

}