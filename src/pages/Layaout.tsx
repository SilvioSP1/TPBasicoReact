import Header from '../components/Header'

import { Outlet } from 'react-router-dom'

const Layaout = () => {
  return (
    <>
        <Header/>
        <div className='bg-tertiary w-full h-full'>
            <Outlet />
        </div>

    </>
  )
}

export default Layaout