(function () {let $1=function($a){$2+=`\${col('${$a}',"${$a}")} `};let $2=``;let $3
    cc.forEach($1)
    if(time[1]==0){$3=`<font color="#BB4">Year Change</font>`}else{$3=['Powwus','Hemmus','Coggus','Sollus','Nyttus','Chao','Neu','Sou','Goo','Dea','Maskis','Femsis','Nunnis',''][Math.floor((time[1]-1)/28)]
    }
    $2+=`<br><br> Name: ${pname} | Year: ${time[0]} | Month: ${$3} (${(time[1]-1)%28+1}) | Day: ${time[1]}`
    fun('menu',$2)
    end(0)
})()