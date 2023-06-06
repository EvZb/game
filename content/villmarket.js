(function () {
    $t = `You are in the village market. You can buy food here.`
    $n = `${btn("buy meal", "if($money>0){$tmp='meal'}else{$tmp='0'};next('villmarket')")} | ${btn("buy pills", "if($money>4){$tmp='pill'}else{$tmp='0'};next('villmarket')")} | ${btn("leave", "$tmp='none';next('villcenter')")}`
    if ($tmp == "0") { $tmp = "none"; $n = `You don't have enough money.` } else {
        if ($tmp == "meal") { $t = `You buy and eat your food, restoring your energy.`; $ep = $epm; $hp = $hpm; sbu('hp', 'ep'); $money -= 1 }
        if ($tmp == "pill") { $t = `You buy and swallow a pill that increases your energy.`; $epm += 1; $ep = $epm; sbu('ep'); $money -= 5 }
    }
    end()
})()