import React from "react";
import { Product } from '../components/Product';
import { useProducts } from '../hooks/products'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage';
import { Modalw } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct'
import { useContext } from 'react'
import { Iproduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductsPage () {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)
  
    const createHendler = (product: Iproduct) => {
      close()
      addProduct(product)
    }
  
    return (
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <Loader />}
        {error && <ErrorMessage error={error}/>}
        {products.map(product => <Product product={product} key={product.id}/>)}
        {modal && <Modalw title='Create new product' onClose={close}>
          <CreateProduct onCreate={createHendler} />
        </Modalw>}
        <button className='p-2 fixed bottom-5 right-5 rounded-full bg-red-800 text-white text-2xl' onClick={open}>Add</button>
      </div>
    );
}