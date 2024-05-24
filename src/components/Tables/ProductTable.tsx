
import { ProductForTable } from "@/types/product"
import { Product } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"


  
interface ProductTableProps {
    products: ProductForTable[]
}  

export default function ProductTable({products}: ProductTableProps){
   
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="px-4 py-6 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                  Top Products
                </h4>
              </div>
        
              <div className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-1 flex items-center">
                  <p className="font-medium">SKU</p>
                </div>
                <div className="col-span-2 flex items-center">
                  <p className="font-medium">Description</p>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                  <p className="font-medium">Category</p>
                </div>
                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Price</p>
                </div>
                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Sold</p>
                </div>
                <div className="col-span-1 flex items-center">
                  <p className="font-medium">Active</p>
                </div>
              </div>
        
              {products?.map((product, key) => (
                <Link key={key} href={`/products/${product.id}`}>
                <div
                  className="grid grid-cols-8 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                  key={key}
                >
                <div className="col-span-1 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">
                      {product.sku}
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                      <p className="text-sm text-black dark:text-white">
                        {product.description}
                      </p>                      
                      <div className="h-12.5 w-15 rounded-md">
                        {/* TODO: Images display. SUppresing for now */}
                        {/*<Image
                          src={product.imageUrl || ''}
                          width={60}
                          height={50}
                          alt="Product"
              />*/}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">
                      {product.category.description}
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">
                      ${100.00}
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">{product.subcategoryId}</p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm text-meta-5">{product.isActive ? 'Active' : 'Inactive'}</p>
                  </div>
                </div>
                </Link>
              ))}
              
            </div>
    )
}