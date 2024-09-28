(function () {//tmpan is reserved | tmp 0-2 should be unlimited events
    switch(tmp){
        case x:
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']}
            tmpn=tmpan[0];tmpan=[0]
            t=`You return to the path.`
            n=`\${btn('next',"next('other/explore')")}`;break
        case '0':
            t=`You find ${['nothing','some old dragon tracks','a cracked rock','shattered Sun Crystals'][rng(3)]}.`
            n=`\${btn('next',"tmp=x;next()")}`;break
        case '1'://monster hunting/attack
            let $1=[rng(2),rng(2)];let $2=$1[0]+1+',1,'
            $1.push([['Rock Snake,fangs','Mountain Spider,stab','Small Mountain Golem,rock'][$1[1]],['Mountain Golem,rock','Large Rock Snake,fang','Small Mountain Dragon,dragon fire'][$1[1]],['Green Mountain Dragon,dragon claw','Red Mountain Dragon,dragon fire','Blue Mountain Dragon,dragon shout'][$1[1]]][$1[0]])
            $1.push($1[2].split(',')[0])//
            $1[2]=[['material,Rock Snake skin.1.5.7.1.7,1.0.0.0.0.0.8.6.6','money,15,1.0.0.1.0.0.10.6.6','money,15,1.0.0.1.0.0.10.4.10'][$1[1]],['material,Mountain Golem core.1.5.0.1.6,4.0.0.1.0.1.10.8.10','material,Rock Snake skin.2.5.7.1.7,4.0.0.0.0.1.10.10.8','material,Mountain Dragon Blood.1.6.2.0.6,0.4.0.0.0.0.12.12.12'][$1[1]],['material,Mountain Dragon claw.1.5.0.1.5,4.1.1.1.1.1.14.14.14','material,Mountain Dragon fire.1.6.2.0.5,1.4.1.1.1.1.14.14.14','material,Mountain Dragon heart.1.7.0.1.5,1.1.4.1.1.1.14.14.14'][$1[1]]][$1[0]]+','+$1[2]
            $1[2]+=',none,'+tmpan[1]+',none,'+tmpan[0]+',world/terrain/desert'
            $2+=$1[2].split(',')[2].split('.').slice(6).join()+',0'
            switch(rng(2)){
                case 0:t=`You hear a ${$1[3]} nearby.`;n=`\${btn('hunt',"tmpr('stealth',0,'${$1[2]}','${$2}');next('other/combat')")} | \${btn('leave',"tmp=x;next()")}`;break
                case 1:t=`You find the fresh tracks of a ${$1[3]}.`;n=`\${btn('follow',"tmpr('stealth',0,'${$1[2]}','${$2}');next('other/combat')")} | \${btn('leave',"tmp=x;next()")}`;break
                case 2:t=`You hear a noise behind you. It's a ${$1[3]}!`;n=`\${btn('fight',"tmpr('alert',0,'${$1[2]}','${$2}');next('other/combat')")} | \${btn('run',"ep[0]-=1;sbu('ep');tmp=x;next()")}`;break};break
        case '2'://camp/traders
            if(tmpn==0){t=`You encounter a group of hunters. They will give you a good price if you have something they are looking for.`;n=`\${btn('trade',"tmpn=1;next()")} | \${btn('leave',"tmp=x;next()")}`}
            else{t=`You talk to one of the hunters. ${['He','She'][rng(1)]} explains what the values are for your materials.`
                let $0='Nothing:-1.0'
                let $1=['Rock Snake skin','Mountain Golem core','Mountain Dragon blood','Mountain Dragon claw','Mountain Dragon fire','Mountain Dragon heart','Sun Crystals','Rock Flowers','Spirit Berries']
                $1.forEach(($a,$b)=>{let $3=mat.indexOf($a);let $4=(11-matr[$3])*5;if($3!=-1){$0+=','+$a+' ('+$4+'):'+$3+'!'+$4}})
                n=`\${btn('leave',"tmp=x;next()")}<br><br>\${lst('sell',"${$0}")} \${btn('sell',"rem('material',elm('sell').value.arr(0));money+=Number(elm('sell').value.arr(1));next()")}`};break
        case '3'://find material
            if(tmpn==0){tmpa=[['Sun Crystals.1.6.0.1.7','Rock Flowers.1.5.0.0.7','Spirit Berries.1.7.4.0.7'][rng(2)]]
                t=`You find some ${tmpa[0].split('.')[0]}.`
                n=`\${btn('take',"tmpn=1;next()")} | \${btn('leave',"tmp=x;next()")}`}
            else{let $1=data(0);let $2=$1[1].split('.');$2[pos[2]]-=1;$1[1]=$2.join('.');data(0,$1);add('material',tmpa[0].split('.'))
                t=`You take the ${tmpa[0].split('.')[0]} before leaving`;n=`\${btn('next',"tmp=x;next()")}`};break
        case '4'://find item/chest
            switch(tmpn){
                case 0:tmpn=rng(4);tmpa=[['Purified  Iron '+['Spear','Sword','Knife','Staff','Axe'][rng(4)],'Spirit Potion','Purified Key','Light Robe','Purified Chest'][tmpn]]
                    if(tmpn==0){tmpa[1]=[tmpa[0],1,0,7,tmpa[0].split(' ')[2]+'!0!1!1']}else{tmpa[1]=[[tmpa[0],1,5,6,'0!0!20'],[tmpa[0],1,3,8,x],[tmpa[0],1,1,6,'0!1!1']][tmpn-1]}
                        t=`You see something hidden in a ${['crack','hole'][rng(1)]}.`
                        n=`\${btn('grab',"tmpn=1;next()")} | \${btn('ignore',"tmp=x;next()")}`;break
                case 1:t=`It's a ${tmpa[0]}.`
                    if(tmpa[0]=='Purified Chest'){if(itm.includes('Purified Key')){t+=` You can open it with your Purified Key.`;n=`\${btn('unlock',"tmpn=2;next()")} | `}else{t=`You don't have a key to unlock it.`;n=``}}
                    else{n=`\${btn('take',"tmpn=2;next()")} | `};n+=`\${btn('leave',"tmp=x;next()")}`;break
                case 2:let $1=data(0);let $2=$1[1].split('.');$2[pos[2]]-=1;$1[1]=$2.join('.');data(0,$1)
                    if(tmpa[0]=='Purified Chest'){rem('item','Purified Key');t=`You unlock the chest; it holds a book from a series called "Studying Dragon Fire".`;add('item',['Dragon Fire Book',1,7,6,'6'])}
                    else{add('item',tmpa[1]);t=`You take the ${tmpa[0]}.`}
                    n=`\${btn('leave',"tmp=x;next()")}`;break};break
        case '5'://dangerous event
                tmp=x;n=`\${btn('back',"next()")}`;t=`You find nothing.`
        /* GREAT DRAGON?
            switch(tmpa[0]){
                case x:tmpa=[['worm','pit'][rng(1)]]
                    t=`As you explore the area, the sand starts shifting under you.`
                    n=`\${btn('run',"tmpn=1;next()")} | \${btn('hide',"tmpn=2;next()")}`;break
                case 'worm':
                    if(tmpn==1){t=`As you are running away, a Giant Sand Worm comes out of the sand. Your movement attracts the worm toward you.`
                        n=`\${btn('fight',"tmpa=['fight'];next()")} | \${btn('keep running',"tmpa=['escape'];next()")}`}
                    else{t=`You hide behind some rocks as a Giant Sand Worm comes out from the ground. It hasn't detected you.`
                        n=`\${btn('fight',"tmpa=['fight'];next()")} | \${btn('keep hiding',"tmpa=['escape'];next()")}`};break
                case 'pit':
                    if(tmpn==1){tmp=x;t=`As you are running away, the sand starts falling into a pit behind you. You manage to avoid falling in.`;n=`\${btn('next',"next()")}`}
                    else{tmpn=0;tmpa=['fall'];t=`You hide behind some rocks, but the ground below you starts falling into a pit. You try to escape, but fall in as well.`;n=`\${btn('fall',"next()")}`};break
                case 'escape':ptime[30]
                    if(tmpn==1){ep[0]-=10;sbu('ep');t=`After a while, you manage to escape the Giant Sand Worm.`;tmp=x;n=`\${btn('next',"next()")}`}
                    else{t=`You keep hiding until the Giant Sand Worm leaves.`;tmp=x;n=`\${btn('next',"next()")}`};break
                case 'fall':hp[0]-=10;sbu('hp')
                    if(hp[0]<1){t=`You lose consciousness.`;n=`\${btn("next","tmpa=['faint',w+'terrain/desert',x,${tmpn},'wake','${tmpan.join()}'];tmpn=2;next('other/rest')")}`}
                    else{ep[0]-=3;sbu('ep');tmp=x;t=`You climb out after some effort.`;n=`\${btn('leave',"next()")}`};break
                case 'fight':if(tmpan[1]==1){tmpan[0]=100-tmpan[0]}
                    t=`You decide to fight the Giant Sand Worm.`
                    n=`\${btn('combat',"next('other/combat')")}`
                    if(tmpn==1){tmp='alert'}else{tmp='stealth'};tmpr(tmp,0,'material,Giant Worm teeth.2.5.4.1.5,8.4.0.4.4.4.20.18.14,Giant Sand Worm,big bite,none,'+tmpan[1]+',tmpa,'+tmpan[0]+',world/terrain/desert','5,1,20,18,14,0');break
                case 'wake':ep[0]-=3;sbu('ep');tmp=x;t=`You awaken in a pit. You climb out after some effort.`;n=`\${btn('next',"next()")}`;break};break
        case 'win':tmpan.push(0);n=`\${btn('leave',"tmp=x;next()")}`
                if(tmpa[0]=='win'){t=`You leave after collecting your loot.`}
                else{ptime([30,1]);heal();t=`After your defeat, you take some time to recover.`};break
        case 'lose':tmpan.push(0);n=`\${btn('leave',"tmp=x;next()")}`
                if(tmpa[0]=='win'){t=`You leave after collecting your loot.`}
                else{ptime([30,1]);heal();t=`After your defeat, you take some time to recover.`}*/;break}
    end()
})()