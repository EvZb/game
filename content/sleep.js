(function () {
    let $0 = $tmp.split('.'); let $1; let $3 = Number($0[3])
    if ($ep < ($epm / 2) || $hp < ($hpm / 2)) { $1 = 'sleep' } else { $1 = 'rest' }; $n = `${btn($1, "$tmp+=ELM('sleep').value;next('sleep')") + ' for ' + slist("sleep", "10:10,8:8,6:6,4:4,2:2")} hours`; $t = `You ${$1 + ' ' + $0[2]}.`; if ($hp < 1 || $ep < 1) { $ep = 0; $hp = 0 }
    if ($3 > 0) { $ep += (($epm / 10) * $3); if ($ep > $epm) { $ep = $epm }; $ep += $3; time('0:0:' + $3 + ':0'); $hp += (($hpm / 10) * $3); if ($hp > $hpm) { $hp = $hpm }; sbu('hp') }
    if ($ep > 0 && $hp > 0) { $n += ` | ${btn("done", "$tmp='" + $0[0] + "';next('" + $0[1] + "')")}` }; $0[3] = '0'; $tmp = $0.join('.')
    end()
})()