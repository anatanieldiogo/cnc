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
    $('.method-info').removeClass('method-info-up');
});

$('#close-settings').click(function (e) { 
    e.preventDefault();
    $('.settings').css('right', '');
});

$('#method-info-toggle').click(function (e) { 
  e.preventDefault();

  $('.settings').css('right', '');
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

var tabspanel = document.querySelectorAll(".panel-content .panel");
var tablepanel = document.querySelectorAll(".table-panel-content .table-panel");
var methodinfopanel = document.querySelectorAll(".method-info-panel-content .method-info-panel");

function tabmenu(menuIndex) {
  
  tabspanel.forEach(function (node) {
      node.style.display = "none";
  })
  tabspanel[menuIndex].style.display = "flex";

  tablepanel.forEach(function (node) {
      node.style.display = "none";
  })
  tablepanel[menuIndex].style.display = "";

  methodinfopanel.forEach(function (node) {
      node.style.display = "none";
  })
  methodinfopanel[menuIndex].style.display = "";

}

if(localStorage.getItem('method') == null || localStorage.getItem('method') == ''){
  localStorage.setItem('method', 0);
  tabmenu(0)
}else{
  tabmenu(localStorage.getItem('method'))

  $('#method option[value="' + localStorage.getItem('method') + '"]').prop('selected', true)

  $('#atual-method').html($('#method option:selected').text())
  $('#atual-method-info').html($('#method option:selected').text())
}

$('#method').change(function (e) { 
  e.preventDefault();
  clearTable()
  localStorage.setItem('method', $(this).val());
  tabmenu($(this).val())
  $('#atual-method').html($('#method option:selected').text())
  $('#atual-method-info').html($('#method option:selected').text())
});



/*[Author] Anataniel Diogo - anatanielmendes10@gmail.com (21-11-2023)*/
