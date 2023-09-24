(function () {
    if($tmp==0||$tmp==1){
        if($tmp==0){$ncon=['b','ch','d','f','g','h','j','k','l','m','n','p','q','qu','r','s','sh','t','v','w','x','y','z']
        namegen=function(){let $1=rng(3);let $2=rng(3);let $3=$nvow.length;$4=$ncon.length;let $5='';let $6='';while($1>0){$5+=$ncon[rng($4)-1]+$nvow[rng($3)-1];$1-=1};$5=$5[0].toUpperCase()+$5.slice(1);while($2>0){$6+=$ncon[rng($4)-1]+$nvow[rng($3)-1];$2-=1};$6=$6[0].toUpperCase()+$6.slice(1);return($5+' '+$6)}}
        else{namegen=function(){let $1=rng(3)+1;let $2=rng(3)+1;let $3=$ncon.length;let $4='';let $5='';while($1>0){$4+=$ncon[rng($3)-1];$1-=1};while($2>0){$5+=$ncon[rng($3)-1];$2-=1};$4=$4[0].toUpperCase()+$4.slice(1);$5=$5[0].toUpperCase()+$5.slice(1);return($4+' '+$5)}
        $ncon=['ba','be','bi','bo','bu','fu','chi','cho','chu','ge','gi','go','gu','ha','he','hi','ho','ji','jo','ju','ka','ke','ki','ko','ku','ma','me','mi','mo','mu','n','na','ne','ni','no','nu','pa','pe','pi','po','pu','ra','re','ri','ro','ru','sa','se','so','su','shi','sho','shu','ta','te','to','tsu','wa','za','ze','zo','zu']}
        $t=`You fall onto a road and a truck approaches. Your life flashes before your eyes, along side the headlights.<br><br>Your name is...`
        $n=`Name generator: \${slist('ngen','1:0,2:1')+' '+btn('select',"$tmp=ELM('ngen').value;next('intro1')")} | \${btn('randomize',"ELM('itext').value=namegen()")} <textarea id="itext" cols=31 rows=1 maxlength=31 placeholder="31 character limit">${namegen()}</textarea> \${btn('next',"$person[0]=ELM('itext').value;$tmp=2;next('intro1')")}`}
    else if($tmp==2) {$t=`By the time you finish remembering your past, it has become night. Actually, you can't see anything except the two "headlights", but they have stopped moving toward you.<br><br>`
        $n=`You decide to go toward the \${btn('[left] [right]',"$tmp='none';next('intro1')")} light.`}
    else {$t=`You awaken in a cave near a village.`;$n=`\${btn('next',"$loc='vill';next('cave')")}`}
    end()
})()