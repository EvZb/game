String.prototype.cut=function(index,cut,add) {if(index<0) {index+=this.length;if(index<0) {index=0}};return this.slice(0,index)+(add||"")+this.slice(index+(cut||0))}
//use functions
function worldgen() {worlds.push(window['namegen'+ngen]().replace(' '));wgen.push(Array.from(Array(100)).map(()=>weight[rng(31)]).join(''));wppl.push(x)}
function genpsn($a=[x,x,x,x,x,x,x,x],$b=0) {let $0=($c)=>{$1[$c]=$a[$c]};let $1=Array(8);let $2=()=>window['namegen'+ngen]();let $3=$2();if($a[0]==x){while(psn.includes($3)){$3=$2()};$1[0]=$3}else{$0(0)};if($a[1]==x){$1[1]=String(rng(99999));$1[1]='00000'.slice($1[1].length-5)+$1[1]}else{$0(1)};if($a[2]==x){$1[2]=rng(4)}else{$0(2)};if($a[3]==x){$1[3]=rng(20,-10)}else{$0(3)};if($a[4]==x){$1[4]=rng(2)}else{$0(4)};if($a[5]==x){$1[5]=String(rng(9));while($1[5].length<12){$1[5]+=rng(9)}}else{$0(5)};if($a[6]==x){$1[5]=rng(1)}else{$0(6)};$1[7]=0;;if($a[7]==x){$1[8]=rng(81+18)}else{$0(6)};if($b==0){newpsn.push($1[0])}add('psn',$1);return($1)}
function trait($a) {let $0=trt.indexOf($a);if($0>-1){return(trt[$0],trtl[$0],$0)}}
function ppl($a,$b) {if(isNaN($a)){return(psn.indexOf($a))}else{if($a==0){let $1='';desc['psn'].forEach(($c)=>{while(window[$c].length>1){$1+=window[$c].pop()+'!'};$1=$1.cut(-1,1,'--')});$1=$1.slice(9,-2);wppl[worlds.indexOf($b)]=$1}else{let $1=wppl[worlds.indexOf($b)].split('--');let $2=Array($1.length);$1.forEach(($c,$d)=>{$2[$d]=$c.split('!')});$2.forEach(($c)=>{$c.forEach(($d,$e)=>{if(arrpn[$e]==x){window[desc['psn'][$e]].push($d)}else{window[desc['psn'][$e]].push(Number($d))}})})}}}//ppl($a,$b) if $a is 0, it saves the people to world $b, otherwise, if $a is a number it load the world $b, else, it returns index of psn[$a]
function rng($a,$b=0) {return(Math.floor(Math.random()*($a+1))+$b)}//generates a number between 0 and $a then adds $b
function perc($a,$b) {return((100*Number($a/$b)).toFixed())}//int $a percent of $b
function next($a,$b=2) {let $1=document.createElement("script");document.body.appendChild($1);$1.id="script"+$b;$1.src="content/"+$a+".js"}
function exp($a,$b=0) {if($a==undefined){let $0=['$hp','$ep','$ki'];function $F($c,$d){if(window[$c]<1){$xp[$d]+=Math.floor(50/$lvl[$d]);if($xp[$d]>99){$xp[$d]-=100;$lvl[$d]+=1;window[$c+'m']+=$lvl[$d]}}};$0.forEach($F)}else{$xp[$a]+=$b;if($xp[$a]>99){$xp[$a]-=100;$lvl[$a]+=1}}}
function cycle($a,$b) {while($a<0){$a=$b-$a};return($a%$b)}
function num($a) {let $1=$a;if($1<10&&$1>-10){if($1<0){$1='-0'+Math.abs($1)}else{$1='0'+$1}};return($1)}
function ptime($a) {let $2=time;$2[0]+=$a[0];$2[1]+=$a[1];$2[2]+=$a[2];$2[3]+=$a[3];if($2[3]>59){$2[3]-=60;$2[2]+=1;$ep-=1;$qi+=1};if($2[2]>23){$2[2]-=24;$2[1]+=1};if($2[1]>364){$2[1]-=365;$2[0]+=1};nav('hour',$2[2]+':'+num($2[3]));time=$2}
//html functions
function btn($a,$b) {return('<button onclick="'+$b+'"><big>'+$a+'</big></button>')}
function col($a,$b) {return("<font color="+$a+">"+$b+"</font>")}
function fun($a,$b) {elm($a).innerHTML=eval('`'+$b+'`')}
function cimg($a,$b) {elm($a).src="img/"+$b}
function lst($a,$b,$c) {let $0='';let $2=$b.split(',');if($c!=undefined){$0=' onchange="'+$c+'"'};let $1='<select id="'+$a+'"'+$0+'>';function $F($c) {let $3=$2[$c].split(':');$1+=('<option value="'+$3[1]+'">'+$3[0]+'</option>')};Object.keys($2).forEach($F);$1+='</select>';return($1)}
function ccolor($a,$b) {let $1=$img.slice(3,7);let $2=$img.slice(7,11);function $F($c,$d,$e) {elm("c"+(2+Number($d))+"img").style.filter="hue-rotate("+(36*$1[$d])+"deg) brightness("+(1-(0.2*$e))+")"};if($a==undefined){($1).forEach($F)}else{if($b==0){$2[$a]=($2[$a]+1)%5}else{$1[$a]=($1[$a]+1)%10};$F(0,$a,$2[$a]);$img=$img.slice(0,3).concat($1,$2).map(Number)}}
//script functions
function date() {return(Date().slice(4,-33))}
function ieff($a) {let $1=arr('itm',$a);let $2=$1[5].split('X');switch($1[2]){case 0:equip($a,$1,$2);break;case 1:if($2[0]){eval($2[1])};break;case 2:$2.forEach(($c,$d)=>{if($d%2==0){window[$c]=$b*$2[1+$d]}});$1[3]-=1;break;case 4:eval($2[0]);$1[3]-=1;break;};if($1[3]<1){rem('itm',$a)}}//$a=item number, $b=modifier (-1 for dequip) options are based on itypes
function equip($a,$b,$c) {let $1=eqp.indexOf($b[0]);let $2=($d,$e)=>{if($e%2==0){window[$d]+=$1*Number($c[1+$e])}};if($1>-1){eqp[$1]=x;if(slotc.includes($c[0])){clothe($c.splice(0,1),$c.splice(0,1))};$1=-1;$c.forEach($2)}else{if(slotc.includes($c[0])){clothe($c.splice(0,1),$c.splice(0,1))};}}
function allyid() {return(psn.indexOf(ally))}
function arr($a,$b){let $1=[];let $2=function($c){$1.push(window[$c][$b])};window['arr'+$a].forEach($2);return($1)}
function rem($a,$b){if($a=='itm'){equip($b,x)};let $1=function($c){window[$c].splice($b,1)};window['arr'+$a].forEach($1)}
function add($a,$b){let $1=function($c,$d){window[$c].push($b[$d])};desc[$a].forEach($1)}
function namegen1(){let $1=rng(2,1);let $2=rng(2,1);let $3=nvow1.length;$4=ncon1.length;let $5='';let $6='';while($1>0){$5+=ncon1[rng($4-1)]+nvow1[rng($3-1)];$1-=1};$5=$5[0].toUpperCase()+$5.slice(1);while($2>0){$6+=ncon1[rng($4-1)]+nvow1[rng($3-1)];$2-=1};$6=$6[0].toUpperCase()+$6.slice(1);return($5+' '+$6)}
function namegen2(){let $1=rng(3,1);let $2=rng(3,1);let $3=ncon2.length;let $4='';let $5='';while($1>0){$4+=ncon2[rng($3-1)];$1-=1};while($2>0){$5+=ncon2[rng($3-1)];$2-=1};$4=$4[0].toUpperCase()+$4.slice(1);$5=$5[0].toUpperCase()+$5.slice(1);return($4+' '+$5)}
function namegen3(){let $1=rng(9,2);let $2=rng(13,2);let $3='';let $4='';let $5=ncon3.length-1;while($3.length<$1){$3+=ncon3[rng($5)]};while($4.length<$2){$4+=ncon3[rng($5)]};$3=$3[0].toUpperCase()+$3.slice(1);$4=$4[0].toUpperCase()+$4.slice(1);return($3+' '+$4)}
function togdis($a) {let $1=['character','items','savemenu','settings','cheats'];if($a==m){elm('infodis').style.display=x;m=0}else{next("$/"+$1[$a-1],0);elm('infodis').style.display="block";m=$a}}
function sbu($a=['hp','ep','sp','kp']) {if(Array.isArray($a)){$a.forEach(sbu)}else{let $1=[window[$a],window[$a+'m']];let $2=elm($a+"bar");if($1[0]>$1[1]){window[$a]=$1[1];$1=100}else{$1=perc($1[0],$1[1])};if($1<0){window[$a]=0;$1=0};$2.style.width=$1+"%";$1=Math.floor($1/20);$2.style.background=cc[$1];fun($a+"text",col(cc[$1],window[$a])+" "+window[$a+'m'])}}
function end($a=2) {elm("script"+$a).remove();if($a==1||$a==3){sbu()};if($a==2||$a==3){fun('txt',t);fun('nav',n)}}
function elm($a){return(document.getElementById($a))}
//save/load functions
function sett($a,$b) {if($a=='load'){setting=localStorage['settings'].split(',')}else{setting[$a]=$b;localStorage['settings']=setting.join()}}
function varld() {sv=sv.split('!!!');let $1=arrn.length;sv[0]=sv[0].split('!!');while($1>0){$1-=1;window[arrn[$1]]=sv[0][$1].split('XX').map(Number)};$1=arrs.length;sv[1]=sv[1].split('!!');while($1>0){$1-=1;window[arrs[$1]]=sv[1][$1].split('XX')};t=sv[2];n=sv[3];reset()}
function varsv() {sv=[[],[],[],[],'',''];reset('s');let $1=0;while($1<arrn.length){sv[0].push(window[arrn[$1]].join('XX'));$1+=1};sv[0]=sv[0].join('!!');$1=0;while($1<arrs.length){console.log($1);sv[1].push(window[arrs[$1]].join('XX'));sv[1]=sv[1].join('!!');$1+=1};sv[2]=t;sv[3]=n;sv=sv.join("!!!")}
function reset($a) {let $1;let $2;if($a=='s'){ss=[];sn=[];$1=($b)=>ss.push(window[$b]);$2=($b)=>sn.push(window[$b])}else{$1=($b,$c)=>window[$b]=ss[$c];$2=($b,$c)=>window[$b]=sn[$c]};stringv.forEach($1);numv.forEach($2);sbu()}
function save($a) {varsv();if($a=='file'){elm("fdl").href="data:text/plain,"+encodeURIComponent(sv);elm("fdl").download="UG Save ("+date()+").txt";elm("fdl").click()}else{localStorage["UG "+$a]=sv;saves[$a]=date();localStorage.UGS=saves.join()}}
function load($a) {sv=localStorage["UG "+$a];varld()}
async function loadfile($a) {sv=await $a.text();varld()}