(function () {
    let $0=[];let $1=[];let $2=``;let $3=[];$4=[]
    itm.slice(1).forEach(($a,$b)=>{let $c=arr('item',$b+1);$0.push($a+":"+(1+$b));$1.push(col(cc[$c[3]],$a)+` [ ${itype[$c[2]]} ] (${$c[1]})`)})
    mat.slice(1).forEach(($a,$b)=>{$4.push($a+":"+(1+$b));$3.push(`${col(cc[matr[$b+1]-1],$a+' '+matform[matf[$b+1]])} [${afftype[matt[$b+1]]}]  (${mata[$b+1]})`)})
    $2=`Item rarity colors (rarest to least rare): `;cc.forEach(($a,$b)=>{$2+=`\${col('${$a}',"${$b+1}")} `})
    if(combat=='T'){$2+=`<br><br>\${col('${cc[0]}','Item interactions are disabled during combat.')}`}
    else if($0.length>0){$2+=`<br><br>\${btn('use',"iuse(elm('items').value);next('menu/items',0)")} \${lst('items',"${$0.join(',')}")} \${btn('destroy',"remitem('itm',elm('items').value);next('menu/items',0)")}`}
    $2+=`<br><br>Weapon:  \${col(cc[itmr[itm.indexOf(wpn[0])]],wpn[0])} | Clothes: \${col(cc[itmr[itm.indexOf(eqp[0])]],eqp[0])}`
    $2+=`<br><br>\${col('#7B7','ITEMS')}:<br>-Name [ Type ] (Amount)<br><br>${$1.join('<br>')}<br><br>`
    if($4.length>0){$2+=`<br><br>\${lst('mats',"${$4.join(',')}")} \${btn('destroy',"remitem('mat',elm('mats').value);next('menu/items',0)")}`}
    $2+=`<br><br>\${col('#7B7','MATERIALS')}:<br>-Name [ Category ] (Amount)<br><br>${$3.join('<br>')}`
    fun('menu',$2)
    end(0)
})()