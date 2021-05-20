import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { OrderStatus, useCoockedOrdersSubscription, useEditOrderMutation,useCreateOrderMutation, useGetOrderQuery, useMeQuery, UserRole } from "../generated/graphql";
import {OrderComponent} from'../components/order'
import{useRole} from'../Hocks/useRole'


interface IParams {
  id: string;
}

export const Order = () => {
  const params = useParams<IParams>();
const role =useRole();  
  const { data:orderData,subscribeToMore, loading, error } = useGetOrderQuery({
      variables: {
          input: {
            id: + params.id,
            
          }
       },
     });

  



     const { data } = useCoockedOrdersSubscription();
     
     //ts-lint
     const [editOrderMutation, { data:dataOrder }] = useEditOrderMutation();

  useEffect(() => {
    if (orderData?.getOrder.ok) {
      subscribeToMore({
        document: ORDER_SUBSCRIPTION,
        variables: {
          input: {
            id: +params.id,
          },
        },
        updateQuery: (
          prev,
          {
            subscriptionData: { data },
          }: { subscriptionData: { data: orderUpdates } }
        ) => {
          if (!orderData) return prev;
          return {
            getOrder: {
              ...prev.getOrder,
              order: {
                ...orderData.orderUpdates,
              },
            },
          };
        },
      });
    }
  }, [orderData]);
  const onButtonClick = (newStatus: OrderStatus) => {
    editOrderMutation({
      variables: {
        input: {
          id: +params.id,
          status: newStatus,
        },
      },
    });
  };
  return (
    <div className="mt-32 container flex justify-center">
      <Helmet>
        <title>Order #{params.id} | Nuber Eats</title>
      </Helmet>
        <OrderComponent 
        id={+params.id}
         order={orderData?.getOrder.order} 
         role={role}
         onButtonClick={onButtonClick}
         
         />

      
     
    </div>
  );
};













