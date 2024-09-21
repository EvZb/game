(function () {//tmpa=[tmp,tmpn] | tmpn | tmp
    //data: [graves explored] [graves total] [chapel searches] [chapel items] [diety]
    switch(tmpn){
        case 0://entrance
            if(sp[0]<3){
                t="There is a cemetery ahead of you, but you are too weak to enter it."
                n=`\${btn("leave","tmpn=9;next()")}`}
            else{
                t=`You enter a cemetery. There is a chapel ahead and some graves nearby.`;
                n=`\${btn("to chapel","tmpn=1;next()")} | \${btn("to graves","tmpn=2;next()")}<br><br>\${btn("leave","tmpn=9;next()")}`}
            break;
        case 1://inside chapel
            t=`You are in the chapel`;
            n=`\${btn("pray","tmpn=3;next()")} | \${btn("search","tmpn=4;next()")}`
            break;
        case 2://walking around
            t="You are among the graves."
            n=`\${btn("visit a grave","tmpn=5;next()")}` 
            break;
        case 3://praying
            t=`You pray.`
            n=`\${btn("continue praying","")}`
            break;
        case 4://search chapel 
            t="You search the chapel."
            n=`\${btn("keep looking","")}`
            break;
        case 5://grave
            t="You approach a grave."
            n=`\${btn("respect the dead","fun('txt','Thank you.')")} | \${btn("rob","tmpn=6;next()")}`
            break;
        case 6://robbing
            t="You decide to rob the grave."
            n=`\${btn("dig","tmpn=7;next()")}`
            break;
        case 7://loot
            tmp=rng(2)    
            tmp=["a gold ingot","a small bag of money","nothing"][tmp]
            t=`you find ${tmp}.`
            if(tmp=="nothing"){
                n=`${btn("leave","tmpn=2;next()")}`}
            else{
                if(tmp=="a gold ingot"){add('material',['Gold',1,5,1,1,7])}else{money+=rng(10,5)}
                n=`\${btn("take it","if(rng(2)==0){tmpn=8}else{tmpn=2};next()")} or \${btn("leave it","tmpn=2;next()")}`}
            break;
        case 8://fight
            sp[0]-=Math.max(0,10-def[2])
            if(sp[0]<1){
                t="A ghost attacks you, but you are to weak to fight back."
                n=`\${btn("escape","tmpn=0;next()")}`}
            else{
                t="A ghost attacks you, but you manage fight it off."
                n=`\${btn("walk away","tmpn=2";next())}`} 
            sbu("sp")
            break;
        case 9://leave
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`
        }
    if(tmpn!=9){
    tmpn=[7,0,0,1,1,2,5][tmpn]
    if(tmpn<7){n+=` | ${btn("back","tmpn="+tmpn+";next()")}`}}
    end()
})()
