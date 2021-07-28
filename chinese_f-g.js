    var normal="abcdefghijklmnñopqrstuvwxyz1234567890";
    var a1="诶比西迪伊艾弗吉艾尺艾杰开艾ñ勒艾马艾娜哦屁吉吾艾儿艾";
    var a2="丹乃匚刀モ下ム卄工ＪＫㄥ爪れñ口ㄗＱ尺ち匕∪∨山メㄚ乙1234567890";
    var a3="㊃㊄㊅㊆㊇㊈㊉㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝1234567890";
    function marcar(campo) { campo.focus();	campo.select();}
    function Chinas() {
    var ing = document.getElementById("textin");	
    var t1 = ""; var t2 = ""; var t3 = "";
    var n = ing.value.toLowerCase(); if (ing.value.length==0) return; 
    for(i=0; i<n.length; i++) {
    var c=n.charAt(i);
    for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
    if (j<normal.length) { t1+=a1.charAt(j); } else { t1+=c; } 
    if (j<normal.length) { t2+=a2.charAt(j); } else { t2+=c; } 
    if (j<normal.length) { t3+=a3.charAt(j); } else { t3+=c; } }			
    document.f.s1.value=t1;		
    document.f.s2.value=t2;
    document.f.s3.value=t3;
}
