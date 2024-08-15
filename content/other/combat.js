(function () {//tmp='combat state!loot type.data,data!level!atks!defs!stats max!amount!type!atk name!player atk!stats current' | tmp2='next!tmp!tmpn'
    let $1=tmp.split('!')
    if($1[0]=='attack'||$1[0]=='alert'||$1[0]=='stealth'){
        let $2;if($1[9]!=x){$2=`${aff[$1[9][0]]}:${$1[9][0]}`}else{$2='Nothing:none'};if($1[9]!=0){$2+=','+aff[tech[0]]+':0'}
        t=`Enemies: ${$1[6]} ${$1[7]}<br><br>`
        if($1[0]!='stealth'){
            if($1[0]=='alert'){t+=`The enemy is preparing to attack.`;tmp=tmp.arr(0,'attack')}
            if($1[9]!=x){t+=` You attack the enemy.`
                $1[3]=$1[3].split('.');$1[4]=$1[4].split('.');$1[10]=$1[10].split('.');$1.push(tech[$1[9]])
                if($1[9]==3){$1[10].forEach(($a,$b)=>{$1[10][$b]-=Math.max(afflvl[$1[11]],afflvl[$1[11]]+atk[$b]-$1[4][$b])})}
                else{$1[10][$1[9]]-=Math.max(afflvl[$1[11]],afflvl[$1[11]]+atk[$1[9]]-$1[4][$1[9]])}
                $1[10]=$1[10].join('.')
                if($1[10].includes('-')){t+=` You defeat the enemy.`;$1[6]-=1;if($1[6]<1){tmp=tmp.arr(0,'win');$1[0]='win'}else{tmp=tmp.arr(6,$1[6]);tmp=tmp.arr(10,$1[5])}}
                else{tmp=tmp.arr(10,$1[10])}}
            if($1[0]=='attack'){t+=` The enemy attacks you.`
                hp[0]-=Math.max(0,$1[3][0]-def[0]);ep[0]-=Math.max(0,$1[3][1]-def[1]);sp[0]-=Math.max(0,$1[3][2]-def[2])
                if(hp[0]<1||ep[0]<1||sp[0]<1){tmp=tmp.arr(0,'lose')};sbu()}}
        else{t+=`The enemy hasn't detected you.`}
        if(tech[1]>-1&&$1[9]!=1){$2+=','+aff[tech[1]]+':1'}
        if(tech[2]>-1&&$1[9]!=2){$2+=','+aff[tech[2]]+':2'}
        if(tech[3]>-1&&$1[9]!=3&&tech[7].split(' ')[0]==aff[tech[3]]){$2+=','+aff[tech[3]]+':3'}
        if($1[9]!=x){$2+=',Nothing:none'}
        n=`Attack using: \${lst("atklst","${$2}")}<br><br>\${btn("next","if(tmp.arr(0)=='stealth'&&elm('atklst').value!=x){tmp=tmp.arr(0,'alert')};tmp=tmp.arr(9,elm('atklst').value);xp(elm('atklst').value,tmp.arr(2));next()")}`
        if($1=='win'){n=`next`};console.log($1[10])}
    else{
        if($1[0]=='win'){
            t=`You have defeated the enemy.`
            $1[1]=$1[1].split('.')
            if($1[1][0]=='item'){add('item',$1[1][1].split(','))}
            else if($1[1][0]=='material'){add('material',$1[1][1].split(','))}
            else if($1[1][0]=='money'){stat[0]+=Number($1[1][1])}}
        else{t=`You are too weak to continue.`}
        let $3=tmp2.split('!')
        tmp=$3[1]
        tmp2=$1[0]
        tmpn=Number($3[3])
        n=`\${btn('next',"next('${$3[0]}')")}`
    }
    end()
})()