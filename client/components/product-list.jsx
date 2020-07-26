/* eslint-disable no-console */
import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  getProducts() {
    fetch('http://localhost:3000/api/products').then(
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

  createItems() {
    if (this.state.products.length === 0) {
      return (
        <div>Loading...</div>
      );
    }
    const rows = [];
    let row = [];
    for (let i = 0; i < this.state.products.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        rows.push(row);
        row = [];
      }
      row.push(<ProductListItem product={this.state.products[i]}/>);
      if (i === this.state.products.length - 1) {
        rows.push(row);
      }
    }
    let key = 0;
    return rows.map(row => {
      key += 1;
      return (
        <div className="card-deck" key={key}>
          {row[0] !== undefined ? row[0] : <div className="card no-border"></div>}
          {row[1] !== undefined ? row[1] : <div className="card no-border"></div>}
          {row[2] !== undefined ? row[2] : <div className="card no-border"></div>}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.createItems()}
      </div>
    );
  }
}

export default ProductList;
