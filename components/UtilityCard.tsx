
import React from 'react';
import type { Utility } from '../types';
import { DocLinkButton } from './DocLinkButton';

export const UtilityCard: React.FC<{ utility: Utility }> = ({ utility }) => {
  return (
    <div className="flex flex-col bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-sky-400/50 hover:shadow-sky-400/10">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white mb-3">{utility.name}</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{utility.description}</p>
        
        <div className="mt-auto bg-slate-900/50 border-l-4 border-slate-600 p-4 rounded-r-md">
            <p className="text-sm text-slate-300 font-medium">Practical Use</p>
            <p className="text-slate-400 text-sm italic mt-1">{utility.practical_use}</p>
        </div>
      </div>

      <div className="bg-slate-800 p-4 flex justify-end items-center border-t border-slate-700">
        <DocLinkButton href={utility.docs_link} />
      </div>
    </div>
  );
};
