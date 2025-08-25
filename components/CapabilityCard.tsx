import React from 'react';
import type { Capability } from '../types';
import { DocLinkButton } from './DocLinkButton';

const FeatureTypeBadge: React.FC<{ type: Capability['type'] }> = ({ type }) => {
  const isClient = type === 'Client Feature';
  const bgColor = isClient ? 'bg-blue-900/50' : 'bg-emerald-900/50';
  const textColor = isClient ? 'text-blue-300' : 'text-emerald-300';
  const borderColor = isClient ? 'border-blue-700/50' : 'border-emerald-700/50';
  
  const Icon = isClient ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
      <path fillRule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v2.5A2.25 2.25 0 0 0 3.25 11h13.5A2.25 2.25 0 0 0 19 8.75v-2.5A2.25 2.25 0 0 0 16.75 4H3.25ZM2.5 8.75V6.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
      <path d="M3.25 12.25a.75.75 0 0 0-.75.75v.25a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-.25a.75.75 0 0 0-1.5 0v.25a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-.25a.75.75 0 0 0-.75-.75Z" />
    </svg>
  );

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${bgColor} ${textColor} border ${borderColor}`}>
      {Icon}
      {type}
    </span>
  );
};

export const CapabilityCard: React.FC<{ capability: Capability }> = ({ capability }) => {
  return (
    <div className="flex flex-col bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-teal-400/50 hover:shadow-teal-400/10">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white pr-2">{capability.name}</h3>
          <FeatureTypeBadge type={capability.type} />
        </div>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{capability.description}</p>
        
        <div className="mt-4 bg-slate-900/50 border-l-4 border-slate-600 p-4 rounded-r-md">
            <p className="text-sm text-slate-300 font-medium">Practical Use</p>
            <p className="text-slate-400 text-sm italic mt-1">{capability.practical_use}</p>
        </div>
      </div>
      
      <div className="bg-slate-800 p-4 flex justify-between items-center border-t border-slate-700">
        <span className="text-xs text-slate-500 font-mono">Added: {capability.version_added}</span>
        <DocLinkButton href={capability.docs_link} />
      </div>
    </div>
  );
};