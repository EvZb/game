(function () {$loc = "city"; $dir[$dir.length-1]=8
    if ($tmp == "leave") {
        $t = "There are eight ways to leave the city."
        $n = `\${slist('pathdir','East:0,South East:1,South:2,South West:3,West:4,North West:5,North:6,North East:7')} \${btn('path',"loc(ELM('pathdir').value);$tmp='none';$loc='CP9';next('c/path')")} | \${btn('city',"$tmp='none';next('city')")}`}
    else { $t = `You are in a city.`; $n = `\${btn('arena',"next('c/arena')")} | \${btn('sect association',"next('c/ass')")} | \${btn('leave',"$tmp='leave';next('city')")}<br><br>\${btn('Worldly sect',"$tmp='city';next('sectpath')")}` }
    end()
})()