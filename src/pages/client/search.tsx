import React,{useEffect} from 'react'
import {useHistory, useLocation} from'react-router-dom'
import { useSearchRestaurantLazyQuery,useSearchRestaurantQuery } from '../../generated/graphql';
interface Props {

}

export const Search = (props: Props) => {
  const location=useLocation();
  const history=useHistory()
  const [queryReadyToFetch,{data,loading,error}] = useSearchRestaurantLazyQuery();
  useEffect(()=>{
  const query=location.search.split('?term=')[1]
  if(!query){
     return history.replace('/')
  }
  queryReadyToFetch({variables:{
    input:{
      query,
      page:1

    }
  }})

  },[location,location])
  return (
    <div>
    <Helmet>
      <title>Search | Nuber Eats</title>
    </Helmet>
    <h1>Search page</h1>
  </div>
  )
}





