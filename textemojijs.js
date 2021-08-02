<!--keyboard input type copy script-->

    function myFunction() {
      var copyText = document.getElementById("cartlist");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
    }
    

    <!---click to copy in input box-->

    function CopyToTextarea(el){
    var text = el.textContent;
    var textarea = document.getElementById('cartlist');
    textarea.value = textarea.value + text +'';
  }


	
	
	  /*textareabox copy button */
			function myFunction1() {
			  var copyText = document.getElementById ("cartlist");
			   copyText.select();
			  copyText.setSelectionRange(0, 99999)
			  document.execCommand("copy");
			}
			
			
			
				/*scroll to fixed textarea*/
				$(window).scroll(function(){
  var sticky = $('.textarea-copy'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
			



    /*font-slider*/
    $("#slider").on("input",function () {
            $('.text-faces span').css("font-size", $(this).val() + "px");
    });
      

	/*sticky bottomk ads*/
	var closebtns = document.getElementsByClassName("close");
	var i;
	
	for (i = 0; i < closebtns.length; i++) {
	  closebtns[i].addEventListener("click", function() {
		this.parentElement.style.display = 'none';
	  });
	}
	
	
		/* copy fncn java script  */
		$(".text-faces1").click(function(){
			$(this).append('<section class="copied">Copied</section>');
			copyFunction($(this).find('span').text());
			$(".copied").fadeOut(2000);
		});
		function copyFunction(textvalue) {
							var copyText = document.getElementById("thecopying");
							var textArea = document.createElement("textarea");
							textArea.value = textvalue;
							document.body.appendChild(textArea);
							textArea.select();
							document.execCommand("Copy");
							textArea.remove();
						}
		