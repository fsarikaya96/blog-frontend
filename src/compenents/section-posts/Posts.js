import * as React from "react";
import {Link} from 'react-router-dom';
export default function Posts(){
    return (
        <section style={{ flexBasis: '100%' }}>
            <h1 class="mb-8 font-display text-purple text-lg uppercase">Son Postlar</h1>
                <div class="mb-12">
                    <p class="mb-2 leading-tight font-display">
                        <Link to="/" class="text-yellow hover:underline">
                            <strong>Routing</strong>
                        </Link>
                    </p>
                    <div class="font-normal text-dark text-sm"><em>1 year ago</em></div>
                </div>
                <div class="mb-12">
                    <p class="mb-2 leading-tight font-display">
                        <Link to="/" class="text-yellow hover:underline">
                            <strong>Middleware</strong>
                        </Link>
                    </p>
                    <div class="font-normal text-dark text-sm"><em>1 year ago</em></div>
                </div>
                <div class="mb-12">
                    <p class="mb-2 leading-tight font-display">
                        <Link to="/" class="text-yellow hover:underline">
                            <strong>Validation</strong>
                        </Link>
                    </p>
                    <div class="font-normal text-dark text-sm"><em>1 year ago</em></div>
                </div>
                <div class="mb-12">
                    <p class="mb-2 leading-tight font-display">
                        <Link to="/" class="text-yellow hover:underline">
                            <strong>Query Builder vs Eloquent ORM</strong>
                        </Link>
                    </p>
                    <div class="font-normal text-dark text-sm"><em>1 year ago</em></div>
                </div>
                <div class="mb-12">
                    <p class="mb-2 leading-tight font-display">
                        <Link to="/" class="text-yellow hover:underline">
                            <strong>Collections</strong>
                        </Link>
                    </p>
                    <div class="font-normal text-dark text-sm"><em>1 year ago</em></div>
                </div>
            </section>
    )
}