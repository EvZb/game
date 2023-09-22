(function () {
    if($tmp!="none"||$cbt!="none"){if($cbt=="win"){$t=`You have won the fight. You are rewarded ${$tmp} spirit stone.`;$money+=Number($tmp)}else{$t=`You are in the arena.`};$n=btn("next","next('cityarena')");$tmp='none';$cbt='none'}
    else{let $1 = btn('weak', "$cbt='5.cityarena';combat([3,1,15,1,'Weak Opponent'])"); let $2 = btn('normal', "$cbt='15.cityarena';combat([4,2,20,1,'Normal Opponent'])"); let $3 = btn('strong', "$cbt='25.cityarena';combat([6,2,25,1,'Strong Opponent'])")
    $t = `You are at the arena. You can choose an opponent to fight. Winners are given spirit stones.`;$n = `Opponent: ${$1} | ${$2} | ${$3} <br><br>${btn('leave', "next('city')")}`}
    end()
})()