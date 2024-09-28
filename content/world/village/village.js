(function () {
    //just a village; markets,jobs,housing,bedding
    switch(tmp){
        case x:
            t=`You are in the village.`
            n=`\${btn('market',"tmp='market';next()")} | \${btn('inn',"tmp='inn';next()")}<br><br>\${btn('house',"tmp='house';next()")}<br><br>\${btn('leave',"tmp='leave';next()")}`;break
            case 'inn':
                t=`You are at an inn.`
                n=`\${btn('rest',"tmpa=['inn',w+'major/village','inn','0'];next('other/rest')")} | \${btn('back',"tmpr();next()")}`;break
        case 'market':
            t=`You are at the market.`
            n=`\${btn('back',"tmp=x;next()")}`;break
        case 'house':
            t=`You can buy a house in the village.`
            n=`\${btn('back',"tmp=x;next()")}`;break
        case 'leave':
            t=`There are 8 paths to leave the village.`
            n=`\${btn('leave',"w='world/';tmpr(x,10,'out');pos[2]=1*elm('sdir').value;next('other/explore')")} through the \${lst('sdir',"North:0,Northeast:1,East:2,Southeast:3,South:4,Southwest:5,West:6,Northwest:7")} path | \${btn('back',"tmp=x;next()")}`;break
    }
    end()
})()