import type { ProtocolData } from './types';

export const protocolData: ProtocolData = {
  "protocolName": "Model Context Protocol (MCP)",
  "description": "An open protocol that enables seamless integration between LLM applications and external data sources and tools.",
  "latest_version": "2025-06-18",
  "documentation_url": "https://modelcontextprotocol.io/",
  "capabilities": [
    {
      "name": "Elicitation",
      "type": "Client Feature",
      "description": "Asks users for approval or input through a user interface during a session.",
      "practical_use": "A tool can ask the user for confirmation before performing a critical action, like deleting a file or sending an important email.",
      "version_added": "2025-06-18",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/elicitation"
    },
    {
      "name": "Tools",
      "type": "Server Feature",
      "description": "Allows servers to expose functions for the AI model to execute.",
      "practical_use": "An API can provide a set of actions that an AI model can use to perform tasks, such as sending a message or creating a calendar event.",
      "version_added": "2025-06-18",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/tools"
    },
    {
      "name": "Resources",
      "type": "Server Feature",
      "description": "Allows servers to provide context and data for the user or the AI model to use.",
      "practical_use": "A server can provide a document or a set of files that the AI model can use to answer questions or complete a task.",
      "version_added": "2025-06-18",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/resources"
    },
    {
      "name": "Prompts",
      "type": "Server Feature",
      "description": "Allows servers to provide templated messages and workflows for users.",
      "practical_use": "A server can provide a set of pre-defined questions or commands that a user can select from to interact with the AI model.",
      "version_added": "2025-06-18",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/prompts"
    },
    {
      "name": "Sampling",
      "type": "Client Feature",
      "description": "Allows servers to initiate agentic behaviors and recursive LLM interactions.",
      "practical_use": "A tool can ask the AI model to generate a creative story or a poem, and then use the output to perform another action.",
      "version_added": "2025-06-18",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/sampling"
    },
    {
      "name": "Roots",
      "type": "Client Feature",
      "description": "Allows servers to inquire about the URI or filesystem boundaries to operate in.",
      "practical_use": "A tool can ask for the user's current working directory to save a file in the correct location.",
      "version_added": "2025-06-18",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/roots"
    }
  ],
  "utilities": [
    {
      "name": "Configuration",
      "description": "Provides a mechanism for configuring the connection and capabilities between the client and server.",
      "practical_use": "Allows an application to set specific preferences or parameters for how it interacts with a tool.",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/lifecycle"
    },
    {
      "name": "Progress Tracking",
      "description": "Allows for monitoring the status of long-running operations.",
      "practical_use": "When a tool is performing a lengthy task, like analyzing a large document, it can provide updates on its progress to the user.",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/progress"
    },
    {
      "name": "Cancellation",
      "description": "Enables the cancellation of ongoing operations.",
      "practical_use": "If a user initiates a task by mistake or no longer needs it, they can stop the tool from continuing its operation.",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/cancellation"
    },
    {
      "name": "Error Reporting",
      "description": "Provides a standardized way for reporting errors that occur during operations.",
      "practical_use": "If a tool fails to perform an action, it can send a clear error message back to the application, helping with debugging and user feedback.",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/lifecycle#shutdown"
    },
    {
      "name": "Logging",
      "description": "Facilitates the logging of messages for debugging and monitoring purposes.",
      "practical_use": "Developers can record the interactions between an AI model and a tool to diagnose issues and improve performance.",
      "docs_link": "https://modelcontextprotocol.io/docs/specification/logging"
    }
  ],
  "additional_metadata": {
    "spec_versioning_scheme": "Date-based (YYYY-MM-DD), incremented on backwards-incompatible changes."
  }
};