import * as vscode from 'vscode';
import { XMLExtensionApi } from './xmlExtensionsApi';

export async function activate(context: vscode.ExtensionContext) {
  // Register xml schema for *.wsb files
  const xmlExtension = await vscode.extensions.getExtension<XMLExtensionApi>('redhat.vscode-xml')?.activate();
  if (xmlExtension && xmlExtension.addXMLFileAssociations) {
    xmlExtension.addXMLFileAssociations([
      {
        pattern: "**/*.wsb",
        systemId: context.asAbsolutePath("schemas/wsb.xsd")
      }
    ]);
  }
}

export async function deactivate() { }
