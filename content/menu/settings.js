(function () {
    if(fsize>24){fsize=24};if(fsize<11){fsize=10}
    let $0=`Text size: \${btn('up',"fsize+=1;next('menu/settings',0)")} | \${btn('down',"fsize-=1;next('menu/settings',0)")}`
    elm('html').style.fontSize=fsize+'px'
    fun('menu',$0)
    end(0)
})()