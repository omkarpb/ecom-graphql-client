import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import '../styles/product.css'; 
import CommentForm from './commentForm';


function Product() {
  let { id } = useParams();
  const PRODUCT_QUERY = gql`
    query GetProduct($id: ID!)
    {
      product(id: $id) {
        id
        name
        price
        rating
        description
        seller
        comments {
          id
          message
          rating
          date
          commentedBy {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {product} = data;
  return (
    <div className="product">
      <div className="productDetails">
        <p className="name">{product.name}</p>
        <p className="rating">Rating {product.rating} stars</p>
        <p className="price">Price &#x20b9;{product.price}/-</p>
        <p className="description">{product.description}</p>
        <p className="seller">Currently {product.seller} is selling this product</p>
      </div>
      <h3>Comments by users: </h3>
      <CommentForm productId={id}/>
      {product.comments.map((comment) => {
        return (
          <div className="commentBox" key={comment.id}>
            <p ><span className="commentedBy">{comment.commentedBy.name}</span> <span className="commentRating">Rating {comment.rating} out of 10</span></p>
            <p className="date">Posted on {comment.date}</p>
            <p className="message">{comment.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Product;
