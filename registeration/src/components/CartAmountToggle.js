import './CartAmountToggle.css';
import {FaMinus, FaPlus} from 'react-icons/fa';
const CartAmountToggle = (props)=>{
       return(
              <div className='cart-button'>
                        <div className='amount-toggle'>
                          <button className='minusChanger' onClick = {()=>{props.setDecrease()}}>
                              <FaMinus />
                          </button>
                            <div className='amount-style'>{props.amount}</div>
                          <button className='plusChanger' onClick = {()=>{props.setIncrease()}}>
                            <FaPlus />
                          </button>
                          
                        </div>
              </div>
       )
}
export default CartAmountToggle;