(function() {
nav("cheats",`Teleport: ${slist("cheattp","Cave:cave,Village:vill,City:city,Wildlands:wildland")} ${btn("teleport","$tmp='none';next(ELM('cheattp').value)")}
<br><br>Damage: ${btn("health","$hp-=Math.floor($hpm/10);sbu('hp')")} | ${btn("energy","$ep-=Math.floor($epm/10);sbu('ep')")} | ${btn("recover","$ep=$epm;$hp=$hpm;sbu('hp','ep')")}
<br><br>Character: ${btn("eye color","ccolor(0)")} Hair: ${slist("cheat1","Short:0,Long:1,None:-1")} ${btn("color","ccolor(1)")} Top: ${slist("cheat2","Shirt:0,Dress:1,None:-1")} ${btn("color","ccolor(3)")} Bottom: ${slist("cheat3","Pants:0,None:-1")} ${btn("color","ccolor(2)")} | ${btn("select","clothe(0,ELM('cheat1').value);clothe(2,ELM('cheat2').value);clothe(1,ELM('cheat3').value)")}
<br><br>${btn("enable","ELM('characterframe').style.display='block'")+' | '+btn("disable","ELM('characterframe').style.display='none'")}`)
ELM("script2").remove()})()