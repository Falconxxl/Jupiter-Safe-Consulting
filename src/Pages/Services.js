import './Services.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import WhatsappFunction from "../Components/WhatsappFunction";

function Services() {
    return (
        <div className="Container-Services">
            <NavbarMenu/>
            <Navbar2/>
            <p>Services</p>
            {/*<TopButton/>*/}
            <WhatsappFunction/>
        </div>
    );
}

export default Services;