(function () {
    //tmp=combat state | no reset
    //tmpa=[loot type, data, atks.defs.stats max, enemy type, atk name, player atk, tmpn, tmpa, tmpan, next]
    //tmpan=[lvl, count, hp, ep, sp, round]
    if(tmp=='attack'||tmp=='alert'||tmp=='stealth'){combat='T'
        if(tmp=='stealth'&&tmpa[5]!=x){tmp='alert'}
        let $2;if(tmpa[5]!=x){if(tmpa[5]==0){$2=wpn[0]+':0'}else{$2=`${aff[tech[tmpa[5]]]}:${tmpa[5]}`}}else{$2='Nothing:none'};if(tmpa[5]!=0&&tech[0]!=-1){$2+=','+wpn[0]+':0'}
        t=`Enemies: ${tmpan[1]} ${tmpa[3]} | Round: ${tmpan[5]}<br><br>`
        if(tmp!='stealth'){tmpan[5]+=1
            let $1=tmpa[2].split('.').map(Number)
            let $3=Math.floor(lvl[0]/(tmpan[0]+lvl[0])*100)//evasion/accuracy value
            if(tmpa[5]==x){if(tmp!='alert'){t+=`You don't attack.`}}
            else{t+=` You attack the ${tmpa[3]}.`;xp(aff[tech[tmpa[5]]],2,tmpan[0])
                if($3-rng(50)<5){t+=` You fail to hurt the ${tmpa[3]}.`}
                else{t+=` Your attack hits the ${tmpa[3]}.`
                    if(tmpa[5]==0){[0,1,2].forEach(($a)=>{tmpan[2+$a]-=Math.max(0,afflvl[tech[0]]+atk[$a]-$1[5+$a])})}
                    else if(tmpa[5]==8){[1,2,3].forEach(($a)=>{tmpan[1+$a]-=Math.max(1,afflvl[tech[8]]+atk[3]-$1[4+$a]-$1[4])})}
                    else{tmpan[Number(tmpa[5])+2]-=Math.max(1,afflvl[tech[tmpa[5]]]+atk[tmpa[5]]-$1[4+Number(tmpa[5])])}
                    if(tmpan[2]<1||tmpan[3]<1||tmpan[4]<1){t+=` You defeat the ${tmpa[3]}.`;tmpan[1]-=1;if(tmpan[1]<1){tmp='win'}else{tmpan[2]=$1[8];tmpan[3]=$1[9];tmpan[4]=$1[10]}}}}
            if(tmp=='alert'){t+=`<br><br>The ${tmpa[3]} is preparing to attack.`;tmp='attack'}
            else if(tmp=='attack'){t+=`<br><br>The ${tmpa[3]} attacks you.`
                if($3+rng(50)>95){t+=` The ${tmpa[4]} fails to hurt you.`}
                else{t+=` The ${tmpa[4]} hits you.`
                    hp[0]-=Math.max(0,$1[1]+Math.max(0,$1[0]-def[3])-def[0]-(afflvl[tech[4]]|0));ep[0]-=Math.max(0,$1[2]+Math.max(0,$1[0]-def[3])-def[1]-(afflvl[tech[5]]|0));sp[0]-=Math.max(0,$1[3]+Math.max(0,$1[0]-def[3])-def[2]-(afflvl[tech[6]]|0))}
                if(hp[0]<1||ep[0]<1||sp[0]<1){tmp='lose'};sbu()}}
        else{t+=`The enemy hasn't detected you.`}
        if(tech[1]>-1&&tmpa[5]!=1){$2+=','+aff[tech[1]]+':1'}
        if(tech[2]>-1&&tmpa[5]!=2){$2+=','+aff[tech[2]]+':2'}
        if(tech[3]>-1&&tmpa[5]!=3){$2+=','+aff[tech[3]]+':3'}
        if(tech[8]>-1&&tmpa[5]!=3){$2+=','+aff[tech[8]]+':8'}
        if(tmpa[5]!=x){$2+=',Nothing:none'}
        n=`Attack using: \${lst("atklst","${$2}")}<br><br>\${btn("next","tmpa[5]=elm('atklst').value;next()")}`}
    else{combat='F'
        xp2(0,1,Math.max(1,tmpan[0]-lvl[0]))
        if(tmp=='win'){
            t=`You have defeated the enemy.`
            if(tmpa[0]=='item'){additem('itm',tmpa[1].split('.'))}
            else if(tmpa[0]=='material'){additem('mat',tmpa[1].split('.'))}
            else if(tmpa[0]=='money'){money+=Number(tmpa[1])}}
        else{t=`You are too weak to continue.`}
        n=`\${btn('next',"next('${tmpa[9]}')")}`;tmpr(tmp,tmpa[6],tmpa[7],tmpa[8])
    }
    end()
})()