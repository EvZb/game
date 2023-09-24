(function () {
    let $0; let $1 = '';let $2='';let $3=[]; if ($money == 1) { $0 = '' } else { $0 = 's' };if($items[0]!='none'&&$item.length<1){function $F($a){$item.push($a.split('--'))};$items.forEach($F)};$items=[]
    function $FF($a,$b){$1+=`\${btn(${$a[0]},'iuse('${$b}');next('character')")} [${$itype[$a[1]]}] [${$a[4]}] \${btn('discard',"iuse('${$b}x');next('character')")}<br>(${$a[2]})<br><br>`;$items.push($a.join('--'))}
    $item.forEach($FF);if($equip[0]!=-1){$3.push($equip[0].split('--')[0],"equip('none',0);next('character')")}else{$3.push('none','')}
    if($equip[1]!=-1){$3.push($equip[1].split('--')[0],"equip('none',1);next('character')")}else{$3.push('none','')};$2+=`Weapon: \${btn('${$3[0]}','${$3[1]}')}<br><br>Armor: \${btn('${$3[2]}','${$3[3]}')}`
    nav("character", `(${$person[0]}) Year: ${$time[0]}, Day: ${$time[1]} | You have \${col('#9D9',$money)} spirit stone${$0}. | Compass: ${loc()[0]}<br><br>Attack: [\${col('#9D9',$atk)}] Defense: [\${col('#9D9',$def)}]<br><br>
    Books:<br>-${tec(0)[0]}<br>-${tec(1)[0]}<br>-${tec(2)[0]}<br><br>${$2}<br><br>Items:<br><br>${$1}`)
    ELM("script2").remove()
})()