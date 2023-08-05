import * as React from "react";
import {Link} from 'react-router-dom';

export default function Header (){
    return (
    <header className="px-2 md:px-6 py-4">
      <nav className="flex flex-col sm:flex-row justify-between items-baseline font-display">
        <Link className="mb-4 sm:mb-0 text-2xl font-black text-red leading-none uppercase" to="/">
          $Ferhat_Sarikaya
        </Link>

        <ul className="flex gap-x-2 md:gap-x-10">
          <li>
            <Link className="block pr-2 text-base sm:text-lg text-orange font-semibold uppercase hover:underline" to="/projects">
              $Projeler
            </Link>
          </li>

          <li>
            <Link className="block px-2 text-base sm:text-lg text-orange font-semibold uppercase hover:underline" to="/blog">
              $Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}