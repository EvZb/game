(function() {let $1;if($money==1){$1=''}else{$1='s'};
nav("jdis",`Year: ${$time[0]}, Day: ${$time[1]} | You have ${col("#9D9",$money)} spirit stone${$1}.<br><br>Level: ${$lvl} (${$xp}%)<div class="bar" style="width:95%"><div id="xpbar" class="bar2"></div></div>`)
ELM("xpbar").style.background=$cc[Math.floor($xp/20)];ELM("xpbar").style.width=$xp+"%"
ELM("script2").remove()})()