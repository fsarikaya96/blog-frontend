import * as React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return(
        <footer class="bg-gray px-2 md:px-16 py-12">
            <div class="flex justify-center container mx-auto mb-12 font-display">
                <div class="flex flex-col pr-12 md:pr-32">
                    <p class="mb-4 uppercase text-purple"><strong>Kaynaklar</strong></p>
                    <Link class="mb-6 text-sm hover:underline" to="/projects">Projeler</Link>
                    <Link class="mb-6 text-sm hover:underline" to="/blog">Blog</Link>
                </div>

                <div class="flex flex-col pr-12 md:pr-32">
                    <p class="mb-4 uppercase text-purple"><strong>İletişim</strong></p>
                    <Link class="text-sm hover:underline" to="mailto:fsarikaya96@hotmail.com">Email</Link>
                </div>

                <div class="flex flex-col">
                    <p class="mb-4 uppercase text-purple"><strong>Linkler</strong></p>
                    <Link aria-label="Github in new tab" to="https://github.com/fsarikaya96" class="mb-6 flex items-center hover:text-yellow" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
                        <span class="text-sm">Github</span>
                    </Link>
                    <Link aria-label="LinkedIn in new tab" to="https://linkedin.com/in/fsarikayaa" class="mb-6 flex items-center hover:text-yellow" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-2" />
                        <span class="text-sm">LinkedIn</span>
                    </Link>
                   
                    <Link aria-label="My codementor profile" to="/" class="flex items-center hover:text-yellow" target="_blank" rel="noopener noreferrer"></Link>
                </div>
            </div>
        </footer>
    )
}