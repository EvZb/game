(function () {
    let $0 = `${btn("leave", "next('" + $loc + "')")}<br><br>${btn("cultivate", "$tmp='home';next('cultivate')")}<br><br>`; $t = `You are in your house.`
    let $1 = `${btn("sleep", "$tmp='none.home.in your house';next('sleep')")}`; if ($hp < 1 || $ep < 1) { $0 = ''; $t = `You are too exhausted. You need to sleep.` }; $n = `${$0 + $1}`
    end()
})()