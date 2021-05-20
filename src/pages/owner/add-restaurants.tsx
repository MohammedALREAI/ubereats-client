import { useApolloClient } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Button } from "../../components/button";
import { MessageError } from "../../components/Form/errorrMessage";
import { Input } from "../../components/Form/input";
import { MyRestaurantDocument,   MyRestaurantsDocument,   MyRestaurantsQuery,  useCreateAccountMutation, useCreateRestaurantMutation,
  useMyRestaurantsQuery } from "../../generated/graphql";
const SERVER_URL= process.env.SERVER_URL || "" ;
interface IFormProps {
  name: string;
  address: string;
  categoryName: string;
  file: FileList;
}

export const AddRestaurants = () => {
  const client = useApolloClient();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState<string>("");

  const [createRestaurantMutation, { data, loading, error }] = useCreateRestaurantMutation({
       onCompleted: (data) => {
        const {
          createRestaurant: { ok, restaurantId },
        } = data;
        if (ok) {
          const { name, categoryName, address } = getValues();
          setUploading(false);
          const queryResult = client.readQuery({ query: MyRestaurantsDocument });
          client.writeQuery({
            query: MyRestaurantsDocument,
            data: {
              myRestaurant: {
                ...queryResult.myRestaurants,
                restaurants: [
                  {
                    address,
                    category: {
                      name: categoryName,
                      __typename: "Category",
                    },
                    coverImg: imageUrl,
                    id: restaurantId,
                    isPromoted: false,
                    name,
                    __typename: "Restaurant",
                  },
                  ...queryResult.myRestaurants.restaurants,
                ],
              },
            },
          });
          history.push("/");}}
        

     });
     const { register, getValues, formState, handleSubmit } = useForm<IFormProps>({
      mode: "onChange",
    });
    const [uploading, setUploading] = useState<boolean>(false);
    const onSubmit = async () => {
      try {
        setUploading(true);
        const { file, name, categoryName, address } = getValues();
        const actualFile = file[0];
        const formBody = new FormData();
        formBody.append("file", actualFile);
        const { url: coverImg } = await (
          await fetch(SERVER_URL, {
            method: "POST",
            body: formBody,
          })
        ).json();
        setImageUrl(coverImg);
        createRestaurantMutation({
          variables: {
            input: {
              name,
              categoryName,
              address,
              coverImg,
            },
          },
        });
      } catch (e) {}
    };

  return (
    <div className="container flex flex-col items-center mt-52">
      <Helmet>
        <title>Add Restaurant | Nuber Eats</title>
      </Helmet>
      <h4 className="font-semibold text-2xl mb-3">Add Restaurant</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid max-w-screen-sm gap-3 mt-5 w-full mb-5"
      >
        <Input
        autoFocus={true}
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          ref={register({ required: "Name is required." })}
        />
        <Input
          className="input"
          type="text"
          name="address"
          placeholder="Address"
          ref={register({ required: "Address is required." })}
        />
        <Input
          className="input"
          type="text"
          name="categoryName"
          placeholder="Category Name"
          ref={register({ required: "Category Name is required." })}
        />
        <div>
          <Input
            type="file"
            name="file"
            accept="image/*"
            ref={register({ required: true })}
          />
        </div>
        <Button
          loading={uploading}
          canClick={formState.isValid}
          actionText="Create Restaurant"
        />
        {data?.createRestaurant?.error && (
          <MessageError message={data.createRestaurant.error} />
        )}
      </form>
    </div>
  )
}

