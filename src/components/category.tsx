import React from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../generated/graphql'

type categoryProps=Pick<Category,"name"|"coverImg"|"slug">& {
   id:string
}




export const CategoryItem:React.FC<categoryProps> = ({name,id,slug,coverImg}) => {
    return (
        <Link key={id} to={`/category/${slug}`}>

        <div className="flex flex-col group items-center cursor-pointer">
                  <div
                    className=" w-16 h-16 bg-cover group-hover:bg-gray-100 rounded-full"
                    style={{ backgroundImage: `url(${coverImg})` }}
                  ></div>
                  <span className="mt-1 text-sm text-center font-medium">
                    {name}
                  </span>
                </div>
                </Link>
    )
}
