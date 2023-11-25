/** Setando limitador de caracteres */

if(localStorage.getItem('numberLimit') == null || localStorage.getItem('numberLimit') == ''){
  localStorage.setItem('numberLimit', 25);
}else{
  $('input[data-val="' + localStorage.getItem('numberLimit') + '"]').prop('checked', true)
}

$('.number_limit input').click(function (e) { 
  localStorage.setItem('numberLimit', this.value);
});

$('#call-settings').click(function (e) { 
    e.preventDefault();
    $('.settings').css('right', 0);
});

$('#close-settings').click(function (e) { 
    e.preventDefault();
    $('.settings').css('right', '');
});

$('#method-info-toggle').click(function (e) { 
  e.preventDefault();

  $('.method-info').toggleClass('method-info-up')
});

/** LIght and dark mode */

let lightMode = localStorage.getItem('lightMode'); 

const enableLightMode = () => {
  document.body.classList.add('light');
  localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
  document.body.classList.remove('light');
  localStorage.setItem('lightMode', null);
}
 
if (lightMode === 'enabled') {
  enableLightMode();
  $('#lighttheme').prop('checked', true);
}else{
  $('#darktheme').prop('checked', true);
}

$('#darktheme').click(function (e) { 
  //e.preventDefault();
  disableLightMode();
});

$('#lighttheme').click(function (e) { 
  //e.preventDefault();
  enableLightMode();
});

// function switchTheme(){
//   lightMode = localStorage.getItem('lightMode'); 
  
//   if (lightMode !== 'enabled') {
//     enableLightMode();
//   } else {  
//     disableLightMode(); 
//   }
// }






/*[Author] Anataniel Diogo - anatanielmendes10@gmail.com (21-11-2023)*/
