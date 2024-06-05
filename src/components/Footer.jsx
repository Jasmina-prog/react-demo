import { Button } from './Button'
import './Footer.css'

// function Input(props){
//     return(
//         <input type="text" placeholder='{props.inputname}' />
//     )
// }
export function Footer(){
    return(
        <div className="footer">
            <h1>Aloqa</h1>
            <form action="">
                <input type='text' placeholder='Ism va familiyangizni yozing'/>
                <input type="text" placeholder='Telefon raqamingizni yozing' />
                <input type="text" placeholder='Email manzilingizni yozing' />
                <Button btnName = "yuborish" />
            </form>
            <div className="line"></div>
            <div className="logo"><h1>apex ta'lim</h1></div>
        </div>
    )
}