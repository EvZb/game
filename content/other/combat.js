(function () {
    //tmp=combat state
    //tmpa=[loot type.data, data, atks.defs.stats max, type, atk name, player atk, tmp, tmpn]
    //tmpan=[lvl, count, hp, ep, sp]
    if(tmp=='attack'||tmp=='alert'||tmp=='stealth'){
        if(tmp=='stealth'&&tmpa[5]!=x){tmp='alert'}
        let $2;if($1[9]!=x){$2=`${aff[$1[9][0]]}:${$1[9][0]}`}else{$2='Nothing:none'};if($1[9]!=0){$2+=','+aff[tech[0]]+':0'}
        t=`Enemies: ${$1[6]} ${$1[7]}<br><br>`
        if(tmp!='stealth'){
            let $1=tmp[2].split('.')
            if(tmp=='alert'){t+=`The enemy is preparing to attack.`;tmp='attack'}
            if(tmpa[5]!=x){t+=` You attack the enemy.`;xp(aff[tech[tmpa[5]]],1,tmpan[0])
                if(tmpa[5]>2){[0,1,2].forEach(($a)=>{tmpan[2+$a]-=Math.max(1,afflvl[tech[tmpa[5]]]+atk[$a]-$1[3+$a])})}
                else{tmpan[Number(tmpa[5])+2]-=Math.max(1,afflvl[tech[tmpa[5]]]+atk[tmpa[5]]-$1[3+Number(tmpa[5])])}
                if(tmpan[2]<1||tmpan[3]<1||tmpan[4]<1){t+=` You defeat the enemy.`;tmpan[1]-=1;if(tmpan[1]<1){tmp='win'}else{tmpan[2]=$1[6];tmpan[3]=$1[7];tmpan[4]=$1[8]}}
            if(tmp=='attack'){t+=` The enemy attacks you.`
                hp[0]-=Math.max(0,$1[0]-def[0]);ep[0]-=Math.max(0,$1[1]-def[1]);sp[0]-=Math.max(0,$1[2]-def[2])
                if(hp[0]<1||ep[0]<1||sp[0]<1){tmp='lose'};sbu()}}}
        else{t+=`The enemy hasn't detected you.`}
        if(tech[1]>-1&&tmpa[5]!=1){$2+=','+aff[tech[1]]+':1'}
        if(tech[2]>-1&&tmpa[5]!=2){$2+=','+aff[tech[2]]+':2'}
        if(tech[3]>-1&&tmpa[5]!=3&&tech[7].split(' ')[0]==aff[tech[3]]){$2+=','+aff[tech[3]]+':3'}
        if(tmpa[5]!=x){$2+=',Nothing:none'}
        n=`Attack using: \${lst("atklst","${$2}")}<br><br>\${btn("next","tmp[5]=elm('atklst').value;next()")}`
        if(tmp=='win'){n=`next`}}
    else{
        if(tmp=='win'){
            t=`You have defeated the enemy.`
            $1[1]=$1[1].split('.')
            if(tmpa[0]=='item'){add('item',tmpa[1].split(','))}
            else if(tmpa[0]=='material'){add('material',tmpa[1].split(','))}
            else if(tmpa[0]=='money'){stat[0]+=Number(tmpa[1])}}
        else{t=`You are too weak to continue.`}
        tmpr(tmp[6],tmp[7])
        n=`\${btn('next',"next('${$3[0]}')")}`
    }
    end()
})()