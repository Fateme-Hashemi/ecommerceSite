import React, {useContext} from 'react';


//context
import { cartContext } from '../../components/mainpage/FlashDeals/context/CartContextProvider';

const Cart = () => {

    const {state} = useContext(cartContext);


    return (
        <>
  
           <section className='cart-items'>
                <div className='container'>
                    <div className='cart-details'>
                          
                             {
                                state.itemsCounter 
                                &&
                                <h1 className='no-items'>No items choosed</h1>
                             }
                            {}
                    </div>
                </div>
           </section>
        </>
    );
};

export default Cart;