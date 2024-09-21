(function () {
    //a large mining operation. slaves,work,bedding,specialized trading,rare materials
    switch(tmp){
        case x:
            t=`You approach the mine. There is a large pit. People are carrying tools and carts in and out of it.`
            n=`\${btn('mine',"tmp='mine';next()")} | \${btn('leave',"tmpr(x,10,'out');next(w+'terrain/${chunk[loc()].arr(0)}')")}`;break
        case 'mine':
            t=`You are in the mine.`
            n=`\${btn('leave',"tmp=x;next()")}`;break
    }
    end()
})()