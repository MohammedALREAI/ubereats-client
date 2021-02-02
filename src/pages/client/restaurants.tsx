import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { CategoryItem } from '../../components/category';
import { Restaurant } from '../../components/restaurant';
import { useRestaurantsPageQuery } from '../../generated/graphql';

interface IFormProps {
  searchTerm: string;
}

export const Restaurants = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useRestaurantsPageQuery({
    variables: {
      input: {
        page
      }
    }
  });
  const onNextPageClick = () => setPage((current) => current + 1);
  const onPrevPageClick = () => setPage((current) => current - 1);
  const { register, handleSubmit, getValues } = useForm<IFormProps>();
  const history = useHistory();
  const onSearchSubmit = () => {
    const { searchTerm } = getValues();
    history.push({
      pathname: '/search',
      search: `?term=${searchTerm}`
    });
  };

  const renderAllCategories = () => {
    return (
      <div className="flex justify-around max-w-sm mx-auto ">
        {data?.allCategories.categories?.map((category) => (
          <CategoryItem
            name={category.name}
            coverImg={category.coverImg}
            slug={category.slug}
            id={category.id + ''}
          />
        ))}
      </div>
    );
  };

  const renderAllRestaurants = () => {
    return(
      <div className="grid mt-16 md:grid-cols-3 gap-x-5 gap-y-10">

    {data?.restaurants.results?.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        id={restaurant.id + ''}
        coverImg={restaurant.coverImg}
        name={restaurant.name}
        categoryName={restaurant.category?.name}
      />
    ))}
    </div>)
  };

  const renderPaginationPage = () => {
    return (
      <div className="grid grid-cols-3 text-center max-w-md items-center mx-auto mt-10">
        {page > 1 ? (
          <button
            onClick={onPrevPageClick}
            className="focus:outline-none font-medium text-2xl"
          >
            &larr;
          </button>
        ) : (
          <div></div>
        )}
        <span>
          Page {page} of {data?.restaurants.totalPages}
        </span>
        {page !== data?.restaurants.totalPages ? (
          <button
            onClick={onNextPageClick}
            className="focus:outline-none font-medium text-2xl"
          >
            &rarr;
          </button>
        ) : (
          <div></div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Helmet>
        <title>Home | Nuber Eats</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSearchSubmit)}
        className="bg-gray-800 w-full py-40 flex items-center justify-center"
      >
        <input
          ref={register({ required: true, min: 3 })}
          name="searchTerm"
          type="Search"
          className="input rounded-md border-0 w-3/4 md:w-3/12"
          placeholder="Search restaurants..."
        />
      </form>
      {!loading && (
        <div className="max-w-screen-2xl pb-20 mx-auto mt-8">
          {renderAllCategories}
            {renderAllRestaurants}
        {renderPaginationPage}
        </div>
      )}
    </div>
  );
};
