(function () {
    let $0 = Number($loc.slice(-1)); $t = `You are on a path that leads to the wildlands. `; let $1 = `${btn("toward city", "$loc='WP" + ($0 + 1) + "';time('0:0:4:0');next('wildpath')")}`; let $2 = `${btn("toward wildlands", "$loc='WP" + ($0 - 1) + "';time('0:0:4:0');next('wildpath')")}`
    if ($0 > 8) { $n = `${btn("village", "$tmp='none';next('vill')") + ' | ' + $2}`; $t += `There is a village nearby.` }
    else if ($0 < 1) { $n = `${$1 + ' | ' + btn("wildlands", "$tmp='none';next('wildland')")}`; $t = `You are outside the wildlands. You can feel its miasma from here.` } else if (isNaN($0) || $tmp != "none") { $n = `${$1 + ' | ' + $2}` }
    else { if (rng(9 * (1 + $0)) < 4) { $t = `<br><br>A monster attacks you during your travel.`; $n = `${btn("fight", "combat('monster.1.14.1.wildpath.fight')")}` } else { $n = `${$1 + ' | ' + $2}` } }
    end()
})()