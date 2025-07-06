import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "windowssandbox-configuration" is now active!');

  // Register xml schema for *.wsb files
  const xmlExtension = vscode.extensions.getExtension('redhat.vscode-xml');
  if (xmlExtension) {
    if (!xmlExtension.isActive) {
      await xmlExtension.activate();
    }

    const xmlAPI = xmlExtension.exports;
    if (xmlAPI && xmlAPI.addXMLFileAssociations) {
      xmlAPI.addXMLFileAssociations([{
        pattern: "**/*.wsb",
        systemId: context.asAbsolutePath("schemas/configuration.xsd")
      }]);
    }
  }
}

export async function deactivate() { }
