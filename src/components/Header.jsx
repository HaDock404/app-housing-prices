import '../styles/header.css'
import House from '../assets/house.png'

function Header() {
    return (
        <header id='header'>
            <img src={House} alt="image" id='image1'/>
            <div id='header-text'>Housing Prices</div>
        </header>
    )
}

export default Header