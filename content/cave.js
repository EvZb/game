(function () {
    let $1 = ''; let $2 = `${btn("sleep", "$tmp='none.cave.in a cave';next('sleep')")}`; let $3 = $book; if ($3[0] == 'none' && $3[1] == 'none' && $3[2] == 'none') { $1 = ` | ${btn("book", "$tmp='book';next('cave')")}` }
    if ($tmp == "book") { $1 = ` | ${btn("take book", "$tmp='take';tec('add','Basic Cultivationxxexp(4,2)xxbasic cultivation methods');next('cave')")}`; $3 = `You pickup a book from the ground. "${col("orange", "Basic Cultivation")}"` } else if ($tmp == "take") {
        $3 = `You take the book.`
    } else { $3 = `You are in a cave near a village. It is comfortable inside.` }; if ($hp < 1 || $ep < 1) { $1 = ''; $3 = `You are too exhausted. You need to sleep.` } else {
        $2 += ` | ${btn("village", "$tmp='none';next('vill')")} | ${btn("cultivate", "$tmp='cave';next('cultivate')")}`
    }; $n = `${$2 + $1}`
    end()
})()