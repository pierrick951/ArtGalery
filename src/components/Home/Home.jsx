
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
           <div className="firstGridBox">
            <p>first box</p>
           </div>
           <div className="secondGridBox">
            <p>second box</p>
           </div>
         </div>
        </section>
      </main>
    </div>
  )
}