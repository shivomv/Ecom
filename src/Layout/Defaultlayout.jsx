import React from 'react'
import { Mynav, MainBodyComponent, FooterComponent } from '../Components/Index'

const Defaultlayout = () => {
  return (
    <>
      <div className='bg-light'>
        <Mynav />
        <MainBodyComponent />
        <div className='footer'>
          <FooterComponent />
        </div>
      </div>
    </>
  )
}

export default Defaultlayout