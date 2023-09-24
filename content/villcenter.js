(function () {
    $t = `You are in the village center. ${evnt('It is more crowded here.:25', ':100')}`; $n = `\${btn('worldly sect office',"next('worldoff')")} | \${btn('market',"next('villmarket')")}`
    if ($time[1] % 28 == 0) { $t += `<br>The monthly competition is today.`; $n += ` | \${btn('competition',"next('villcomp')")}` }; $n += ` | \${btn('leave',"next('vill')")}`
    end()
})()