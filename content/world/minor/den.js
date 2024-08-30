(function () {
    //monster/beast den (dragons,goblins,wolf,etc) [entrance>tunnels>boss>treasure]
    //data: [progression amount] [monster type] [treasure?]
    switch(tmp){
        case x:
            t=`You see a large cave entrance ahead. There are monsters coming in and out of it.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()