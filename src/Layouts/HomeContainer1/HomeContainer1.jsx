import './HomeContainer1.css'
import kaws from '../../../public/kaws2.jpeg'
export default function HomeContainer1() {
    return (
        <div className='Homecontainer'>
        <div className="TophomeContainer">
            <div className="boxContainer">
                <img
                className='boxContainer__img'
                src={kaws}
                alt="" />
            </div>
            <div className="boxtxt">
                <h2>Kaws expo</h2>
                <p> KAWS est un artiste contemporain new-yorkais célèbre pour ses œuvres mêlant culture pop, street art et design, avec une esthétique distinctive.</p>
            </div>
        </div>
        </div>
    )
}
