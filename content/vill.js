(function() {$loc="vill";let $0=$dir[$dir0[$dir[0]]].split("x");$n=`${btn("village center","next('villcenter')")}`
if($tmp=="none"){$t=`You are in a village. ${evnt("Some people walk past you.:20","Some children are playing nearby.:20","The people here don't seem wary of outsiders.:100")}`}
else if($tmp=="hbuy"){$tmp='none';$money-=100;nav("txt",`You can now use the house.`);$0[0]='H';$dir[$dir0[$dir[0]]]=$0.join('x')}else if($tmp=="buyh"){$t=`You can buy a house here. It costs 100 spirit stones.`}
if($0[0]=="H"){$n+=` | ${btn("house","next('home')")}`}else{if($tmp=="buyh"&&$money>99){$tmp='none';$n+=` | ${btn("buy","$tmp='hbuy';next('vill')")}`}else{$tmp='none';$n+=` | ${btn("house","$tmp='buyh';next('vill')")}`}}
$n+=` | ${btn("explore","next('villexp')")}<br><br>${btn("path to city","$loc='CP0';next('citypath')")} | ${btn("path to wildlands","$loc='WP9';next('wildpath')")}<br><br>`
end()})()