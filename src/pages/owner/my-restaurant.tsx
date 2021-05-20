import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useHistory, useParams } from "react-router-dom";
import { Dish } from "../../components/dish";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryPie,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import { RestaurantQuery, useCreatePaymentMutation, useMeQuery, useRestaurantQuery } from "../../generated/graphql";
import { MyVictory } from "../../components/myVictory";





interface IParams {
  id: string;
}

export const MyRestaurant = () => {
  const { id } = useParams<IParams>();
  
  const { data:dataRestaurant } = useRestaurantQuery({
      variables: {
          input: {
            restaurantId:+ id
          }
       },
    
     });
    

     const [createPaymentMutation, { data:createData, loading, error }] = useCreatePaymentMutation({
      onCompleted:(data) => {
        if (data.createPayment.ok) {
          alert("Your restaurant is being promoted!");
        }}}
     );
  

  const { data: userData } = useMeQuery();
  const triggerPaddle = () => {
    if (userData?.me.email) {
      // @ts-ignore
      window.Paddle.Setup({ vendor: 31465 });
      // @ts-ignore
      window.Paddle.Checkout.open({
        product: 638793,
        email: userData.me.email,
        successCallback: (data: any) => {
          createPaymentMutation({
            variables: {
              input: {
                transactionId: data.checkout.id,
                restaurantId: +id,
              },
            },
          });
        },
      });
    }
  };
  const { data: subscriptionData } = useSubscription<pendingOrders>(
    PENDING_ORDERS_SUBSCRIPTION
  );
  // hint must be run the server and run gen
  const history = useHistory();
  useEffect(() => {
    if (subscriptionData?.pendingOrders.id) {
      history.push(`/orders/${subscriptionData.pendingOrders.id}`);
    }
  }, [subscriptionData]);
  return (
    <div>
      <Helmet>
        <title>
          {dataRestaurant?.restaurant.restaurant?.name || "Loading..."} | Nuber Eats
        </title>
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
      </Helmet>
      <div className="checkout-container"></div>
      <div
        className="  bg-gray-700  py-28 bg-center bg-cover"
        style={{
          backgroundImage: `url(${dataRestaurant?.restaurant.restaurant?.coverImg})`,
        }}
      ></div>
      <div className="container mt-10">
        <h2 className="text-4xl font-medium mb-10">
          {dataRestaurant?.restaurant.restaurant?.name || "Loading..."}
        </h2>
        <Link
          to={`/restaurants/${id}/add-dish`}
          className=" mr-8 text-white bg-gray-800 py-3 px-10"
        >
          Add Dish &rarr;
        </Link>
        <span
          onClick={triggerPaddle}
          className=" cursor-pointer text-white bg-lime-700 py-3 px-10"
        >
          Buy Promotion &rarr;
        </span>
        <div className="mt-10">
          {dataRestaurant?.restaurant.restaurant?.menu.length === 0 ? (
            <h4 className="text-xl mb-5">Please upload a dish!</h4>
          ) : (
            <div className="grid mt-16 md:grid-cols-3 gap-x-5 gap-y-10">
              {dataRestaurant?.restaurant.restaurant?.menu.map((dish, index) => (
                <Dish
                  key={index}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              ))}
            </div>
          )}
        </div>
        <div className="mt-20 mb-10">
          <h4 className="text-center text-2xl font-medium">Sales</h4>
          <div className="mt-10">
            {dataRestaurant?.restaurant.restaurant?.orders && (
              <MyVictory orders={dataRestaurant?.restaurant.restaurant?.orders}/>

            )}
          </div>
        </div>
      </div>
    </div>
  );
};