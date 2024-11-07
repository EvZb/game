(function () {//tmpa=[rest type,next,tmp,tmpn,tmpa,tmpan] | tmpn=hours | tmpan=[total hours] | tmp2=total hours
    if(tmpa[0]=='faint'){
        heal(tmpn,1);ptime([0,tmpn])
        t=`You are unconscious.`
        n=`\${btn('awaken',"tmpr('${tmpa[2]??x}',${tmpa[3]??0},'${tmpa[4]??x}','${tmpa[5]??'0'}');next('${tmpa[1]}')")}`}
    else{
        if(tmpn>0){heal(tmpn);ptime([0,tmpn]);tmpan[0]+=tmpn;tmpn=0}
        t=`You are resting. You have rested for ${tmpan[0]} hours.`
        n=`\${btn('rest',";tmpn=Number(elm('slst').value);next()")} for \${lst('slst',"1:1,2:2,3:3,4:4,6:6,8:8,10:10")} hours`
        if(hp[0]>0&&ep[0]>0&&sp[0]>0){
            if(tmpa[0]=='inn'&&tmpan[0]>14){t=`You can't rest any longer.`
                n=`\${btn('done',"tmpr('${tmpa[2]??x}',${tmpa[3]??0},'${tmpa[4]??x}','${tmpa[5]??'0'}');tmp2='${tmpan[0]}';next('${tmpa[1]}')")}`}
            else{n+=` | \${btn('done',"tmpr('${tmpa[2]??x}',${tmpa[3]??0},'${tmpa[4]??x}','${tmpa[5]??'0'}');tmp2='${tmpan[0]}';next('${tmpa[1]}')")}`}
            }}
    end()
})()