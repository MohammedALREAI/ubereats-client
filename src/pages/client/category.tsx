import React from 'react'
import { useParams } from 'react-router-dom'
import { useCategoryQuery } from '../../generated/graphql';

interface Props {

}

interface ICategoryParams{
  slug:string
}
export const Category = (props: Props) => {
  const params=useParams<ICategoryParams>();
      const { data, loading, error } = useCategoryQuery({
       variables: {
          input: {
            page:1,
            slug:params.slug
          }
       },
     }); 
  return (
     <h1>Category</h1>
  )
}
