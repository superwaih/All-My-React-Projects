import { useEffect, useState } from "react";
import { Table } from "./component/Table";


function App() {
  const[row, setRow] = useState([])
  const data = [{
    name: "alert1",
    independent_var: ['ME Torge (Avg).', 'ME Speed (Avg).'],
    dependent_var: ['ME Speed (Avg.)'],
    freg: 10
  }, {
    name: "alert1",
    independent_var: ['ME Torge (Avg).', 'ME Speed (Avg).'],
    dependent_var: ['ME Speed (Avg.)'],
    freg: 10
  }]

 
  const arr = ['alert1', 'alert2']

  console.log(arr)
  useEffect(() =>{
  }, [])
 
  return (
    <div className="App">
      <h1>Alert configuration</h1>
      <hr />

      <Table />
    </div>
  );
}

export default App;
