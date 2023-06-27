(function () {
    let $1 = $cbt; if ($hp < 1) { $t = `You are too hurt to continue.`; exp($1[3], 4); $tmp = "lose"; $cbt = "lose" }; if ($1[1] > 1) { $s = ['s', 'a', ''] } else { $s = ['', 'the', 's'] }
    let $0; if ($1[1] > 1) { $0 = $1[1] + ' ' } else { $0 = '' }; $n = `${btn("next", "next('combat')")}`; if (!(isNaN($tmp))) {
        if ($tmp > 0) {
            $hp -= (($1[3] + 1) * $1[1])
            sbu('hp'); $tmp -= ($lvl + 1); $t = `You attack ${$s[1] + ' ' + $1[0]}. The ${$0 + $1[0] + $s[0] + ' attack' + $s[2]} you.`
        }
        else { $tmp = $1[2]; $1[1] = ($1[1]) - 1; if ($1[1] < 1) { $t = `You have defeated ${$s[1] + ' ' + $1[0]}.`; $tmp = "win" } }
    } else {
        if (isNaN($tmp)) {
            if ($tmp == "cbt") { $tmp = $1[2] - 1; $t = `You attack ${$s[1] + ' ' + $1[0]}.` }
            else { if ($tmp == "win") { exp($1[3], 4); $cbt = "win"; $t = `You win the fight.` }; $tmp = $1[5]; $n = `${btn("next", "next('" + $1[4] + "')")}` }
        }
    }; if (String($cbt).length > 4) { $cbt = $1 }
    end()
})()