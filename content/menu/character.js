(function () {let $1=``;let $2;let $3=``;let $4=``
    tech.forEach(($a)=>{if($a!=-1){$3+=`\${col('${cc[affr[$a]]}','${aff[$a]}')}<br>`}})
    aff.forEach(($a,$b)=>{$4+=`\${col('${cc[affr[$b]]}','${$a}')} [${afftype[afft[$b]]}] [${afflvl[$b]}] (${affxp[$b]})<br>`})
    if(time[3]==0){$2=`<font color="#BB4">Year Change</font>`}else{$2=time[3]}
    $1+=`Name: ${psn[0]}<br><br>Year: ${time[4]} | Month: ${$2} | Day: ${time[2]+1}<br><br>Race: ${races[race[0][0]]} | Variant: ${racev[race[0][0]][race[0][1]]} | Sex: ${sex[race[0][2]]}<br><br>Compass: ${direction[pos[2]]}`
    $1+=`<br><br>Money: ${money}<br><br>Attack: ${atk[0]} hp, ${atk[1]} ep, ${atk[2]} sp<br>Defense: ${def[0]} hp, ${def[1]} ep, ${def[2]} sp<br><br>`
    $1+=`\${col('#7B7','AFFINITIES:')} Name [Category] [Level] (XP)<br><br>\${col('#7B7','[using]:')}<br>${$3}<br>\${col('#7B7','[all]:')}<br>${$4}`
    fun('menu',$1)
    end(0)
})()
