(function () {
    $loc = "vill"; let $0 = loc(); $n = `\${btn('village center',"next('v/center')")}`
    if ($tmp == "none") { $t = `You are in a village in the ${$0[0]}. ${evnt("Some people walk past you.:20", "Some children are playing nearby.:20", "The people here don't seem wary of outsiders.:100")}` }
    else if ($tmp == "hbuy") { $tmp = 'none'; $money -= 100; nav("txt", `You can now use the house.`); loc('+1')} else if ($tmp == "buyh") { $t = `You can buy a house here. It costs 100 spirit stones.` }
    if ($dir[1].includes($0[1])) { $n += ` | \${btn('house',"next('home')")}` } else { if ($tmp == "buyh" && $money > 99) { $tmp = 'none'; $n += ` | \${btn('buy',"$tmp='hbuy';next('vill')")}` } else { $tmp = 'none'; $n += ` | \${btn('house',"$tmp='buyh';next('vill')")}` } }
    $n += `<br><br>\${btn('village edge',"next('v/edge')")} | \${btn('path to city',"$loc='CP0';next('c/path')")} | \${btn('path to wildlands',"$loc='WP9';next('wildpath')")}<br><br>`
    end()
})()