$V=["hp","hpm","ep","epm","lvl","xp","money","tmp","loc","cbt","time","img","imgc","book","dir","sp"];$V0=["time","img","imgc","book","dir","sp"];$V1=[10,10,10,10,0,0,0,"none","none","none","0X0X0X0","0X0X0","0X0X0X0","noneXnoneXnone",'EX0X0X0X0X0X0X0X0X0','0X0X0X0X0X0X0X0X0'];$t=``;$n=``;$sp0=['Fire','Water','Metal','Ice','Light','Dark','Life','Evil','Curse']
$hpt=['<em>NEAR DEATH</em>!','severely injured!','hurt','pained','healthy','very healthy'];$ept=['<em>EXHAUSTED</em>!','weak!','fatigued','normal','energetic','vigorous'];$cc=['#B44','#B4B','#B84','#BB4','#4B4','#44B'];$dir0={C:1,N:2,NE:3,E:4,SE:5,S:6,SW:7,W:8,NW:9,F:function(){return($dir[$dir0[$dir[0]]])}};$lst=new Array(7)
function ELM($a) {return(document.getElementById($a))}
function end($a,$b) {nav('txt',$t);nav('nav',$n);ELM("script2").remove()}
function nav($a,$b) {ELM($a).innerHTML=$b}
function rng($a) {return(Math.floor(Math.random()*$a+1))}
function per100($a,$b) {let $1=(100*Number($a/$b)).toFixed();return($1)}
function toggledis($a,$b) {let $1=ELM($a);let $2=ELM($b);let $3=["journal","cheats","savemenu","infodisplay"];function $F($a) {ELM($a).style.display="none"};if($1.style.display&&$2.style.display=="block"){$3.forEach($F);}else{$3.forEach($F);next($b);$1.style.display="block";$2.style.display="block"}}
function sbu() {function $F($a) {let $1=per100(eval("$"+$a),eval("$"+$a+"m"));let $2=ELM($a+"bar");if($1<0){$1=0};$2.style.width=$1+"%";$1=Math.floor($1/20);$2.style.background=$cc[$1];nav($a+"text",col($cc[$1],eval('$'+$a+'t[$1]')))};Object.values(arguments).forEach($F)}
function col($a,$b) {return("<font color="+$a+">"+$b+"</font>")}
function btn($a,$b) {return('<button class="btxt" onclick="'+$b+'"><big>'+$a+'</big></button>')}
function next($a) {let $1=document.createElement("script");document.body.appendChild($1);$1.id="script2";$1.src="content/"+$a+".js"}
function slist($a,$b) {let $1='<select id="'+$a+'" style="background: #888">';let $2=$b.split(',');function $F($c) {let $3=$2[$c].split(':');$1+=('<option value="'+$3[1]+'">'+$3[0]+'</option>')};Object.keys($2).forEach($F);$1+='</select>';return($1)}
function time($a) {let $1=$a.split(':').map(Number);let $2=$time;let $3;$2[0]+=$1[0];$2[1]+=$1[1];$2[2]+=$1[2];$2[3]+=$1[3];if($2[3]>59){$2[3]-=60;$2[2]+=1;$ep-=1};if($2[2]>23){$2[2]-=24;$2[1]+=1};if($2[1]>365){$2[1]-=365;$2[0]+=1};if(day()){$3='☀️ '}else{$3='🌙 '};$3+=$2[2]+':';if($2[3]<10){$3+='0'+$2[3]}else{$3+=$2[3]};nav('hour',$3);$time=$2;$ep-=($1[2]);sbu('ep')}
function day() {if($time[2]>5&&$time[2]<20){return(true)}else{return(false)}}
function pic($a) {return("<img src='img/"+$a+".png'>")}
function evnt() {let $1;let $2;function $F($a) {$2=$a.split(':');if(rng(100/(0+$2[1]))==1){$1=($2[0])}else{return('true')}};Object.values(arguments).every($F);return($1)}
function combat($a) {let $0=$a.split(".");$0[1]=Number($0[1]);$0[2]=Number($0[2]);$0[3]=Number($0[3]);$cbt=$0;$tmp="cbt";next('combat')}
function ccolor($a) {let $1=$imgc;function $F($b) {ELM("c"+(2+$b)+"img").style.webkitFilter="hue-rotate("+$1[$b]+"deg)"};if($a=='all'){Object.keys($1).map(Number).forEach($F)}else{if($1[$a]==360){$1[$a]=0};$1[$a]+=36;$F($a);$imgc=$1}}
function clothe($a,$b) {if($a=="all"){clothe(0,$img[0]);clothe(1,$img[1]);clothe(2,$img[2])}else{$img[$a]=$b;let $2=["hair","pant","shirt"];if($b<0){$2[$a]="1x2T"}else{$2[$a]+=$b};ELM("c"+(Number($a)+3)+"img").src="img/"+$2[$a]+".png"}}
function exp($a,$b) {if($a>=$lvl){$xp+=($a+1-$lvl)*$b};if($xp>99){$xp-=100;$xp=Math.floor($xp/2);$hpm=Math.floor($hpm*1.25);$epm=Math.floor($epm*1.25);$lvl+=1}}
function tec($a,$b) {let $1=$book;if($a=="add"){function $F($a,$b) {$1[$a]=[$b]};if($1[0]=="none"){$F(0,$b)}else if($1[1]=="none"){$F(1,$b)}else if ($1[2]=="none"){$F(2,$b)}else{nav("txt",`You can't have more than three techniques.`)}}else if($a=="del"){$1[$b]="none"}else if($a<3){if($1[$a]=="none"){return(" xx xx ")}else{return(String($1[$a]))}};$book=$1}
function varld() {function $FF($a,$b) {window["$"+$a]=$V1[$b]};function $F($a) {let $0=$V.indexOf($a);$V1[$0]=$V1[$0].split("X");if(!(isNaN($V1[$0][0]))){$V1[$0]=$V1[$0].map(Number)}};$V0.forEach($F);$V.forEach($FF);sbu('hp','ep');time('0:0:0:0');clothe('all');ccolor('all')}
function varsv() {function $F($a,$b) {$V1[$b]=window["$"+$V[$b]]};function $FF($a) {let $0=$V.indexOf($a);$V1[$0]=window["$"+$V[$0]].join("X")};$V.forEach($F);$V0.forEach($FF)}
function save($a) {varsv();$lst[$a]=Date().slice(4,-33);localStorage.UGsD=$lst.join();localStorage["UGs"+$a]=$V1.join("'")+"!!"+$t+"!!"+$n}
function load($a) {let $1=localStorage["UGs"+$a].split("!!");$V1=$1[0].split("'");function $F($a,$b) {if(!(isNaN($a))){$V[$b]=Number($a)}};$V.forEach($F);nav('txt',$1[1]);nav('nav',$1[2]);varld()}
function savefile() {varsv();let $1=$V1.join("'")+'!!'+$t+'!!'+$n;$1=encodeURIComponent($1);ELM("fdl").href="data:text/plain,"+$1;ELM("fdl").download="UG Save ("+Date().slice(4,-33)+").txt";ELM("fdl").click()}
async function loadfile($a) {let $1=await $a.text();$1=$1.split('!!');$V1=$1[0].split("'");function $F($a,$b) {if(!(isNaN($a))){$V[$b]=Number($a)}};$V.forEach($F);nav('txt',$1[1]);nav('nav',$1[2]);varld()}
