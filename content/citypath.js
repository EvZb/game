(function () {
    let $0 = Number($loc.slice(-1)); let $1 = `${btn("toward city", "$loc='CP" + ($0 + 1) + "';time('0:0:4:0');next('citypath')")} | ${btn("toward wildlands", "$loc='CP" + ($0 - 1) + "';time('0:0:4:0');next('citypath')")}`; let $2 = "You are on a path that connects to a city."; let $3; let $4; let $5; $n = `${$1}`
    if ($tmp == "inn" || $tmp == "rest" || $tmp == "work" || $tmp == "fight") {
        if ($tmp == "fight") { if ($cbt == "win") { $2 = ` You have beaten some bandits.` } else if ($cbt == "lose") { $2 = ` You have been beaten and robbed.` } else if ($cbt == "run") { $2 = `You successfully escape the bandits.` } else { $2 = ` The bandits search you thoroughly to take any spirit stones.` }; $t = `${$2}`; $cbt = "none"; $tmp = "none" }
        else if ($tmp == "rest") { time('0:0:6:0'); $ep = $epm; $hp = $hpm; sbu('hp', 'ep'); $t = `You rest at the inn for 6 hours. The keeper says "2 spirit stones or you can work as payment."`; $3 = `${btn("work", "$tmp='work';next('citypath')")}`; if ($money < 1) { $n = `${$3}` } else { $n = `${btn("pay", "$money-=2;$tmp='inn';next('citypath')")} | ${$3}` } }
        else if ($tmp == "inn") { $tmp = "none"; $t = `You are at an inn on a path that leads to a city.`; $n = `${$1} | ${btn("rest", "$tmp='rest';next('citypath')")}` } else { time('0:0:2:0'); $t = `You help to clean the inn for 2 hours.`; $n = `${btn("next", "$tmp='inn';next('citypath')")}` }
    }
    else if ($0 == 0) { $t = `${$2} You can see ${evnt("hunters from a:50", "a:100")} village near here.`; $n = `${btn("toward city", "$loc='CP" + ($0 - 1) + "';time('0:0:4:0');next('citypath')")} | ${btn("to village", "next('vill')")}` }
    else if ($0 == 3 || $0 == 6) { $4 = 10 - (Math.round(per100($ep, $epm) / 10)); $5 = `${btn("rest", "$tmp='rest';next('citypath')")}`; $t = `${$2} There is an inn ahead. You can rest there.`; if ($ep > 3 && $hp > 3) { $n = `${$1} | ${$5}` } else { $n = `${$5}` } }
    else if ($0 == 9 || $0 == 8) {
        if ($0 == 9) { $t = `You are at the city gate. The entry fee is 10 spirit stones.`; $n = `${btn('branching path', "$tmp=0;next('sectpath')")} | ${btn("path toward wildlands", "$loc='CP" + ($0 - 1) + "';time('0:0:4:0');next('citypath')")}`; if ($money > 9) { $n += ` | ${btn("pay and enter", "next('city')")}` } }
        else { $t = `${$2} You can see ${evnt("the walls of:75", "hunters from:100")} the city from here.` }
    } else {
        if ($0 == 7) { $3 = evnt("4:15", "0:100") } else if ($0 == 4 || $0 == 5) { $3 = evnt("1:15", "2:15", "4:15", "3:100") } else {
            $3 = evnt("1:15", "2:15", "3:100")
        }; if ($3 > 0) {
            if ($3 == 4) {
                $3 = (rng(4) + 1); if ($hpm > 14) { $4 = `${btn("fight", "combat('bandit." + $3 + ".5.0.citypath.fight')")}` } else { $tmp = 'fight'; $n = `${btn("surrender", "$money=0;next('citypath')")}` } if ($epm > 19 && $ep > 0) { $n += ` | ${btn("escape", "$cbt='run';next('citypath')")}` }
                $t = `${$3} bandits block your path. They intend to rob you.`
            } else {
                if ($epm > 24) { $t = `The path is not well maintained for normal people.` } else {
                    if ($3 == 1) { if (day()) { $ep -= 2; sbu('ep'); $t = `${$2} The sun beats down on you.` } else { $t = `${$2} The path is illuminated by the moon.` } } else if ($3 == 2) {
                        $3 = "The path is covered in thick mud."
                        if ($ep > 3) { time('0:0:1:0'); $t = `${$2} ${$3} It takes a while to get through it.` } else { $ep -= 3; sbu('ep'); time('0:0:4:0'); $t = `${$2} ${$3} You are almost unable to go through it.` }
                    } else if ($3 == 3) { $t = `${$2} This part of the path is not well maintained.` }
                }
            }
        }
    }
    end()
})()