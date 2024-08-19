  Swal.fire({
    title: "Olá usuário, qual é o seu nome?",
    input: "text",
    inputPlaceholder: "Insira o seu nome",
    confirmButtonText: "Confirmar",
    inputValidator: (value) => {
      if (!value) {
        return'Você precisa digitar algo!';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const nome = result.value;
      Swal.fire({
        title: `Bem-Vindo(a), ${nome}!`,
        text:"Boraa decodificar!!",
        confirmButtonText: "Confirmar",
       
      });
    }
});

function crypt(text){

  return text
  .replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat")
}
function decrypt(text){

  return text
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u")
}
const textArea = document.querySelector("#main-textarea")
const btnCrypt = document.querySelector(".crypt-button")
const btnDecrypt = document.querySelector(".decrypt-button")
const textAreaCryDecry = document.querySelector("#textarea-crypt-decrypt")
const btnCopy = document.querySelector(".copy-button")
const divelementinformation =  document.querySelector(".element-information")

btnCrypt.addEventListener("click", () =>{
  const text = textArea.value.toLowerCase();
  textAreaCryDecry.textContent = crypt(text);
  const textAreaValue = textArea.value;
  const lastLetterTyped = textAreaValue.charAt(textAreaValue.length - 1);
  const accentsRegex = /[áàâãäéèêëíìîïóòôõöúùûüçñA-ZÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ]/

   if (accentsRegex.test(lastLetterTyped)) {
    swal.fire({
      title: "Erro",
      text: "Apenas palavras minúsculas e sem acento!",
      icon: "warning",
      confirmButtonText: "Confirmar",
    });
    textArea.value = "";
    return;

  }else if (textArea.value == "") {
    swal.fire({
      title: "Erro",
      text: "Digite algo primeiro !",
      icon: "warning",
      confirmButtonText: "Confirmar",
    });
    return;

  }else{
    swal.fire({
      title: "Sucesso",
      text: "Texto criptografado com sucesso!",
      icon: "success",
      confirmButtonText: "Confirmar",
    });
  }
  divelementinformation.classList.add("visible");  
});

btnDecrypt.addEventListener("click", () =>{
  const text = textArea.value.toLowerCase();
  textAreaCryDecry.textContent = decrypt(text)
  if (textArea.value == "") {
  swal.fire({
    title: "Erro",
    text: "Digite algo primeiro !",
    icon: "warning",
    confirmButtonText: "Confirmar",
  });
  return;

  }else{
    Swal.fire({
      title: "Descriptografado",
      text: "Texto descriptografado com sucesso!",
      icon: "success",
      confirmButtonText: "Confirmar",
    });
  }
  divelementinformation.classList.add("visible")
});

btnCopy.addEventListener("click", () =>{
  const tempData = document.createElement("textarea");
  tempData.value = textAreaCryDecry.textContent;
  document.body.appendChild(tempData);
  tempData.select();
  document.execCommand("copy");
  document.body.removeChild(tempData);
  Swal.fire({
    title: "Copiado",
    text: "Texto copiado com sucesso!",
    icon: "success",
    confirmButtonText: "Confirmar",
  });
  divelementinformation.classList.remove("visible");
});










