import React, {useEffect, useState} from 'react'

import axios from 'axios'

const Singleproduct = ({productId}) => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [modal, setModal] = useState(false)


    useEffect(() => {

        if (productId) {

            const fetchSingle = async() => {
                try {
                    const response = await axios.get(`https://timbu-get-single-product.reavdev.workers.dev/${productId}?
                        organization_id=32a05aae5efd404581abb10724b3a7ee&Appid=X5DCEZMEYPHV8LF&Apikey=55c5d902540f4d3eb7faa8d40c900ac220240712141620532249`);
                    setProduct(response.data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false)
                }
            }
            fetchSingle()
        }

    }, [productId])

    if (loading) return <div className='flex justify-center items-center'>
        <img
            width={120}
            height={120}
            alt='loadding effect'
            src='https://res.cloudinary.com/dbnxbly1r/image/upload/v1720881145/general/loadingeffect_qy5k6a.svg'
        />
    </div>;
    if (error) return <div className='flex justify-center py-4 text-[1.2rem]'>Error fetching products</div>;
    //if (empty) return <div className='flex justify-center py-4 text-[1.2rem]'>No products found</div>;



    return (
        <div><h1>Singleproduct</h1>
            {product.map((item) => (
                <div key={item.id}>
                    <img
                        src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                        alt="item.id"
                        className=''
                    />
                    <p>i{item.name}</p>
                    <div className=''>
                        <p>{product?.current_price[0]?.["NGN"]?.[0]}</p>
                        <p>{item.description }</p>
                    </div>

               </div>
            ))}

        </div>
    )
}

export default Singleproduct