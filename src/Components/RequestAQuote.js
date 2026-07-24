import React, { useState } from 'react';
import './RequestAQuote.css';
import TopButton from "./TopButton";
import Footer from "../Layout/Footer";
import WhatsappFunction from "./WhatsappFunction";
import Navbar2 from "../Layout/Navbar2";
import emailjs from '@emailjs/browser';

const SERVICES = [
    "Système de management ISO",
    "Audit QHSE",
    "Gestion des risques",
    "Formation QHSE",
    "Excellence opérationnelle",
    "Branding Nat Protech",
];

const BUDGETS = [
    "Moins de 500 $",
    "500 $ – 1 500 $",
    "1 500 $ – 5 000 $",
    "5 000 $ – 15 000 $",
    "Plus de 15 000 $",
    "Je ne sais pas encore",
];

function RequestAQuote({ onClose }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        website: '',
        service: '',
        budget: '',
        projectDesc: '',
        deadline: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
        if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';

        if (!formData.email.trim()) newErrors.email = "L'email est requis";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';

        if (!formData.phone.trim()) newErrors.phone = 'Le numéro de téléphone est requis';
        if (!formData.city.trim()) newErrors.city = 'La ville / commune est requise';

        if (!formData.service) newErrors.service = 'Veuillez choisir un service';
        if (!formData.budget) newErrors.budget = 'Veuillez choisir un budget estimé';
        if (!formData.projectDesc.trim()) newErrors.projectDesc = 'La description du projet est requise';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            website: formData.website,
            service: formData.service,
            budget: formData.budget,
            projectDesc: formData.projectDesc,
            deadline: formData.deadline,
        };

        emailjs.send(
            'service_230td4v',
            'template_57ai8cc',
            templateParams,
            '9muouI1nF6x1Do-Pe'
        )
            .then(() => {
                alert('✅ Votre demande a été envoyée avec succès !');

                setFormData({
                    firstName: '',
                    lastName: '',
                    role: '',
                    company: '',
                    email: '',
                    phone: '',
                    city: '',
                    website: '',
                    service: '',
                    budget: '',
                    projectDesc: '',
                    deadline: ''
                });
            })
            .catch((error) => {
                console.error(error);
                alert("❌ Une erreur est survenue. Merci de réessayer.");
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Navbar2/>
            <div className="Container-icon-RequestAQuote">
                <button
                    className="wrapper-icon-RequestAQuote"
                    onClick={onClose}
                >
                </button>
            </div>

            <div className="Container-RequestAQuote">

                <h1 className="title-RequestAQuote">
                    <span style={{color:"black"}}>Demandez votre audit</span> QHSE
                </h1>

                <div className="request-container">

                    <form className="form-section" onSubmit={handleSubmit}>

                        <div className="line"></div>
                        <h2 className="request-form-title">
                            Nat Protech accompagne les entreprises dans la mise en conformité
                            réglementaire, la prévention des risques professionnels et l'amélioration
                            durable de leur performance. <br/> <br/>

                            Remplissez le formulaire ci-dessous et nos
                            experts vous contacteront pour échanger sur vos besoins et vous proposer
                            un accompagnement adapté.
                        </h2>

                        <div className="row">
                            <div className="field">
                                <input name="firstName"
                                       value={formData.firstName}
                                       onChange={handleChange}
                                       className="Input-hover"
                                       placeholder="Prénom*"
                                       style={{width:"100%", height:"50px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "black", background:"transparent"}}
                                />
                            </div>
                            {errors.firstName && <p className="error">{errors.firstName}</p>}

                            <div className="field">
                                <input name="lastName"
                                       className="Input-hover"
                                       value={formData.lastName}
                                       onChange={handleChange}
                                       placeholder="Nom*"
                                       style={{width:"100%", height:"50px", marginLeft:"0px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "black", background:"transparent"}}/>
                            </div>
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>

                        <div className="row">
                            <div className="field">
                                <input name="role"
                                       value={formData.role}
                                       onChange={handleChange}
                                       className="Input-hover"
                                       placeholder="Rôle dans l'entreprise (optionnel)"
                                       style={{width:"100%", height:"50px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "black", background:"transparent"}}
                                />
                            </div>

                            <div className="field">
                                <input name="company"
                                       value={formData.company}
                                       onChange={handleChange}
                                       className="Input-hover"
                                       placeholder="Entreprise (optionnel)"
                                       style={{width:"100%", height:"50px", marginLeft:"0px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "black", background:"transparent"}}
                                />
                            </div>
                        </div>

                        <div className="field full">
                            <input name="email" value={formData.email} onChange={handleChange}
                                   placeholder="Email*"
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "black", background:"transparent"}}/>
                        </div>
                        {errors.email && <p className="error">{errors.email}</p>}

                        <div className="field full">
                            <input name="phone" value={formData.phone} onChange={handleChange}
                                   placeholder="Numéro de téléphone*"
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "black", background:"transparent"}}/>
                        </div>
                        {errors.phone && <p className="error">{errors.phone}</p>}

                        <div className="field full">
                            <input name="city" value={formData.city} onChange={handleChange}
                                   placeholder="Ville / Commune*"
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "black", background:"transparent"}}/>
                        </div>
                        {errors.city && <p className="error">{errors.city}</p>}

                        <div className="field full">
                            <input name="website" value={formData.website} onChange={handleChange}
                                   placeholder="Site web (optionnel)"
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "black", background:"transparent"}}/>
                        </div>

                        <div className="field-full">
                            <select name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="request-form-select"
                                    style={{ color: formData.service ? "black" : "darkgray", background:"transparent" }}
                            >
                                <option value="">Sélectionnez le service souhaité</option>
                                {SERVICES.map((service) => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                        {errors.service && <p className="error">{errors.service}</p>}

                        <div className="field full">
                            <select name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="request-form-select"
                                    style={{ color: formData.budget ? "black" : "darkgray", background:"transparent" }}
                            >
                                <option value="">Sélectionnez votre budget estimé</option>
                                {BUDGETS.map((budget) => (
                                    <option key={budget} value={budget}>{budget}</option>
                                ))}
                            </select>
                        </div>
                        {errors.budget && <p className="error">{errors.budget}</p>}

                        <div className="field full">
                            <textarea name="projectDesc" value={formData.projectDesc}
                                      onChange={handleChange}
                                      className="Input-hover"
                                      placeholder="Décrivez votre projet ou votre besoin..."
                                      style={{width:"100%", height:"150px",
                                          padding:"14px",marginBottom:"10px", fontSize:"15px", fontFamily:"Poppins",
                                          color: "black", background:"transparent"}}>
                            </textarea>
                        </div>
                        {errors.projectDesc && <p className="error">{errors.projectDesc}</p>}

                        <div className="field full">
                            <label className="request-form-label"
                                   style={{color: "black"}}
                            >Date souhaitée (optionnel) :</label><br/>
                            <input
                                type="date" name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="Input-hover"
                                style={{
                                    padding: "15px",
                                    width: "220px",
                                    height: "50px",
                                    marginTop: "10px",
                                    fontSize: "16px",
                                    color: "black",
                                    background: "transparent"
                                }}
                            />
                        </div>

                        <button className="submit-btn-requestAQuote">Envoyer ma demande</button>
                    </form>
                </div>

            </div>
            <WhatsappFunction/>
            <TopButton/>
            <Footer/>
        </div>
    );
}

export default RequestAQuote;