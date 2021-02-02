import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type DishChoice = {
  __typename?: 'DishChoice';
  name: Scalars['String'];
  extra?: Maybe<Scalars['Int']>;
};

export type DishOption = {
  __typename?: 'DishOption';
  name: Scalars['String'];
  choices?: Maybe<Array<DishChoice>>;
  extra?: Maybe<Scalars['Int']>;
};

export type Dish = {
  __typename?: 'Dish';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  price: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  restaurant: Restaurant;
  options?: Maybe<Array<DishOption>>;
};


export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  name: Scalars['String'];
  choice?: Maybe<Scalars['String']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  dish: Dish;
  options?: Maybe<Array<OrderItemOption>>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  customer?: Maybe<User>;
  driver?: Maybe<User>;
  restaurant?: Maybe<Restaurant>;
  items: Array<OrderItem>;
  total?: Maybe<Scalars['Float']>;
  status: OrderStatus;
};

export enum OrderStatus {
  Pending = 'Pending',
  Cooking = 'Cooking',
  Cooked = 'Cooked',
  PickedUp = 'PickedUp',
  Delivered = 'Delivered'
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  coverImg?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  restaurants?: Maybe<Array<Restaurant>>;
  restaurantCount: Scalars['Int'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  coverImg: Scalars['String'];
  address: Scalars['String'];
  category?: Maybe<Category>;
  owner: User;
  orders: Array<Order>;
  menu: Array<Dish>;
  isPromoted: Scalars['Boolean'];
  promotedUntil?: Maybe<Scalars['DateTime']>;
};

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  transactionId: Scalars['String'];
  user: User;
  restaurant: Restaurant;
  restaurantId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
  verified: Scalars['Boolean'];
  restaurants: Array<Restaurant>;
  orders: Array<Order>;
  payments: Array<Payment>;
  rides: Array<Order>;
};

export enum UserRole {
  Client = 'Client',
  Owner = 'Owner',
  Delivery = 'Delivery'
}

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AllCategoriesOutput = {
  __typename?: 'AllCategoriesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  categories?: Maybe<Array<Category>>;
};

export type CategoryOutput = {
  __typename?: 'CategoryOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
  restaurants?: Maybe<Array<Restaurant>>;
  category?: Maybe<Category>;
};

export type CreateDishOutput = {
  __typename?: 'CreateDishOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateRestaurantOutput = {
  __typename?: 'CreateRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurantId: Scalars['Int'];
};

export type DeleteDishOutput = {
  __typename?: 'DeleteDishOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteRestaurantOutput = {
  __typename?: 'DeleteRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditDishOutput = {
  __typename?: 'EditDishOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditRestaurantOutput = {
  __typename?: 'EditRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MyRestaurantOutput = {
  __typename?: 'MyRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurant?: Maybe<Restaurant>;
};

export type MyRestaurantsOutput = {
  __typename?: 'MyRestaurantsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurants: Array<Restaurant>;
};

export type RestaurantOutput = {
  __typename?: 'RestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  restaurant?: Maybe<Restaurant>;
};

export type RestaurantsOutput = {
  __typename?: 'RestaurantsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Restaurant>>;
};

export type SearchRestaurantOutput = {
  __typename?: 'SearchRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
  restaurants?: Maybe<Array<Restaurant>>;
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orderId?: Maybe<Scalars['Int']>;
};

export type EditOrderOutput = {
  __typename?: 'EditOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetOrderOutput = {
  __typename?: 'GetOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  order?: Maybe<Order>;
};

export type GetOrdersOutput = {
  __typename?: 'GetOrdersOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orders?: Maybe<Array<Order>>;
};

export type TakeOrderOutput = {
  __typename?: 'TakeOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreatePaymentOutput = {
  __typename?: 'CreatePaymentOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetPaymentsOutput = {
  __typename?: 'GetPaymentsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  payments?: Maybe<Array<Payment>>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  userProfile: UserProfileOutput;
  myRestaurants: MyRestaurantsOutput;
  myRestaurant: MyRestaurantOutput;
  restaurants: RestaurantsOutput;
  restaurant: RestaurantOutput;
  searchRestaurant: SearchRestaurantOutput;
  allCategories: AllCategoriesOutput;
  category: CategoryOutput;
  getOrders: GetOrdersOutput;
  getOrder: GetOrderOutput;
  getPayments: GetPaymentsOutput;
};


