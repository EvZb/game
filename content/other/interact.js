(function () {//tmp=new/x | tmpa=[next,tmp,tmpn,'psn.race.pfav.lvl.age.tags.tagdata']
    //t is used as a quote from the npc
    if(tmp=='new'){
        let $0=tmpa[3].split('.')
        let $1=[pid[pid.length-1]+1,window['namegen'+namegennum](),''+rng(3)+rng(3)+rng(1),0,rng(2,1),rng(81,18),0,x,x]
        if($0[0]!=''){$1[1]=$0[0]};if($0[1]!=''){$1[2]=$0[1]};if($0[2]!=''){$1[3]=Number($0[2])}
        if($0[3]!=''){$1[4]=Number($0[3])};if($0[4]!=''){$1[5]=Number($0[4])};if($0[5]!=''){$1[7]=$0[5]};if($0[6]!=''){$1[8]=$0[6]}
        add('person',$1)
        t=`\${col('gold',"A new character has been added.")}<br><br>Name: ${$1[1]}<br><br>Race: ${racev[$1[2][1]]} (${races[$1[2][0]]})<br><br>Sex: ${sex[$1[2][2]]}<br><br>"${t}"`
        n=`\${btn('next',"tmpr('${tmpa[1]}',${tmpa[2]});next('${tmpa[0]}')")}`}
    else{n=`\${btn('next',"tmpr('${tmpa[1]}',${tmpa[2]});next('${tmpa[0]}')")}`}
    end()
})()