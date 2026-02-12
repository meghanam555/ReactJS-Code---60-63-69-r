import Image1 from '../Multimedia/car2.jpg'
import BlackCar from '../Multimedia/carblack.jpg'
import Audio from '../Multimedia/Audio1.mp3'

export default function Image(){
    return(
        <>
        <img src={Image1}></img>
        <img src={BlackCar}></img><br></br><br></br>
        <audio controls>
            <source src={Audio}></source>
        </audio><br></br>
        <video controls>
            <source src="Video.mp4"></source>
            </video>

        </>
    )
}