import './ContactUs.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";

function ContactUs() {
    return (
        <div className="Container-ContactUs">
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>
            <p>Contact Us</p>
            <TopButton/>
        </div>
    );
}

export default ContactUs;