(function () {
    //replaces temporary minor locations for a time after they are cleared
    //data: [clear time] [refresh time] [refresh type] [cleared message]
    switch(tmp){
        case x:
            t=`You find a destroyed ruin. There is nothing of value here.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()