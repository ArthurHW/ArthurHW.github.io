var form = document.getElementById("formulario");
var tarefa = document.getElementById("campo").value;




 function carregar(){

    let name = localStorage.getItem("name")
    let display = document.getElementById("name")

    display.innerText = name;


    let listaPai = document.getElementById("lista");

    listaPai.innerHTML = "";

    let arrLista = JSON.parse(localStorage.getItem("listaJSON"));

    for (let each in arrLista){

        let num = parseInt(each) + 1;

        let node = document.createElement("li");
        let node2 = document.createElement("input"); 
        
        node2.setAttribute("type","checkbox");
        node2.setAttribute("name","items");
        node2.setAttribute("value",arrLista[each]);
        let textnode = document.createTextNode(" " + num + " - " + arrLista[each]); 
        node.appendChild(node2);
        node.appendChild(textnode);   
        listaPai.appendChild(node); 

    }

}   


function armazenar(){


    let novoItem = document.getElementById("item").value
    let listaExistente = JSON.parse(localStorage.getItem("listaJSON"));

    let arrLista = [];

    if(listaExistente != null){
        arrLista = listaExistente;
    }

    if (novoItem != "") {
        arrLista.push(novoItem);
        localStorage.setItem("listaJSON", JSON.stringify(arrLista));
        carregar();
        document.getElementById("item").value = "";
    }

}


function excluirItem(){

    let items = document.getElementsByName("items");
    
    let novaLista = [];

    for (let each in items) {
        if (items[each].checked == false) {
            novaLista.push(items[each].value);
        }
    }
    
    localStorage.setItem("listaJSON", JSON.stringify(novaLista));
    carregar();
}

function mudarNome(){

    let element = document.getElementById("nameInsert")
    let name = element.value

    let display = document.getElementById("name")

    localStorage.setItem("name", name);

    display.innerText = name



}