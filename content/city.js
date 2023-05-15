(function() {$loc="city";if($tmp=="leave"){$t="There are eight ways to leave the city.";$dir[0]="C"
$n=`${slist("pathdir","East:E,South East:SE,South:S,South West:SW,West:W,North West:NW,North:N,North East:NE")+' ' +btn("path","$dir[0]=ELM('pathdir').value;$tmp='none';$loc='CP9';next('citypath')")} | ${btn('city',"$tmp='none';next('city')")}`}
else{$t=`You are in a city.`;$n=`${btn('arena',"next('cityarena')")} | ${btn('sect association',"next('cityass')")} | ${btn("leave","$tmp='leave';next('city')")}`}
end()})()