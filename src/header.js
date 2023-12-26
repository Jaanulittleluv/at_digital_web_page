import './body.css';
import Logo from './assets/images/Logo.svg'

function Header() {
  return (
    <nav class="nav">
    <img class="logo" src={Logo} alt="Logo" />
    <ul class="p-4">
        <li class="navlist">Services</li>
        <li class="navlist">About Us</li>
        <li class="navlist">Contact Us</li>
        <li class="navlist">Careers</li>
    </ul>
</nav>
  );
}

export default  Header;