export type QueryUserProfileArgs = {
  userId: Scalars['Float'];
};


export type QueryMyRestaurantArgs = {
  input: MyRestaurantInput;
};


export type QueryRestaurantsArgs = {
  input: RestaurantsInput;
};


export type QueryRestaurantArgs = {
  input: RestaurantInput;
};


export type QuerySearchRestaurantArgs = {
  input: SearchRestaurantInput;
};


export type QueryCategoryArgs = {
  input: CategoryInput;
};


export type QueryGetOrdersArgs = {
  input: GetOrdersInput;
};


export type QueryGetOrderArgs = {
  input: GetOrderInput;
};

export type MyRestaurantInput = {
  id: Scalars['Float'];
};

export type RestaurantsInput = {
  page?: Maybe<Scalars['Int']>;
};

export type RestaurantInput = {
  restaurantId: Scalars['Int'];
};

export type SearchRestaurantInput = {
  page?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};

export type CategoryInput = {
  page?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
};

export type GetOrdersInput = {
  status?: Maybe<OrderStatus>;
};

export type GetOrderInput = {
  id: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  login: LoginOutput;
  editProfile: EditProfileOutput;
  verifyEmail: VerifyEmailOutput;
  createRestaurant: CreateRestaurantOutput;
  editRestaurant: EditRestaurantOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  createDish: CreateDishOutput;
  editDish: EditDishOutput;
  deleteDish: DeleteDishOutput;
  createOrder: CreateOrderOutput;
  editOrder: EditOrderOutput;
  takeOrder: TakeOrderOutput;
  createPayment: CreatePaymentOutput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationCreateRestaurantArgs = {
  input: CreateRestaurantInput;
};


export type MutationEditRestaurantArgs = {
  input: EditRestaurantInput;
};


export type MutationDeleteRestaurantArgs = {
  input: DeleteRestaurantInput;
};


export type MutationCreateDishArgs = {
  input: CreateDishInput;
};


export type MutationEditDishArgs = {
  input: EditDishInput;
};


export type MutationDeleteDishArgs = {
  input: DeleteDishInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationEditOrderArgs = {
  input: EditOrderInput;
};


export type MutationTakeOrderArgs = {
  input: TakeOrderInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type EditProfileInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type VerifyEmailInput = {
  code: Scalars['String'];
};

export type CreateRestaurantInput = {
  name: Scalars['String'];
  coverImg: Scalars['String'];
  address: Scalars['String'];
  categoryName: Scalars['String'];
};

export type EditRestaurantInput = {
  name?: Maybe<Scalars['String']>;
  coverImg?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  restaurantId: Scalars['Float'];
};

export type DeleteRestaurantInput = {
  restaurantId: Scalars['Float'];
};

export type CreateDishInput = {
  name: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
  options?: Maybe<Array<DishOptionInputType>>;
  restaurantId: Scalars['Int'];
};

export type DishOptionInputType = {
  name: Scalars['String'];
  choices?: Maybe<Array<DishChoiceInputType>>;
  extra?: Maybe<Scalars['Int']>;
};

export type DishChoiceInputType = {
  name: Scalars['String'];
  extra?: Maybe<Scalars['Int']>;
};

export type EditDishInput = {
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  options?: Maybe<Array<DishOptionInputType>>;
  dishId: Scalars['Int'];
};

export type DeleteDishInput = {
  dishId: Scalars['Int'];
};

export type CreateOrderInput = {
  restaurantId: Scalars['Int'];
  items: Array<CreateOrderItemInput>;
};

export type CreateOrderItemInput = {
  dishId: Scalars['Int'];
  options?: Maybe<Array<OrderItemOptionInputType>>;
};

export type OrderItemOptionInputType = {
  name: Scalars['String'];
  choice?: Maybe<Scalars['String']>;
};

export type EditOrderInput = {
  id: Scalars['Float'];
  status: OrderStatus;
};

export type TakeOrderInput = {
  id: Scalars['Float'];
};

export type CreatePaymentInput = {
  transactionId: Scalars['String'];
  restaurantId: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  pendingOrders: Order;
  cookedOrders: Order;
  orderUpdates: Order;
};


export type SubscriptionOrderUpdatesArgs = {
  input: OrderUpdatesInput;
};

export type OrderUpdatesInput = {
  id: Scalars['Float'];
};

export type CategoryPartsFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'name' | 'coverImg' | 'slug' | 'restaurantCount'>
);

export type DishPartsFragment = (
  { __typename?: 'Dish' }
  & Pick<Dish, 'id' | 'name' | 'price' | 'photo' | 'description'>
  & { options?: Maybe<Array<(
    { __typename?: 'DishOption' }
    & Pick<DishOption, 'name' | 'extra'>
    & { choices?: Maybe<Array<(
      { __typename?: 'DishChoice' }
      & Pick<DishChoice, 'name' | 'extra'>
    )>> }
  )>> }
);

export type FullOrderPartsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'status' | 'total'>
  & { driver?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email'>
  )>, customer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email'>
  )>, restaurant?: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'name'>
  )> }
);

