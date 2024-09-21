(function () {
    //just a lake... or is it?
    //data: [fish amount] [plant amount] [growth date]
    let $1=data(2)
    switch(tmp){
        case x:
            if($1[0]==''){$1=[rng(9,1),rng(4,1)],time.join('.')}
            t=`You find a small lake. The water and surrounding plants are vibrant.`
            n=`\${btn('walk around',"tmp='walk';next()")} | \${btn('fishing',"tmp='fish';next()")}<br><br>\${btn('leave',"tmp='leave';next()")}`;break
        case 'back':
            t=`You are at the lake.`
            n=`\${btn('walk around',"tmp='walk';next()")} | \${btn('fishing',"tmp='fish';next()")}<br><br>\${btn('leave',"tmp='leave';next()")}`;break
        case 'walk':
            t=`You walk around the lake.`
            if($1[1]>0){t+=` You find a plant that looks particularly interesting.`}
            n=`\${btn('continue walking',"tmp='walk';next()")} | \${btn('pick',"tmp='plant';next()")}<br><br>\${btn('back',"tmp='back';next()")}`;break
        case 'fish':
            t=`...`
            n=`<br><br>\${btn('back',"tmp='back';next()")}`;break
        case 'plant':
            t=`...`
            n=`<br><br>\${btn('back',"tmp='back';next()")}`;break
        case 'leave':
            data(2,$1)
            if(tmpan[1]==0){tmpa=['out']}else{tmpa=['in']};tmp=x
            t=`You find your way back to the path.`
            n=`\${btn('next',"tmpn=tmpan[0];tmpan=[0];next('other/explore')")}`;break
    }
    end()
})()