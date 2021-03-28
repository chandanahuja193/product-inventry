import React, { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import {
  addProduct,
  editProduct,
  deleteProduct,
} from "../actions/productAction";
import CreateProduct from "./CreateProduct";

const Dashboard = ({
  products,
  addProduct,
  editProduct,
  deleteProduct,
  history,
}) => {
  const [isOpen, setOpen] = useState(false);
  const handleModal = () => setOpen(true);
  const [currentProduct, handleCurrentEditProduct] = useState({});
  const [currentUser, setcurrentUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setcurrentUser(currentUser);
  }, []);

  const handleEditProduct = (product) => {
    handleCurrentEditProduct(product);
    setOpen(true);
  };

  return (
    <>
      <Header history={history} currentUser={currentUser} />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card" style={{ marginTop: "30px" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title">Product Inventory </h4>
                    <button
                      type="button"
                      className="btn btn-info sign-out-button"
                      onClick={handleModal}
                    >
                      Add Product
                    </button>
                  </div>
                  <ProductList
                    products={products}
                    handleEditProduct={handleEditProduct}
                    deleteProduct={deleteProduct}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <CreateProduct
            isOpen={isOpen}
            setOpen={setOpen}
            addProduct={addProduct}
            currentProduct={currentProduct}
            editProduct={editProduct}
          />
        )}
      </main>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    products: state.products.products,
    history: props.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (data) => dispatch(addProduct(data)),
    editProduct: (data) => dispatch(editProduct(data)),
    deleteProduct: (data) => dispatch(deleteProduct(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
