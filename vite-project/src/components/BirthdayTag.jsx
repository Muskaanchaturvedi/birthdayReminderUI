import React from 'react'

const BirthdayTag = ({img,name,age}) => {
  
  return (
    <>
      <div style={{display:"flex",gap:" 20px",alignItems:"center"}}>
        <img className='imgStyle' src={img}></img>
        <div>
          <h2>{name}</h2>
          <h3 style={{color:"grey"}}>{`${age} years`}</h3>
        </div>
      </div>

    </>
  )
}

export default BirthdayTag
