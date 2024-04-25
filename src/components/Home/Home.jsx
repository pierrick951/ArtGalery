import HomeContainer1 from '../../Layouts/HomeContainer1/HomeContainer1'
import PresentationMusée from '../../Layouts/PresentationMusée/PresentationMusée'
import './Home.css'
export default function Home() {

  return (
    <div className="Container">
      <header>
        <h1>Art Museum </h1>
        <p className='under-heading'>of</p>
      </header>


      <main className='centerContainer'>
        <section className='section1'>
          <h2 className='heading2'>A la une</h2>
          <div className="flexContainer">
            <div className="firstBox">
              <HomeContainer1 />
            </div>

          </div>
        </section>
        <section className='section2'>
          <PresentationMusée />
        </section>
        <section className='BoxParallax'>
          <div className='Paralax'></div>          
        </section>
      </main>
    </div>
  )
}