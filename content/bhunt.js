(function () {
    if ($ep < 1) { $tmp = "none"; $t = `You are too exhausted to hunt.`; $n = `${btn("leave", "next('worldoff')")}` }; let $0 = [0, 0]; if ($dir0.$().split('x')[0] == "H") { $0[0] = "home"; $0[1] = "your house" } else { $0[0] = "cave"; $0[1] = "a cave" }; let $1 = `${btn("leave", "next('" + $0[0] + "')")}`
    if ($tmp > 0) {
        if ($tmp == 1) { $money += 3; $t = `You successfully ${evnt("hunt:25", "capture:25", "catch:100")} the small beast and sell it.` } else if ($tmp == 2) {
            $money += 4; $t = `You successfully ${evnt("hunt:25", "capture:25", "catch:100")} a${evnt
                (" special:25", " rare:25", " valueable:25", " uncommon:100")} small beast, and sell it.`
        } else if ($tmp == 3) {
            if ($lvl > 1) { $money += 4; $t = `You catch the beast and sell it.` } else {
                $hp -= 4; sbu('hp'); if ($hp < 1) {
                    $t = `The beast fights you, forcing you to retreat to ${$0[1]} to rest.`
                    $n = `${$1}`
                } else { $money += 4; $t = `The beast fights you, but you manage to catch it.` }
            }
        } else if ($tmp == 4) {
            if ($lvl < 2) {
                $ep -= 4; sbu('ep'); if ($ep < 1) {
                    sbu('ep'); $t = `You exhaust yourself trying to catch the beast. you return to ${$0[1]} to rest.`
                    $n = `${$1}`
                } else { $t = `With some effort you manage to ${evnt("hunt:30", "capture:25", "catch:100")} the beast.` }
            } else { $money += 4; $t = `The beast is fast but not fast enough to cause you trouble. You catch it and bring it back to sell.` }
        } else if ($tmp == 5) {
            if ($lvl < 2) { $hp = 0; sbu('hp'); $t = `The beast ${evnt("mauls:25", "beats:25", "injures:100")} you severely, forcing you to ${evnt("leave:50", "escape:100")}. You go to ${$0[1]} to rest.`; $n = `${$1}` } else { $money += 6; $t = "The large beast fights hard, but you are able to defeat it." }
        }
        $tmp = -1
    } else if (($tmp == "hunt" || $tmp == -1) && $ep > 0) {
        $tmp = rng(10); if ($tmp < 3) { $t = `You ${evnt("come across:30", "track down:30", "find:100")} a small beast. You should be able to catch it.` } else if ($tmp < 5) {
            $n = `You ${evnt("see a running:50", "find the prints of a:100")} normal sized beast. You might be able to catch it.`
        } else if ($tmp < 6) { $t = `You see the ${evnt("prints:30", "shadow:30", "figure:100")} of a large beast ahead.` } else {
            $tmp = "hunt"; $t = `You find ${evnt("nothing:25", "old tracks:25", "a rotting corpse:25", "an empty cave:100")}.`
        }
    } else if ($ep > 1) { if ($tmp == "bhi") { $tmp = "hunt"; $t = `You leave the village searching for wild beasts.` }; $n = `${btn("hunt", "time('0:0:0:30');next('bhunt')")} | ${btn("leave", "$tmp='none';next('worldoff')")}` }
    end()
})()