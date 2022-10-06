		$(".em-art-d").click(function(){
			$(this).append('<section class="copied">Copied</section>');
			copyFunction($(this).find('pre').text());
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
