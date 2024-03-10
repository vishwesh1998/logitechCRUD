// import './header.css'
import { Link } from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Header(props) {
    const cartValue = useSelector(state => state.cartList.value)
    const [search, setSearch] = useState('')

    let searchBarValue = (obj) => {
        setSearch(obj)
        props.searchData(search)
    }

    return (<div className="container-fluid headerMain">
        <div className='row pt-1'>
            <div className='col-lg-4'><h2>Kabra Logitech</h2></div>
            <div className='col-lg-4 d-flex'>
                <input type='text' placeholder='Just Type For Searching Products ....!' className='form-control' onChange={(e) => searchBarValue(e.target.value)} />
            </div>
            <div className='col-lg-4 d-flex'>
                <h5 className='h5'><b><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Product List</Link></b></h5>
                &nbsp; &nbsp; &nbsp;
                <h5 className='cartOption'><b><Link to='/cart' style={{ color: 'white', textDecoration: 'none' }}>Cart {cartValue.length > 0 ? <>: {cartValue.length}</> : ''}</Link></b></h5>
            </div>
        </div>
    </div>)
}