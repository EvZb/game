(function () { let $3 = $sect[loc()[1]]
    if(isNaN($tmp)) {$t = `You are at the gate of the ${$3[0]} sect. Its name is on a large sign, with the words '${$3[1]}' and '${$3[2]}' under it. The guards block you from entering.`
        if($tmp=="city"){$n = `\${btn('leave',"$tmp='none';next('city')")}`}else{$n = `\${btn('leave',"$tmp=2;next('sectpath')")}`}}
    else {$t = `You are on a path branching out from the city.`
        if ($tmp == 0) { $n = `\${btn('to city',"$tmp='none';$loc='CP9';next('citypath')")}` } else { $n = `\${btn('toward city',"$tmp-=1;time([0,0,1,0]);next('sectpath')")}` }
        if ($tmp > 2) {$n += ` | \${btn('${$3[0]}'+' sect',"$loc='${$3[0]}';$tmp='none';next('sectpath')")}` } else { $n += ` | \${btn('follow path',"$tmp+=1;time([0,0,1,0]);next('sectpath')")}` }
    }
    end()
})()