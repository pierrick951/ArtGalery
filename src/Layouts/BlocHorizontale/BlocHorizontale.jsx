import './BlocHorizontale.css'
import art from '../../assets/art.jpg'


export default function BlocHorizontale() {
    return (
        <div className="boxHori">
            <div className="blocHori">
                <div className="slide one">
                      <div>
                        <img src={art} alt="" />
                      </div>
                </div>
                <div className="slide two">slide  two </div>
                <div className="slide three">slide tree</div>
            </div>
        </div>
    )
}