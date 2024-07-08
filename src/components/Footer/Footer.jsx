import React from 'react';
import { categorias, socialMedia } from '../../mock/mockData.js';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
            <div className="socialIcons">
                    {socialMedia.map((social, index) => (
                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                            <i className={`fa-brands fa-${social.platform.toLowerCase().replace(' ', '-')}`}></i>
                        </a>
                    ))}
                </div>
                <div className="footerNav">
                    <ul>
                        {categorias.map((categoria, index) => (
                            <li key={index}><a href={`#${categoria.toLowerCase()}`}>{categoria}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy; 2023; Beats And Songs</p>
            </div>
        </footer>
    );
};

export default Footer;


