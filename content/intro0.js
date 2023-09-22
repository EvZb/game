(function () {
    $item=[];$cc=['#B44','#B4B','#B84','#BB4','#4B4','#44B'];$lst=new Array(7);$dirc=['East','Southeast','South','Southwest','West','Northwest','North','Center']
    $nvow=['a','an','ang','ao','e','en','eng','ei','i','in','o','ong','u','uo','ua'];$ncon=['b','ch','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','sh','t','v','w','x','y','z']
    $itype=['item','consumable','weapon','armor'];$ipgl=['Energy Pill--1--increases energy--epx1Xepmx1--1']
    varld();if(localStorage.UGsD==undefined){localStorage.UGsD=$lst.join()}else{$lst=localStorage.UGsD.split(',')};sbu('hp','ep','qi');ELM('gamestatus').classList.remove('hid');ELM('gamestatustext').classList.remove('hid');ELM('sidebarmenu').classList.remove('hid')
    $t=`"Welcome to ${col("red", "UNNAMED GAME") + " " + col("lightyellow", "The general gameplay is still being developed.")} Pressing the blue text below will take you to the next scene, where you can head toward your next life.`;$n=btn("next","$tmp=0;next('intro1')")
    end()
})()