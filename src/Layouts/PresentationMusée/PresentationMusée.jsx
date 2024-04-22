import './PresentationMusée.css'
import Slider from '../Slider/Slider'

export default function PresentationMusée() {
    return (
        <div className='ContainerSlider'>

            <div className='Slider'>
                <Slider />
            </div>
            <div className='SliderTxt'>
                <h3>Art Museum of </h3>
                <h2> Berlin</h2>
                <p></p>
                <p>lorem Art Museum based in 📍Berlin,Germany.
                </p><br />

                <p className='opentimep'>Opening Time </p>
                <p>Every day from 10am - 10pm</p>
                <div className="linkContainer">
                    <a className='linkfull' href="#">Get Tickets</a>
                    <a   className='transparentBackground' href="#">
                        Schedule </a>
                </div>
            </div>
        </div>
    )
}