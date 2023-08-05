import * as React from "react";
import {Link} from 'react-router-dom';
import "@fontsource/jetbrains-mono";

export default function Code(){
    return (
        <section className="mb-20 lg:mb-0 p-4 bg-black border-2 border-teal font-display text-sm md:text-lg leading-loose shadow" style={{ flexBasis: '100%' }}>
            <p>&nbsp;<span className="text-dark">1</span> <span className="text-purple"><em>const</em></span> <span className="text-red"><strong>me = </strong></span>{"{"} </p>
            <p>&nbsp;<span className="text-dark" style={{ color: "#7890a5" }}>2</span>&nbsp;&nbsp;&nbsp;<span className="text-red">name</span>: <span className="text-yellow">Ferhat Sarıkaya'</span>,</p>
            <p>&nbsp;<span className="text-dark">3</span>&nbsp;&nbsp;&nbsp;<span className="text-red">age</span>: <span className="text-orange">27</span>,</p>
            <p>&nbsp;<span className="text-dark">4</span>&nbsp;&nbsp;&nbsp;<span className="text-red">location</span>: <span className="text-yellow">'Ankara'</span>,</p>
            <p>&nbsp;<span className="text-dark">5</span>&nbsp;&nbsp;&nbsp;<span className="text-red">employer</span>: <span className="text-yellow">'<Link rel="noopener noreferrer" target="_blank" to="https://albasoft.com.tr" className="underline">Albasoft Bilişim Teknolojileri</Link>'</span>,</p>
            <p>&nbsp;<span className="text-dark">6</span>&nbsp;&nbsp;&nbsp;<span className="text-red">title</span>: <span className="text-yellow">'Full-stack Web Developer'</span>,</p>
            <p>&nbsp;<span className="text-dark">7</span>&nbsp;&nbsp;&nbsp;<span className="text-red">technologies</span>: [</p>
            <p>&nbsp;<span className="text-dark">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow">'<Link rel="noopener noreferrer" className="underline" target="_blank" to="https://www.php.net">PHP</Link>'</span>,</p>
            <p>&nbsp;<span className="text-dark">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow">'<Link rel="noopener noreferrer" className="underline" target="_blank" to="https://www.laravel.com">Laravel</Link>'</span>,</p>
            <p>&nbsp;<span className="text-dark">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow">'<Link rel="noopener noreferrer" className="underline" target="_blank" to="https://www.codeigniter.com/">Codeigniter</Link>'</span>,</p>
            <p><span className="text-dark">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow">'<Link rel="noopener noreferrer" className="underline" target="_blank" to="https://www.react.dev">React JS</Link>'</span>,</p>
            <p><span className="text-dark">12</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow">'<Link rel="noopener noreferrer" className="underline" target="_blank" to="https://www.laravel-livewire.com/">Laravel Livewire</Link>'</span>,</p>
            <p>&nbsp;<span className="text-dark">8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow">'<Link rel="noopener noreferrer" className="underline" target="_blank" to="https://www.docker.com/">Docker</Link>'</span>,</p>
            <p><span className="text-dark">13</span>&nbsp;&nbsp;&nbsp;],</p>
            <p><span className="text-dark">14</span>&nbsp;&nbsp;&nbsp;<span className="text-red">activities</span>: [<span className="text-yellow">'<Link to="/" className="underline">Blogging</Link>'</span>],</p>
            <p><span className="text-dark">15</span>&nbsp;&nbsp;&nbsp;<span className="text-red">uses</span>: <span className="text-yellow">'<Link to="/" className="underline">/uses</Link>'</span>,</p>
            <p><span className="text-dark">16</span>&nbsp;{"}"};</p>
        </section>
    )
}