import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { StockProvider } from '../context/StockContext'

const Home = () => {
  return (
    <>

      <Logo />

      <div className="hero-test w-screen absolute top-0 left-0 h-[80vh] -z-10">

      </div>


      <div className='container mx-auto'>
        <div className='py-8'>
          <h1 className='text-[110px] text-center font-medium px-4'>Stock Marketer </h1>
          <p className='text-[18px] text-center text-[#252525] w-1/2 mx-auto my-2'>Lorem ipsum dolor sit amet consectetur. A amet vel in auctor. In tempus et viverra mollis. Viverra quisque orci nec risus nisl proin duis</p>

          <div className='flex gap-2 mt-4 items-center justify-center'>

            <Link to="/stock"
              className='' style={{ border: '1px solid black', padding: "10px 30px", color: 'black', borderRadius: '30px', fontSize: '20px' }}>
              Stocks
            </Link>

            <Link to="/prediction"
              style={{ background: 'black', padding: "10px 30px", color: 'white', borderRadius: '30px', fontSize: '20px' }}>
              Predict
            </Link>
          </div>
        </div>

        <img src={require("../assets/hero-img-main.png")} className=' mt-8 rounded-[30px] w-full ' />

      </div>

      <div className='bg-[#fff] py-32 my-16'>
        <div className='container mx-auto my-16'>
          <div className='grid grid-cols-3 gap-32'>
            <div className='col-span-2'>

              <h2 className='text-[60px] font-medium'>Explainable AI </h2>
              <p className='text-[18px] text-[#838282] my-2'>Lorem ipsum dolor sit amet consectetur. A amet vel in auctor. In tempus et viverra mollis. Viverra quisque orci nec risus nisl proin duis</p>

            </div>
            <div>
              <img src={require("../assets/hero-img-2.jpg")} className='h-[350px] rounded-[30px] w-full ' /></div>
          </div>
        </div>

      </div>

      <div className='py-32 my-16'>
        <div className='container mx-auto my-16'>
          <div className='grid grid-cols-3 gap-32'>
            <div>
              <img src={require("../assets/hero-img-2.jpg")} className='h-[350px] rounded-[30px] w-full ' /></div>
            <div className='col-span-2'>

              <h2 className='text-[60px] font-medium'>Multi-variate Forecasting</h2>
              <p className='text-[18px] text-[#838282] my-2'>Lorem ipsum dolor sit amet consectetur. A amet vel in auctor. In tempus et viverra mollis. Viverra quisque orci nec risus nisl proin duis</p>

            </div>
          </div>
        </div>

      </div>

      <div className='bg-[#fff] py-32 my-16'>
        <div className='container mx-auto my-16'>
          <div className='grid grid-cols-3 gap-32'>
            <div className='col-span-2'>

              <h2 className='text-[60px] font-medium'>Sentiment Analysis</h2>
              <p className='text-[18px] text-[#838282] my-2'>Lorem ipsum dolor sit amet consectetur. A amet vel in auctor. In tempus et viverra mollis. Viverra quisque orci nec risus nisl proin duis</p>

            </div>
            <div>
              <img src={require("../assets/hero-img-2.jpg")} className='h-[350px] rounded-[30px] w-full ' /></div>
          </div>
        </div>

      </div>

      <div className='py-4 my-16'>
        <div className='container mx-auto my-16'>
          <h2 className='text-[60px] font-medium w-3/4 mb-8'>Compare all top stock market companies in one go</h2>
          <img src={require("../assets/stock-table.png")} className='rounded-[30px] w-full ' /></div>


      </div>


      <div className='bg-[#000] text-white py-4 text-center'>
        © 2024 InterSentiFore
      </div>



    </>
  )
}

export default Home