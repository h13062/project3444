import React from "react";

const Cart = ({ cartItems, onAdd }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.0825;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <>
      <div className="cart">
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              {/* <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{" "}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div> */}

              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <button onClick={() => alert("Implement Checkout!")}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
