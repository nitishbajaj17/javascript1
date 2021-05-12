<script async='async'>
    var palabraGlob="type here";
    
                                          
    var str1="",str2="";
    function anadir_caracter(caracter1,idEditor){var tex5="";  if(document.getElementById(idEditor).selectionStart>-1&&document.getElementById(idEditor).selectionStart<999){f=document.getElementById(idEditor);
                                                                    _ini=f.selectionStart; var inicio = f.value.substr(0, _ini); var fin = f.value.substr(_ini, f.value.length);
                                                                    tex5 = inicio + caracter1 + fin; f.value=tex5; f.selectionStart=_ini+1; f.selectionEnd=_ini+1;  f.focus();
                                                                    }else {tex5=document.getElementById(idEditor).value;  tex5=tex5+caracter1; document.getElementById("text2").value = tex5;}   }
    function eliminar_caracter(idEditor,tipo){tx2=document.getElementById("text2").value;
                                              if(tipo==1){ tx2 = tx2.substring(0, tx2.length - 1); } 
                                              if(tipo==2){ tx2 = tx2.substring(1, tx2.length);}
                                              if(tipo==3){ tx2 ="";  }
                                              document.getElementById("text2").value = tx2;
                                             }
    function mark(campo) { campo.focus(); campo.select();}
    
    function descodificarEntidad(str) {  return str.replace(/&#(\d+);/g, function(match, dec) {    return String.fromCharCode(dec);  });}
    function copyTextDeDiv(idTexto,idmessage){
        var text=document.getElementById(idTexto).innerHTML;
        var id = "el-id-del-textarea"; globIdmessage=idmessage;
        var existsTextarea = document.getElementById(id);
        if(!existsTextarea){ var textarea = document.createElement("textarea");  textarea.id = id;
                             textarea.style.position = "fixed";textarea.style.top = 0; textarea.style.left = 0; textarea.style.width = "1px";        textarea.style.height = "1px";
                             textarea.style.padding = 0;  textarea.style.border = "none";  textarea.style.outline = "none";  textarea.style.boxShadow = "none";  textarea.style.background = "transparent";
                             document.querySelector("body").appendChild(textarea);   existsTextarea = document.getElementById(id);
                           }else{   }
        existsTextarea.value = text; existsTextarea.select();
        try { var status = document.execCommand("copy"); if(!status){ fracaso(); }else{ exito(); }
            } catch (err) {  excepcion(); }
        if(!existsTextarea){document.body.removeChild(existsTextarea);}
    }
    var globIdmessage = "message1";
        
    function copyTextDeInput(idTexto,idmessage){var text=""; text=document.getElementById(idTexto).value;
                                                var id = "el-id-del-textarea"; globIdmessage=idmessage;
                                                var existsTextarea = document.getElementById(id);
        if(!existsTextarea){ var textarea = document.createElement("textarea");  textarea.id = id;
                             textarea.style.position = "fixed";textarea.style.top = 0; textarea.style.left = 0; textarea.style.width = "1px";        textarea.style.height = "1px";
                             textarea.style.padding = 0;  textarea.style.border = "none";  textarea.style.outline = "none";  textarea.style.boxShadow = "none";  textarea.style.background = "transparent";
                             document.querySelector("body").appendChild(textarea);   existsTextarea = document.getElementById(id);
                           }
        existsTextarea.value = text; existsTextarea.select();
        try { var status = document.execCommand("copy"); if(!status){ fracaso(idTexto); }else{ exito(idTexto); }
            } catch (err) { excepcion(idTexto); }
        if(!existsTextarea){document.body.removeChild(existsTextarea);}
    }
    
        function insertAfter(dom1,dom2){if(dom1.nextSibling){ dom1.parentNode.insertBefore(dom2,dom1.nextSibling);} else {dom1.parentNode.appendChild(dom2);}}
        function showEdit(idTexto){
            elemento1 = document.createElement("div"); id5=idTexto+"_edit"; inputExist=document.getElementById(id5);
                                   if(!inputExist){elemento1.id = id5; elemento1.innerHTML="<span style=\"float:right;\">";
                                                   elemento2 = document.getElementById(idTexto); elemento2.parentNode.insertBefore(elemento1,elemento2);
                                                   insertAfter(elemento2,elemento1); 
                                                  }
            
                                  }
                       var normal="abcdefghijklmnñopqrstuvwxyz1234567890ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var a1=descodificarEntidad("ａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ1234567890ＡＢＣＤＥＦＧＨＩＪＫＬＭＮñＯＰＱＲＳＴＵＶＷＸＹZ"); /*z*/
    var a2=descodificarEntidad("𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃ñ𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫𝟢𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩Ñ𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵");
    var a3=descodificarEntidad("ɑҌςdeԲɢɦiۆkℓოɲñ&#9737;թףгรէนѵωxעŻ1234567890ΔßĊÐ乇ŦGHΙJӃĿMNÑʘPQЯSȚUVWҲYZ");
    var a4=descodificarEntidad("𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷ñ𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃1234567890𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝Ñ𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩");
    var a5=descodificarEntidad("αвςdєfgнιנкℓмиÑ&#9737;ρףяѕтυνωאָуz1234567890&#9708;ß&#8373;DモFGHエJKLMNÑ&#9775;PQRSTUVWXYZ&#10008;乙");
    var a6=descodificarEntidad("𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯ñ𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻1234567890𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕Ñ𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡");
    var a7=descodificarEntidad("ＡＢＣＤＥＦＧＨＩＪＫＬＭＮñＯＰＱＲＳＴＵＶＷＸＹZ1234567890ＡＢＣＤＥＦＧＨＩＪＫＬＭＮñＯＰＱＲＳＴＵＶＷＸＹZ");/*z*/
    var a8=descodificarEntidad("𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟1234567890𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅");
    var a9=descodificarEntidad("aвcdeғgнιjĸlмnÑσpqrѕтυvwхyz1234567890&#9650;ß&#9790;DミFGHエJKLMNÑ&#10050;PQRSTUVWXYZ&#9587;乙");
    var a10=descodificarEntidad("𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝Ñ𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩1234567890𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝Ñ𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩");
    var a11=descodificarEntidad("αвҫժєƒgнιנкℓмηñ&#8855;ρqяѕтυνωχуz1234567890&#8710;ß&#9790;DミFGHエJKLMNÑ&#13025;PQRSTUVWXYZ&#9587;乙");
    var a12=descodificarEntidad("𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏ñ𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛1234567890𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵Ñ𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁");
    var a13=descodificarEntidad("ABCÐEքGħIJҞŁMNñØPQRֆŦUV&#8361;ЖҰ乙1234567890ABCÐEքGħIJҞŁMNñØPQRֆŦUV&#8361;ЖҰ乙");/*z*/
    var a14=descodificarEntidad("𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫ñ𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷1234567890𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑Ñ𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ");
    var a15=descodificarEntidad("ɑɓcdεfgんﻨjкɭm&#8745;Ñ&#9762;ｱqrstuϑwﾒyz1234567890ﾑ乃ＣＤ乇ｷＧＨﾉﾌズﾚＭ刀Ñ&#13025;PQ尺丂ｲひV&#8361;&#9587;ﾘ乙");
    var a16=descodificarEntidad("𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫ñ𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫ñ𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷");
    var a17=descodificarEntidad("αв&#162;&#8706;єfgнιנкℓмиÑσρqяѕтυνωχуz1234567890αв&#162;&#8706;єfgнιנкℓмиÑσρqяѕтυνωχуz");
    var a18=descodificarEntidad("𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕Ñ𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡1234567890𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕Ñ𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡");
    var a19=descodificarEntidad("aьζdҾʧghﻨʝқŁʍnñʘpգrㄅʇひvwＸyչ1234567890aьζdҾʧghﻨʝқŁʍnñʘpգrㄅʇひvwＸyչ");
    var a20=descodificarEntidad("𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵Ñ𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁1234567890𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵Ñ𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁");
    var a21=descodificarEntidad("คც(ծҾfgんﻨʝКլოՈÑʘթգ尺丂Ŧuשωﾒฯ乙1234567890คც(ծҾfgんﻨʝКլოՈÑʘթգ尺丂Ŧuשωﾒฯ乙");
    var a22=descodificarEntidad("ДßĊÐξFĠĦłjҚĿMnЙØPףЯ丂tŲעΨЖУ乙1234567890ДßĊÐξFĠĦłjҚĿMnЙØPףЯ丂tŲעΨЖУ乙");/*z*/
    var a23=descodificarEntidad("მþcÐєζgΗιɟkɭmnÑΘpØҐŠτμשwχyշ1234567890ДßĊÐξFĠĦłjҚĿMnЙØPףЯ丂tŲעΨЖУ乙");
    var a24=descodificarEntidad("ДЪCԁҾԲցんіڙқԼறהñፀթգЯ丂Ҭμνயﾒฯｚ1234567890ДЪCԁҾԲցんіڙқԼறהñፀթգЯ丂Ҭμνயﾒฯ"); /*z*/
    var a25=descodificarEntidad("Aþcծeƒﻮዞιʝʞረmɲñoթq尺丂Ŧひʋω&#9587;ﾘչ1234567890A乃cծeƒﻮዞﻨʝʞረmɲñoթq尺丂Ŧひʋω&#9587;ﾘչ");
    var a26=descodificarEntidad("𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅1234567890𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅");
    //var a27=descodificarEntidad("მჩርძєԲġhﻨქκlოnЙፀρგΓsŦυשwჯყz1234567890მßＣძ乇ԲĢhﻨქκlო仈ЙፀρგΓჰŦυשwჯყz");
    var a27=descodificarEntidad("🔺ᗷᑕᗪEᖴGᕼ📍&#9730;Kᒪ&#9807;ᑎÑ🍊ᑭᑫᖇ💰🍄ᑌ🔰ᗯ&#9874;Yᘔ1234567890🔺ᗷᑕᗪEᖴGᕼ📍&#9730;Kᒪ&#9807;ᑎÑ🍊ᑭᑫᖇ💰🍄ᑌ🔰ᗯ&#9874;Yᘔ");/*z*/
    var a28=descodificarEntidad("𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧ñ𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗0𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍Ñ𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙");
    var a29=descodificarEntidad("🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝ñ🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩1234567890🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝ñ🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩");
    var a30=descodificarEntidad("𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩Ñ𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫𝟢𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩Ñ𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵");
    var a31=descodificarEntidad("ɑɓㄷɗeʃɡɦɪɟズɭʍηñʘρφʀรʇuϑШχվʑ1234567890&#9709;ß&#9790;DミFGHIJKLMNÑ&#13025;PQRSTUVWXYZ&#10007;乙");
    var a32=descodificarEntidad("𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻ñ𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡Ñ𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭");
    var a33=descodificarEntidad("ɑъ८ժεքցհﻨյĸlოռñօթզгรէսνաＸկչ1234567890aъ८ժεքցհﻨյĸlოռñօթզгรէսνաＸկչ");
    var a34=descodificarEntidad("&#9424;&#9425;&#9426;&#9427;&#9428;&#9429;&#9430;&#9431;&#9432;&#9433;&#9434;&#9435;&#9436;&#9437;&#9437;&#9438;&#9439;&#9440;&#9441;&#9442;&#9443;&#9444;&#9445;&#9446;&#9447;&#9448;&#9449;&#9312;&#9313;&#9314;&#9315;&#9316;&#9317;&#9318;&#9319;&#9320;0&#9398;&#9399;&#9400;&#9401;&#9402;&#9403;&#9404;&#9405;&#9406;&#9407;&#9408;&#9409;&#9410;&#9411;Ñ&#9412;&#9413;&#9414;&#9415;&#9416;&#9417;&#9418;&#9419;&#9420;&#9421;&#9422;&#9423;");
    var a35=descodificarEntidad("𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕÑ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕÑ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ");
    var a36=descodificarEntidad("𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣ñ𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯1234567890𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉Ñ𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕");
    var a37=descodificarEntidad("ﻪbcժεfﻮʰiʲズlოⁿñºթզ尺รէนשʷﾒվz&#8321;&#8322;&#8323;&#8324;&#8325;&#8326;&#8328;&#8329;&#8320;0abcժεfﻮʰ&#869;ʲズlოⁿñºթզ尺รէนשʷﾒվz");
    var a38=descodificarEntidad("𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛ñ𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧1234567890𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁Ñ𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍");
    var a39=descodificarEntidad("ḀßČÐεｷgɦﻨjズℓოɲñʘթq尺รŦนשωﾒУչ1234567890ḀßČÐεｷﻮɦﻨjズℓოɲñʘթq尺รŦนשωﾒվչ");
    var a40=descodificarEntidad("𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗ñ𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿𝟶𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽Ñ𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉");
    var a41=descodificarEntidad("48(d3f9h!jk1றnÑ0pqr57uvwxy2123456789048(d3f9h!jk1றnÑ0pqr57uvwxy2");
    var a42=descodificarEntidad("𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟ñ𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕÑ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ");
    var a43=descodificarEntidad("ค๒ς๔єŦﻮђเןкl๓ภñoקσгรtยשฬאyz1234567890ค๒ς๔єŦﻮђเןкl๓ภÑoקσгรtยשฬץאz");
    var a44=descodificarEntidad("ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ&#5741;Yᘔ1234567890ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ&#5741;Yᘔ");
    var a45=descodificarEntidad("ค๒čdƎƒﻮんijƘℓmɲñƠÞգ尺ֆtƯvШXฯչ1234567890ค๒čdƎƒﻮんijƘℓmɲñƠÞգ尺ֆtƯvШXฯչ");
    var a46=descodificarEntidad("ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴÑᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ1234567890ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴÑᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ");
    var a47=descodificarEntidad("ለbርծΣfցዠijkረወռЙፀpզշsէሀvሠxվ乙1234567890ለbርծΣfցዠijkረወռЙፀpզշsէሀvሠxվ乙");
    var a48=descodificarEntidad("丹乃ㄈのモチＧＨ工ﾌ长乚爪刀Ñ&#12295;尸Ｑ尺己丁ひＶ山乂丫乙1234567890丹乃ㄈのモチＧＨ工ﾌ长乚爪刀Ñ&#12295;尸Ｑ尺己丁ひＶ山乂丫乙");
    var a49=descodificarEntidad("ค๖cժēfﻮhiวkl๓ɲñop๑rŞtนงωxฯ乙1234567890ค๖cժēfﻮhiวkl๓ɲñop๑rŞtนงωxฯ乙");
    var a50=descodificarEntidad("ɐqɔpǝɟƃɥıɾʞlɯuuodbɹsʇnʌʍxʎz𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫𝟢ɐqɔpǝɟƃɥıɾʞlɯuuodbɹsʇnʌʍxʎz");
    var a51=descodificarEntidad("ÁßČĎĔŦĞĤĨĴĶĹMŃÑŐPQŔŚŤÚVŴЖŶŹ1234567890ÁßČĎĔŦĞĤĨĴĶĹMŃÑŐPQŔŚŤÚVŴЖŶŹ");
    var a52=descodificarEntidad("ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺÑᴼᴾǫᴿˢᵀᵁⱽᵂˣʸᶻ1234567890ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺÑᴼᴾǫᴿˢᵀᵁⱽᵂˣʸᶻ");
    var a53=descodificarEntidad("&#8371;&#3647;&#8373;ĐɆ&#8355;&#8370;ⱧłJ&#8365;Ⱡ&#8357;&#8358;ÑØ&#8369;QⱤ&#8372;&#8366;ɄV&#8361;ӾɎⱫ1234567890&#8371;&#3647;&#8373;ĐɆ&#8355;&#8370;ⱧłJ&#8365;Ⱡ&#8357;&#8358;ÑØ&#8369;QⱤ&#8372;&#8366;ɄV&#8361;ӾɎⱫ");
    var a54=descodificarEntidad("ᴀʙᴄᴅᴇҒɢʜɪᴊᴋʟᴍNÑᴏᴘQʀsᴛᴜᴠᴡxʏᴢ1234567890ᴀʙᴄᴅᴇҒɢʜɪᴊᴋʟᴍNÑᴏᴘQʀsᴛᴜᴠᴡxʏᴢ");
    var a55=descodificarEntidad("αвc&#8706;εғgнιנкℓмηñσρqяsтυvωxүz1234567890αвc&#8706;εғgнιנкℓмηñσρqяsтυvωxүz");
    var a56=descodificarEntidad("АБCДЄFGHЇJКГѪ&#8358;ЙѲPФЯ$TЦѴШЖЧЗ1234567890АБCДЄFGHЇJКГѪ&#8358;ЙѲPФЯ$TЦѴШЖЧЗ");
    var a57=descodificarEntidad("ꍏ&#9837;&#9790;&#9687;&#8364;Ϝ&#10081;&#9796;&#9815;&#9834;ϰ&#8627;&#9812;&#9835;Ñ&#8857;ρ&#9773;&#9736;&#9442;T&#9739;&#10003;ω&#8984;&#9791;&#9761;1234567890ꍏ&#9837;&#9790;&#9687;&#8364;Ϝ&#10081;&#9796;&#9815;&#9834;ϰ&#8627;&#9812;&#9835;Ñ&#8857;ρ&#9773;&#9736;&#9442;T&#9739;&#10003;ω&#8984;&#9791;&#9761;");
    var a58=descodificarEntidad("ΩbҫժҼҒgӈأjҠӀMnӣoҎգԻֆҭմvωҲұչ1234567890ΩbҫժҼҒﻮӈأjҠӀMnӣoҎգԻֆҭմvωҲұչ");
    var a59=descodificarEntidad("ǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐ1234567890ǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐ");
    var a60=descodificarEntidad("åß&#162;Ðê&#163;ghïjklmññðþqr&#167;&#8224;µvwx&#165;z1234567890ÄßÇÐÈ&#163;GHÌJKLMñÑÖþQR&#167;&#8224;ÚVW&#215;&#165;Z");
    var a61=descodificarEntidad("&#9650;ɓςdeቱgիiժズℓጦnñ&#9787;թqгsէนשwxуՁ1234567890&#9650;B&#9770;D乇FGHIJKLMNÑ&#9673;PQ尺STU&#8730;W&#10008;YZ");
    var a62=descodificarEntidad("åЪċđêfĝĥїĵκļறήñ&#9786;pqŕśťϋvẅχŷž1234567890ÂßĈĎÊFĜĤエĴЌĹMNÑ&#9681;PQŘŚŤÛVŴҲŶŽ&#10008;乙");
                    var a63=descodificarEntidad("ɑɓɔɗəʃɡɦɪɟズɭʍήñʘρφʀรʇϋϑШχվʑ1234567890ɑɓɔɗəʃɡɦɪɟズɭʍήñʘρφʀรʇϋϑШχվʑ");var a64=descodificarEntidad("🔼🅱🅲🅳🅴🅵🅶🈂ℹ🅹🅺🅻&#9410;🅽🅽🔵🅿🆀🆁&#9889;&#10013;🆄🔽🆆🔀🆈🆉1234567890🔼🅱🅲🅳🅴🅵🅶🅷ℹ🅹🅺🅻&#9410;🅽🅽🔵🅿🆀🆁&#9889;🆃🆄🔽🆆🔀🆈🆉");/*z*/
    var a65=descodificarEntidad("🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿1234567890🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿");/*z*/
    var a66=descodificarEntidad("&#9650;🅱🅲🅳🌜🅵🅶&#9811;ℹ🅹🅺🅻&#9807;&#9809;&#9809;&#9210;🅿🆀🆁💲🇹&#9934;🔽🆆&#10060;🆈🆉1234567890🔺🅱🌜🅳🅴🅵🅶&#9811;ℹ🅹🅺🅻&#9807;&#9809;&#9809;&#11093;🅿🆀🆁💲🇹&#9934;🔽🆆&#10060;🆈🆉");/*z*/
    //var a670=descodificarEntidad("ᗩᗷᑕᗪEᖴGᕼ🍼🧎KᒪᗰᑎÑ🐵ᑭᑫᖇ💰🍄ᑌ🔰ᗯ&#5741;🤘ᘔ1234567890ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ&#5741;Yᘔ");
    //var a60=descodificarEntidad("&#867;b&#872;&#873;&#868;fg&#874;&#869;jkl&#875;nñ&#870;pq&#876;s&#877;&#878;vw&#879;yz1234567890&#867;b&#872;&#873;&#868;fg&#874;&#869;jkl&#875;nñ&#870;pq&#876;s&#877;&#878;vw&#879;yz");
    
    var cadZ=descodificarEntidad("[&#773;&#818;**]**&#821;**&#823;**&#822;**&#824;**&#820;**&#863;**&#818;**&#819;**&#866;**&#828;**&#857;**&#859;**&#784;&#776;**&#851;&#829;**A**A**A**A*");
    var cadPar=descodificarEntidad("&#10023;&#12304;**&#12305;&#10023;**&#10025;&#8902;**&#8902;&#10025;**🏆&#9813;&#12304;**&#12305;&#9813;🏆**🍎🎀**🎀🍎**😝&#9757;**&#9757;😝**🔥🔥**🔥🔥**&#10023;😍&#10023;**&#10023;😍&#10023;**🎬🎧🎵💕**💕🎵🎧🎬**🏆&#9917;&#12304;**&#12305;&#9917;🏆**🏆🏀&#12304;**&#12305;🏀🏆**🏆🎱&#12304;**&#12305;🎱🏆**&#9995;&#10084;&#65039;&#12304;**&#12305;&#10084;&#65039;🤚**🎶🎵😍**😍🎵🎶**&#65039;😪💔&#8631;**&#8630;💔😪&#65039;**💔🍻🎤**🎤🍻💔**🤑💰**💰🤑**&#9918;&#9889;**&#9889;&#9918;**&#9752;&#9728;&#12304;**&#12305;&#9728;&#9752;**&#10023;&#9996;&#12304;**&#12305;&#9996;&#10023;**&#9881;&#9874;&#12304;**&#12305;&#9874;&#9881;**&#10023;&#9876;&#12304;**&#12305;&#9876;&#10023;**&#9939;&#9939;&#12304;**&#12305;&#9939;&#9939;**&#9878;&#12304;**&#12305;&#9878;**&#9928;&#9748;&#12304;**&#12305;&#9748;&#9928;");
    var cadUno=descodificarEntidad("🎬🎧🎵💕👍**😍🎵🎵🎶**🔊🔊🎶🎶🎶🎧🎧**💯👌**🎹🎶🎸&#10084;**😍😍😗**📀🏅🏅🏅🏅**😍🤗😘**🎤🍻💔**&#9917;🏆**📢🎤🎼**&#10084;&#65039;😪💔**😎🎧🎼🎵");
    var vecZ=cadZ.split("**");
    var parX=cadPar.split("**");
    var unoX=cadUno.split("**");
    
    var ad1=descodificarEntidad("f&#12304;*-*&#12305;f##f&#8902;*-*&#8902;f##f🎀*-*🎀f##f&#9757;*-*&#9757;f##🔥f*-*f🔥##😍f*-*f😍##f*-*f##彡f[*-*]fミ##&#9756;f&#9758;&#12304;*-*&#12305;&#9756;f&#9758;##&#8902;f&#8902;&#8811;*-*&#8810;&#8902;f&#8902;##&#8902;f&#8902;&#12299;*-*&#12298;&#8902;f&#8902;##&#10038;f&#10038;*-*&#10038;f&#10038;##f&#65124;&#65124;*-*&#65125;&#65125;f##f&#65288;&#65113;*-*&#65114;&#65289;f##f&#9580;&#9580;&#9580;*-*&#9580;&#9580;&#9580;f##.&#9829;.*-*.&#9829;.##f&#12302;*-*&#12303;f##&#9825;&#3858;f*-*f&#3858;&#9825;##&#9472;&#9552;f*-*f&#9552;&#9472;##f&#8600;&#8600;*-*&#8601;&#8601;f##f&#10023;&#12299;*-*&#12298;&#10023;f##f&#187;&#187;*-*&#171;&#171;f##f&#12308;&#65117;*-*&#65118;&#12309;f##&#9562;&#187;f&#171;&#9565;*-*&#9562;&#187;f&#171;&#9565;##&#9581;&#9472;f&#9472;&#9582;*-*&#9581;&#9472;f&#9472;&#9582;##f&#9658;*-*&#9668;f##f&#9789;*-*&#9790;f##&#9556;f&#9552;*-*&#9552;f&#9559;");
    var ad2=descodificarEntidad("&#10025;#&#10048;#&#10023;#&#10022;#&#10025;#&#10031;#&#9679;#ღ#&#9733;#&#9825;#&#9786;#&#9757;#&#8226;#&#10047;#&#10084;#&#10083;#&#13025;#&#9829;#&#10086;#&#9812;#&#9813;#&#9818;#&#9819;#&#10018;#&#9831;#&#9826;#&#9828;#&#9824;#&#9830;#&#9787;#&#10026;#&#10027;#&#10032;#&#10028;#&#8900;#&#9671;#&#10070;#&#9733;#&#10023;#&#10023;#&#10023;#&#9825;#&#9825;#&#9825;#&#9728;#&#9730;#&#9816;#&#9788;");
    var ad1V=ad1.split("##");
    var ad2V=ad2.split("#");
      
     
      function ver2(idEditor){ var text3=document.getElementById(idEditor).value; document.getElementById("domz").innerHTML='<div id="dom1"></div>'; domGlob1=2; domGlob2=1;
      var userEdita=1;
      var ing = text3; if("type here"==ing){ing="";userEdita="0"; }
      var t1 = ""; var t2 = ""; var t3 = ""; var t4 = ""; var t5 = ""; var t6 = ""; var t7 = ""; var t8 = "";
      var t9 = ""; var t10 = ""; var t11 = ""; var t12 = ""; var t13 = "";  var t14 = ""; var t15 = "";var t16 = "";var t17 = "";var t18 = "";var t19 = "";var t20 = "";var t21 = "";var t22 = "";var t23 = "";var t24 = "";var t25 = "";var t26 = "";var t27 = "";var t28 = "";
      var t29 = "";var t30 = "";var t31 = "";var t32 = "";var t33 = "";var t34 = "";var t35 = "";var t36 = "";var t37 = "";var t38 = "";var t39 = "";var t40 = "";var t41 = "";var t42 = "";var t43 = "";var t44 = "";var t45 = "";var t46 = ""; var t47 = "";var t48 = "";var t49 = "";
      var t50 = "";var t51 = "";var t52 = "";var t53 = "";var t54 = "";var t55 = "";var t56 = "";var t57 = "";var t58 = "";var t59 = "";var t60 = "";var t61 = "";
      var t62 = "";var t63 = ""; var t64 = "";var t65 = "";var t66 = "";
      var n = ing;  if (ing.length==0) return; 
      for(i=0; i<n.length; i++) {
       var c=n.charAt(i);
       for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
       if (j<normal.length) { t1+=a1.charAt(j);} else { t1+=c; } 
       if (j<normal.length) { if(Array.from(a2)[j])t2+=Array.from(a2)[j]; } else { t2+=c; } 
       if (j<normal.length) { t3+=a3.charAt(j); } else { t3+=c; } 
       if (j<normal.length) { if(Array.from(a4)[j])t4+=Array.from(a4)[j]; } else { t4+=c; } 
       if (j<normal.length) { t5+=a5.charAt(j); } else { t5+=c; } 
       if (j<normal.length) { if(Array.from(a6)[j])t6+=Array.from(a6)[j]; } else { t6+=c; } 
       if (j<normal.length) { t7+=a7.charAt(j); } else { t7+=c; } 
       if (j<normal.length) { if(Array.from(a8)[j])t8+=Array.from(a8)[j]; } else { t8+=c; } 
       if (j<normal.length) { t9+=a9.charAt(j); } else { t9+=c; } 
       if (j<normal.length) { if(Array.from(a10)[j])t10+=Array.from(a10)[j]; } else { t10+=c; } 
       if (j<normal.length) { t11+=a11.charAt(j); } else { t11+=c; } 
       if (j<normal.length) { if(Array.from(a12)[j])t12+=Array.from(a12)[j]; } else { t12+=c; } 
       if (j<normal.length) { t13+=a13.charAt(j); } else { t13+=c; } 
       if (j<normal.length) { if(Array.from(a14)[j])t14+=Array.from(a14)[j]; } else { t14+=c; }    
                            if (j<normal.length) { t15+=a15.charAt(j); } else { t15+=c; }    
                            if (j<normal.length) { if(Array.from(a16)[j])t16+=Array.from(a16)[j]; } else { t16+=c; }    
                            if (j<normal.length) { t17+=a17.charAt(j); } else { t17+=c; }
                            if (j<normal.length) { if(Array.from(a18)[j])t18+=Array.from(a18)[j]; } else { t18+=c; }
                            if (j<normal.length) { t19+=a19.charAt(j); } else { t19+=c; }
                            if (j<normal.length) { if(Array.from(a20)[j])t20+=Array.from(a20)[j]; } else { t20+=c; }
                            if (j<normal.length) { t21+=a21.charAt(j); } else { t21+=c; }
                            if (j<normal.length) { if(Array.from(a22)[j])t22+=Array.from(a22)[j]; } else { t22+=c; }
                            if (j<normal.length) { t23+=a23.charAt(j); } else { t23+=c; }
                            if (j<normal.length) { if(Array.from(a24)[j])t24+=Array.from(a24)[j]; } else { t24+=c; }
                            if (j<normal.length) { t25+=a25.charAt(j); } else { t25+=c; }
                            if (j<normal.length) { if(Array.from(a26)[j])t26+=Array.from(a26)[j]; } else { t26+=c; }
                            
                            if (j<normal.length) { if(Array.from(a27)[j])t27+=Array.from(a27)[j]; } else { t27+=c; }   
       if (j<normal.length) { if(Array.from(a28)[j])t28+=Array.from(a28)[j]; } else { t28+=c; }
       if (j<normal.length) { if(Array.from(a29)[j])t29+=Array.from(a29)[j]; } else { t29+=c; }
       if (j<normal.length) { if(Array.from(a30)[j])t30+=Array.from(a30)[j]; } else { t30+=c; }
       if (j<normal.length) { if(Array.from(a31)[j])t31+=Array.from(a31)[j]; } else { t31+=c; }
       if (j<normal.length) { if(Array.from(a32)[j])t32+=Array.from(a32)[j]; } else { t32+=c; }
       if (j<normal.length) { if(Array.from(a33)[j])t33+=Array.from(a33)[j]; } else { t33+=c; }
       if (j<normal.length) { if(Array.from(a34)[j])t34+=Array.from(a34)[j]; } else { t34+=c; }
       if (j<normal.length) { if(Array.from(a35)[j])t35+=Array.from(a35)[j]; } else { t35+=c; }
       if (j<normal.length) { if(Array.from(a36)[j])t36+=Array.from(a36)[j]; } else { t36+=c; }
       if (j<normal.length) { if(Array.from(a37)[j])t37+=Array.from(a37)[j]; } else { t37+=c; }
       if (j<normal.length) { if(Array.from(a38)[j])t38+=Array.from(a38)[j]; } else { t38+=c; }
       if (j<normal.length) { if(Array.from(a39)[j])t39+=Array.from(a39)[j]; } else { t39+=c; }
       if (j<normal.length) { if(Array.from(a40)[j])t40+=Array.from(a40)[j]; } else { t40+=c; }
       if (j<normal.length) { if(Array.from(a41)[j])t41+=Array.from(a41)[j]; } else { t41+=c; }
       if (j<normal.length) { if(Array.from(a42)[j])t42+=Array.from(a42)[j]; } else { t42+=c; }
       if (j<normal.length) { if(Array.from(a43)[j])t43+=Array.from(a43)[j]; } else { t43+=c; }
       if (j<normal.length) { if(Array.from(a44)[j])t44+=Array.from(a44)[j]; } else { t44+=c; }
       if (j<normal.length) { if(Array.from(a45)[j])t45+=Array.from(a45)[j]; } else { t45+=c; }
       if (j<normal.length) { if(Array.from(a46)[j])t46+=Array.from(a46)[j]; } else { t46+=c; }
       if (j<normal.length) { if(Array.from(a47)[j])t47+=Array.from(a47)[j]; } else { t47+=c; }
       if (j<normal.length) { if(Array.from(a48)[j])t48+=Array.from(a48)[j]; } else { t48+=c; }
       if (j<normal.length) { if(Array.from(a49)[j])t49+=Array.from(a49)[j]; } else { t49+=c; }
       if (j<normal.length) { if(Array.from(a50)[j])t50+=Array.from(a50)[j]; } else { t50+=c; }
       if (j<normal.length) { if(Array.from(a51)[j])t51+=Array.from(a51)[j]; } else { t51+=c; }
       if (j<normal.length) { if(Array.from(a52)[j])t52+=Array.from(a52)[j]; } else { t52+=c; }
       if (j<normal.length) { if(Array.from(a53)[j])t53+=Array.from(a53)[j]; } else { t53+=c; }
       if (j<normal.length) { if(Array.from(a54)[j])t54+=Array.from(a54)[j]; } else { t54+=c; }
       if (j<normal.length) { if(Array.from(a55)[j])t55+=Array.from(a55)[j]; } else { t55+=c; }
       if (j<normal.length) { if(Array.from(a56)[j])t56+=Array.from(a56)[j]; } else { t56+=c; }
       if (j<normal.length) { if(Array.from(a57)[j])t57+=Array.from(a57)[j]; } else { t57+=c; }
       if (j<normal.length) { if(Array.from(a58)[j])t58+=Array.from(a58)[j]; } else { t58+=c; }
       if (j<normal.length) { if(Array.from(a59)[j])t59+=Array.from(a59)[j]; } else { t59+=c; }
       if (j<normal.length) { if(Array.from(a60)[j])t60+=Array.from(a60)[j]; } else { t60+=c; }
       if (j<normal.length) { if(Array.from(a61)[j])t61+=Array.from(a61)[j]; } else { t61+=c; }
       if (j<normal.length) { if(Array.from(a62)[j])t62+=Array.from(a62)[j]+" "; } else { t62+=c; }
       if (j<normal.length) { if(Array.from(a63)[j])t63+=Array.from(a63)[j]+" "; } else { t63+=c; }
       if (j<normal.length) { if(Array.from(a64)[j])t64+=Array.from(a64)[j]+" "; } else { t64+=c; }
       if (j<normal.length) { if(Array.from(a65)[j])t65+=Array.from(a65)[j]+" "; } else { t65+=c; }
       if (j<normal.length) { if(Array.from(a66)[j])t66+=Array.from(a66)[j]+" "; } else { t66+=c; }
                        
       }
      
      
      
                                               if(idEditor=="text1")document.getElementById("text1").value=text3;else if(idEditor=="text2")document.getElementById("text1").value=text3; 
                                               if(typeof Bonitas === "function") {document.getElementById("ediciontexto").value =text3; Bonitas();}
                     document.getElementById("res1").value = descodificarEntidad("&#9472;&#9702;&#10084;&#9702;&#9472;&#65310;")+t1+descodificarEntidad("&#65308;&#9472;&#9702;&#10084;&#9702;&#9472;");document.getElementById("res2").value = descodificarEntidad("彡&#10084;[")+t2+descodificarEntidad("]&#10084;ミ");document.getElementById("res3").value = descodificarEntidad("&#10023;&#9825;&#10023;")+t3+descodificarEntidad("&#10023;&#9825;&#10023;");document.getElementById("res4").value = descodificarEntidad("&#9756;&#10084;&#9758;&#12304;")+t4+descodificarEntidad("&#12305;&#9756;&#10084;&#9758;");document.getElementById("res5").value = descodificarEntidad("&#9552;&#8902;&#9829;&#8902;&#9552;&#8811;")+t5+descodificarEntidad("&#8810;&#9552;&#8902;&#9829;&#8902;&#9552;");document.getElementById("res6").value = descodificarEntidad("&#8902;&#9825;&#8902;&#12299;")+t6+descodificarEntidad("&#12298;&#8902;&#9825;&#8902;");document.getElementById("res7").value = descodificarEntidad("&#9473;&#9829;&#9473;&#8811;")+t7+descodificarEntidad("&#8810;&#9473;&#9829;&#9473;");document.getElementById("res8").value = descodificarEntidad("&#9825;&#9702;&#9702;&#8811;")+t8+descodificarEntidad("&#8810;&#9702;&#9702;&#9825;");document.getElementById("res9").value = descodificarEntidad("&#10023;&#10084;&#10023;")+t9+descodificarEntidad("&#10023;&#10084;&#10023;");document.getElementById("res10").value = descodificarEntidad("&#3844;ᶦᶰ&#9829;")+t10+descodificarEntidad("&#4048;");document.getElementById("res11").value = descodificarEntidad("&#9702;&#10083;&#9702;&#12304;")+t11+descodificarEntidad("&#12305;&#9702;&#10083;&#9702;");document.getElementById("res12").value = descodificarEntidad("&#9825;&#12298;")+t12+descodificarEntidad("&#12299;&#9825;");document.getElementById("res13").value = descodificarEntidad("&#9829;&#65124;&#65124;")+t13+descodificarEntidad("&#65125;&#65125;&#9829;");document.getElementById("res14").value = descodificarEntidad("&#9756;&#9829;&#9758;")+t14+descodificarEntidad("&#9756;&#9829;&#9758;");document.getElementById("res15").value = descodificarEntidad("&#9825;&#9644;&#9688;ıl|&#9608;[")+t15+descodificarEntidad("]&#9608;|lı&#9688;&#9644;&#9825;");document.getElementById("res16").value = descodificarEntidad("&#9825;&#60;~")+t16+descodificarEntidad("~&#62;&#9825;");document.getElementById("res17").value = descodificarEntidad("&#9829;[[[&#9658;")+t17+descodificarEntidad("&#9668;]]]&#9829;");document.getElementById("res18").value = descodificarEntidad("&#9825;&#9617;&#9618;&#9619;")+t18+descodificarEntidad("&#9619;&#9618;&#9617;&#9825;");document.getElementById("res19").value = descodificarEntidad("&#8226;&#183;.&#183;&#8226;&#10084;&#8226;&#183;.&#183;&#8226;")+t19+descodificarEntidad("&#8226;&#183;.&#183;&#8226;&#10084;&#8226;&#183;.&#183;&#8226;");document.getElementById("res20").value = descodificarEntidad("&#9829;&#65288;&#65113;")+t20+descodificarEntidad("&#65114;&#65289;&#9829;");document.getElementById("res21").value = descodificarEntidad("&#10084;&#9580;&#9580;&#9580;")+t21+descodificarEntidad("&#9580;&#9580;&#9580;&#10084;");document.getElementById("res22").value = descodificarEntidad("&#8226;&#9829;&#8226; &#9756;")+t22+descodificarEntidad("&#9758; &#8226;&#9829;&#8226;");document.getElementById("res23").value = descodificarEntidad("&#9829;&#8255;&#9829;&#10047;")+t23+descodificarEntidad("&#10047;&#9829;&#8255;&#9829;");document.getElementById("res24").value = descodificarEntidad("&#180;*&#8226;.&#184;*&#8226;.&#184;&#9829;")+t24+descodificarEntidad("&#9829;&#184;.&#8226;*&#180;&#184;.&#8226;*&#180;");document.getElementById("res25").value = descodificarEntidad("&#9734;.&#9417;&#9428; &#9398;&#9436;&#9438;.&#9829;")+t25+descodificarEntidad("&#9829;.&#9417;&#9428; &#9414;&#9444;&#9432;&#9428;&#9441;&#9438;.&#9734;");document.getElementById("res26").value = descodificarEntidad("&#9552;.&#9829;.&#9552; ")+t26+descodificarEntidad(" &#9552;.&#9829;.&#9552;");document.getElementById("res27").value = descodificarEntidad("&#039;&#183;.&#184;&#9829;&#184;.&#183;&#039;")+t27+descodificarEntidad("&#039;&#183;.&#184;&#9829;&#184;.&#183;&#039;");document.getElementById("res28").value = descodificarEntidad("&#9825;&#8256;&#10167;")+t28+descodificarEntidad("&#10169;&#8256;&#9825;");document.getElementById("res29").value = descodificarEntidad("(=&#039;o&#039;=).&#9829;.")+t29+descodificarEntidad(".&#9829;.");document.getElementById("res30").value = descodificarEntidad("&#9734;*&#180;&#168;`*&#9829;")+t30+descodificarEntidad("&#9829;*&#180;&#168;`*&#9734;");document.getElementById("res31").value = descodificarEntidad("&#184;.&#183;&#9829;&#184;.&#183;&#9829;(")+t31+descodificarEntidad(")&#9829;&#183;.&#184;&#9829;&#183;.&#184;");document.getElementById("res32").value = descodificarEntidad("&#10084;&#65039;&#10032;")+t32+descodificarEntidad("&#10032;&#10084;&#65039;");document.getElementById("res33").value = descodificarEntidad("&#183;.&#184;&#184;.&#8226;&#9829;&#8226;")+t33+descodificarEntidad("&#8226;&#9829;&#8226;.&#184;&#184;.&#183;");document.getElementById("res34").value = descodificarEntidad("(&#9681;&#9821;&#9681;)&#10084;&#65288;&#65113;")+t34+descodificarEntidad("&#65114;&#65289;&#10084;");document.getElementById("res35").value = descodificarEntidad("&#9581;&#9472;&#9825;&#9472;&#9582;")+t35+descodificarEntidad("&#9581;&#9472;&#9825;&#9472;&#9582;");document.getElementById("res36").value = descodificarEntidad("&#3900;&#3900;&#65279;&#9829;")+t36+descodificarEntidad("&#9829;&#3901;&#3901;");document.getElementById("res37").value = descodificarEntidad("&#9829;&#8226;&#8226;&#8811;")+t37+descodificarEntidad("&#8810;&#8226;&#8226;&#9829;");document.getElementById("res38").value = descodificarEntidad("ε٨&#773;&#818;٥&#773;&#818;٦&#773;&#818;&#9825;&#12304;")+t38+descodificarEntidad("&#12305;&#9825;з٨&#773;&#818;٥&#773;&#818;٦&#773;&#818;");document.getElementById("res39").value = descodificarEntidad("&#184;.&#183;&#10085;&#184;.&#183;&#10085;(")+t39+descodificarEntidad(")&#184;.&#183;&#10085;&#184;.&#183;&#10085;");document.getElementById("res40").value = descodificarEntidad("&#9829;&#12302;")+t40+descodificarEntidad("&#12303;&#9829;");document.getElementById("res41").value = descodificarEntidad("&#9825;&#3858;&#9829;")+t41+descodificarEntidad("&#9829;&#3858;&#9825;");document.getElementById("res42").value = descodificarEntidad("&#9825;&#3858;")+t42+descodificarEntidad("&#3858;&#9825;");document.getElementById("res43").value = descodificarEntidad("웃&#10084;유")+t43+descodificarEntidad("웃&#10084;유");document.getElementById("res44").value = descodificarEntidad("&#9472;&#9552;&#9825;")+t44+descodificarEntidad("&#9825;&#9552;&#9472;");document.getElementById("res45").value = descodificarEntidad("&#9562;&#187;&#10084;&#171;&#9565;")+t45+descodificarEntidad("&#9562;&#187;&#10084;&#171;&#9565;");document.getElementById("res46").value = descodificarEntidad("&#9562;&#187;&#9825;")+t46+descodificarEntidad("&#9825;&#171;&#9565;");document.getElementById("res47").value = descodificarEntidad("&#10084;&#8600;&#8600;")+t47+descodificarEntidad("&#8601;&#8601;&#10084;");document.getElementById("res48").value = descodificarEntidad("&#10084;&#65039;&#164;&#180;&#175;`&#164;&#10084;&#65039;")+t48+descodificarEntidad("&#10084;&#65039;&#164;&#180;&#175;`&#164;&#10084;&#65039;");document.getElementById("res49").value = descodificarEntidad("&#9825;&#10023;&#12299;")+t49+descodificarEntidad("&#12298;&#10023;&#9825;");document.getElementById("res50").value = descodificarEntidad("&#9552;&#9825;&#9552;&#8811;")+t50+descodificarEntidad("&#8810;&#9552;&#9825;&#9552;");document.getElementById("res51").value = descodificarEntidad("&#9825;&#187;&#187;")+t51+descodificarEntidad("&#171;&#171;&#9825;");document.getElementById("res52").value = descodificarEntidad("&#9473;&#9702;&#9825;&#9702;&#9473;")+t52+descodificarEntidad("&#9473;&#9702;&#9825;&#9702;&#9473;");document.getElementById("res53").value = descodificarEntidad("&#730;&#9702;&#9825;&#9702;&#730;")+t53+descodificarEntidad("&#730;&#9702;&#9825;&#9702;&#730;");document.getElementById("res54").value = descodificarEntidad("&#183;.&#183;&#180;&#10086;`&#183;.&#183;&#180;&#10086;")+t54+descodificarEntidad("&#10086;`&#183;.&#183;&#180;&#10086;`&#183;.&#183;");document.getElementById("res55").value = descodificarEntidad("&#9829;&#9584;&#9472;&#9582;")+t55+descodificarEntidad("&#9581;&#9472;&#9583;&#9829;");document.getElementById("res56").value = descodificarEntidad("&#9829;&#9581;&#9472;&#9583;")+t56+descodificarEntidad("&#9584;&#9472;&#9582;&#9829;");document.getElementById("res57").value = descodificarEntidad("&#9581;&#9472;&#9829;&#9472;&#9582;")+t57+descodificarEntidad("&#9581;&#9472;&#9829;&#9472;&#9582;");document.getElementById("res58").value = descodificarEntidad("&#9581;&#9472;&#9829;&#9472;&#8811;")+t58+descodificarEntidad("&#8810;&#9472;&#9829;&#9472;&#9582;");document.getElementById("res59").value = descodificarEntidad("&#10083;.&#8226;*&#180;`*&#8226;.&#10083;&#12304;")+t59+descodificarEntidad("&#12305;&#10083;.&#8226;*&#180;`*&#8226;.&#10083;");document.getElementById("res60").value = descodificarEntidad("&#730;&#9829;&#730;")+t60+descodificarEntidad("&#730;&#9829;&#730;");document.getElementById("res61").value = descodificarEntidad("&#9552;&#9702;&#9829;&#9702;&#9552;&#65310;")+t1+descodificarEntidad("&#65308;&#9552;&#9702;&#9829;&#9702;&#9552;");document.getElementById("res62").value = descodificarEntidad("&#10084;&#65039;&#12308;&#65117;")+t2+descodificarEntidad("&#65118;&#12309;&#10084;&#65039;");document.getElementById("res63").value = descodificarEntidad("&#9829;&#65125;&#65310;")+t3+descodificarEntidad("&#65308;&#65124;&#9829;");document.getElementById("res64").value = descodificarEntidad("&#9825;&#12299;")+t4+descodificarEntidad("&#12298;&#9825;");document.getElementById("res65").value = parX[0]+t1+parX[1];document.getElementById("res66").value = parX[2]+t2+parX[3];document.getElementById("res67").value = parX[4]+t3+parX[5];document.getElementById("res68").value = parX[6]+t4+parX[7];document.getElementById("res69").value = parX[8]+t5+parX[9];document.getElementById("res70").value = parX[10]+t6+parX[11];document.getElementById("res71").value = parX[12]+t7+parX[13];document.getElementById("res72").value = parX[14]+t8+parX[15];document.getElementById("res73").value = parX[16]+t9+parX[17];document.getElementById("res74").value = parX[18]+t10+parX[19];document.getElementById("res75").value = parX[20]+t11+parX[21];document.getElementById("res76").value = parX[22]+t12+parX[23];document.getElementById("res77").value = parX[24]+t13+parX[25];document.getElementById("res78").value = parX[26]+t14+parX[27];document.getElementById("res79").value = parX[28]+t15+parX[29];document.getElementById("res80").value = parX[30]+t16+parX[31];document.getElementById("res81").value = parX[32]+t17+parX[33];document.getElementById("res82").value = parX[34]+t18+parX[35];document.getElementById("res83").value = parX[36]+t19+parX[37];document.getElementById("res84").value = parX[38]+t20+parX[39];document.getElementById("res85").value = parX[0]+t21+parX[1];document.getElementById("res86").value = parX[2]+t22+parX[3];document.getElementById("res87").value = parX[4]+t23+parX[5];document.getElementById("res88").value = parX[6]+t24+parX[7];document.getElementById("res89").value = parX[8]+t25+parX[9];document.getElementById("res90").value = parX[10]+t26+parX[11];document.getElementById("res91").value = parX[12]+t27+parX[13];document.getElementById("res92").value = parX[14]+t28+parX[15];document.getElementById("res93").value = parX[16]+t29+parX[17];document.getElementById("res94").value = parX[18]+t30+parX[19];document.getElementById("res95").value = parX[20]+t31+parX[21];document.getElementById("res96").value = parX[22]+t32+parX[23];document.getElementById("res97").value = parX[24]+t33+parX[25];document.getElementById("res98").value = parX[26]+t34+parX[27];document.getElementById("res99").value = parX[28]+t35+parX[29];document.getElementById("res100").value = parX[30]+t36+parX[31];document.getElementById("res101").value = parX[32]+t37+parX[33];document.getElementById("res102").value = parX[34]+t38+parX[35];document.getElementById("res103").value = parX[36]+t39+parX[37];document.getElementById("res104").value = parX[38]+t40+parX[39];document.getElementById("res105").value = parX[0]+t41+parX[1];document.getElementById("res106").value = parX[2]+t42+parX[3];document.getElementById("res107").value = parX[4]+t43+parX[5];document.getElementById("res108").value = parX[6]+t44+parX[7];} ver2("text1"); 
    var domGlob1=2,domGlob2=1;
    function ver_aux(idEditor){ var text3=document.getElementById(idEditor).value;
      var userEdita=1; var ing = text3; if("type here"==ing){ing="mi nick";userEdita="0"; }
      var b1 = font1(); var b2 = font1(); var b3 = font1(); var b4 = font1(); var b5 = font1(); var b6 = font1(); var b7 = font1(); var b8 = font1(); var b9 = font1(); var b10 = font1(); var b11 = font1(); var b12 = font1();
      var y1="",y2="",y3="",y4="",y5="",y6="",y7="",y8="",y9="",y10="",y11="",y12="";
      var n = ing;  if (ing.length==0) return; 
      for(i=0; i<n.length; i++)
        { var c=n.charAt(i);
         for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
         if (j<normal.length) { if(Array.from(b1)[j])y1+=Array.from(b1)[j]; } else { y1+=c; } 
         if (j<normal.length) { if(Array.from(b2)[j])y2+=Array.from(b2)[j]; } else { y2+=c; } 
         if (j<normal.length) { if(Array.from(b3)[j])y3+=Array.from(b3)[j]; } else { y3+=c; } 
         if (j<normal.length) { if(Array.from(b4)[j])y4+=Array.from(b4)[j]; } else { y4+=c; }    
         if (j<normal.length) { if(Array.from(b5)[j])y5+=Array.from(b5)[j]; } else { y5+=c; } 
         if (j<normal.length) { if(Array.from(b6)[j])y6+=Array.from(b6)[j]; } else { y6+=c; } 
         if (j<normal.length) { if(Array.from(b7)[j])y7+=Array.from(b7)[j]; } else { y7+=c; } 
         if (j<normal.length) { if(Array.from(b8)[j])y8+=Array.from(b8)[j]; } else { y8+=c; } 
         if (j<normal.length) { if(Array.from(b9)[j])y9+=Array.from(b9)[j]; } else { y9+=c; } 
         if (j<normal.length) { if(Array.from(b10)[j])y10+=Array.from(b10)[j]; } else { y10+=c; } 
         if (j<normal.length) { if(Array.from(b11)[j])y11+=Array.from(b11)[j]; } else { y11+=c; } 
         if (j<normal.length) { if(Array.from(b12)[j])y12+=Array.from(b12)[j]; } else { y12+=c; } 
         }
        
        z1=font2(y1);z2=font2(y2);z3=font2(y3);z4=font2(y4);z5=font2(y5);z6=font2(y6);z7=font2(y7);z8=font2(y8);z9=font2(y9);z10=font2(y10);z11=font2(y11);z12=font2(y12);
        inp=inputs(z1)+inputs(z2)+inputs(z3)+inputs(z4)+inputs(z5)+inputs(z6)+inputs(z7)+inputs(z8)+inputs(z9)+inputs(z10)+inputs(z11)+inputs(z12);	
        
        domAux=domGlob1-1; domAnterior = "dom"+domAux;
        elemento1 = document.createElement("div"); elemento1.id = "dom"+domGlob1; elemento1.innerHTML=inp;
        elemento2 = document.getElementById(domAnterior); elemento2.parentNode.insertBefore(elemento1,elemento2); 
        insertAfter(elemento2,elemento1); 
        domGlob1++;
        
       }
    function ador1(){num=Math.round(Math.random()*24); return ad1V[num]; }
    function ador2(){num=Math.round(Math.random()*42); return ad2V[num]; }
    function inputs(cad1){ inpu='<input id="r'+domGlob2+'" onclick="copyTextDeInput(\'r'+domGlob2+'\',\'message'+domGlob2+'\');mark(this);showEdit(\'r'+domGlob2+'\');" value="'+cad1+'" style="margin-top:10px;" class="f2" readonly="" type="text">'; domGlob2++; return inpu;}
    function font2(fontz){ ad1=ador1();ad2=ador2(); ador=ad1.replace(/f/gi,ad2); adorV=ador.split("*-*"); return adorV[0]+fontz+adorV[1]; } 
    function font1()
     {num=Math.round(Math.random()*54);z="";
       switch(num){case 1:z=a1;break;case 2:z=a2;break;case 3:z=a3;break;case 4:z=a4;break;case 5:z=a5;break;case 6:z=a6;break; case 7:z=a7;break;case 8:z=a8;break;case 9:z=a9;break;case 10:z=a10;break;case 11:z=a11;break;case 12:z=a12;break; 
                   case 13:z=a13;break;case 14:z=a14;break;case 15:z=a15;break;case 16:z=a16;break;case 17:z=a17;break;case 18:z=a18;break; case 19:z=a19;break;case 20:z=a20;break;case 21:z=a21;break;case 22:z=a22;break;case 23:z=a23;break;case 24:z=a24;break; 
                   case 25:z=a25;break;case 26:z=a26;break;case 27:z=a27;break;case 28:z=a28;break;case 29:z=a29;break;case 30:z=a30;break; case 31:z=a31;break;case 32:z=a32;break;case 33:z=a33;break;case 34:z=a34;break;case 35:z=a35;break;case 36:z=a36;break;
                   case 37:z=a37;break;case 38:z=a38;break;case 39:z=a39;break;case 40:z=a40;break;case 41:z=a41;break;case 42:z=a42;break; case 43:z=a43;break;case 44:z=a44;break;case 45:z=a45;break;case 46:z=a46;break;case 47:z=a47;break;case 48:z=a48;break;
                   case 49:z=a49;break;case 50:z=a50;break;case 51:z=a51;break;case 52:z=a52;break;case 53:z=a53;break;case 54:z=a54;break;
                  }
       return z;			  
     } 
     </script>