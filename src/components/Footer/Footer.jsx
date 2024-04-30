import Newletters from '../../Layouts/Newletters/Newletters'

import './Footer.css'


export default function Footer() {
  return (
    <div className='ContainerFooter'>

      <div className="ContainerLink">
        <div>
          <ul className='listFooter'>
            <h3>Discover</h3>
            <li>notre staff</li>
            <li>Ticket</li>
            <li>activiter</li>
          </ul>
        </div>

      <Newletters />
      </div>
      <small className='copyLettre'>	© copyrigth Berlin Muséeum tout droits réserve blablabla</small>
    </div>
  )
} 