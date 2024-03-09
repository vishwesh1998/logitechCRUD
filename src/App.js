import './App.css';
import Header from './Components/HeaderComponent/header'
import Footer from './Components/FooterComponent/footer'
import Product from './Components/ProductComponent/product';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { allProduct } from './Redux/Slice/slice'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/CartComponent/cart'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  let searchData = (value) => {
    setSearchValue(value)
  }

  let getApi = async () => {
    const res = await fetch('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
    const data = await res.json()
    dispatch(allProduct(data))
  }

  useEffect(() => {
    getApi()
  }, [])


  return (
    <>
      <Header searchData={searchData} />
      <Routes>
        <Route path='/' element={<Product searchValue={searchValue} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;