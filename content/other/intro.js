(function () {
    switch(tmpn){
    case 0://intro
        saving="T"
        tmpn=1;
        t=`Welcome to \${col('red','UNNAMED GAME')+' '+col('lightyellow','The general gameplay is still being developed.')} The game uses inspirations from many fantasy settings; some words may not match your preconception.<br><br>Navigate the game using the button (colored text) below.`
        n=`\${btn('next',"next()")} (The next part is character creation; saving and loading will be disabled.)`
        if(localStorage.UGS==undefined){localStorage['UGS']=saves.join()};break
    case 1://player name
        saving="F"
        tmpn=2;
        t=`Name yourself. You can randomize it with a generator. NPC names will use the selected generator.`
        n=`Name generator: \${lst('ngen','1:1,2:2,3:3',"namegennum=elm('ngen').value")} | \${btn('randomize',"psn[0]=window['namegen'+namegennum]();elm('itext').value=psn[0]")} <textarea id="itext" style="resize:none" cols=31 rows=1 maxlength=31 placeholder="31 character limit."></textarea>`
        n+=` \${btn('mystery',"psn[0]=window['namegen'+namegennum]();next()")}<br><br>\${btn('next',"if(elm('itext').value!=''){next()}")}`;break
    case 2://race
        tmpn=3;race[0]='00'
        t=`What are you?<br><br>Demons and humans are enemies. Abyss and Spirits are enemies.`
        n=`Race: \${lst('bod',"Demon:0,Human:1,Abyss:2,Spirit:3","race[0]=elm('bod').value+0")} | \${btn('mystery',"race[0]='${rng(3)}0';next()")} | \${btn('next',"next()")}`;break
    case 3://race variant
        tmpn=4
        hp[1]=5;ep[1]=5;sp[1]=5;sbu()
        let $2='';switch(1*race[0][0]){case 0:{$2='none:0,Succubus:1,Zombie:2,Vampire:3'}break;case 1:{$2='none:0,Fox:1,Dog:2,Cat:3'}break;case 2:{$2='none:0,Curse:1,Mimic:2,Slime:3'}break;case 3:{$2='none:0,Ghost:1,God:2,Elemental:3'}}
        t=`Choose your variant.<br><br>The race and variant will affect your base stats.`;
        n=`Variant: \${lst('a1',"${$2}","race[0]=race[0][0]+elm('a1').value")}<br><br>\${btn('mystery',"race[0]=race[0][0]+${rng(3)};next()")} | \${btn('next',"next()")}`;break
    case 4://world settings
        tmpn=5
        let $3=racevm[race[0][0]][race[0][1]];hp[1]*=$3.arr(0);ep[1]*=$3.arr(1);sp[1]*=$3.arr(2);heal();sbu()
        t=`Choose the starting world size.<br><br>World size is exponential (A size of 2 is equal to 4 chunks. Each chunk has a major location and a terrain type). A size of 4 is recommended`
        n=`Starting world size: \${lst('cws',"2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9")} | Max world size: \${lst('mws',"2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9")} (for other worlds)<br><br>\${btn('start',"wsize[0]=1*elm('cws').value;mwsize=1*elm('mws').value;next()")}`;break
    case 5://start
        tmpn=7
        pos=[rng(wsize[0]-1),rng(wsize[0]-1),rng(7)]
        t=`You can now enter the world.`
        n=`\${btn('enter',"tmpn=50;tmp2='in';wname[0]=window['namegen'+namegennum]();genchunks();chunk[loc()]=chunk[loc()].arr(2,'portal');saving='T';next('other/explore')")}`;break
    }; if(tmpn>1){n+=`<br><br>\${btn('back',"tmpn-=2;next()")}`}
    end()
})()