export type OrderPartsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'createdAt' | 'total'>
);

export type RestaurantPartsFragment = (
  { __typename?: 'Restaurant' }
  & Pick<Restaurant, 'id' | 'name' | 'coverImg' | 'address' | 'isPromoted'>
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'name'>
  )> }
);

export type VerifiedUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'verified'>
);

export type CreateAccountMutationVariables = Exact<{
  createAccountInput: CreateAccountInput;
}>;


export type CreateAccountMutation = (
  { __typename?: 'Mutation' }
  & { createAccount: (
    { __typename?: 'CreateAccountOutput' }
    & Pick<CreateAccountOutput, 'ok' | 'error'>
  ) }
);

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder: (
    { __typename?: 'CreateOrderOutput' }
    & Pick<CreateOrderOutput, 'ok' | 'error' | 'orderId'>
  ) }
);

export type CreatePaymentMutationVariables = Exact<{
  input: CreatePaymentInput;
}>;


export type CreatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { createPayment: (
    { __typename?: 'CreatePaymentOutput' }
    & Pick<CreatePaymentOutput, 'ok' | 'error'>
  ) }
);

export type CreateDishMutationVariables = Exact<{
  input: CreateDishInput;
}>;


export type CreateDishMutation = (
  { __typename?: 'Mutation' }
  & { createDish: (
    { __typename?: 'CreateDishOutput' }
    & Pick<CreateDishOutput, 'ok' | 'error'>
  ) }
);

export type CreateRestaurantMutationVariables = Exact<{
  input: CreateRestaurantInput;
}>;


export type CreateRestaurantMutation = (
  { __typename?: 'Mutation' }
  & { createRestaurant: (
    { __typename?: 'CreateRestaurantOutput' }
    & Pick<CreateRestaurantOutput, 'error' | 'ok' | 'restaurantId'>
  ) }
);

export type MyRestaurantQueryVariables = Exact<{
  input: MyRestaurantInput;
}>;


export type MyRestaurantQuery = (
  { __typename?: 'Query' }
  & { myRestaurant: (
    { __typename?: 'MyRestaurantOutput' }
    & Pick<MyRestaurantOutput, 'ok' | 'error'>
    & { restaurant?: Maybe<(
      { __typename?: 'Restaurant' }
      & RestaurantPartsFragment
    )> }
  ) }
);

export type MyRestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyRestaurantsQuery = (
  { __typename?: 'Query' }
  & { myRestaurants: (
    { __typename?: 'MyRestaurantsOutput' }
    & Pick<MyRestaurantsOutput, 'ok' | 'error'>
    & { restaurants: Array<(
      { __typename?: 'Restaurant' }
      & RestaurantPartsFragment
    )> }
  ) }
);

export type EditProfileMutationVariables = Exact<{
  input: EditProfileInput;
}>;


export type EditProfileMutation = (
  { __typename?: 'Mutation' }
  & { editProfile: (
    { __typename?: 'EditProfileOutput' }
    & Pick<EditProfileOutput, 'ok' | 'error'>
  ) }
);

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginOutput' }
    & Pick<LoginOutput, 'ok' | 'token' | 'error'>
  ) }
);

export type TakeOrderMutationVariables = Exact<{
  input: TakeOrderInput;
}>;


export type TakeOrderMutation = (
  { __typename?: 'Mutation' }
  & { takeOrder: (
    { __typename?: 'TakeOrderOutput' }
    & Pick<TakeOrderOutput, 'ok' | 'error'>
  ) }
);

