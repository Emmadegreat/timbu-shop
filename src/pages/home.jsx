import React, { useEffect, useState } from 'react';

import Hero from '../components/hero';
import ProductCard from '../components/productcard';
import axios from 'axios';

import Popularproducts from '../components/popularproducts';



const fetchProducts = async (page) => {

    const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
        params: {
            organization_id: '32a05aae5efd404581abb10724b3a7ee',
            reverse_sort: false,
            page: page,
            size: 10,
            Appid: 'X5DCEZMEYPHV8LF',
            Apikey: '55c5d902540f4d3eb7faa8d40c900ac220240712141620532249',
        },
    });

    return response.data;
};


const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getProducts = async () => {
             setIsLoading(true);
             setIsError(false);
             try {
                 const data = await fetchProducts(page);
                 setProducts(data.items);
                 console.log(data);
                 setIsEmpty(data.total === 0);
             } catch (error) {
                 setIsError(true);
             } finally {
                 setIsLoading(false);
             }
        };

        getProducts();

    }, [page]);



     const handleSearch = (e) => {
         setSearch(e.target.value);
     }
    const ProductsList = products.filter(product => {
         return product.name.toLowerCase().includes(search.toLowerCase());
     })


    return (
        <div className=''>

            <Hero />

            <Popularproducts
                value={search}
                onChange={handleSearch}
            />
            <section className='bg-[#F4F4F480] pt-10 md:px-12 px-7 pb-[5rem]'>
                {isLoading && (
                    <div className='flex justify-center items-center bg-[#F4F4F480]'>
                        <img
                            width={120}
                            height={120}
                            alt='loadding effect'
                            src='https://res.cloudinary.com/dbnxbly1r/image/upload/v1720881145/general/loadingeffect_qy5k6a.svg'
                        />
                    </div>
                )}
                {isError && (
                    <div className='flex justify-center py-4 text-[1.2rem]'>
                        Error fetching products
                    </div>
                )}
                {isEmpty && (
                    <div className='flex justify-center py-4 text-[1.2rem]'>
                        No products found
                    </div>
                )}

                <div className=' grid grid-cols-1 place-items-center sm:grid-cols-2
                    lg:grid-cols-3 xl:grid-cols-3 xl:gap-5  gap-y-10 gap-x-4'>

                    {ProductsList.map(product => (

                        <>

                            <ProductCard
                                key={product.id}
                                imgUrl={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                                name={product.name}
                                price={product?.current_price[0]?.["NGN"]?.[0]}

                            />
                        </>
                    ))}
                </div>
                <div className="flex justify-end center">
                    <button className="p-1 w-[30px] h-[30px] rounded border-[1px] border-red-400 bg-slate-200 mx-2" onClick={() => setPage(1)}>1</button>
                    <button className="p-1 w-[30px] h-[30px] rounded border-[1px] border-red-400 bg-slate-200" onClick={() => setPage(2)}>2</button>
                </div>
            </section>
        </div>
    );

}

export default Home