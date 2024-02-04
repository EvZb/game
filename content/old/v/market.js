(function () {let $1=[]
    $t = `You are in the village market. You can buy things here.`
    $n = `\${slist('buy','(1) Food:0,(5) Health Pill:1,(5) Energy Pill:2,(5) Qi Pill:3,(10) Sword:4,(10) Clothes:5')+' '+btn('buy',"$tmp=ELM('buy').value;next('v/market')")} | \${btn('leave',"$tmp='none';next('v/center')")}`
    if ($tmp != "none") { $1=[1,5,5,5,10,10];if($money<$1[$tmp]){$t=`You don't have enough money.`}else{$money-=$1[$tmp];switch(Number($tmp)){case 0:$ep=$epm;$hp=$hpm;sbu('hp','ep');break;case 1:iadd('Health Pill--1--+1 max hp--hpx1Xhpmx1--1');
    break;case 2:iadd('Energy Pill--1--+1 max ep--epx1Xepmx1--1');break;case 3:iadd('Qi Pill--1--+1 max qi--$qim+=1--1');break;case 4:iadd('Sword--2--+1 atk--atkx1--1');break;case 5:iadd('Clothes--3--+1 def--defx1--1');break;};$tmp='none'}}
    end()
})()