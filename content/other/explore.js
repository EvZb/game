(function () {//tmpn=0 to 100 (distance) | tmp | tmpa=[in/out, terrain, major/terrain, terrain/major, turn/none]
    if(tmpa.length==1){tmpa=[tmpa[0],chunk[loc()].arr(0),chunk[loc()].arr(1),chunk[loc('d')].arr(0),x];if(tmpa[0]='out'){tmpa=['out',tmpa[1],tmpa[3],tmpa[2],x]}}
    if(tmpa[4]!=x){
        if(tmpa[0]=='out'){tmpa=['in',tmpa[1],tmpa[3],tmpa[2],x]
        if(tmpn==100){tmp='walk'}}
    else{tmpa=['out',tmpa[1],tmpa[3],tmpa[2],x]}}
    switch(tmp){
    case x://standing
        t=`You are in a ${tmpa[1]}. `
        if(tmpn>60){t+=`There is a ${tmpa[2]} ahead. A ${tmpa[3]} is long behind you.`}else if(tmpn<40){t+=`There is a ${tmpa[2]} far in the distance. A ${tmpa[3]} is behind you.`}else{t+=`There is a ${tmpa[2]} in the distance. A ${tmpa[3]} is far behind you.`}
        n=`\${btn('walk',"tmpn+=10;ptime([0,1]);tmp='walk';next()")} | \${btn('turn around',"tmpa[4]='turn';tmpn=100-tmpn;pos[2]=(pos[2]+4)%8;next()")}<br><br>`
        n+=`\${btn('explore',"tmp='explore';next()")}`;break
    case 'walk'://travelling
        if(tmpn>99){
            let $2=``
            if(tmpa[0]=='in'){$2=`tmpr();next(w+'major/${tmpa[2]}')`}
            else{$2=`tmp=x;tmpn=10;tmpa[4]='turn';pos[0]=${cycle(wsize,pos[2]+rdirection[pos[2]]%wsize[cworldid])};pos[1]=${cycle(wsize,pos[2]+rdirection[8+pos[2]]%wsize[cworldid])};next()`}
            t=`The ${tmpa[2]} is in front of you. You are at the ${direction[(pos[2]+4)%8]} side of it.`;n=`\${btn('to ${tmpa[2]}',"${$2}")} | \${btn('back to ${tmpa[1]}',"tmp=x;tmpn=0;tmpa[4]='turn';pos[2]=(pos[2]+4)%8;next()")}`
            if(tmpa[0]=='in'){n+=` | \${btn('walk around',"pos[2]=1*elm('dlst').value;next()")} to the \${lst('dlst',"${direction[(pos[2]+3)%8]}:${(pos[2]+7)%8},${direction[(pos[2]+5)%8]}:${(pos[2]+1)%8}")} side of the ${tmpa[2]}`}}
        else{let $3=""
            if(rng(9)==0){$3="event';t='As you are walking, '"}else{$3="walk'"}
            t=`You are walking in the ${tmpa[1]}. `
            if(tmpn>60){t+=`There is a ${tmpa[2]} ahead. The ${tmpa[3]} is long behind you.`}else if(tmpn<40){t+=`There is a ${tmpa[2]} far in the distance. The ${tmpa[3]} is behind you.`}else{t+=`There is a ${tmpa[2]} in the distance. The ${tmpa[3]} is far behind you.`}
            n=`\${btn('keep walking',"tmpn+=10;ptime([0,1]);tmp='${$3};next()")} | \${btn('turn around',"tmp=x;tmpn=100-tmpn;tmpa[4]='turn';pos[2]=(pos[2]+4)%8;next()")}<br><br>`
            n+=`\${btn('explore',"tmp='explore';next()")}`};break
    case 'explore'://exploration option
        let $4=data(0)
        t=`You decide to explore the area.`
        if($4[0]==''){data(0,[rng(7),rng(8,1)])}
        if((tmpa[0]=='out'&&$4[0]==pos[2])||(tmpa[0]=='in'&&$4[0]==(pos[2]+4)%8)&&$4[1]*10==tmpn){n=`\${btn('next',"ptime([30]);tmpan=[tmpn,0,0];if(tmpa[0]=='in'){tmpan[1]=1};tmp=x;tmpn=0;next(w+'minor/${chunk[loc()].arr(2)}')")}<br><br>\${btn('back',"tmp=x;next()")}`}
        else{n=`\${btn('next',"ptime([30]);tmpan=[tmpn,0];if(tmpa[0]=='in'){tmpan[1]=1};tmp='${rng(7)}';next(w+'terrain/${tmpa[1]}')")}<br><br>\${btn('back',"tmp=x;next()")}`};break
    case 'event'://travel events
        switch(rng(1)){
            case 0:t+=`nothing happens.`
            case 1:t+=`something happens.`;break}
        if(hp[0]<1){t+=` You lose consciousness.`;n=`\${btn("next","tmpa=['faint','other/explore',x,${tmpn}];tmpn=2;next('other/rest')")}`}else{n=`${btn("next","tmp=x;next()")}`};break
    }
    end()
})()