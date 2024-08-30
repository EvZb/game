(function () {
    //just a lake... or is it?
    switch(tmp){
        case x:
            t=`You find a small lake. The surrounding plants seem particularly vibrant.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()