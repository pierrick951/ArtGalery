import './BlocHorizontale.css'
import art from '../../assets/art.jpg'
import ahand from '../../assets/handArt.avif'
import glitch2 from '../../../public/glitch3.avif'
import vapo from '../../../public/vapo.jpg'


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
            <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHVkMHduejZxMmc5dHZ4bXJoZHNzZmU2Yzd6bmkxd2kyczJ3Z282aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHjHlQXMktlhwuZJun/giphy.gif' alt="" />
            <h3>Can you hear me ? </h3>
          </div>
          <div className="twoBox2">
            <img src={glitch2} alt="" />
          </div>
        </div>
        <div className="slide three">
          <div className="threebox1">
            <img src={vapo} alt="" />
          </div>
          <div className="threebox2">

            <img src="https://i.pinimg.com/originals/d9/0d/7e/d90d7ed248aefeae4148c4cfe616ba84.gif" alt="" />
            <h2>RUN AWAY.</h2>
          </div>
          </div>
      </div>
    </div>
  )
}