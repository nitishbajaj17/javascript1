
    $('.sym span').click(function(e) {
  var txtarea = $('#cartlist').val();
  var txt = $(e.target).text();
  $('#cartlist').val(txtarea + txt + '\n');
});





    // textareabox copy button
          function myFunction1() {
            var copyText = document.getElementById ("cartlist");
             copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
          }
