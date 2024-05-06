import './BlocHorizontale.css'
import art from '../../assets/art.jpg'
import ahand from '../../assets/handArt.avif'
import glitch from '../../../public/glitch.jpg'
import glitch2 from '../../../public/glitch3.avif'


export default function BlocHorizontale() {
  return (
    <div className="boxHori">
      <div className="blocHori">
        <div className="slide one">
          <div className="oneBox1">
            <img src={art} alt="" className="oneBox1__img" />
            <h1>lorem ipsum</h1>
            <h1>lorem ipsum</h1>
            <h1>lorem ipsum</h1>
          </div>
          <div className='oneBox2'>
            <p>매우 감사합니다. 엄청난 애무와 더 큰 고통을 수반하는 훈련, 참으로 그것의 전부입니다.</p>
            <img src={ahand} alt="" />
          </div>

        </div>
        <div className="slide two">
          <div className="twoBox1">
            <img src={glitch} alt="" />
          </div>
          <div className="twoBox2">
            <img src={glitch2} alt="" />
          </div>
        </div>
        <div className="slide three">slide tree</div>
      </div>
    </div>
  )
}