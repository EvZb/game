(function () {
    switch(tmp){
    case 0://intro
        tmp=1;
        t=`Welcome to \${col('red','UNNAMED GAME')+' '+col('lightyellow','The general gameplay is still being developed.')} Select your game options below.`
        n=`\${btn('next',"next('$/intro')")}`
        if(localStorage.UGS==undefined){localStorage['UGS']=saves.join()} break;
    case 1://player name
        tmp=2;
        t=`Name yourself. You can randomize it with a generator. NPC names will use the selected generator.`
        n=`Name generator: \${lst('ngen','1:1,2:2,3:3',"ngen=elm('ngen').value")} | \${btn('randomize',"psn[0]=window['namegen'+ngen]();elm('itext').value=psn[0]")} <textarea id="itext" style="resize:none" cols=31 rows=1 maxlength=31 placeholder="31 character limit."></textarea>`
        n+=` \${btn('mystery',"psn[0]=window['namegen'+ngen]();next('$/intro')")}<br><br>\${btn('next',"if(elm('itext').value!=''){next('$/intro')}")}`; break;
    case 2://difficulty
        tmp=3
        t=`How lucky are you? (difficulty).`;n=`luck: \${lst('dif',"Cursed:0,Bad:1,Unlucky:2,Lacking:3,Normal:4,Above Normal:5,Good:6,Lucky:7,Very Lucky:8,Chosen One:9","ptrt[0]='202540002000'.cut(9,1,elm('dif').value)")}<br><br>\${btn('next',"next('$/intro')")}`; break;
    case 3://ki affinities
    tmp=4
        t=`Choose your starting ki affinities.`;
        n=`Good: \${lst('a1',"none:0,light:1,growth:2,water:3")} | Death: \${lst('a2',"none:0,shade:1,poison:2,fire:3")} | Chaos: \${lst('a3',"none:0,electric:1,air:2,cold:3")} | Neutral: \${lst('a4',"none:0,blood:1,metal:2,space:3")} | Soul: \${lst('a5',"none:0,psy:1,evil:2,moon:3")}`
        n+=`<br><br>\${btn('mystery',"psna[0]=String(rng(3))+rng(3)+rng(3)+rng(3)+rng(3);next('$/intro')")} | \${btn('next',"psna[0]=elm('a1').value+elm('a2').value+elm('a3').value+elm('a4').value+elm('a5').value;next('$/intro')")}`; break;
    case 4://body
    tmp=5
        t=`What are you? (Human or Demon are suggested)`
        n=`Race: \${lst('bod',"Human:0,Demon:1,Abyss:2,Beast:3,Ghost:4","body[0]=elm('bod').value")} | \${btn('mystery',"body[0]=rng(4);next('$/intro')")} | \${btn('next',"next('$/intro')")}`; break;
    case 5://world
    tmp=6
        t=`Choose starting world alignment. It is suggested to start in your associated world.<br><br>`
        t+=`Good (Human), Death (Demon), Chaos (Abyss), Neutral (Beast), Soul (Ghost)`
        n=`world alignment: \${lst('wld',"Good:Good,Death:Death,Chaos:Chaos,Neutral:Neutral,Soul:Soul")} | \${btn('start',"tmp=x;wgen=[];wgen2=[];world=[];worldgen(elm('wld').value);loc[0]=wgen[0].indexOf('0');w=wtype+'/';next(w+loc[0])")}`; break;
    }; n+=`<br><br>\${btn('back',"tmp=tmp-2;next('$/intro')")}`
    end()
})()
