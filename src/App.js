// Footer importation to Main Page
import Footer from "./components/Footer"
// Header importation to Main Page
import Navbar from "./components/Navbar"
// Header importation to Main Page
import Header from "./components/Header"
// Product list importation to Main Page
import ProductList from "./components/ProductList"

function App() {
  return (
    <h1>
      <Navbar/>
      <Header/>
      <ProductList/>
      <Footer/>
    </h1>
  )
}

export default App