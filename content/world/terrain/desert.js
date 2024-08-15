(function () {//tmpn is reserved
    if(tmp==x){
        t=`You decide to explore the area.`
        n=`\${btn("explore","tmp=${rng(999)};next()")} | \${btn("back","tmp=x;tmp2='${['in','out'][rng(1)]}';next('other/explore')")}`}
    else if(tmp<1000){
        t=`You find nothing`
        n=`\${btn("explore","tmp=${rng(999)};next()")} | \${btn("back","tmp=x;tmp2='${['in','out'][rng(1)]}';next('other/explore')")}`}
    end()
})()