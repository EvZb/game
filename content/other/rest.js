(function () {//tmpa=[rest type,next,tmp,tmpn] | tmpn=hours | tmpan=[total hours] (no reset)
    if(tmpa[0]=='faint'){
        heal(10*tmpn,1);ptime([0,tmpn])
        t=`You are unconscious.`
        n=`\${btn('awaken',"tmpr('${tmpa[2]}',${tmpa[3]});next('${tmpa[1]}')")}`}
    else{
        if(tmpn>0){heal(20*tmpn);ptime([0,tmpn]);tmpan[0]+=tmpn;tmpn=0}
        t=`You are resting. You have rested for ${tmpan[0]} hours.`
        n=`\${btn('rest',";tmpn=Number(elm('slst').value);next()")} for \${lst('slst',"1:1,2:2,3:3,4:4,6:6,8:8,10:10")} hours `
        n+=`| \${btn('done',"tmpr('${tmpa[2]}',${tmpa[3]},x);next('${tmpa[1]}')")}`}
    sbu()
    end()
})()