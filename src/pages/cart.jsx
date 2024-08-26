import { clearCart, decreaseItem, increaseItem, removeFromCart } from '../redux/action/slice';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react'

//import Button from '../components/buton'


const Cart = () => {


    const cart = useSelector((state) => state.cart.products)
    const dispatch = useDispatch()
    //const totalAmount = cart.products.reduce((total, product) => total + (product.price * product.quantity), 0);

    return (
        <div className='flex flex-col pt-[4rem] bg-[#F4F4F499]'>
            <div className='h-[50px]'>
                <h3 className='text-center font-semibold text-[24px]'>My Cart page</h3>
            </div>

            {cart.length === 0 ? (
                <div className='flex justify-center m-auto text-[1.2rem] py-[2rem]'>Your cart is empty, go to  <a href="/" className='ml-2 text-[#af0101]'> shop</a></div>
            ): (
                <>


                    <div className='sm:px-[3rem] px-8 mb-2'>
                        <h4 className='text-[#4E2020] text-center font-[500] text-[23px] sm:text-[28px] pb-6 sm:pb-2'>Shopping Cart</h4>
                        <hr className='border-[0.05rem] border-[#F5E5FF]' />
                    </div>

                    {cart.map((product) =>(
                        <section key={product.id} className='sm:px-[2rem] px-6 mb-2 md:flex md:flex-row flex-col md:justify-around py-4'>
                            <div className='flex items-center sm:mb-0 mb-[2rem]'>
                                <div className='basis-[48%]'>
                                    <img
                                        src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                                        alt='product'
                                        width={100}
                                        height={100}
                                        className='w-[100%] md:max-w-[250px] md:max-h-[250px]'
                                    />
                                </div>
                                <div className='flex flex-col items-start basis-[48%]'>
                                    <div className='flex flex-col ml-3'>
                                        <p className='sm:text-[1rem] text-[0.8rem] font-[500]'>{product.name}</p>
                                        <p className='sm:text-[1rem] text-[0.8rem] font-[400]'>Qty: 1</p>
                                    </div>

                                    <div className='flex md:hidden flex-col justify-center items-center text-center md:pl-[3rem]'>
                                        <div className='flex items-center mx-2 py-3 px-4'>
                                            <button onClick={()=>dispatch(decreaseItem(product.id))} className='text-[#AF0101] text-[1.2rem] font-[600]'>-</button>
                                            <button className='mx-2 rounded text-[#000] py-1 px-2 bg-[#D9D9D9]'>0</button>
                                            <button onClick={()=>dispatch(increaseItem(product.id))} className='text-[#AF0101] text-[1.2rem] font-[600]'>+</button>
                                        </div>
                                        <p className='text-sm'>{product?.current_price[0]?.["NGN"]?.[0]}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='hidden md:flex justify-center items-center text-center md:pl-[3rem]'>
                                <p>₦{product?.current_price[0]?.["NGN"]?.[0]}</p>
                                <div className='flex items-center mx-2 py-1 px-4'>
                                    <button onClick={()=>dispatch(decreaseItem(product.id))} className='hover:bg-[#ad5b5b] text-[#AF0101] text-[1.2rem] font-[600]'>-</button>
                                    <button className='mx-2 rounded text-[#000] py-1 px-2 bg-[#D9D9D9]'>{ product.quantity}</button>
                                    <button onClick={()=>dispatch(increaseItem(product.id))} className='hover:bg-[#ad5b5b] text-[#AF0101] text-[1.2rem] font-[600]'>+</button>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(product.id))}
                                    className="bg-[#af0101] text-white px-2 py-1 rounded hover:bg-[#ad5b5b]"
                                >
                                Remove
                            </button>

                            </div>

                        </section>

                    ))}

                        <div className='flex items-center justify-end my-3rem mb-2scroll-px-48 sm:px-[8rem]'>
                            <button onClick={() => dispatch(clearCart())}
                                className='bg-[#AF0101] hover:bg-[#ad5b5b] text-white px-2 py-1 rounded'>Clear Cart</button>
                        </div>

                    <hr className='sm:mx-[3rem] mx-6 border-[0.05rem] border-[#F5E5FF]' />
                    <a href="/" className='sm:px-[4rem] px-8 block md:hidden text-start mt-2 mb-[4rem] basis-[30%]'>Continue Shopping</a>

                    <section className="sm:px-[5rem] px-8 flex md:flex-row flex-col justify-around items-center md:py-4 py-[3rem] mb-[8rem]">

                        <textarea name="message" placeholder=" Add a comment..." className='bg-[#D9D9D980] rounded p-2 h-[100px] lg:ml-8 ml-0 basis-[30%] w-full'>

                        </textarea>

                        <a href="/" className='hidden md:block text-center md:my-[1rem] my-[2rem] basis-[15%]'>Continue Shopping</a>

                        <div className='flex items-center flex-col rounded md:mt-0 mt-[4rem] p-3 border-2 border-[#F5E5FF] w-full pb-[1.3rem] basis-[30%]'>
                                <p className='mb-4'>Sub Total ₦ </p>
                            <a href="/checkout" className='bg-[#AF0101] hover:bg-[#ad5b5b] rounded p-2 text-sm text-[#fff]'>Proceed to checkout</a>
                        </div>
                    </section>

                    </>
            )}
        </div>
    )
}

export default Cart