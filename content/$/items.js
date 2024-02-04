(function () {let $0;let $1;let $2=[];let $3=``;let $4=[];let $5;
    $0=function($a,$b){let $c=arr('itm',$b);$2.push(`-\${col('${cc[$c[4]]}',"${$a}")} [${$c[1]}] ${itypes[$c[2]]} (${$c[3]})`);$4.push($a+':'+$c[0])}
    $1=function($a,$b){$3+=`\${col('#77B',"${slots[$b]}")}: ${$a}<br>`}
    itm.forEach($0);eqp.forEach($1);
    $5=`\${btn('use',"ieff(itm.indexOf(elm('itms').value));next('$/items')")} \${lst('itms',"${$4.slice(1).join()}")} \${btn('discard',"rem('itm',itm.indexOf(elm('itms').value));next('$/items')")}<br><br>`
    $5+=`${$3}<br>\${col('#7B7','Items')}:<br>-Name [Description] type (amount)<br><br>${$2.slice(1).join('<br>')}`
    fun('menu',$5)
    end(0)
})()