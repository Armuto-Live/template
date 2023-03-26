import { Routes,Route } from "react-router-dom"
import { Home,Cart } from "./pages/index"
import { ProductState } from "./context/products/ProductsState"

function App() {

  return (
    <ProductState>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </ProductState>
  )
}

export default App
