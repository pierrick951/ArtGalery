import './HomeContainer2.css'
import  kuramata from '../../../public/kuramata.jpg'
import ghibli from '../../../public/chihiro.jpg'
import Basquiat from '../../../public/basquiat.jpg'

export default function HomeContainer2() {
  return (
    <div className='ContainerRigth'>
      <h2>other</h2>
       <div className='ContainerR1'>
        <img src={kuramata} alt="Kuramata" />
        <div className="botR1">
          <h3>Discover Shiro Kuramata</h3>
        </div>
       </div>
       <div className='ContainerR1 reverse'>
        <img src={ghibli} alt="Kuramata" />
        <div className="botR1">
          <h3>Art of studio Ghibli</h3>
        </div>
       </div>
       <div className='ContainerR1 '>
        <img src={Basquiat} alt="Kuramata" />
        <div className="botR1">
          <h3>Basquiat universe</h3>
        </div>
       </div>
    </div>
  )
}