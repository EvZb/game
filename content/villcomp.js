(function () {
    $t = `The monthly competition is being held today.`; let $1 = ``; let $2 = `${btn("leave", "$tmp='none';next('villcenter')")}`; let $3 = 2; if ($time[2] < 18) { $3 += 2 }; if ($time[2] < 16) { $3 += 2 }
    if (isNaN($tmp)) { if ($tmp == "none") { if ($time[2] < 6) { $t += ` It is too early to participate.` } else { if ($time[2] > 19) { $t += ` It is too late to participate.` } else { $t += ` The particpant that wins the most rounds will be the winner.`; if ($ep > 0) { $1 = `${btn("participate", "$tmp=4;$cbt=4;next('villcomp')")} | ` } else { $t += `<br><br>You are too exhuasted to participate.` } }; $1 += `${btn("watch", "$tmp=4;next('villcomp')")} | ` } } }
    else {
        if ($tmp < 4) { time('0:0:' + $3 + ':0') }; if ($tmp == 4) { $t = `It is time for the first round. Less than 20 people are participating.`; if ($cbt != "none") { $t += `<br><br>Participants will be provided medical treatment after each round.`; $1 = `${btn("compete", "combat('opponent.1.8.0.villcomp.3')")} | ` }; $1 += `${btn("watch", "exp(0,2);$tmp=3;next('villcomp')")} | ` }
        else { if ($cbt != "none") { $ep = $epm; $hp = $hpm; sbu('hp'); $t = `` } else { $t = `You watch the competition. ` } }; if ($tmp == 3) { if ($cbt != "none") { $1 = `${btn("compete", "combat('opponent.1.12.0.villcomp.2')")} | ` } $t += `It is time for the second round.`; $1 += `${btn("watch", "exp(1,1);$tmp=2;next('villcomp')")} | ` }
        else if ($tmp == 2) { if ($cbt == "win" && $ep > 0) { $1 = `${btn("compete", "combat('opponent.1.12.0.villcomp.1')")} | ` } $t += `It is time for the third round. The spectators are more excited.`; $1 += `${btn("watch", "exp(1,1);$tmp=1;next('villcomp')")} | ` }
        else if ($tmp == 1) { if ($cbt == "win" && $ep > 0) { $1 = `${btn("compete", "combat('opponent.1.12.0.villcomp.0')")} | ` } $t += `It is time for the final round. Everone is waiting in anticipation.`; $1 += `${btn("watch", "exp(1,2);$tmp=0;next('villcomp')")} | ` }
        else if ($tmp == 0) { if ($cbt == "win") { $money += 25; $t = `You are the winner of the competition. The reward is 25 spirit stones.` } else { $t += `The competition has ended. After the winner is delcared, the spectators begin to leave.` } }
    }
    if ($cbt == "lose") { $t += `<br><br>You lost the competition.` }; $cbt = "none"; $n = `${$1 + $2}`
    end()
})()