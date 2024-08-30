(function () {
    //portal maybe it leads to another location? or maybe even another world?
    //data: [world id] [connected chunk] [active y/n] [activation conditions]
    switch(tmp){
        case x:
            t=`You find a large, oval shaped stone. There are strange ring patterns on its face.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()