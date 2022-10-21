import React, { useState } from 'react';
import { Iproduct } from '../models';

interface ProductProps {
    product:Iproduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnBgClassName];

    return (
        <div 
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img className='w-1/6 mb-2' src={product.image} alt={product.title} />
            <p className='p-2'>{product.title}</p>
            <span className='font-bold mb-2'>{product.price}$</span>
            <button className={btnClasses.join(" ")} onClick={() => setDetails(prev => !prev)}>{ details ? 'Hide Details' : 'Show Details'}</button>
            { details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold', color: 'red'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}