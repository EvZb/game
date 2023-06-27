(function () {
    $t = `You are on a path branching out from the city.`; $n = `${btn('to city', "$tmp='none';$loc='CP9';next('citypath')")}`; let $3
    if ($tmp == 1) { $3 = [0, 'Nsect', 'Moonlight', 'Delectation', 'SEsect', 'Burning Sun', 'SWsect', 'Animus', 'Snow']; $n = `${btn()}` } else { $n += ` | ${btn('follow path', "$tmp+=1;time('0:0:1:0');next('sectpath')")}` }
    end()
})()