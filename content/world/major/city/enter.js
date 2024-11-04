(function () {//tmp
    //data: [0 citydata, 1 marketdata, 2 officedata, 3 reputation(0-4|2), 4 dominantrace(0-3)] + []
    switch(tmp){
        case x:
            tmpa=data(1)
            if(tpma[0]==''){tpma=['n','n','n','2',rng(3)];data(1,tmpa)}
            let $2=Number($1[4])//friendliness
            if($1[5]==race[0][0]){$2+=1}else if($1[5]==cycle(3,race[0][0]-2)){$2-=1}
            t=`You are approach the city gate.`
            n=`\${btn('back',"tmp='back';next()")}`;break
        case 'leave':
            t=`There are 8 ways to leave the city.`
            n=`\${btn('leave',"w='world/';tmpr(x,10,'out');pos[2]=1*elm('sdir').value;next('other/explore')")} through the \${lst('sdir',"North:0,Northeast:1,East:2,Southeast:3,South:4,Southwest:5,West:6,Northwest:7")} exit | \${btn('back',"tmp=x;next()")}`;break
        case 'back':
            w='world/';tmpr(x,10,'out');pos[2]=(pos[2]+4)%8
            t=`You turn around an leave.`
            n=`\${btn('leave',"next('other/explore')")}`;break
    }
    end()
})()