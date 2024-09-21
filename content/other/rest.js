(function () {//tmpa=[rest type,next,tmp,tmpn,tmpa,tmpan] | tmpn=hours | tmpan=[total hours] (no reset) | tmpan data can only be set after fainting
    if(tmpa[0]=='faint'){
        heal(tmpn,1);ptime([0,tmpn])
        t=`You are unconscious.`
        n=`\${btn('awaken',"tmpr('${tmpa[2]}',${tmpa[3]},'${tmpa[4]}','${tmpa[5]}');next('${tmpa[1]}')")}`}
    else{
        if(tmpn>0){heal(tmpn);ptime([0,tmpn]);tmpan[0]+=tmpn;tmpn=0}
        t=`You are resting. You have rested for ${tmpan[0]} hours.`
        n=`\${btn('rest',";tmpn=Number(elm('slst').value);next()")} for \${lst('slst',"1:1,2:2,3:3,4:4,6:6,8:8,10:10")} hours`
        if(hp[0]>0&&ep[0]>0&&sp[0]>0){
            if(tmpan[0]>14){t=`You can't rest any longer.`
                n=`\${btn('done',"tmpr('${tmpa[2]}',${tmpa[3]},'${tmpa[4]}','${tmpan[0]}');next('${tmpa[1]}')")}`}
            else{n+=` | \${btn('done',"tmpr('${tmpa[2]}',${tmpa[3]},'${tmpa[4]}','${tmpan[0]}');next('${tmpa[1]}')")}`}
            }}
    end()
})()