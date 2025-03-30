// Inisialisasi CodeMirror
function setupEditor(id, mode) {
    return CodeMirror.fromTextArea(document.getElementById(id), {
        lineNumbers: true,
        mode: mode,
        theme: "default"
    });
}

const htmlEditor = setupEditor("html-editor", "htmlmixed");
const cssEditor = setupEditor("css-editor", "css");
const jsEditor = setupEditor("js-editor", "javascript");

// Jalankan kode dan tampilkan hasil
function runCode() {
    const outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.write(`
        <html>
        <head>
            <style>${cssEditor.getValue()}</style>
        </head>
        <body>
            ${htmlEditor.getValue()}
            <script>${jsEditor.getValue()}<\/script>
        </body>
        </html>
    `);
    outputFrame.close();
}
