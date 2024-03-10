import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addQty, removeQty, deleteCart } from '../../Redux/Slice/cartSlice'
import './cart.css'

export default function Cart() {
    const cartData = useSelector(state => state.cartList.value)
    const dispatch = useDispatch()

    return (<div className='container-fluid cart'>
        <h1 className='text-center pt-3 pb-3'>Cart Details</h1>
        <table className="table table-bordered text-center table-responsive-sm">
            <thead>
                <tr>
                    <th>Product Title</th>
                    <th>Product Image</th>
                    <th>Rating</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {cartData ? cartData.map(e => <tr>
                    <td>{e.title}</td>
                    <td><img src={e.filename} width={50} height={50} /></td>
                    <td>{e.rating}</td>
                    <td>{e.price}/- Rs</td>
                    <td>
                        <button className='btn-sm cartLowerBtn' onClick={() => dispatch(removeQty(e))}>-</button>
                        &nbsp; &nbsp;
                        <span className='qty'>{e.qty}</span>
                        &nbsp; &nbsp;
                        <button className='btn-sm cartUpperBtn' onClick={() => dispatch(addQty(e))}>+</button>
                    </td>
                    <td>{e.qty * e.price}/- Rs</td>
                    <td><button className='btn-sm' onClick={() => dispatch(deleteCart(e))}>Delete</button></td>
                </tr>) : ''}
            </tbody>
        </table>
    </div>)
}