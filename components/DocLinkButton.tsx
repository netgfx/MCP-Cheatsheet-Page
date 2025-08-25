
import React from 'react';
import { ExternalLinkIcon } from './Icons';

interface DocLinkButtonProps {
    href: string;
}

export const DocLinkButton: React.FC<DocLinkButtonProps> = ({ href }) => {
    return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-200 group"
        >
          Read Docs
          <ExternalLinkIcon className="w-4 h-4 ml-1.5 transform transition-transform group-hover:translate-x-0.5" />
        </a>
    );
};
