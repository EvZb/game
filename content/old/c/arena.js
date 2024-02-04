(function () {
    if($tmp!="none"||$cbt!="none"){if($cbt=="win"){$t=`You have won the fight. You are rewarded ${$tmp} spirit stone.`;$money+=Number($tmp)}else{$t=`You are in the arena.`};$n=`\${btn('next',"next('c/arena')")}`;$tmp='none';$cbt='none'}
    else{let $1 = `\${btn('weak',"$stat[2]+=2;$cbt='5.c/arena';combat([3,1,15,0,1,'Weak Opponent'])")}`;let $2=`\${btn('normal',"$stat[2]+=3;$cbt='15.c/arena';combat([4,2,20,0,1,'Normal Opponent'])")}`;let $3=`\${btn('strong',"$stat[2]+=4;$cbt='25.c/arena';combat([6,2,25,0,1,'Strong Opponent'])")}`
    $t = `You are at the arena. You can choose an opponent to fight. Winners are given spirit stones.`;$n = `Opponent: ${$1} | ${$2} | ${$3} <br><br>\${btn('leave',"next('city')")}`}
    end()
})()