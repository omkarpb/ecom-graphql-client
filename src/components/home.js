import React, { Component } from 'react'
import ProductsList from './productsList';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="productList">
          <h2>List of available products</h2>
          <ProductsList />
        </div>
      </div>
    )
  }
}

export default Home