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
                <p>lorem Art Museum based in Lorem, 📍Berlin,Germany.
                </p><br />

                <p>Opening Time </p>
                <p>every day from 10am - 10pm</p>
                <div className="linkContainer">
                    <a href="#">Get TIckets</a>
                    <a   className='rigthLinks' href="#">
                        Schedule </a>
                </div>
            </div>
        </div>
    )
}