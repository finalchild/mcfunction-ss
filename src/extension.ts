'use strict';
import * as vscode from 'vscode';
import * as parser from './parser';
import { languages, ExtensionContext, Range, SignatureInformation, CompletionItem, CompletionItemKind, commands, DiagnosticCollection } from 'vscode';
import { configure } from 'vscode/lib/testrunner';

let diagnosticCollection: DiagnosticCollection;

export function activate(context: ExtensionContext) {

    languages.registerCompletionItemProvider('mcfunction', {
        provideCompletionItems(document, position, token) {
            var text = document.getText(new Range(position.line, 0, position.line, position.character))

            var results = parser.parse(text);
            var args: string[] = results.args;
            var type: string = results.type;

            var items: CompletionItem[] = [];

            args.forEach(arg => {
                var item = new CompletionItem(arg);
                item.filterText = arg;
                switch (type) {
                    case "command":
                        item.kind = CompletionItemKind.Function;
                        break;
                    case "literal":
                        item.kind = CompletionItemKind.Property;
                        break;
                    default:
                        item.kind = CompletionItemKind.Enum;
                        break;
                }
                items.push(item);
            });

            return items;
        }
    }, ...[' ', '[', '{', ',']);

    languages.registerSignatureHelpProvider('mcfunction', {
        provideSignatureHelp(document, position, token) {
            var text = document.getText(new Range(position.line, 0, position.line, position.character));

            var results = parser.parse(text);
            var usage = results.usage;

            if (usage != null) {
                var help = new vscode.SignatureHelp();
                help.signatures = [new SignatureInformation(usage)];
                help.activeSignature = 0;
                help.activeParameter = 0;

                return help;
            }
        }
    }, ...[' ']);

}

export function deactivate() {
}