/** Setando limitador de caracteres */

if(localStorage.getItem('numberLimit') == null || localStorage.getItem('numberLimit') == ''){
  localStorage.setItem('numberLimit', 25);
}


// var number_limit = document.querySelectorAll('.number_limit input')

// $.each(number_limit, function (indexInArray, valueOfElement) { 
  
// });

$('.number_limit input').click(function (e) { 
  //e.preventDefault();
  //alert(this.value)
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





/*[Author] Anataniel Diogo - anatanielmendes10@gmail.com (21-11-2023)*/
