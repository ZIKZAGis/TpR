import axios from "axios"
import React, { useState } from "react"
import { Iproduct } from "../models"
import { ErrorMessage } from "./ErrorMessage"

const productData: Iproduct = {
    id: 2000,
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 12
    }

}

interface CreateProductProps {
    onCreate: (product: Iproduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value
        
        const response = await axios.post<Iproduct>('https://fakestoreapi.com/products', productData)
        
        onCreate(response.data)
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={event => setValue(event.target.value)} value={value} className="outline-0 w-full border py-2 px-4 mb-2" type="text" placeholder="Enter product title..."/>
            <button className="hover:text-white py-2 px-4 border bg-yellow-400" type="submit">Create</button>
            {error && <ErrorMessage error={error} />}
        </form>
    )
}