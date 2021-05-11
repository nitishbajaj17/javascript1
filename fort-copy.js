
    $(".symbols").click(function(){
        $(this).append('<span class="copied">Copied</span>');
        copyFunction($(this).find('pree').text());
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
