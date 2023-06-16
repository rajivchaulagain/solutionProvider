import React from 'react'
import headImg from '../image/banner.jpeg'
import './home1.css'
import { Footer } from '../footer/Footer'
import { Link } from 'react-router-dom'
import office1 from '../image/office1.png'

export const Home1 = () => {
  return (
    <div className='container'>

      {/*main page  */} 

      <div className="img">
      <img className='office' src={office1} alt="" />
        <img src={headImg} alt="" />
        <p className='text'>Find Perfect Solution for Your problem</p>
       <div className="btn">
       <Link className='button' to='/List' >View &nbsp;  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
       </div>

       {/* <img src={office1} alt="" /> */}
      </div>

    <div className="detailBox">
    <div className="locationBox">
      <label htmlFor="">Location</label>
      <br />
      <select name="" id="" required>
        <option value="">Choose</option>
        <option value="">Kathmandu</option>
        <option value="">Dharan</option>
        <option value="">Hetauda</option>
        <option value="">KakkarVitta</option>
        <option value="">Bhojpur</option>
      </select>
    </div>

    <div className="serviceBox">
      <label htmlFor="">service</label>
      <br />
      <select name="" id="" required>
      <option value="">Choose</option>
      <option value="">Laptop</option>
      <option value="">Car</option>
      <option value="">Mobile</option>
      </select>
    </div>


    
<div className="priceBox">
  <label htmlFor="">Price Range</label>
  <br />
  <select name="" id="" required>
    <option value="">choose</option>
    <option value="">10,000</option>
    <option value="">20,000</option>
    <option value="">30,000</option>
    <option value="">40,000</option>
  </select>
</div>
    </div>




      {/*poster section */}

      <div className="poster">
        <img src="https://media.discordapp.net/attachments/1117812209981083761/1118217992010989728/mobile_app_coming_soon_500_hight.jpg?width=960&height=374" alt="" />
      </div>

{/*footer */}
<Footer/>

    </div>
  )
}
