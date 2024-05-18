'use client'

import { useState } from "react"

interface ButtonProps {
    text: string
    onClick?: () => void
    
}

export default function ButtonPrimary({text, onClick}: ButtonProps){

   

   return(
   <button
        type="submit"
        className="text-primary hover:bg-primary hover:text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
            {text}
        </button> 
   )
}