function mostrar_esconder(sel) {
    var value = sel.value;     
    if(value==="escolha_prim"){
        document.getElementById('t2019').style.display = 'block';
        document.getElementById('t2020').style.display = 'none';       
    }
    if(value==="escolha_seg"){
        document.getElementById('t2019').style.display = 'none';
        document.getElementById('t2020').style.display = 'block';      
    }
    if(value==="escolha"){
        document.getElementById('t2019').style.display = 'none';
        document.getElementById('t2020').style.display = 'none';          
    }
}