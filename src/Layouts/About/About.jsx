import './About.css'
import blyat from '../../../public/blyat.webp'


export default function About() {
  return (
    <div className="AboutContainer">
        <h3 className='heading3'>About</h3>
        <div className='AboutBotContainer'>
            <div className='boxtext'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure culpa modi quasi numquam asperiores ducimus nulla itaque quidem nobis quas quos, esse reiciendis atque tempora. Nam at nulla nesciunt?</p>
            </div>
            <div className="boxImg">
                <img src={blyat} alt="fondatrice du musée" />
            </div>
        </div>
    </div>
  )
}