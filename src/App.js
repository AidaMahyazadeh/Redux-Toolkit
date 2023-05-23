import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Navbar from './components/navbar';
import Modal from './components/modal';
import CartContainer from './components/cartContainer';
import { calculateTotals } from './features/cart/cartSlice';
import './App.css';

function App() {
  const {cartItems} = useSelector(store =>store.cart);
  const {isOpen} = useSelector(store =>store.modal);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])

  return (
   <main>
   {isOpen && <Modal />}
   <Navbar />
   <CartContainer />
   </main>
   
  )
}

export default App;
