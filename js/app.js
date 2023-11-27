let numberLimit

function metodoBisseccao(a, b, f, max, E) {

    let k = 0;
    let xk;
    let fa_fxk;
  
    while (k <= max) {
        
      xk = (a + b) / 2;

      if (f(a) * f(xk) < 0) {
        b = xk;
      } else {
        a = xk;
      }

      //console.log(xk)

        if(Math.abs(b - a) <= E){
            $('.message').html(`<span class="message success">Raiz aproximada: <span>${limitarCasasDecimais(xk, numberLimit)}</span> <br> encontrada na iteração: ${k} de ${max}</span>`);
            
            //$('#calc').prop('disabled', true);
            break
        }else{
            $('.message').html(`<span class="message danger">Ops! O método não converge para a solução.! <br> Por favor, verifique as entradas e tente novamente.</span>`);

            // break
        }
        
        fa_fxk = f(a) * f(xk)
        
        //$('.message').html(`<span class="message danger">Ops! Encontramos um problema! <br> Por favor, verifique as entradas e tente novamente.</span>`);

        //$('#math-result tbody').append(renderBody(k,a,b,xk,f(xk), b_a = Math.abs(b - a), fa_fxk));
        animation(k,a,b,xk, fk = f(xk), fa_fxk, b_a = Math.abs(b - a))
        k++;
    }

    // $('.message').html(`<span class="message danger">Ops! O método não converge para a solução.! <br> Por favor, verifique as entradas e tente novamente.</span>`);
    return xk;
}

$('#calc').click(function (e) {
    e.preventDefault();
    clearTable()
    numberLimit = localStorage.getItem('numberLimit') || 25;
    
    switch (localStorage.getItem('method')) {
      case '0':
        setValuesBisseccao()
        break;
      case '1':
        alert('O médoto de Newton ainda está em desenvolvimento!')
        break;
      case '2':
        alert('O médoto de Secante ainda está em desenvolvimento!')
        break;
    
      default:
        alert('O médoto selecionado não foi encontrado!')
        break;
    }
});

function clearTable(){
  $('#math-result tbody').empty();
}

function setValuesBisseccao(){
  const f = x => Math.pow(x,3) - 9*x + 3; //f(x) = x^3 - 9x + 3
  const a = parseFloat(document.getElementById('a_valor').value.replace(",", '.'));
  const b = parseFloat(document.getElementById('b_valor').value.replace(",", '.'));
  const max = parseInt(document.getElementById('mx_iteracao').value);
  const E = parseFloat(document.getElementById('e_precisao').value.replace(",", '.'));//precisao (∈)

  metodoBisseccao(a, b, f, max, E);
}
$('.header-left span').html('Anataniel Diogo');

function animation(k, a, b, xk, fk, fa_fxk, b_a){
    setTimeout(function(){
      $('#math-result tbody').append(renderBody(k, a, b, xk, fk, fa_fxk, b_a));
      scrollDown(k)
    }, 1000 * k)
}

function scrollDown(k) {
    document.body.scrollTop = document.documentElement.scrollTop;
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
}

function renderBody(k, a, b, xk, fk, fa_fxk, b_a){
  var render = `<tr>
      <td>${limitarCasasDecimais(k, numberLimit)}</td>
      <td>${limitarCasasDecimais(a, numberLimit)}</td>
      <td>${limitarCasasDecimais(b, numberLimit)}</td>
      <td>${limitarCasasDecimais(xk, numberLimit)}</td>
      <td>${limitarCasasDecimais(fk, numberLimit)}</td>
      <td>${numberSign(fa_fxk)}</td>
      <td>${limitarCasasDecimais(b_a, numberLimit)}</td>
  </tr>`

  return render
}

function numberSign(number){
    return Math.sign(number) > 0 ? '( + )' : '( - )';
}

function limitarCasasDecimais(numero, casasDecimais) {
    const partes = numero.toString().split('.');
    const parteInteira = partes[0];
    let parteDecimal = partes[1] || '';
  
    if (casasDecimais < parteDecimal.length) {
      parteDecimal = parteDecimal.substr(0, casasDecimais);
    }
  
    return parseFloat(`${parteInteira}.${parteDecimal}`);
  }