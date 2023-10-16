import Logo from '../imagens/Netflix-Symbol.png';
import './header.css';  

function Header () {
    return (
        <header className="header-menu">
          <img src={Logo} alt='logo' className="logo"/>
          <h2 className='hhd'>NETFLIXO</h2>
        </header>
    )
}

export default Header;