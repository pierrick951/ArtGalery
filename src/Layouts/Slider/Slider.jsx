import { useState, useEffect } from 'react'
import LeftChevron from '../../assets/left-arrow.svg'
import RigthChevron from '../../assets/right-arrow.svg'
import './Slider.css'

export default function Slider() {
  const [sliderIndex, setSlideIndex] = useState(1)
  return (
    <div> 
       <div className="slider">
        <img src={`/public/img-${sliderIndex}.jpg`} alt="" />
        </div>
    </div>
  )
}