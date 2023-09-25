(function () {
    let $5 = $cbt[2];if($5[2]==undefined){$5=$cbt};let $6=$enemy.pop()
    if ($enemy.length < 1 || $hp < 1 || $ep < 1) { if ($enemy.length < 1) { $cbt = 'win'; $t = `You win.` } else { $enemy=[]; $cbt = 'lose'; $t = `You lose.` };$5 = $5.split('.'); if (isNaN($5[0])) { $tmp = $5[0] } else { $tmp = Number($5[0]) }; $n = `${btn('next', "next('" + $5[1] + "')")}` }
    else{$t = `You are in a fight.<br>`; let $3 = []; let $4 = ``; function $F0($a, $b) { $3[$b]=$a.split('.').map(Number) }; $enemy.forEach($F0); function $F1($a, $b) { $t += `<br>(${$6}) #${$b + 1} hp:${$3[$b][2]} `; $4 += ($b + 1) + `:${$b},` }
    if (Array.isArray($cbt)) {function $F3($a,$b){let $0=$a[0];let $7=$a[3]-$lvl[3];if($7<0){$0=Math.floor($0/(-$7+1))}else{$0=$0*($7+1)};$0-=$def;if($0>0){$hp-=$0;$t+=` ${$6} #${$b+1} attacks for `+$0+` damage.`}else{$t+=` ${$6} #${$b+1} is too weak to hurt you.`}};$3.forEach($F3)
        let $a = Number($cbt[0]); let $b = Number($cbt[1]);$cbt=$5;if($a>0){$ep-=$a;$a=$atk*($a/5+1) }else{if($a<0){$a=-$a;$qi-=$a}else{$a=$atk}};let $7=$lvl[3]-$3[$b][3];if($7<0){$a=Math.floor($a/(-$7+1))}else{$a=$a*($7+1)};$a -= $3[$b][1]; if ($a < 0) { $a = 0 }; $3[$b][2] -= $a
        if ($3[$b][2] < 1) { $3.splice($b, 1); $t += ` You defeat the ${$6}.` } else { $t += ` You attack the ${$6} (#${$b + 1}), dealing ${$a} damage.` };sbu('hp','ep')}; $t += `<br><br>Enemies: `
    let $0 = Math.floor($ep / 5); if($qi%5>0){$0+=1}; let $1 = 'Normal:0,'; $n = `${btn("Attack", "$cbt=[Number(ELM('qia').value),ELM('see').value,$cbt];$enemy.push('"+$6+"');next('combat')")}`; $3.forEach($F1)
    while ($0 > 0) { $1 += "Strong x" + ($0 + 1) + ":" + $0 * 5 + ","; $0 -= 1 }; $0 = Math.floor(per100($qi,$qim)/25); while ($0 > 0) { $1 += "Qi (" + (25*$0) + "%):-" + Math.floor(($qi/4)*$0) + ","; $0 -= 1 }
    $n += ` \${slist('qia','${$1.slice(0, -1)}')} Enemy: \${slist('see','${$4.slice(0, -1)}')}`; function $F2($a, $b) { $enemy[$b] = $a.join('.') }; $enemy = []; $3.forEach($F2); sbu('qi')}
    end()
}) ()
