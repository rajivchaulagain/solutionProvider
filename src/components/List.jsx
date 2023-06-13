import React from 'react'
import { ServiceCatagories } from './serviceCatagories'
import './list.css'

export const List = () => {
  return (
    <div>

<h1 >Laptop</h1>
<div className="lap">
<ServiceCatagories title="Linux Laptop" desc="we repair linux laptop" contact="" img="https://www.onedios.com/blog/wp-content/uploads/2021/02/blog-image-laptop-1-01-scaled.jpg"/>
<ServiceCatagories title="Mac Laptop" desc="we repair Mac laptop" contact="" img="https://www.onedios.com/blog/wp-content/uploads/2021/02/blog-image-laptop-1-01-scaled.jpg"/>
<ServiceCatagories title="Windows Laptop" desc="we repair windows laptop" contact="" img="https://www.onedios.com/blog/wp-content/uploads/2021/02/blog-image-laptop-1-01-scaled.jpg"/>

</div>

<h1>Mobile</h1>
<div className="mob">
<ServiceCatagories title="Android mobile" desc="we repair Android mobile" contact="" img="https://firstcall.co.in/images/mob.png"/>
<ServiceCatagories title="Andorid mobile" desc="we repair Android " contact="" img="https://firstcall.co.in/images/mob.png"/>
<ServiceCatagories title="Apple mobile" desc="we repair " contact="" img="https://firstcall.co.in/images/mob.png"/>
</div>

<h1>Television</h1>
<div className="tel">
<ServiceCatagories title="Samsung Tv" desc="we repair " contact="" img="https://5.imimg.com/data5/GG/RH/JM/SELLER-51343024/led-tv-repairing-services-500x500.png"/>
<ServiceCatagories title="LG tv" desc="we repair " contact="" img="https://5.imimg.com/data5/GG/RH/JM/SELLER-51343024/led-tv-repairing-services-500x500.png"/>
<ServiceCatagories title="Song Tv" desc="we repair " contact="" img="https://5.imimg.com/data5/GG/RH/JM/SELLER-51343024/led-tv-repairing-services-500x500.png"/>
</div>



    </div>
  )
}
