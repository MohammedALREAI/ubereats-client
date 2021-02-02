import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { Restaurant ,IRestaurantProps} from '../restaurant'
import { BrowserRouter as Router } from "react-router-dom";
describe(' render the <Restaurant/>',()=>{

it('should be render the item of the Restaurant with props ', () => {
    
    const restaurantProps:IRestaurantProps ={
        id:"1",
        name:"name",
        coverImg:"sdds",
        categoryName:"soem dte"
        
    }

    const {getByText,container} = render(
    <Router>
        <Restaurant {...restaurantProps}/>

    </Router>
    )
    
        getByText(restaurantProps.name)

  expect(container.firstChild).toHaveAttribute("href",`/restaurants/${restaurantProps.id}`) 
   
})

discribe("should be featch all  resturent ",()=>{})

})