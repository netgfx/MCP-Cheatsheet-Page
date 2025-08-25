
import React from 'react';
import { BookOpenIcon, ExternalLinkIcon } from './Icons';

interface HeaderProps {
    name: string;
    description: string;
    version: string;
    docsUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ name, description, version, docsUrl }) => {
    return (
        <header className="text-center py-10 border-b border-slate-700/50 bg-gradient-to-b from-slate-900 to-slate-900/50 rounded-lg p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-purple-400">
                    {name}
                </h1>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                    {description}
                </p>
                 <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                     <span className="inline-flex items-center rounded-md bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300 ring-1 ring-inset ring-slate-700">
                         Latest Version: <strong className="ml-1.5 font-semibold text-white">{version}</strong>
                     </span>
                     <a
                         href={docsUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-colors duration-200"
                     >
                        <BookOpenIcon className="w-5 h-5 mr-2" />
                        Official Documentation
                        <ExternalLinkIcon className="w-4 h-4 ml-2" />
                     </a>
                 </div>
            </div>
        </header>
    );
};
