(function () {$t=`You are at the edge of the village.`+evnt(' There are few people here.:30',':100'); $n=`\${btn("explore","next('v/exp')")} | `
    $0=['library','cemetary','shrine','farm','house','mine','shop','statue','pond'][loc()[1]];$n+=`\${btn("${$0}","next('${$0}')")} | \${btn("village","next('vill')")}`
    if($dir[0].includes($0[1])){$n+=` | \${btn('cave',"$tmp='none';time([0,0,0,5]);next('cave')")}`}
    end()
})()