import React from 'react'

export const ServiceCatagories = ({img, desc , title , contact}) => {
  return (
    <div>
        
      <div className="card" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{desc}</p>
          <p className="card-text">{contact}</p>
        </div>
      </div>
    </div>
  )
}
