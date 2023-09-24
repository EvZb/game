(function () {
    let $1; let $2; let $3;
    if (($ep > 0 || $tmp < 0) && $qi > 4) {
        time([0,0,0,15])
        if ($tmp > 0) { $1 = ['Dark', 'Water', 'Ice', 'Light', 'Fire', 'Metal']; let $2 = rng(6); let $3 = $1[$2 - 1]; if ($2 == $tmp || $2 == $tmp - 1 || $2 == $tmp + 1 || $2 == $tmp - 5 || $2 == $tmp + 5) { $t = `You find evidence that the ghost may be a \${pic('${$3}')} ${$3} ghost.` }
        else { $t = `You find evidence that the ghost may <font color="yellow">not</font> be a \${pic('${$3}')} ${$3} ghost.` } }
        if ($tmp == 'none') { $tmp = 'tmp'; $n = `\${btn('investigate',"next('ghunt')")}`; $t = `You have been hired to investigate a dangerous ghost. If you can guess the correct type, you can set a qi trap to catch it.` }
        if ($tmp > 0) { $n = `\${btn('investigate',"next('ghunt')")} | \${btn('guess',"if($tmp==ELM('gguess').value){$tmp=0}else{$tmp=-1};next('ghunt')")} \${slist('gguess','Dark:1,Water:2,Ice:3,Light:4,Fire:5,Metal:6')}` } else { if ($tmp == "tmp") { $tmp = rng(6) } };
        if ($tmp == 0 || $tmp == -1) {
            $n = `\${btn('hunt again',"next('ghunt')")}`; if ($tmp == 0) { $stat[0]+=2; $tmp = "none"; $money += 3; $t = `You successfully trap the ghost. \${col('yellow','The client will pay you</font> after you exercise it.')}` }
            if ($tmp == -1) { $tmp = "none"; $qi -= 5; $t = `You \${col('yellow','incorrectly')} guessed the ghost. The trap failed, wasting your qi.` }; sbu('qi')}
    } else { $t = `You are too exhausted.` }
    $n += ` | \${btn('leave',"$tmp='none';next('worldoff')")}<br><br>\${pic('ghunt')}`; if ($ep < 1 || $qi < 5) { $n = `\${btn('leave',"$tmp='none';next('worldoff')")}` }
    end()
})()
