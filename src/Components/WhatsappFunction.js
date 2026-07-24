import './WhatsappFunction.css';
// import {Link} from 'react-scroll';

function WhatsappFunction () {
    return (
        <div className="Container-Whatsapp-function">
            <button
                className="Container-Whatsapp-icon"
                onClick={() =>
                    window.open(
                        "https://wa.me/00243971011222?text=Bonjour%20je%20souhaite%20un%20devis",
                        "_blank"
                    )
                }
            >
                <i className="fa-brands fa-whatsapp"></i>
            </button>
        </div>

    );
}

export default WhatsappFunction;