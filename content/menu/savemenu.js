(function () {
    if(saving=="T"){
        let $1='';let $2=0;saves=localStorage.UGS.split(',');while($2 < 7){
            if (saves[$2]==0) {$1+=`<div class="sld"><button onclick="save(${$2});next('menu/savemenu',0)">Save ${$2+1}</button>`}
            else {$1 += `<div class="sld"><button onclick="load(${$2});menu(3)">Load ${$2+1}</button><div>${saves[$2]}</div>
            <button style="float: right" onclick="saves[${$2}]=0;localStorage.UGS=saves.join();localStorage.removeItem('UG ${$2}');next('menu/savemenu',0)">Delete</button>`};$1+=`</div>`;$2+=1}
        fun("menu",$1+`<br><br><div class="sld" style="border:none"><button onclick="save('file')">Save File</button><button style="float: right" onclick="elm('fileinput').click()">Load File</button></div>`)}
    else{fun("menu",`\${col(cc[0],"Saving is disabled in this scene.")}`)}
    end(0)
})()