export type VerifyEmailMutationVariables = Exact<{
  input: VerifyEmailInput;
}>;


export type VerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & { verifyEmail: (
    { __typename?: 'VerifyEmailOutput' }
    & Pick<VerifyEmailOutput, 'ok' | 'error'>
  ) }
);

export type CategoryQueryVariables = Exact<{
  input: CategoryInput;
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { category: (
    { __typename?: 'CategoryOutput' }
    & Pick<CategoryOutput, 'ok' | 'error' | 'totalPages' | 'totalResults'>
    & { restaurants?: Maybe<Array<(
      { __typename?: 'Restaurant' }
      & RestaurantPartsFragment
    )>>, category?: Maybe<(
      { __typename?: 'Category' }
      & CategoryPartsFragment
    )> }
  ) }
);

export type GetOrderQueryVariables = Exact<{
  input: GetOrderInput;
}>;


export type GetOrderQuery = (
  { __typename?: 'Query' }
  & { getOrder: (
    { __typename?: 'GetOrderOutput' }
    & Pick<GetOrderOutput, 'ok' | 'error'>
    & { order?: Maybe<(
      { __typename?: 'Order' }
      & FullOrderPartsFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'role' | 'verified'>
  ) }
);

export type RestaurantQueryVariables = Exact<{
  input: RestaurantInput;
}>;


export type RestaurantQuery = (
  { __typename?: 'Query' }
  & { restaurant: (
    { __typename?: 'RestaurantOutput' }
    & Pick<RestaurantOutput, 'ok' | 'error'>
    & { restaurant?: Maybe<(
      { __typename?: 'Restaurant' }
      & Pick<Restaurant, 'id' | 'name' | 'coverImg' | 'address' | 'isPromoted'>
      & { category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id'>
      )>, menu: Array<(
        { __typename?: 'Dish' }
        & Pick<Dish, 'id' | 'name' | 'price' | 'photo' | 'description'>
        & { options?: Maybe<Array<(
          { __typename?: 'DishOption' }
          & Pick<DishOption, 'name' | 'extra'>
          & { choices?: Maybe<Array<(
            { __typename?: 'DishChoice' }
            & Pick<DishChoice, 'name' | 'extra'>
          )>> }
        )>> }
      )> }
    )> }
  ) }
);

export type RestaurantsPageQueryVariables = Exact<{
  input: RestaurantsInput;
}>;


export type RestaurantsPageQuery = (
  { __typename?: 'Query' }
  & { allCategories: (
    { __typename?: 'AllCategoriesOutput' }
    & Pick<AllCategoriesOutput, 'ok' | 'error'>
    & { categories?: Maybe<Array<(
      { __typename?: 'Category' }
      & CategoryPartsFragment
    )>> }
  ), restaurants: (
    { __typename?: 'RestaurantsOutput' }
    & Pick<RestaurantsOutput, 'ok' | 'error' | 'totalPages' | 'totalResults'>
    & { results?: Maybe<Array<(
      { __typename?: 'Restaurant' }
      & RestaurantPartsFragment
    )>> }
  ) }
);

export type SearchRestaurantQueryVariables = Exact<{
  input: SearchRestaurantInput;
}>;


export type SearchRestaurantQuery = (
  { __typename?: 'Query' }
  & { searchRestaurant: (
    { __typename?: 'SearchRestaurantOutput' }
    & Pick<SearchRestaurantOutput, 'ok' | 'error' | 'totalPages' | 'totalResults'>
    & { restaurants?: Maybe<Array<(
      { __typename?: 'Restaurant' }
      & RestaurantPartsFragment
    )>> }
  ) }
);

export type CoockedOrdersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CoockedOrdersSubscription = (
  { __typename?: 'Subscription' }
  & { cookedOrders: (
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'status' | 'total'>
  ) }
);

export const CategoryPartsFragmentDoc = gql`
    fragment CategoryParts on Category {
  id
  name
  coverImg
  slug
  restaurantCount
}
    `;
export const DishPartsFragmentDoc = gql`
    fragment DishParts on Dish {
  id
  name
  price
  photo
  description
  options {
    name
    extra
    choices {
      name
      extra
    }
  }
}
    `;
export const FullOrderPartsFragmentDoc = gql`
    fragment FullOrderParts on Order {
  id
  status
  total
  driver {
    email
  }
  customer {
    email
  }
  restaurant {
    name
  }
}
    `;
export const OrderPartsFragmentDoc = gql`
    fragment OrderParts on Order {
  id
  createdAt
  total
}
    `;
export const RestaurantPartsFragmentDoc = gql`
    fragment RestaurantParts on Restaurant {
  id
  name
  coverImg
  category {
    name
  }
  address
  isPromoted
}
    `;
export const VerifiedUserFragmentDoc = gql`
    fragment VerifiedUser on User {
  verified
}
    `;
export const CreateAccountDocument = gql`
    mutation createAccount($createAccountInput: CreateAccountInput!) {
  createAccount(input: $createAccountInput) {
    ok
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      createAccountInput: // value for 'createAccountInput'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, baseOptions);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    ok
    error
    orderId
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreatePaymentDocument = gql`
    mutation createPayment($input: CreatePaymentInput!) {
  createPayment(input: $input) {
    ok
    error
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, baseOptions);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const CreateDishDocument = gql`
    mutation createDish($input: CreateDishInput!) {
  createDish(input: $input) {
    ok
    error
  }
}
    `;
export type CreateDishMutationFn = Apollo.MutationFunction<CreateDishMutation, CreateDishMutationVariables>;

/**
 * __useCreateDishMutation__
 *
 * To run a mutation, you first call `useCreateDishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDishMutation, { data, loading, error }] = useCreateDishMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDishMutation(baseOptions?: Apollo.MutationHookOptions<CreateDishMutation, CreateDishMutationVariables>) {
        return Apollo.useMutation<CreateDishMutation, CreateDishMutationVariables>(CreateDishDocument, baseOptions);
      }
export type CreateDishMutationHookResult = ReturnType<typeof useCreateDishMutation>;
export type CreateDishMutationResult = Apollo.MutationResult<CreateDishMutation>;
export type CreateDishMutationOptions = Apollo.BaseMutationOptions<CreateDishMutation, CreateDishMutationVariables>;
export const CreateRestaurantDocument = gql`
    mutation createRestaurant($input: CreateRestaurantInput!) {
  createRestaurant(input: $input) {
    error
    ok
    restaurantId
  }
}
    `;
export type CreateRestaurantMutationFn = Apollo.MutationFunction<CreateRestaurantMutation, CreateRestaurantMutationVariables>;

/**
 * __useCreateRestaurantMutation__
 *
 * To run a mutation, you first call `useCreateRestaurantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRestaurantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRestaurantMutation, { data, loading, error }] = useCreateRestaurantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRestaurantMutation(baseOptions?: Apollo.MutationHookOptions<CreateRestaurantMutation, CreateRestaurantMutationVariables>) {
        return Apollo.useMutation<CreateRestaurantMutation, CreateRestaurantMutationVariables>(CreateRestaurantDocument, baseOptions);
      }
export type CreateRestaurantMutationHookResult = ReturnType<typeof useCreateRestaurantMutation>;
export type CreateRestaurantMutationResult = Apollo.MutationResult<CreateRestaurantMutation>;
export type CreateRestaurantMutationOptions = Apollo.BaseMutationOptions<CreateRestaurantMutation, CreateRestaurantMutationVariables>;
export const MyRestaurantDocument = gql`
    query myRestaurant($input: MyRestaurantInput!) {
  myRestaurant(input: $input) {
    ok
    error
    restaurant {
      ...RestaurantParts
    }
  }
}
    ${RestaurantPartsFragmentDoc}`;

/**
 * __useMyRestaurantQuery__
 *
 * To run a query within a React component, call `useMyRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyRestaurantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMyRestaurantQuery(baseOptions: Apollo.QueryHookOptions<MyRestaurantQuery, MyRestaurantQueryVariables>) {
        return Apollo.useQuery<MyRestaurantQuery, MyRestaurantQueryVariables>(MyRestaurantDocument, baseOptions);
      }
export function useMyRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyRestaurantQuery, MyRestaurantQueryVariables>) {
          return Apollo.useLazyQuery<MyRestaurantQuery, MyRestaurantQueryVariables>(MyRestaurantDocument, baseOptions);
        }
export type MyRestaurantQueryHookResult = ReturnType<typeof useMyRestaurantQuery>;
export type MyRestaurantLazyQueryHookResult = ReturnType<typeof useMyRestaurantLazyQuery>;
export type MyRestaurantQueryResult = Apollo.QueryResult<MyRestaurantQuery, MyRestaurantQueryVariables>;
export const MyRestaurantsDocument = gql`
    query myRestaurants {
  myRestaurants {
    ok
    error
    restaurants {
      ...RestaurantParts
    }
  }
}
    ${RestaurantPartsFragmentDoc}`;

/**
 * __useMyRestaurantsQuery__
 *
 * To run a query within a React component, call `useMyRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyRestaurantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyRestaurantsQuery(baseOptions?: Apollo.QueryHookOptions<MyRestaurantsQuery, MyRestaurantsQueryVariables>) {
        return Apollo.useQuery<MyRestaurantsQuery, MyRestaurantsQueryVariables>(MyRestaurantsDocument, baseOptions);
      }
export function useMyRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyRestaurantsQuery, MyRestaurantsQueryVariables>) {
          return Apollo.useLazyQuery<MyRestaurantsQuery, MyRestaurantsQueryVariables>(MyRestaurantsDocument, baseOptions);
        }
export type MyRestaurantsQueryHookResult = ReturnType<typeof useMyRestaurantsQuery>;
export type MyRestaurantsLazyQueryHookResult = ReturnType<typeof useMyRestaurantsLazyQuery>;
export type MyRestaurantsQueryResult = Apollo.QueryResult<MyRestaurantsQuery, MyRestaurantsQueryVariables>;
export const EditProfileDocument = gql`
    mutation editProfile($input: EditProfileInput!) {
  editProfile(input: $input) {
    ok
    error
  }
}
    `;
export type EditProfileMutationFn = Apollo.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: Apollo.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, baseOptions);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = Apollo.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const LoginDocument = gql`
    mutation login($loginInput: LoginInput!) {
  login(input: $loginInput) {
    ok
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const TakeOrderDocument = gql`
    mutation takeOrder($input: TakeOrderInput!) {
  takeOrder(input: $input) {
    ok
    error
  }
}
    `;
export type TakeOrderMutationFn = Apollo.MutationFunction<TakeOrderMutation, TakeOrderMutationVariables>;

/**
 * __useTakeOrderMutation__
 *
 * To run a mutation, you first call `useTakeOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTakeOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [takeOrderMutation, { data, loading, error }] = useTakeOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTakeOrderMutation(baseOptions?: Apollo.MutationHookOptions<TakeOrderMutation, TakeOrderMutationVariables>) {
        return Apollo.useMutation<TakeOrderMutation, TakeOrderMutationVariables>(TakeOrderDocument, baseOptions);
      }
export type TakeOrderMutationHookResult = ReturnType<typeof useTakeOrderMutation>;
export type TakeOrderMutationResult = Apollo.MutationResult<TakeOrderMutation>;
export type TakeOrderMutationOptions = Apollo.BaseMutationOptions<TakeOrderMutation, TakeOrderMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation verifyEmail($input: VerifyEmailInput!) {
  verifyEmail(input: $input) {
    ok
    error
  }
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, baseOptions);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const CategoryDocument = gql`
    query category($input: CategoryInput!) {
  category(input: $input) {
    ok
    error
    totalPages
    totalResults
    restaurants {
      ...RestaurantParts
    }
    category {
      ...CategoryParts
    }
  }
}
    ${RestaurantPartsFragmentDoc}
${CategoryPartsFragmentDoc}`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, baseOptions);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, baseOptions);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const GetOrderDocument = gql`
    query getOrder($input: GetOrderInput!) {
  getOrder(input: $input) {
    ok
    error
    order {
      ...FullOrderParts
    }
  }
}
    ${FullOrderPartsFragmentDoc}`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOrderQuery(baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
        return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
      }
export function useGetOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
          return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
        }
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    email
    role
    verified
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RestaurantDocument = gql`
    query restaurant($input: RestaurantInput!) {
  restaurant(input: $input) {
    ok
    error
    restaurant {
      id
      name
      coverImg
      category {
        id
        name
      }
      address
      isPromoted
      menu {
        id
        name
        price
        photo
        description
        options {
          name
          choices {
            name
            extra
          }
          extra
        }
      }
    }
  }
}
    `;

/**
 * __useRestaurantQuery__
 *
 * To run a query within a React component, call `useRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRestaurantQuery(baseOptions: Apollo.QueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
        return Apollo.useQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, baseOptions);
      }
export function useRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
          return Apollo.useLazyQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, baseOptions);
        }
export type RestaurantQueryHookResult = ReturnType<typeof useRestaurantQuery>;
export type RestaurantLazyQueryHookResult = ReturnType<typeof useRestaurantLazyQuery>;
export type RestaurantQueryResult = Apollo.QueryResult<RestaurantQuery, RestaurantQueryVariables>;
export const RestaurantsPageDocument = gql`
    query restaurantsPage($input: RestaurantsInput!) {
  allCategories {
    ok
    error
    categories {
      ...CategoryParts
    }
  }
  restaurants(input: $input) {
    ok
    error
    totalPages
    totalResults
    results {
      ...RestaurantParts
    }
  }
}
    ${CategoryPartsFragmentDoc}
${RestaurantPartsFragmentDoc}`;

/**
 * __useRestaurantsPageQuery__
 *
 * To run a query within a React component, call `useRestaurantsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantsPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRestaurantsPageQuery(baseOptions: Apollo.QueryHookOptions<RestaurantsPageQuery, RestaurantsPageQueryVariables>) {
        return Apollo.useQuery<RestaurantsPageQuery, RestaurantsPageQueryVariables>(RestaurantsPageDocument, baseOptions);
      }
export function useRestaurantsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantsPageQuery, RestaurantsPageQueryVariables>) {
          return Apollo.useLazyQuery<RestaurantsPageQuery, RestaurantsPageQueryVariables>(RestaurantsPageDocument, baseOptions);
        }
export type RestaurantsPageQueryHookResult = ReturnType<typeof useRestaurantsPageQuery>;
export type RestaurantsPageLazyQueryHookResult = ReturnType<typeof useRestaurantsPageLazyQuery>;
export type RestaurantsPageQueryResult = Apollo.QueryResult<RestaurantsPageQuery, RestaurantsPageQueryVariables>;
export const SearchRestaurantDocument = gql`
    query searchRestaurant($input: SearchRestaurantInput!) {
  searchRestaurant(input: $input) {
    ok
    error
    totalPages
    totalResults
    restaurants {
      ...RestaurantParts
    }
  }
}
    ${RestaurantPartsFragmentDoc}`;

/**
 * __useSearchRestaurantQuery__
 *
 * To run a query within a React component, call `useSearchRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRestaurantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchRestaurantQuery(baseOptions: Apollo.QueryHookOptions<SearchRestaurantQuery, SearchRestaurantQueryVariables>) {
        return Apollo.useQuery<SearchRestaurantQuery, SearchRestaurantQueryVariables>(SearchRestaurantDocument, baseOptions);
      }
export function useSearchRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRestaurantQuery, SearchRestaurantQueryVariables>) {
          return Apollo.useLazyQuery<SearchRestaurantQuery, SearchRestaurantQueryVariables>(SearchRestaurantDocument, baseOptions);
        }
export type SearchRestaurantQueryHookResult = ReturnType<typeof useSearchRestaurantQuery>;
export type SearchRestaurantLazyQueryHookResult = ReturnType<typeof useSearchRestaurantLazyQuery>;
export type SearchRestaurantQueryResult = Apollo.QueryResult<SearchRestaurantQuery, SearchRestaurantQueryVariables>;
export const CoockedOrdersDocument = gql`
    subscription coockedOrders {
  cookedOrders {
    id
    status
    total
  }
}
    `;

/**
 * __useCoockedOrdersSubscription__
 *
 * To run a query within a React component, call `useCoockedOrdersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCoockedOrdersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoockedOrdersSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCoockedOrdersSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CoockedOrdersSubscription, CoockedOrdersSubscriptionVariables>) {
        return Apollo.useSubscription<CoockedOrdersSubscription, CoockedOrdersSubscriptionVariables>(CoockedOrdersDocument, baseOptions);
      }
export type CoockedOrdersSubscriptionHookResult = ReturnType<typeof useCoockedOrdersSubscription>;
export type CoockedOrdersSubscriptionResult = Apollo.SubscriptionResult<CoockedOrdersSubscription>;