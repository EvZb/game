(function() {let $1;let $2=`${btn("explore","next('villexp')")+' | '+btn("village","next('vill')")}`;if($tmp=="none"){time("0:0:0:20");$tmp=rng(10);if($tmp>5){
$t=`${evnt("You come across a path leading to the village.:25","Some people are walking along a path into the village.:25","You explore near the village.:100")}`}else if($tmp==5){$t=`You find a cave outside of the village.`}else if($tmp==4){
$t=`You see a spirit stone on the ground, and take it.`;$money+=1}else if($tmp==3){if($lvl<2){$hp-=1;sbu("hp");if($hp>2){$t=`A snake bites you as you walk by it.`}else{$t="A snake bites you as you are walking. You are too hurt and need to return to the cave to rest.";$n=`${btn("cave","$tmp='sleep';$hpm+=1;next('cave')")}`}}else{
$t=`A snake bites you as you walk by it, but it cant hurt you.`}}else if($tmp==2){$1=(rng(3)+1);$t=`${$1} gangsters are ${evnt("fighting:10","beating:15","harassing:100")} a${evnt("n old :25"," young :25"," :100")}${evnt("man:65","woman:100")}.`}
else if($tmp==1){$1=(rng(3)+1);$t=`As you walk you come across ${$1} people. "${evnt("You need to pay to enter this village.:50","If you want to keep going, you need to pay.:100")}" one says. They clearly intend to rob you.`}
if($tmp==1||$tmp==2){if($tmp==1){$n=`${btn("fight","combat('gangster."+$1+".4.0.villexp.F')")} | ${btn("pay","$tmp='P';next('villexp')")}`}else{$n=`${btn("fight","combat('gangster."+$1+".4.0.villexp.F')")} | ${btn("ignore","$tmp='none';next('vill')")}`}}else{if($tmp==5){$n=`${$2+' | '+btn("cave","$tmp='none';next('cave')")}`}else{
$n=`${$2}`};if($tmp=="F"||$tmp=="P"){}else{$tmp="none"}}};if($tmp=="F"){$tmp="none";if($cbt=="lose"){$t=`You fail to resist ${evnt("the gangsters:50","them:100")}. They beat you until you can barely move. You find your way to a cave to rest.`;$n=`${btn("next","$t='You are in a cave.';$tmp='sleep';$hpm+=1;next('cave')")}`}else{
$t=`You fight off the gangsters.`}}if($tmp=="P"){$tmp="none";if($money>0){$money-=1;$t=`You give them a spirit stone to leave you alone.`}else{if($lvl<2){$hp-=1;sbu("hp");if($hp<1){$tmp="F";$cbt="lose";next('villexp')}else{$t=`You tell them you have no money. One punches you before they walk off`}}};$n=`${$2}`}
end()})()