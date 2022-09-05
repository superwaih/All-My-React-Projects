import axios from "axios";
import { useEffect, useReducer } from "react";
import { cartReducer }  from "./reducers/cartReducer"
import Products from "./components/Products"
import Cart from "./components/Cart"


function App() {
const [state, dispatch] = useReducer(cartReducer, {
  products: [],
  cart: []
})
  const fetchPost = async () =>{
    const { data} = await axios.get("https://dummyjson.com/products")
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products
    })
  }
 
console.log(state)
  useEffect(() => {
    fetchPost()
  }, [])
  
  return (
    <div className="App">
    <Products state={state} dispatch={dispatch} />
    <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
