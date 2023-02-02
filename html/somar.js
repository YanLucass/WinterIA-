
function somar(numero1, numero2) {
      const pegar1 = document.getElementById('numero1')
      const pegar2 = document.getElementById('numero2');
      const aparecer = document.getElementById('aparecer')
      numero1 = Number(pegar1.value);
      numero2 = Number(pegar2.value);
      const result = Number(numero1+ numero2);
      aparecer.innerHTML  = `a resposta é ${result}`

}



