import * as React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return(
        <footer className="bg-gray px-2 md:px-16 py-12">
            <div className="flex justify-center container mx-auto mb-12 font-display">
                <div className="flex flex-col pr-12 md:pr-32">
                    <p className="mb-4 uppercase text-purple"><strong>Kaynaklar</strong></p>
                    <Link className="mb-6 text-sm hover:underline" to="/projects">Projeler</Link>
                    <Link className="mb-6 text-sm hover:underline" to="/blog">Blog</Link>
                </div>

                <div className="flex flex-col pr-12 md:pr-32">
                    <p className="mb-4 uppercase text-purple"><strong>İletişim</strong></p>
                    <Link className="text-sm hover:underline" to="mailto:fsarikaya96@hotmail.com">Email</Link>
                </div>

                <div className="flex flex-col">
                    <p className="mb-4 uppercase text-purple"><strong>Linkler</strong></p>
                    <Link to="https://github.com/fsarikaya96" className="mb-6 flex items-center hover:text-yellow" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
                        <span className="text-sm">Github</span>
                    </Link>
                    <Link to="https://linkedin.com/in/fsarikayaa" className="mb-6 flex items-center hover:text-yellow" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-2" />
                        <span className="text-sm">LinkedIn</span>
                    </Link>
                   
                    <Link to="/" className="flex items-center hover:text-yellow" target="_blank" rel="noopener noreferrer"></Link>
                </div>
            </div>
        </footer>
    )
}