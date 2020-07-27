import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  getProducts() {
    fetch('/api/products').then(
      data => data.json()
    ).then(
      json => {
        this.setState({ products: json });
      }
    );
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="row">
        {this.state.products.length === 0
          ? <div>Loading...</div>
          : this.state.products.map(product => {
            return <ProductListItem key={product.productId} product={product}/>;
          })}
      </div>
    );
  }
}

export default ProductList;
