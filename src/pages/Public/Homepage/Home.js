import React from "react";
import Code from './Code'
import Post from './Post'

export default function Homepage() {
    return (
        <>
        <main className="container mx-auto px-2 sm:px-4 pt-12">
          <div className="flex flex-col lg:flex-row justify-between gap-x-8 mb-20">
            <Code/>
            <Post/>
          </div>
        </main>
        </>
    );
}