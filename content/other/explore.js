(function () {//tmpn=0 to 100 (distance) | tmp | tmpa=[in/out, terrain, major/terrain, terrain/major, turn/none]
    //data: [minor direction 0-7 minor distance 1-9 minor known y/n] [directional.loot.remaining]
    if(tmpa.length==1){tmpa=[tmpa[0],chunk[loc()].arr(0),chunk[loc()].arr(1),chunk[loc('d',pos[2])].arr(0),x];if(tmpa[0]='out'){tmpa=['out',tmpa[1],tmpa[3],tmpa[2],x]}}
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
        if(tmpn>99){let $2=``
            if(tmpa[0]=='in'){$2=`tmpr();w+='major/${tmpa[2]}/';next(w+'enter')`}
            else{$2=`tmp=x;tmpn=10;pos[0]=${cycle(wsize,pos[0]+rdirection[pos[2]]%wsize[cworldid])};pos[1]=${cycle(wsize,pos[1]+rdirection[8+pos[2]]%wsize[cworldid])};tmpa=['in',chunk[loc()].arr(0),chunk[loc()].arr(1),tmpa[1],x];next()`}
            t=`The ${tmpa[2]} is in front of you. You are at the ${direction[(pos[2]+4)%8]} side of it.`;n=`\${btn('to ${tmpa[2]}',"${$2}")} | \${btn('back to ${tmpa[1]}',"tmp=x;tmpn=0;tmpa[4]='turn';pos[2]=(pos[2]+4)%8;next()")}`
            if(tmpa[0]=='in'){n+=` | \${btn('walk around',"pos[2]=1*elm('dlst').value;tmpa[3]=chunk[loc('d',pos[2])].arr(0);next()")} to the \${lst('dlst',"${direction[(pos[2]+3)%8]}:${(pos[2]+7)%8},${direction[(pos[2]+5)%8]}:${(pos[2]+1)%8}")} side of the ${tmpa[2]}`}}
        else{let $3=""
            if(rng(9)==0){$3="event';t='As you are walking, '"}else{$3="walk'"}
            t=`You are walking in the ${tmpa[1]}. `
            if(tmpn>60){t+=`There is a ${tmpa[2]} ahead. The ${tmpa[3]} is long behind you.`}else if(tmpn<40){t+=`There is a ${tmpa[2]} far in the distance. The ${tmpa[3]} is behind you.`}else{t+=`There is a ${tmpa[2]} in the distance. The ${tmpa[3]} is far behind you.`}
            n=`\${btn('keep walking',"tmpn+=10;ptime([0,1]);tmp='${$3};next()")} | \${btn('turn around',"tmp=x;tmpn=100-tmpn;tmpa[4]='turn';pos[2]=(pos[2]+4)%8;next()")}<br><br>`
            n+=`\${btn('explore',"tmp='explore';next()")}`};break
    case 'explore'://exploration option
        let $4=data(0);let $5=''
        t=`You decide to explore the area.`
        if($4[0]==''){$4=[''+rng(7)+rng(8,1)+'n','9.9.9.9.9.9.9.9'];data(0,$4)}
        if((tmpa[0]=='out'&&$4[0][0]==pos[2]&&$4[0][1]*10==tmpn)||(tmpa[0]=='in'&&$4[0][0]==(pos[2]+4)%8&&(10-$4[0][1])*10==tmpn)){
            if($4[0][2]=='n'){$5="data(0,['"+data(0)[0].arr(2,'y','')+"','"+$4[1]+"']);"}else{t+=` There is a ${chunk[loc].arr(2)} near here.`}
            n=`\${btn('next',"${$5}ptime([30]);tmpan=[tmpn,0];if(tmpa[0]=='in'){tmpan[1]=1};tmpa=[x];tmp=x;tmpn=0;next(w+'minor/${chunk[loc()].arr(2)}')")}<br><br>\${btn('back',"tmp=x;next()")}`}
        else{$5=rng(5)
            if($4[1].split('.')[pos[2]]<1){t+=` There is nothing you haven't seen here.`;$5=rng(2)}
            n=`\${btn('next',"tmpn+=(${10-rng(4)*5});ptime([30]);tmpan=[tmpn,0];if(tmpa[0]=='in'){tmpan[1]=1};tmpa=[x];tmp='${$5}';tmpn=0;next(w+'terrain/${tmpa[1]}')")}<br><br>\${btn('back',"tmp=x;next()")}`};break
    case 'event'://random travel events
        switch(rng(2)){
            case 0:t+=`you find an injured person along the path. They seem to have been running and is too exhausted to move.`;n=`\${btn('next',"tmp=x;next()")}`;break
            case 1:t+=`someone walks up to you before threatening you into handing over your money.`;n=`\${btn('next',"tmp=x;next()")}`;break
            case 2:t+=`a strange person walks up to you and asks you to give him some money in exchange for an item.`;n=`\${btn('next',"tmp=x;next()")}`;break};break
    }
    end()
})()