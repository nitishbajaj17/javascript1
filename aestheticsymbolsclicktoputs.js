<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    $('.sym span').click(function(e) {
  var txtarea = $('#cartlist').val();
  var txt = $(e.target).text();
  $('#cartlist').val(txtarea + txt + '\n');
});


          function myFunction1() {
            var copyText = document.getElementById ("cartlist");
             copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
          }
