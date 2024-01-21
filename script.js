function runCode(){
     const hyperTextMarkupLanguage = document.getElementById('HyperTextMarkupLanguage').value;
     const cascadingStyleSheet = document.getElementById('CascadingStyleSheet').value;
     const javaScript = document.getElementById('JavaScript').value;
     const output = document.getElementById('output');
     output.contentDocument.body.innerHTML = `${hyperTextMarkupLanguage} <style>${cascadingStyleSheet}</style>`;
     output.contentWindow.eval(javaScript);
}
document.querySelector('textarea').addEventListener('keyup',runCode);