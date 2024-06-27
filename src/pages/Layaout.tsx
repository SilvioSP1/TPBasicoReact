import Header from '../components/Header'

import { Outlet } from 'react-router-dom'

const Layaout = () => {
  return (
    <div className='h-screen'>
        <Header/>
        <div className='bg-tertiary w-full h-full'>
            <Outlet />
        </div>

    </div>
  )
}

export default Layaout