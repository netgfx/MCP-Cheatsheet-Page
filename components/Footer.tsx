
import React from 'react';

interface FooterProps {
    versioningScheme: string;
    docsUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ versioningScheme, docsUrl }) => {
    return (
        <footer className="mt-20 text-center py-8 border-t border-slate-700/50">
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-sm text-slate-400">
                    <strong>Spec Versioning:</strong> {versioningScheme}
                </p>
                <p className="text-sm text-slate-500 mt-2">
                    For the most up-to-date information, always refer to the{' '}
                    <a href={docsUrl} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-medium underline underline-offset-2">
                        official documentation
                    </a>.
                </p>
                <p className="mt-6 text-xs text-slate-600">
                    MCP Cheat Sheet | Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};
