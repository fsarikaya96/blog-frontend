import * as React from "react";
import {Link} from 'react-router-dom';
export default function Posts(){
    return (
        <section style={{ flexBasis: '100%' }}>
            <h1 className="mb-8 font-display text-purple text-lg uppercase">Son Postlar</h1>
                <div className="mb-12">
                    <p className="mb-2 leading-tight font-display">
                        <Link to="/" className="text-yellow hover:underline">
                            <strong>Routing</strong>
                        </Link>
                    </p>
                    <div className="font-normal text-dark text-sm"><em>1 yıl önce</em></div>
                </div>
                <div className="mb-12">
                    <p className="mb-2 leading-tight font-display">
                        <Link to="/" className="text-yellow hover:underline">
                            <strong>Middleware</strong>
                        </Link>
                    </p>
                    <div className="font-normal text-dark text-sm"><em>5 ay önce</em></div>
                </div>
                <div className="mb-12">
                    <p className="mb-2 leading-tight font-display">
                        <Link to="/" className="text-yellow hover:underline">
                            <strong>Validation</strong>
                        </Link>
                    </p>
                    <div className="font-normal text-dark text-sm"><em>7 önce</em></div>
                </div>
                <div className="mb-12">
                    <p className="mb-2 leading-tight font-display">
                        <Link to="/" className="text-yellow hover:underline">
                            <strong>Query Builder vs Eloquent ORM</strong>
                        </Link>
                    </p>
                    <div className="font-normal text-dark text-sm"><em>10 ay önce</em></div>
                </div>
                <div className="mb-12">
                    <p className="mb-2 leading-tight font-display">
                        <Link to="/" className="text-yellow hover:underline">
                            <strong>Collections</strong>
                        </Link>
                    </p>
                    <div className="font-normal text-dark text-sm"><em>1 yıl önce</em></div>
                </div>
                   <Link to="/posts" className="underline">Devamını Gör</Link>

            </section>
    )
}