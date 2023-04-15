import { Routes,Route } from "react-router-dom"
import { Home,Cart } from "./pages/index"
import { DataProvider } from "./context/Context"

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </DataProvider>
  )
}

export default App
