(function () {
    switch(tmp){
        case x:break;
        case 'alchemy':
            t=`You are in the alchemy shop. `
            if($1[1]>0){t+=psn[pid.indexOf($1[1])];if(!aff.includes('Basic Alchemy')){add('affinity',['Basic Alchemy',10,8,1,0])}
                n+=`\${btn('work',"pfav[pid.indexOf($1[1])]+=1;t='You mix alchemy materials for 4 hours.';xp('Basic Alchemy',5,1);money+=6;ptime([0,4]);if(time[1]<5||time[1]>20){next()}")}`}
            else{t+=`The alchemist`;t+=` ${['','watches','greets','greets','welcomes'][$2]} you.`
            n+=`\${btn('talk',"tmpr('new',0,w+'major/city,'+tmp+',0,${$1[5]+rng(3)+rng(1)}......');t='You can work here if you are interested.';next('other/interact')")} to the alchemist`}
            n+=` | \${btn('leave',"tmp='market';next()")}`;break
    }
    end()
})()