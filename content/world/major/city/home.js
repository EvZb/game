(function () {let $1=[tmpa[4].split('',3)]// alchemy y/n|smith y/n|imbue y/n
    switch(tmp){
        case x:
            t=`You are in you house in the city.`
            n=`\${btn('rest',"tmpa=['home',w+'home',x,'0',tmpa.join(),tmpan.join()];tmpan=[0];next('other/rest')")} | \${btn('leave',"next(w+'city')")}`
            if($1[0]=='y'){n+=`<br><br>\${btn('alchemy',"tmp='alchemy';next()")}`};if($1[1]=='y'){n+=`<br><br>\${btn('smith',"tmp='smith';next()")}`};if($1[2]=='y'){n+=`<br><br>\${btn('imbue',"tmp='imbue';next()")}`};if(tmpa[3].slice(0,3)!='yyy'){n+=`<br><br>\${btn('extend house',"tmp='buy';next()")}`};break
        case 'alchemy':break
        case 'smith':break
        case 'imbue':break
        case 'buy':
            t=`You can extend your house with extra rooms for 100 each.`
            n=``
            if($1[0]=='n'){n+=`\${btn('alchemy',"if(money>99){money-=100;tmpa[4]=tmpa[4].arr(0,'y','')};next()")}<br><br>`};if($1[1]=='n'){n+=`\${btn('smith',"if(money>99){money-=100;tmpa[4]=tmpa[4].arr(1,'y','')};next()")}<br><br>`};if($1[2]=='n'){n+=`\${btn('imbue',"if(money>99){money-=100;tmpa[4]=tmpa[4].arr(2,'y','')};next()")}<br><br>`}
            n+=`\${btn('back',"tmp=x;next()")}`;break
    }
    end()
})()