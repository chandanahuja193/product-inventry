import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import TextField from "@material-ui/core/TextField";

/*global event, fdescribe*/
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/
const CreateProduct = ({ isOpen, setOpen, addProduct,currentProduct,editProduct }) => {
  const [state, setState] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  
  useEffect(() => {
    setState({
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: currentProduct.quantity,
  })
},[currentProduct])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value ,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(currentProduct).length > 0 ){
      editProduct(state)
    }
    else{
      addProduct(state);
    }
    setOpen(false);
    
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={() => setOpen(false)}>
        <ModalHeader>{`${Object.keys(currentProduct).length > 0  ? 'Edit Product ' : 'Create Product ' }`}</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-sm-12">
              <form noValidate onSubmit={handleSubmit}>
                <div>
                  <h5>
                    Product Name
                  </h5>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                    style={{ marginBottom: "25px", width: "100%" }}
                  />
                </div>

                <div>
                  <h5>Product Price</h5>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    name="price"
                    value={state.price}
                    onChange={handleChange}
                    required
                    style={{ marginBottom: "25px", width: "100%" }}
                  />
                </div>

                <div>
                  <h5>Product Quantity</h5>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    name="quantity"
                    value={state.quantity}
                    onChange={handleChange}
                    required
                    style={{ marginBottom: "25px", width: "100%" }}
                  />
                </div>
                <div className="text-center">
                  <Button color="primary">
                  {`${Object.keys(currentProduct).length > 0  ? 'Edit Product ' : 'Create Product ' }`}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateProduct;
