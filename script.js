const copy = (text) => navigator.clipboard.writeText(text);
  const copyToClipboard = (text) => {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  };

  let button = document.getElementById("btn");
  button.addEventListener("click", () => {
    copyToClipboard('ronakexe#3335');
    alert("Copied 'ronakexe#3335' to your clipboard");
  });