import { Product } from './components/Product';
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/ErrorMessage';
import { Modalw } from './components/Modal';
import { CreateProduct } from './components/CreateProduct'
import {useState} from 'react'
import { Iproduct } from './models';

function App() {
  const {loading, error, products, addProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHendler = (product: Iproduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {products.map(product => <Product product={product} key={product.id}/>)}
      {modal && <Modalw title='Create new product' onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHendler} />
      </Modalw>}
      <button className='p-2 fixed bottom-5 right-5 rounded-full bg-red-800 text-white text-2xl' onClick={() => setModal(true)}>Add</button>
    </div>
  );
}

export default App;
