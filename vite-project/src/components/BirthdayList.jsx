import React, {useState} from 'react'
import BirthdayTag from './BirthdayTag'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const BirthdayList = () => {
    const [display,setDisplay]=useState(false);

    let people=[
      {
        img:img1,
        name:"Alice Winskey",
        age:"29",
      },
      {
        img:img2,
        name:"Peter Patinson",
        age:"25",
      },
      {
        img:img3,
        name:"Elena Gilbert",
        age:"23",
      },
      {
        img:img4,
        name:"Mark Holand",
        age:"31",
      },
      {
        img:img5,
        name:"Aiyra Kwin",
        age:"26",
      } ]

      const handleClick=()=>{
         setDisplay(!display)
      }

  return (
    <>
      <div className='BirthdayListStyle'>
         <h1>{display? people.length : 0} Birthdays Today</h1>
         {display && people.map((element,idx) => (
          <BirthdayTag img={element.img} name={element.name} age={element.age}/>
         ))}
         <button className='btn' onClick={handleClick}>{display?"Hide": "Show"} Birthdays</button>
      </div>
    </>
  )
}

export default BirthdayList
