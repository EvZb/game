(function () {//tmp
    //a city. sect association, arena, competitions, organization gatherings, jobs
    //data: [0 house y/n, 1 alchemist id, 2 smith id, 3 god id, 4 reputation (0-4 | 2), 5 dominant race (0-3)]
    let $1=data(1)
    if($1[0]==''){$1=['n','n','n','n','2',rng(3)];data(1,$1)}
    let $2=Number($1[4])//friendliness
    if($1[5]==race[0][0]){$2+=1}else if($1[5]==cycle(3,race[0][0]-2)){$2-=1}
    switch(tmp){
        case x:
            t=`You are in the city.<br>`
            n=`\${btn('market',"tmp='market';next()")} | \${btn('inn',"tmp='inn';next()")} | \${btn('church',"tmp='church';next()")}<br><br>\${btn('leave city',"tmp='leave';next()")}`
            if(rng(9)==0){if(data(0)[0]==''){data(0,[rng(7),rng(8,1),'n','9.9.9.9.9.9.9.9'])}
                t+=`You overhear ${['a group of people talking about','a couple discussing','someone muttering about'][rng(2)]} a ${chunk[loc()].arr(2)} in the ${direction[data(0)[1]]}.`}
            else{t+=`People walk along the roads; most of them are ${races[$1[5]]}.`};break
        case 'leave':
            t=`There are 8 ways to leave the city.`
            n=`\${btn('leave',"w='world/';tmpr(x,10,'out');pos[2]=1*elm('sdir').value;next('other/explore')")} through the \${lst('sdir',"North:0,Northeast:1,East:2,Southeast:3,South:4,Southwest:5,West:6,Northwest:7")} exit | \${btn('back',"tmp=x;next()")}`;break
        case 'market':
            t=`You are at the market. There are two notable shops.`
            n=``
            if($2==0){n=`\${btn('alchemy shop',"tmp='alchemy';next()")} | \${btn('smith shop',"tmp='smith';next()")}<br><br>`;t+=` You are not allowed to access them.`}
            n+=`\${btn('back',"tmp=x;next()")}`;break
        case 'alchemy':
            t=`You are in the alchemy shop. `
            if($1[1]>0){t+=psn[pid.indexOf($1[1])];if(!aff.includes('Basic Alchemy')){add('affinity',['Basic Alchemy',10,8,1,0])}
                n+=`\${btn('work',"pfav[pid.indexOf($1[1])]+=1;t='You mix alchemy materials for 4 hours.';xp('Basic Alchemy',5,1);money+=6;ptime([0,4]);if(time[1]<5||time[1]>20){next()}")}`}
            else{t+=`The alchemist`;t+=` ${['','watches','greets','greets','welcomes'][$2]} you.`
            n+=`\${btn('talk',"tmpr('new',0,w+'major/city,'+tmp+',0,${$1[5]+rng(3)+rng(1)}......');t='You can work here if you are interested.';next('other/interact')")} to the alchemist`}
            n+=` | \${btn('leave',"tmp='market';next()")}`;break
        case 'smith':
            t=`You are in the smith shop.`
            n=`\${btn('leave',"tmp='market';next()")}`;break
        case 'house':
            t=`You can buy a house in the city.`
            n=`\${btn('back',"tmp=x;next()")}`;break
        case 'inn':
            t=`You are at an inn.`
            n=`\${btn('rest',"tmpa=['inn',w+'major/city','inn','0'];next('other/rest')")} | \${btn('back',"tmpr();next()")}`;break
        case 'church':
            t=`You are at the church.`
            n=`\${btn('pray',"t='You pray at the church.';next()")} | \${btn('back',"tmp=x;next()")}`;break
        case 'listen':
            t=`You listen to the group of ${races[$1[5]]}`;break
    }
    end()
})()