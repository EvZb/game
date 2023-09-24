(function () {
    let $1 = ''; let $2 = `\${btn('rest',"$tmp='none.cave.in a cave';next('sleep')")}`; let $3 = $book; if ($3[0] == 'none' && $3[1] == 'none' && $3[2] == 'none') { $1 = ` | \${btn('book',"$tmp='book';next('cave')")}` }
    if ($tmp == "book") { $1 = ` | \${btn('take book', "$tmp='take';tec('add','Basic Qi--$stat[0]+=1;$qi-=10;exp(3,1);time([0,0,4,0])--basic qi exercises');next('cave')")}`; $t = `You pickup a book from the ground. "\${col('orange',"Basic Cultivation")}"` } else if ($tmp == "take") {
        $t = `You take the book.`
    } else { $t = `You are in a cave near a village. It is comfortable inside.` }; if ($hp < 1 || $ep < 1) { $1 = ''; $t = `You are too exhausted. You need to rest.` } else {
        $2 += ` | \${btn('village',"$tmp='none';time([0,0,0,5]);next('vill')")} | \${btn('cultivate',"$tmp='cave';next('cultivate')")}`
    }; $n = `${$2 + $1}`;loc('+0')
    end()
})()