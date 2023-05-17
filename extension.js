// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

function getSelectedCode() {
	const editor = vscode.window.activeTextEditor;
	const selections = editor.selections;

	let code = "";
	for (const selection of selections) {
		for (let i = selection.start.line; i <= selection.end.line; i++) {
		  const line = editor.document.lineAt(i);
		  code += line.text + "\n";
		}
	  }
	
	return code; 
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('codexplain.extractCode', function () {
        const selectedCode = getSelectedCode();
        vscode.window.showInformationMessage(selectedCode, { modal: true }, 'OK');
    });

    context.subscriptions.push(disposable);

}
// This method is called when your extension is deactivated
function deactivate() {
	console.log("Deactivated");
}

module.exports = {
	activate,
	deactivate
}
