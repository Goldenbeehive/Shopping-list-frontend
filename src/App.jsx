import { useState } from 'react'
import PathRouter from "./components/PathRouter"
import ProductList from './pages/ProductList'
import ProductAdd from './pages/ProductAdd'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
     <PathRouter path="/" page={ProductListPage}></PathRouter> 
     <PathRouter path="/add-product" page={AddProductPage}></PathRouter>
    </div>
  )
}
function ProductListPage(){
  return  <ProductList></ProductList>
}
function AddProductPage(){
  return <ProductAdd></ProductAdd>
}
 

export default App
  