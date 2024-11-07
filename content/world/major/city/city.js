(function () {let $1=tmpa[0].split('!')
    switch(tmp){
        case x:
            t=`You are in the city.<br>`
            n=`\${btn('market',"tmp='market';next()")} | \${btn('church',"tmp='church';next()")}<br><br>`
            if($1[0]=='y'){n+=`\${btn('house',"next(w+'home')")}`}else{n+=`\${btn('house',"tmp='house';next()")}`}
            n+=` | \${btn('inn',"tmp='inn';next()")}<br><br>\${btn('city hall',"tmp='office';next()")} | \${btn('arena',"tmp='arena';next()")}<br><br>\${btn('city gate',"tmp='leave';next()")}`
            if(rng(9)==0){if(data(0)[0]==''){data(0,[rng(7),rng(8,1),'n','9.9.9.9.9.9.9.9'])}
                t+=`You overhear ${['a group of people talking about','a couple discussing','someone muttering about'][rng(2)]} a ${chunk[loc()].arr(2)} in the ${direction[data(0)[1]]}.`}
            else{t+=`People walk along the roads; most of them are ${races[tmpan[0]]}.`};break
        case 'leave':
            t=`You walk to the city gate.`
            n=`\${btn('next',"tmp='leave';next(w+'enter')")}`;break
        case 'market':
            ptime([5])
            t=`You head to the market.`
            n=`\${btn('next',"next(w+'market')")}`;break
        case 'office':
            t=`You enter the city hall.`
            n=`\${btn('leave',"tmp=x;next(w+'office')")}`;break
        case 'house':
            t=`You can buy a house in the city for 100.`;n=''
            if(money>99){n+=`\${btn('buy',"money-=100;tmp='house2';next()")}<br><br>`}
            n+=`\${btn('back',"tmp=x;next()")}`;break
        case 'inn':
            t=`You are at an inn.`
            n=`\${btn('rest',"tmpa=['inn',w+'major/city','inn','0'];next('other/rest')")} | \${btn('back',"next()")}`;break
        case 'church':
            t=`You enter the church.`
            n=`\${btn('next',"tmp=x;next(w+'church')")}`;break
        case 'arena':
            t=`You head to the arena.`
            n=`\${btn('next',"tmp=x;next(w+'arena')")}`;break
        case 'house2':
            t=`You buy the house.`
            n=`\${btn('enter',"tmp=x;next(w+'house')")} | \${btn('leave',"tmp=x;next()")}`;break
    }
    end()
})()