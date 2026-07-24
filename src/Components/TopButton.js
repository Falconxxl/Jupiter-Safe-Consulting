import './TopButton.css';
import { Link } from 'react-scroll';

function TopButton() {
    return (
        <Link
            to="hero-banner"
            className="TopButton"
            activeClass="active"
            offset={-90}
            duration={500}
            spy={true}
            smooth={true}
        >
            <i className="fa-solid fa-circle-up fa-3x"></i>
        </Link>
    );
}

export default TopButton;