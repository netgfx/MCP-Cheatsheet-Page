
import React from 'react';
import { protocolData } from './data';
import { CapabilityCard } from './components/CapabilityCard';
import { UtilityCard } from './components/UtilityCard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header 
          name={protocolData.protocolName}
          description={protocolData.description}
          version={protocolData.latest_version}
          docsUrl={protocolData.documentation_url}
        />

        <main className="mt-12">
          <section id="capabilities">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 border-l-4 border-teal-400 pl-4">
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {protocolData.capabilities.map((capability) => (
                <CapabilityCard key={capability.name} capability={capability} />
              ))}
            </div>
          </section>

          <section id="utilities" className="mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 border-l-4 border-sky-400 pl-4">
              Lifecycle Utilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {protocolData.utilities.map((utility) => (
                <UtilityCard key={utility.name} utility={utility} />
              ))}
            </div>
          </section>
        </main>
        
        <Footer 
            versioningScheme={protocolData.additional_metadata.spec_versioning_scheme}
            docsUrl={protocolData.documentation_url}
        />
      </div>
    </div>
  );
};

export default App;
