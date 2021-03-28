import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ProductList = ({ products, handleEditProduct, deleteProduct }) => {
  const [productsList, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [orderBy, setOrderBy] = useState("ASC");
  const [orderByQuantity, setOrderByQuantity] = useState('ASC');

  useEffect(() => {
    setProducts(products);
  }, [products]);


  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSort = (order, key) => {
    if (productsList.length > 0) {
      const res = productsList.sort((a, b) =>  order == "ASC" ? a[key] - b[key] : b[key] - a[key] );
      
      key === 'price' ? setOrderBy(order === "DES" ? 'ASC' : 'DES') : setOrderByQuantity(order == "DES" ? 'ASC' : 'DES')
      setProducts([...res]);
    }
  };

  useEffect(() => {
    if (name) {
      const updatedProducts = productsList.filter(
        (el) => el.name.toLowerCase().indexOf(name.toLowerCase()) > -1
      );
      setProducts(updatedProducts);
    } else {
      setProducts(products);
    }
  }, [name,productsList]);

  return (
    <div className="product-list">
      <table className="table" id="table">
        <thead className="thead-light">
          <tr>
            <th style={{ width: "40%" }}>
              Name
              <span>
                <input
                  className="form-control d-inline-block"
                  id="myInput"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Search.."
                  style={{ width: "inherit", marginLeft: "10px" }}
                ></input>
              </span>
            </th>
            <th>
              <span>Price ($)</span>
              <span>
                {orderBy === "ASC" && (
                  <ArrowDownwardIcon
                    className="arrow-down-icon"
                    onClick={() => handleSort("ASC", "price")}
                  />
                )}
                {orderBy === "DES" && (
                  <ArrowUpwardIcon
                    className="arrow-down-icon"
                    onClick={() => handleSort("DES", "price")}
                  />
                )}
              </span>
            </th>
            <th>
              <span>Quantity</span>
              <span>
              {orderByQuantity === "ASC" && (
                  <ArrowDownwardIcon
                    className="arrow-down-icon"
                    onClick={() => handleSort("ASC", "quantity")}
                  />
                )}
                {orderByQuantity === "DES" && (
                  <ArrowUpwardIcon
                    className="arrow-down-icon"
                    onClick={() => handleSort("DES", "quantity")}
                  />
                )}
              </span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="">
          {productsList.map((product) => (
            <tr key={product.name} id={product.name}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleEditProduct(product)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteProduct(product)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
