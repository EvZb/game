(function () {
    switch(tmp){
        case x:
            t=`You are in the city.<br>`
            n=`\${btn('market',"tmp='market';next()")} | \${btn('inn',"tmp='inn';next()")} | \${btn('church',"tmp='church';next()")}<br><br>\${btn('leave city',"tmp='leave';next()")}`
            if(rng(9)==0){if(data(0)[0]==''){data(0,[rng(7),rng(8,1),'n','9.9.9.9.9.9.9.9'])}
                t+=`You overhear ${['a group of people talking about','a couple discussing','someone muttering about'][rng(2)]} a ${chunk[loc()].arr(2)} in the ${direction[data(0)[1]]}.`}
            else{t+=`People walk along the roads; most of them are ${races[tmpa[4]]}.`};break
        case 'leave':
            t=`There are 8 ways to leave the city.`
            n=`\${btn('leave',"w='world/';tmpr(x,10,'out');pos[2]=1*elm('sdir').value;next('other/explore')")} through the \${lst('sdir',"North:0,Northeast:1,East:2,Southeast:3,South:4,Southwest:5,West:6,Northwest:7")} exit | \${btn('back',"tmp=x;next()")}`;break
        case 'market':
            ptime([5])
            t=`You head to the market.`
            n=`\${btn('next',"next(w+'market')")}`;break
        case 'office':
            t=`You are in the office.`
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
        case 'sect':
            t=`You are at the church.`
            n=`\${btn('pray',"t='You pray at the church.';next()")} | \${btn('back',"tmp=x;next()")}`;break
    }
    end()
})()