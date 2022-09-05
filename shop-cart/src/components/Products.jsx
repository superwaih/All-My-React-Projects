import { data } from 'autoprefixer'
import React from 'react'

const Products = ({ state, dispatch }) => {
  const { products, cart } = state
  return (
    <div

      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%"
      }}>


      {products.map((prod) => (
        <div key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            border: "1px solid grey",
            padding: 10,
            gap: 10,
            width: "30%"

          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{
            display: "flex",
            justifyContent: "space-between",

          }} >
            <span>{prod.title}</span>
            <b>${prod.price}</b>
          </div>
          {cart.some(p => p.id === prod.id) ? <button
          onClick={() => dispatch({
            type: "REMOVE_FROM_CART",
            payload: prod

          })}
            style={{
              padding: 5,
              border: 0,
              borderRadius: 5,
              backgroundColor: "#e53935",
              color: "white"

            }}

          >Remove from Cart</button> : <button
         
            style={{
              padding: 5,
              border: 0,
              cursor: "pointer",
              borderRadius: 5,
              backgroundColor: "green",
              color: "white"

            }}
            onClick={() => dispatch({
              type: "ADD_T0_CART",
              payload: {
                id: prod.id,
                title: prod.title,
                thumbnail: prod.thumbnail,
                qty: 1,
                price: prod.price
                
              }
            })}
            
            >
              Add to Cart
              
              
              </button>}




        </div>
      ))}


    </div>
  )
}

export default Products