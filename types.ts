
export interface Capability {
  name: string;
  type: 'Client Feature' | 'Server Feature';
  description: string;
  practical_use: string;
  version_added: string;
  docs_link: string;
}

export interface Utility {
  name: string;
  description: string;
  practical_use: string;
  docs_link: string;
}

export interface ProtocolData {
  protocolName: string;
  description: string;
  latest_version: string;
  documentation_url: string;
  capabilities: Capability[];
  utilities: Utility[];
  additional_metadata: {
    spec_versioning_scheme: string;
  };
}
