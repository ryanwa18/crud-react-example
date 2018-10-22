import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    }

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

    this.setState({ isEdit: false });
  }

  onDelete() {
    const {onDelete, name} = this.props;

    onDelete(name);
  }
  render() {
    const { name, price } = this.props;

    return (
        <div>
          {
            this.state.isEdit
              ? (
                <div>
                  <form onSubmit={this.onEditSubmit}>
                    <h3>Edit Product</h3>
                    <input placeholder="Name" defaultValue={name} ref={nameInput => this.nameInput = nameInput}/>
                    <input placeholder="Price" defaultValue={price} ref={priceInput => this.priceInput = priceInput}/>
                    <button>Save</button>
                  </form>
                </div>
              )
              : (
                <div>
                  <span>{name}</span> | 
                  <span>{price}</span> 
                  <button onClick={this.onEdit}>Edit</button> 
                  <button onClick={this.onDelete}>Delete</button>
                </div>
              )
          }
        </div>
    );
  }
}

export default ProductItem;