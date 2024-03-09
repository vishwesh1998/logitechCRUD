import './product.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { allCart } from '../../Redux/Slice/cartSlice'

export default function Product(props) {
    const products = useSelector(state => state.productList.value)
    const dispatch = useDispatch()

    return (<div className="container-fluid productMain">
        <h1 className="text-center pt-4">Product List</h1>
        <div className='row pt-4'>
            {products ? <>
                {products
                    .filter(e => props.searchValue === '' ? e : e.title.toLowerCase().includes(props.searchValue) || e.title.includes(props.searchValue))
                    .map(p => <div className='col-lg-3 productBox text-center' key={p.id}>
                        <ul>
                            <li><img src={p.filename} width={120} height={120} /></li>
                            <br />
                            <li><b>Title : </b>{p.title}</li>
                            <li><b>Description : </b>{p.description}</li>
                            <li><b>Price : </b>{p.price}/- Rs</li>
                            <li><b>Rating : </b>{p.rating}.0 *</li>
                            <br />
                            <li><button onClick={() => dispatch(allCart(p))}>Add To Cart</button></li>
                        </ul>
                    </div>)}
            </> : ''}
        </div>
    </div>)
}