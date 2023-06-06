(function () {
    let $0; let $1 = ''; if ($money == 1) { $0 = '' } else { $0 = 's' }; function $F($a) { $1 += pic($a) + ' ' + $sp[$sp0.indexOf($a)] + ' ' }; $sp0.forEach($F)
    nav("journal", `Year: ${$time[0]}, Day: ${$time[1]} | You have ${col("#9D9", $money)} spirit stone${$0}.<br><br>Level: ${$lvl} (${$xp}%)
<div class="bar" style="width:95%"><div id="xpbar" class="bar2"></div></div>${$1}`)
    ELM("xpbar").style.background = $cc[Math.floor($xp / 20)]; ELM("xpbar").style.width = $xp + "%"
    ELM("script2").remove()
})()