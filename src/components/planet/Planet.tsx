
import elipse from '../../assets/Ellipse.svg'
import circle from '../../assets/Animation.svg'
import './Planet.css'


function Planet() {
    return (
        <div className='container'>
            <div className='logo-container'>
                <div className='logos'>
                    <img src={elipse} alt="elipse" className='logo orb' />
                    <img src={circle} alt="circle" className='logo circle' />
                </div>
            </div>
        </div>
    )
}

export default Planet