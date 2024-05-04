import './BlocHorizontale.css'
import art from '../../assets/art.jpg'
import ahand from '../../assets/handArt.avif'


export default function BlocHorizontale() {
  return (
    <div className="boxHori">
      <div className="blocHori">
        <div className="slide one">
         <div className="oneBox1">
          <img src={art} alt="" className="oneBox1__img" />
          <h1>lorem ipsum</h1>
         </div>

        </div>
        <div className="slide two">slide  two </div>
        <div className="slide three">slide tree</div>
      </div>
    </div>
  )
}