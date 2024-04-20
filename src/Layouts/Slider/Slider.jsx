import { useState, useEffect } from 'react'
import LeftChevron from '../../assets/left-arrow.svg'
import RigthChevron from '../../assets/right-arrow.svg'
import './Slider.css'
import sliderData from '../../data/sliderData.js'

export default function Slider() {
  const [sliderIndex, setSlideIndex] = useState(1)

  function toggleImage(indexPayload) {
    setSlideIndex(state => {
      if (indexPayload + state > sliderData.length) {
        return 1
      } else if (indexPayload + state < 1) {
        return sliderData.length
      }
      else {
        return state + indexPayload
      }
    })
  }

  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2500)

    return () => clearInterval(intervalID)
  }, [])
  return (
    <div>
      <div className="slider">
        <img src={`/public/img-${sliderIndex}.jpg`} alt="" />

        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button">
          <img src={LeftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button">
          <img src={RigthChevron} alt="next image" />
        </button>
      </div>
    </div>
  )
}