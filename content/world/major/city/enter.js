(function () {//tmp,tmpa,tmpan
    //tmpa: [0-citydata,1-marketdata,2-officedata,3-churchdata,4-housedata] citydata:(house y/n) marketdata:(alchemy job y/n!smith job y/n!alchemistid!smithid!) officedata:() churchdata:() housedata:()
    //tmpan:[0-mainrace,1-wealth,2-safety,3-corruption,4-facefame,5-namefame,6-reputation,7-contribution]
    switch(tmp){
        case x:
            tmpa=data(1).slice(0,-1)
            if(tpma[0]==''){tpma=['n','n!n!!','?','?','?'];tmpan=[rng(3),rng(100),rng(100),rng(100),0,0,0,0];data(1,[...tmpa,tmpan.join('.')])}
            else{tmpan=data(1).slice(-1)[0].split('.').map(Number)}
            t=`You are approach the city gate. One of the guards is checking Identity Cards.`
            let $3=itm.indexOf('ID')
            if($3==-1){t+=` You do not have an ID.`;n=`\${btn('approach',"tmp='id';next()")} the guard<br><br>`}
            else{n=`\${btn('approach',"tmp='enter';next()")} the guard<br><br>`}
            n+=`\${btn('leave',"tmp='back';next()")}`;break
        case 'enter':
            t=`The guard checks your Identity Card and lets you enter the city.`
            n=`\${btn('enter',"tmp=x;next(w+'city')")}`;break
        case 'id':
            t=`The guard informs you that an Identity Card is required to enter the city. `
            n=`\${btn('leave',"tmp='back';next()")}`
            if(tmpan[4]>50&&tmpan[6]>25){t+=`The guard happens to know you and offers to get you a free card.`;n+=` | \${btn('card',"add('item',['Identity Card',1,3,8,race[0]]);next()")}`}
            else{t+=`You can buy one for 10.`;if(money>9){n+=` | \${btn('buy',"money-=10;add('item',['Identity Card',1,3,8,race[0]]);next()")}`}};break
        case 'enterid':
            t=`You recieve your card and enter the city.`
            n=`\${btn('enter',"tmp=x;next(w+'city')")}`;break
        case 'leave':
            t=`There are 8 ways to leave the city.`
            n=`\${btn('leave',"w='world/';tmpr(x,10,'out');pos[2]=1*elm('sdir').value;next('other/explore')")} through the \${lst('sdir',"North:0,Northeast:1,East:2,Southeast:3,South:4,Southwest:5,West:6,Northwest:7")} exit | \${btn('back',"tmp=x;next()")}`;break
        case 'back':
            w='world/';tmpr(x,10,'out');pos[2]=(pos[2]+4)%8
            t=`You turn around and leave.`
            n=`\${btn('next',"w='world/';tmpr(x,10,'out');next('other/explore')")}`;break
    }
    end()
})()