(function () {
    //land of danger/treasure natural dangers and rewards [barrier>formation|puzzle|enemies]
    //data: [possess key to get through barrier y/n] [opening time] [closing time] [areas] [areas solved] [enemy amount]
    switch(tmp){
        case x:
            t=`There is a large door here. It isn't attached to anything. It is ornate and has a magical barrier surrounding it.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()