(function () {
    //an inn or secluded home of someone powerful or a camp
    //data: [person id] [specialty] [shelter type] [people amount] [people met]
    switch(tmp){
        case x:
            t=`You find a house hidden in this secluded area. You can't tell whether it has been abandoned.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()