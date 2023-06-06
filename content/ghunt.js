(function () {
    let $1; let $2; let $3; if ($ep > 0) {
        time('0:0:0:15')
        if ($tmp > 0) { $1 = ['Dark', 'Water', 'Ice', 'Light', 'Fire', 'Metal']; let $2 = rng(6); let $3 = $1[$2 - 1]; if ($2 == $tmp || $2 == $tmp - 1 || $2 == $tmp + 1 || $2 == $tmp - 5 || $2 == $tmp + 5) { $t = `You find evidence that the ghost may be a ${pic($3)} ${$3} ghost.` } else { $t = `You find evidence that the ghost may <font color="yellow">not</font> be a ${pic($3)} ${$3} ghost.` } }
        if ($tmp == 'none') { $tmp = 'tmp'; $n = `${btn("investigate", "next('ghunt')")}`; $t = `You have been hired to investigate a dangerous ghost. If you can guess the correct type, the client will pay you after exorcising it.` }
        if ($tmp > 0) { $n = `${btn("investigate", "next('ghunt')")} | ${btn("guess", "if($tmp==ELM('gguess').value){$tmp=0}else{$tmp=-1};next('ghunt')")} ${slist("gguess", "Dark:1,Water:2,Ice:3,Light:4,Fire:5,Metal:6")}` } else { if ($tmp == "tmp") { $tmp = rng(6) } };
        if ($tmp == 0 || $tmp == -1) {
            $n = `${btn("hunt again", "next('ghunt')")}`; if ($tmp == 0) { $tmp = "none"; $money += 3; $t = `You correctly guessed the ghost. <font color="yellow">The client will pay you</font> after buying materials and exercising it.` }
            if ($tmp == -1) { $tmp = "none"; $ep -= 2; $t = `You <font color="yellow">incorrectly</font> guessed the ghost. The client was injured while trying to exorcise it, and will not pay you.` }; sbu('ep')
        }
    }; $n += ` | ${btn("leave", "$tmp='none';next('worldoff')")}<br><br>${pic('ghunt')}`; if ($ep < 1) { $n = `${btn('leave', "$tmp='none';next('worldoff')")}`; $t = `You are too tired.` }
    end()
})()