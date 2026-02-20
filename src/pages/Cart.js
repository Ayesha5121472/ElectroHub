import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="card mb-3 p-3 d-flex flex-row justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
              
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginRight: "15px",
                  }}
                />
                
                
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.price}</p>
                </div>
              </div>

            
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <h4 className="mt-3">Total: {total}</h4>

          <button
            className="btn btn-success mt-3"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;