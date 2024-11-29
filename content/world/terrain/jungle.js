(function () {//tmpan is reserved | tmp 0-2 should be unlimited events
    switch(tmp){
        case x:
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']}
            tmpn=tmpan[0];tmpan=[0]
            t=`You return to the path.`
            n=`\${btn('next',"next('other/explore')")}`;break
        case 'cbt':
            if(tmp2=='win'){t=`You take loot the corpse before leaving.`}
            else{t=`You escape and take some time to recover.`;ptime([45]);heal(0,1)}
            n=`\${btn('leave',"tmp=x;tmp2=x;next()")}`;break
        case '0':
            t=`You find ${['nothing','some old monster tracks in the mud','an empty basket','claw marks on a tree'][rng(3)]}.`
            n=`\${btn('next',"tmp=x;next()")}`;break
        case '1':
            let $1=monster(['Ooze','Tendrid','Wolf','Plantel','Scorpion','Dragon'][rng(5)],rng(2,1),[x,'Brown','Poison','Plant','Mud','Pink'][rng(5)])
            tmpa=[$1[3],$1[4],$1[1],$1[0],$1[5],x,'world/terrain/jungle','cbt','0',x,tmpan.join()]
            tmpan=[$1[6],1,...$1[2].split(',').map(Number),0]
            $1[0]='Level '+$1[6]+' '+$1[0]
            switch(rng(2)){
                case 0:t=`You hear a ${$1[0]} nearby.`;n=`\${btn('hunt',"tmp='stealth';next('other/combat')")} | \${btn('leave',"tmpr(x,0,x,tmpa[8]);next()")}`;break
                case 1:t=`You find the fresh tracks of a ${$1[0]}.`;n=`\${btn('follow',"tmp='stealth';next('other/combat')")} | \${btn('leave',"tmp=x;next()")}`;break
                case 2:t=`You hear a noise behind you. It's a ${$1[0]}!`;n=`\${btn('fight',"tmp='alert';next('other/combat')")} | \${btn('run',"ep[0]-=1;sbu('ep');tmp=x;next()")}`;break};break
        case '2'://camp/traders
            if(tmpn==0){t=`You encounter a group of adventurers. They will give you a good price for your materials.`;n=`\${btn('trade',"tmpn=1;next()")} | \${btn('leave',"tmp=x;next()")}`}
            else{t=`You talk to one of the adventurers. ${['He','She'][rng(1)]} explains the value of your materials.`
                let $0='Nothing:-1!0'
                mat.slice(1).forEach(($a,$b)=>{let $1=(11-matr[1+$b])*5;$0+=','+$a+' ('+$1+'):'+$a+'!'+$1})
                n=`\${btn('leave',"tmp=x;next()")}<br><br>\${lst('sell',"${$0}")} \${btn('sell',"remitem('mat',elm('sell',1).value.arr(0));money+=Number(elm('sell').value.arr(1));next()")}`};break
        case '3'://find material
            if(tmpn==0){tmpa=[['Poison Mushrooms.1.6.4.2.7','Illusion Flowers.1.7.0.3.7','Grow Berries.1.5.4.2.7'][rng(2)]]
                t=`You find some ${tmpa[0].split('.')[0]}.`
                n=`\${btn('take',"tmpn=1;next()")} | \${btn('leave',"tmp=x;next()")}`}
            else{let $1=data(0);let $2=$1[1].split('.');$2[pos[2]]-=1;$1[1]=$2.join('.');data(0,$1);additem('mat',tmpa[0].split('.'))
                t=`You take the ${tmpa[0].split('.')[0]} before leaving`;n=`\${btn('next',"tmp=x;next()")}`};break
        case '4'://find item/chest
            switch(tmpn){
                case 0:tmpn=rng(4);tmpa=[['Corrupted  Iron '+['Spear','Sword','Knife','Staff','Axe'][rng(4)],'Energy Potion','Corrupted Key','Padded Robe','Corrupted Chest'][tmpn]]
                    if(tmpn==0){tmpa[1]=[tmpa[0],1,0,7,tmpa[0].split(' ')[2]+'!0!0!2']}else{tmpa[1]=[[tmpa[0],1,5,6,'0!20!0'],[tmpa[0],1,3,8,x],[tmpa[0],1,1,6,'0!2!0!0']][tmpn-1]}
                        t=`You see something hidden in some ${['vines','bushes'][rng(1)]}.`
                        n=`\${btn('uncover',"tmpn=1;next()")} | \${btn('ignore',"tmp=x;next()")}`;break
                case 1:t=`It's a ${tmpa[0]}.`
                    if(tmpa[0]=='Corrupted Chest'){if(itm.includes('Corrupted Key')){t+=` You can open it with your Corrupted Key.`;n=`\${btn('unlock',"tmpn=2;next()")} | `}else{t+=` You don't have a key to unlock it.`;n=``}}
                    else{n=`\${btn('take',"tmpn=2;next()")} | `};n+=`\${btn('leave',"tmp=x;next()")}`;break
                case 2:let $1=data(0);let $2=$1[1].split('.');$2[pos[2]]-=1;$1[1]=$2.join('.');data(0,$1)
                    if(tmpa[0]=='Corrupted Chest'){remitem('itm','Corrupted Key');t=`You unlock the chest; it holds a book from a series called "Plantel Illusions".`;add('item',['Illusion Mist Book',1,7,6,'1'])}
                    else{additem('itm',tmpa[1]);t=`You take the ${tmpa[0]}.`}
                    n=`\${btn('leave',"tmp=x;next()")}`;break};break
        case '5'://dangerous event
                tmp=x;n=`\${btn('back',"next()")}`;t=`You find nothing.`
            switch(tmpa[0]){
                case x:tmpa=[['hunt','vine'][rng(1)]]
                    t=`As you explore the area, you find that many thick vines are beginning to surroud you.`
                    n=`\${btn('run',"tmpn=1;next()")} | \${btn('stay still',"tmpn=2;next()")}`;break
                case 'hunt':
                    if(tmpn==1){t=`As you run away, the vines follow. A Giant Tendrid is chasing you.`
                        n=`\${btn('fight',"tmpa=['fight'];next()")} | \${btn('keep running',"tmpa=['escape'];next()")}`}
                    else{t=`You stand still as a Giant Tendrid passes by you. Its tendrils havent found you.`
                        n=`\${btn('fight',"tmpa=['fight'];next()")} | \${btn('keep still',"tmpa=['escape'];next()")}`};break
                case 'vine':
                    if(tmpn==1){tmp=x;t=`As you run away, you notice some vines explore where you were standing. You manage to escape without them finding you.`;n=`\${btn('next',"next()")}`}
                    else{tmpn=0;tmpa=['found'];t=`You stay still as the vines continue to surround you. Some of them wrap around you, sapping your strength.`;n=`\${btn('found',"next()")}`};break
                case 'escape':ptime[30]
                    if(tmpn==1){ep[0]-=10;sbu('ep');t=`After a while, you manage to escape the Giant Tendrid.`;tmp=x;n=`\${btn('next',"next()")}`}
                    else{t=`You keep hiding until the Giant Tendrid leaves the area completely.`;tmp=x;n=`\${btn('next',"next()")}`};break
                case 'found':hp[0]-=7;ep[0]-=7;sbu()
                    if(hp[0]<1||ep[0]<1){t=`They continue to sap you until you lose consciousness.`;n=`\${btn("next","tmpa=['faint',w+'terrain/jungle','5',0,'wake','${tmpan.join()}'];tmpn=2;next('other/rest')")}`}
                    else{tmp=x;t=`After a moment, the vines seems satisfied and retreat without you having to fight them.`;n=`\${btn('leave',"next()")}`};break
                case 'fight':if(tmpan[1]==1){tmpan[0]=100-tmpan[0]}
                    t=`You decide to fight the Giant Tendrid.`
                    n=`\${btn('combat',"next('other/combat')")}`
                    if(tmpn==1){tmp='alert'}
                    else{tmp='stealth'}
                    tmpa=['material','Giant Tendrid vine.2.4.0.2.5','0.6.6.0.0.5.0.0.15.10.11','Giant Tendrid','thick tendrils',x,'world/terrain/jungle','cbt','0','x',tmpan.join()]
                    tmpan=[5,1,20,18,14,0];break
                case 'wake':tmp=x;t=`You awaken after a while and find that the vines are gone.`;n=`\${btn('next',"next()")}`;break};break}
    end()
})()