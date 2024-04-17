import { useEffect, useState } from 'react'
import './Home.css'
import sliderData from '../../data/sliderData'

export default function Home() {
  const [sliderIndex, setSliderIndex] = useState(1)

  function toggleImg(indexPayload) {
    if (indexPayload + state > sliderData.length) {
      return 1
    }else if (indexPayload + state < 1 ){
      return sliderData.length
    }else {
      return state + indexPayload
    }
  }
  return (
    <div className="Container">
      <img
        className="slider-img"
        src={`/public/img-${sliderIndex}.jpg`} alt="estate rooms" />
    </div>
  )
}