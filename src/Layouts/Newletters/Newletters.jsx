import './Newletters.css'

export default function Newletters() {
  return (
    <div className='containerNewsLetter'>
        <input type="e-mail" placeholder='Votre E-mail' />
        <label  className="InfoLettreLabel" htmlFor="e-mail" name=""></label>
        <button className='infoLettreBtn'>S'Abonner</button>
    </div>
  )
}