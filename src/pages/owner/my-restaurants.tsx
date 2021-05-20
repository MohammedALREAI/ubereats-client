import React from 'react'
import { useMyRestaurantsQuery } from '../../generated/graphql'
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Restaurant } from "../../components/restaurant";
interface Props {

}



const notFoundRestaurants=( <>
  <h4 className="text-xl mb-5">You have no restaurants.</h4>
  <Link
    className="text-lime-600 hover:underline"
    to="/add-restaurant"
  >
    Create one &rarr;
  </Link>
</>)
export const MyRestaurants = (props: Props) => {
  const { data, loading, error } = useMyRestaurantsQuery(); 
  return (
    <div>
    <Helmet>
      <title>My Restaurants | Nuber Eats</title>
    </Helmet>

    <div className="max-w-screen-2xl mx-auto mt-32">
        <h2 className="text-4xl font-medium mb-10">My Restaurants</h2>
        {data?.myRestaurants.ok && data.myRestaurants.restaurants.length === 0 ? notFoundRestaurants : (
          <div className="grid mt-16 md:grid-cols-3 gap-x-5 gap-y-10">
            {data?.myRestaurants.restaurants.map((restaurant) => (
              <Restaurant
                key={restaurant.id}
                id={restaurant.id + ""}
                coverImg={restaurant.coverImg}
                name={restaurant.name}
                categoryName={restaurant.category?.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
