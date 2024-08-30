(function () {
    //bandit/cult/blackmarket base
    //data: [secret code?] [enemy type] [enemy count] [special item]
    switch(tmp){
        case x:
            t=`There is a small compound ahead. There seem to be many figures patrolling it.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()