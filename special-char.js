    $(".ch,.ch-2").click(function(){
        $(this).append('<section class="copied">✓</section>');
        copyFunction($(this).find('span,pree').text());
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
    