// components
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <div className='school'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
