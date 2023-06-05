import Logout from './components/logout/page'
import ProductList from './productList/page'

export default function Home() {
  return (
    <>
    <div className='flex items-end justify-end p-5'><Logout /></div>
   <ProductList />
   </>
  )
}
