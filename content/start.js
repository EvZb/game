(function () {
    if ($tmp == "none") {
        $tmp = "bruh"
        $t = `"Welcome to ${col("red", "UNNAMED GAME") + " " + col("lightyellow", "The general gameplay is still being developed.")} In this text based game, you can explore the world and improve your character through experiences`
        $n = `${btn("next", "next('start')")}`; ELM("intro").remove()
    } else { $tmp = "none"; $n = `${btn('next', "next('vill')")}`; $t = `You awaken near a village without modern technology.` }
    end()
})()