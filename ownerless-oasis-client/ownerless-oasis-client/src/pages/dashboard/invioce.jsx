import React, { useState } from 'react';

const Invoice = () => {
  const [invoiceItems, setInvoiceItems] = useState([]);
  

  const handleAddItem = (productId, price) => {
    setInvoiceItems((prevItems) => [...prevItems, { productId, price, quantity: 1 }]);
  };

  const handleQuantityChange = (index, quantity) => {
    setInvoiceItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = quantity;
      return updatedItems;
    });
  };


  const calculateSubtotal = (item) => item.price * item.quantity;

  const calculateTotal = () => invoiceItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  return (
    <div className="container mx-auto">
      <h1>Invoice</h1>

      <table className="table-auto border border-collapse">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item, index) => (
            <tr key={index}>
              <td>{item.productId}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
              </td>
              <td>{calculateSubtotal(item).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>{calculateTotal().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      {/* <button type="button" onClick={() => handleAddItem('PRODUCT_ID', PRICE)}>
        Add Item
      </button> */}
    </div>
  );
};

export default Invoice;


