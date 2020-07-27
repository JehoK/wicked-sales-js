import React from 'react';

class ProductListItem extends React.Component {

  render() {
    return (
      <div className="card col-md-4">
        <img src={this.props.product.image} id="fix" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text"><small className="text-muted">{'$' + this.props.product.price}</small></p>
          <p className="card-text">{this.props.product.shortDescription}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
