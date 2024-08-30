(function () {
    //basically a video game dungeon with traps, monsters, and treasure
    //data: [exploration progress] [trap count] [traps triggered] [monster count] [monster type] [treasure type]
    switch(tmp){
        case x:
            t=`You find a stone doorway that leads into a hill. There is no door, and you can see a dark hallway inside.`
            n=`\${btn('leave',"tmp='leave';next()")}`;break
        case 'leave':
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()