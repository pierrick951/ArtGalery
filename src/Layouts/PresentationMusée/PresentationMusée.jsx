import './PresentationMusée.css'
import Slider from '../Slider/Slider'

export default function PresentationMusée() {
    return (
        <div className='ContainerSlider'>

            <div className='Slider'>
              <Slider/>
            </div>
            <div className='SliderTxt'>
                <h3>Art Museum of </h3>
                <h2> lorem ipsum</h2>
                <p>lorem Art Museum based in Lorem, 📍ipsum dolor.
                </p><br />
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa quas ipsam. Corporis quasi, dignissimos ipsa impedit obcaecati sit at.</p>

            </div>
        </div>
    )
}