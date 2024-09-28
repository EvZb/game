(function () {
    //the base of a large organization. high value trading,high value jobs,bedding
    switch(tmp){
        case x:
            t=`You are in the fort. People walk in and out of the various buildings.`
            n=`\${btn('guest building',"tmp='room';next()")}<br><br>\${btn('leave',"tmp='leave';next()")}`
            break;
        case 'leave':
            t=`There are 8 ways to leave the fort.`
            n=`\${btn('leave',"w='world/';tmpr(x,0,'out');pos[2]=1*elm('sdir').value;next('other/explore')")} through the \${lst('sdir',"North:0,Northeast:1,East:2,Southeast:3,South:4,Southwest:5,West:6,Northwest:7")} exit | \${btn('back',"tmp=x;next()")}`;break;
        case 'room':
            t=`You are at the guest building. You can use a room to rest here.`
            n=`\${btn('find a room',"tmp='rest';next()")} | \${btn('back',"tmp=x;next()")}`;break;
        case 'rest':
            t=`You are in a room. You can rest here.`
            n=`\${btn('rest',"tmpa=['inn',w+'major/fort','rest','0'];next('other/rest')")} | \${btn('back',"tmpr('room');next()")}`;break
    }
    end()
})()