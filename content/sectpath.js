(function () {
    let $3; $t = `You are on a path branching out from the city.`
    if ($tmp == 0) { $n = `${btn('to city', "$tmp='none';$loc='CP9';next('citypath')")}` } else { $n = `${btn('toward city', "$tmp-=1;time('0:0:1:0');next('sectpath')")}` }
    if ($tmp > 2) { $3 = { N: 'N', NE: 'Moonlight', E: 'Delectation', SE: 'SE', S: 'Burning Sun', SW: 'SW', W: 'Animus', NW: 'Snow' }; $3 = $3[$dir[0]]; $n += ` | ${btn($3 + ' Sect', "$loc='" + $3 + "';$tmp='none';next('sectgate')")}` } else { $n += ` | ${btn('follow path', "$tmp+=1;time('0:0:1:0');next('sectpath')")}` }
    end()
})()