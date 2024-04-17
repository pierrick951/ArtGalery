
import './Home.css'
import artGallery from '../../../public/ArtGalleries.jpg'
export default function Home() {

  return (
    <div className="Container">
      <img 
      className='imgHeader'
      src={artGallery} alt="" />
    </div>
  )
}