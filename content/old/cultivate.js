(function () {
    let $1 = tec(0); let $2 = tec(1); let $3 = tec(2); let $4 = ";nav('txt','You cultivate using the book.')"; $t = `Choose a cultivation technique.`
    let $5 = `\${btn('${$1[0]}',"${$1[1]+$4};next('cultivate')")}<br>${$1[2]} \${btn('discard',"tec('del',0);next('cultivate')")}<br><br><br>\${btn('${$2[0]}',"${$2[1]+$4};next('cultivate')")}<br>${$2[2]}\${btn('discard',"tec('del',1);next('cultivate')")}<br><br><br>\${btn('${$3[0]}',"${$3[1]+$4};next('cultivate')")}<br>${$3[2]}\${btn('discard',"tec('del',2);next('cultivate')")}<br><br><br>`
    if ($ep < 1 || $hp < 1) { $5 = '' }; $n = `${$5}\${btn('stop',"$tmp='none';next('${$tmp}')")}`
    end()
})()