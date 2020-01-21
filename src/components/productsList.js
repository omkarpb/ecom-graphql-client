import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { useHistory } from "react-router-dom";

import '../styles/productsList.css';

const PRODUCT_LIST_QUERY = gql`
  query GetAllProducts {
    products {
      id
      name
      price
      rating
    }
  }
`

function ProductsList() {
  const { loading, error, data } = useQuery(PRODUCT_LIST_QUERY);

  const history = useHistory();
  
  if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

  return (

    data.products.map(({ id, name, price, rating }) => (
      <div key={id} className="productItem" onClick={() => history.push(`/product/${id}`)}>
        <p className="name">{name}</p>
        <p className="price">Price &#x20b9; {price}/-</p>
        <p className="rating">Rating {rating}/5</p>
      </div>
    ))

  )
}

export default ProductsList
