import { Button } from './Button'
import './Firstsection.css'



function Firstsection() {
    return(
        <div className='showcase'>
            <div className="nav">
            <div className='logo'>
                <h1>apex ta'lim</h1>
            </div>
            <ul>
                <li><a href="#">Yangiliklar</a></li>
                <li><a href="#">Kurslar</a></li>
                <li><a href="#">Ustozlar</a></li>
                <li><a href="#">Fotolavhalar</a></li>
                <li><a href="#">Videolavhalar</a></li>
                <li><a href="#">Natijalar</a></li>
                <li><a href="#">Izohlar</a></li>
                <li><a href="#">Aloqa</a></li>
            </ul>
            </div>
            <div className="intro">
                <h1>Talaba bo‘lishingizga albatta ishonamiz</h1>
                <p>Shaxmatda yo’lga chiqqan piyoda, bir kun kelib albatta vazir bo’ladi.</p>
                <Button btnName = "kursga yozilish"/>
            </div>
        </div>
    )
}

export default Firstsection