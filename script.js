$V=["hp","hpm","ep","epm","qi","qim","atk","def","money","tmp","loc","cbt","lvl","xp","enemy","time","img","imgc","book","dir","person","items","equip"];$VA=["lvl","xp","enemy","time","img","imgc","book","dir","person","items","equip"];$VV=[10,10,10,10,10,10,1,0,0,"none","none","none","1!1!1","0!0!0","none","0!0!0!0","0!0!0","0!0!0!0","none!none!none",'o!!0','none','none','-1!-1']
namegen=function(){let $1=rng(3);let $2=rng(3);let $3=$nvow.length;$4=$ncon.length;let $5='';let $6='';while($1>0){$5+=$ncon[rng($4)-1]+$nvow[rng($3)-1];$1-=1};$5=$5[0].toUpperCase()+$5.slice(1);while($2>0){$6+=$ncon[rng($4)-1]+$nvow[rng($3)-1];$2-=1};$6=$6[0].toUpperCase()+$6.slice(1);return($5+' '+$6)}
function ELM($a) {return(document.getElementById($a))}
function end($a) {ELM("script2").remove();nav('txt',$t);nav('nav',$n);if($a!=undefined){next($a)}}
function nav($a,$b) {ELM($a).innerHTML=$b}
function rng($a) {return(Math.floor(Math.random()*$a+1))}
function per100($a,$b) {let $1=(100*Number($a/$b)).toFixed();return($1)}
function toggledis($a,$b) {let $1=ELM($a);let $2=ELM($b);let $3=["character","cheats","savemenu","infodisplay"];function $F($a) {ELM($a).style.display="none"};if($1.style.display&&$2.style.display=="block"){$3.forEach($F);}else{$3.forEach($F);next($b);$1.style.display="block";$2.style.display="block"}}
function sbu() {function $F($a) {let $1=[window['$'+$a],window['$'+$a+'m']];let $2=ELM($a+"bar");if($1[0]>$1[1]){window['$'+$a]=$1[1];$1=100}else{$1=per100($1[0],$1[1])};if($1<0){window['$'+$a]=0;$1=0};$2.style.width=$1+"%";$1=Math.floor($1/20);$2.style.background=$cc[$1];nav($a+"text","("+col($cc[$1],window["$"+$a])+"/"+window["$"+$a+"m"]+")")};Object.values(arguments).forEach($F)}
function col($a,$b) {return("<font color="+$a+">"+$b+"</font>")}
function btn($a,$b) {return('<button class="btxt" onclick="'+$b+'"><big>'+$a+'</big></button>')}
function next($a) {let $1=document.createElement("script");document.body.appendChild($1);$1.id="script2";$1.src="content/"+$a+".js"}
function slist($a,$b) {let $1='<select id="'+$a+'" style="background: #888">';let $2=$b.split(',');function $F($c) {let $3=$2[$c].split(':');$1+=('<option value="'+$3[1]+'">'+$3[0]+'</option>')};Object.keys($2).forEach($F);$1+='</select>';return($1)}
function time($a) {let $2=$time;let $3;$2[0]+=$a[0];$2[1]+=$a[1];$2[2]+=$a[2];$2[3]+=$a[3];if($2[3]>59){$2[3]-=60;$2[2]+=1;$ep-=1;$qi+=1};if($2[2]>23){$2[2]-=24;$2[1]+=1};if($2[1]>365){$2[1]-=365;$2[0]+=1};if(day()){$3='☀️ '}else{$3='🌙 '};$3+=$2[2]+':';if($2[3]<10){$3+='0'+$2[3]}else{$3+=$2[3]};nav('hour',$3);$time=$2;$ep-=($a[2]);$qi+=$a[2];sbu('ep','qi')}
function day() {if($time[2]>5&&$time[2]<20){return(true)}else{return(false)}}
function iuse($a) {if(isNaN($a)){let $b=Number($a.slice(0,-1));if($item[$b][4]>1){$item[$b][4]-=1}else{$item.splice($b,1);if($item.length<1){$items=['none']}}}else{if($item[$a][1]==1){ieff($item[$a][3]);iuse($a+"x")}else{if($equip[$item[$a][1]-2]==-1){equip($a,$item[$a][1]-2)}}}}
function ieff($a,$0=1) {if($a!='none'){$a=$a.split('X');function $F($b,$c){$a[$c]=$b.split('x');window['$'+$a[$c][0]]+=$a[$c][1]*$0};$a.forEach($F);sbu('hp','ep','qi')}}
function iadd($a) {if($items.includes($a)){let $1=$item[$items.indexOf($a)];$1[4]=Number($1[4])+1}else{$item.push($a.split('--'))};function $F($a){$items.push($a.join('--'))};$items=[];$item.forEach($F)}
function equip($a,$b) {let $1=$equip[$b];let $2=$item[$a];if($a!='none'){iuse($a+'x');$equip[$b]=$2.join('--');ieff($2[3])}else{ieff($1.split('--')[3],-1);iadd($1);$equip[$b]=-1}}
function pic($a) {return("<img src='img/"+$a+".png'>")}
function loc($a) {let $1=$dir[$dir.length-1];if($a!=undefined){let $2=$a.slice(1);let $3=$dir[$2].split('');if($3.includes($1)){if($a[0]=='-'){$3.splice([$3.indexOf($1)],1)}}else{if($a[0]=='+'){$3.push($1)}};$dir[$2]=$3.join('')}else{return([$dirc[$1],$1])}}
function evnt() {let $1;let $2;function $F($a) {$2=$a.split(':');if(rng(100/(0+$2[1]))==1){$1=($2[0])}else{return('true')}};Object.values(arguments).every($F);return($1)}
function combat($a) {let $0;let $1=$a.pop();let $2=$a.pop();if($enemy[0]=='none'){$enemy.splice(0,1)};function $F($c,$d){$0.push($c);if($d>1){$enemy.push($0.join('.'))}};while($2>0){$0=[];$a.forEach($F);$2-=1};$enemy.push($1);next('combat')} //enemy[atk,def,hp,amount,name] $cbt='tmp.loc.next'
function ccolor($a) {let $1=$imgc;function $F($b) {ELM("c"+(2+$b)+"img").style.filter="hue-rotate("+$1[$b]+"deg)"};if($a=='all'){Object.keys($1).map(Number).forEach($F)}else{if($1[$a]==360){$1[$a]=0};$1[$a]+=36;$F($a);$imgc=$1}}
function clothe($a,$b) {if($a=="all"){clothe(0,$img[0]);clothe(1,$img[1]);clothe(2,$img[2])}else{$img[$a]=$b;let $2=["hair","pant","shirt"];if($b<0){$2[$a]="1x2T"}else{$2[$a]+=$b};ELM("c"+(Number($a)+3)+"img").src="img/"+$2[$a]+".png"}}
function exp() {let $0=['$hp','$ep','$qi'];function $F($a,$b){if(window[$a]<1){$xp[$b]+=Math.floor(50/$lvl[$b]);if($xp[$b]>99){$xp[$b]-=100;$lvl[$b]+=1;window[$a+'m']+=$lvl[$b]}}};$0.forEach($F)}
function tec($a,$b) {let $1=$book;if($a=="add"){if($1.includes('none')){$1[$1.indexOf('none')]=$b}else{nav("txt",`You can't have more than three techniques.`)}}else if($a=="del"){$1[$b]="none"}else if($a<3){if($1[$a]=="none"){return(['','',''])}else{return($1[$a].split('--'))}};$book=$1}
function varld() {$item=[];function $FF($a,$b) {if(isNaN($VV[$b])){window["$"+$a]=$VV[$b]}else{window["$"+$a]=Number($VV[$b])}};function $F($a) {let $0=$V.indexOf($a);$VV[$0]=$VV[$0].split("!");if(!(isNaN($VV[$0][0]))){$VV[$0]=$VV[$0].map(Number)}};$VA.forEach($F);$V.forEach($FF);sbu('hp');time([0,0,0,0]);clothe('all');ccolor('all')}
function varsv() {function $F($a,$b) {$VV[$b]=window["$"+$a]};function $FF($a) {let $0=$V.indexOf($a);$VV[$0]=window["$"+$V[$0]].join("!")};$V.forEach($F);$VA.forEach($FF)}
function save($a) {varsv();$lst[$a]=Date().slice(4,-33);localStorage.UGsD=$lst.join();localStorage["UGs"+$a]=$VV.join("'")+"!!"+$t+"!!"+$n}
function load($a) {let $1=localStorage["UGs"+$a].split("!!");$VV=$1[0].split("'");function $F($a,$b) {if(!(isNaN($a))){$V[$b]=Number($a)}};$V.forEach($F);nav('txt',$1[1]);nav('nav',$1[2]);varld()}
function savefile() {varsv();let $1=$VV.join("'")+'!!'+$t+'!!'+$n;$1=encodeURIComponent($1);ELM("fdl").href="data:text/plain,"+$1;ELM("fdl").download="UG Save ("+Date().slice(4,-33)+").txt";ELM("fdl").click()}
async function loadfile($a) {let $1=await $a.text();$1=$1.split('!!');$VV=$1[0].split("'");function $F($a,$b) {if(!(isNaN($a))){$V[$b]=Number($a)}};$V.forEach($F);nav('txt',$1[1]);nav('nav',$1[2]);varld()}
