(function(){
    //coverts save data between versions
    let $1=sv[4].split('.')
    switch($1[0]){
        case 'dev':sv[2]=`\${col(cc[0],'Warning: Loading a dev version save may break your game.')}<br><br>`+sv[2];sv[4]=version;sv=sv.join('¦');varld();break
        default:t=`\${col(cc[0],'Unconvertable game version.')}<br><br>This save with the verion (${sv[4]}) can't be converted into the current version (${version}).<br><br>You can try to force convert it to a dev save.`;n=`\${btn('convert',"sv[4]='dev';sv=sv.join('¦');varld()")}`}
    fun("txt",t)
    fun("nav",n)
    end(1)
})()