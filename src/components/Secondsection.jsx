import './Secondsection.css'
import { Button } from './Button'

 function Card(){
   return(
    <div className="card">
    <div className="picture"></div>
    <div className="text">
        <h3>Matematika</h3>
        <p>Matematika fanini mukammal o‘rganish yangi metodikasi bilan o‘rganamiz.</p>
        <Button btnName = "Kursga yozilish"/>
        
    </div>
</div>
   )
}

export function Secondsection(){
    return(
        <>
            <h1 className='h1Heading'>Kurslar</h1>
        <div className="cardcontainer">
            <Card/> 
            <Card/>
            <Card/>
        </div>
        </>
    )
}
