let n1 
let n2
let sym
let result
let statscomplete = false

let symold

function calc(num) {

    if (statscomplete == true) {
        document.getElementById ("cont").value = null
        document.getElementById ("resulted").value = null
        sym = null
        statscomplete = false
    }

    document.getElementById ("cont").value += num
        if (sym == null ) {
            n1 = parseInt(document.getElementById ("cont").value)
            document.getElementById ("resulted").value = null
        }else{
            n2 = parseInt(document.getElementById ("cont").value)
        }
}

function simbolos(operation) { 

    sym = operation
    
    document.getElementById ("resulted").value = `${n1} ${sym}`
    document.getElementById ("cont").value = null
    }
   




function resolver() {
    
   if (sym == "-" ) {
       result = n1-n2
   }else
   if (sym == "+" ) {
       result = n1+n2
   }else
   if (sym == "X" ) {
       result = n1*n2
   }else
   if (sym == "/" ) {
       result = n1/n2
   }else
   if (sym == null ) {
       result = "Operação incompleta"
   }
   document.getElementById ("cont").value = result
   document.getElementById ("resulted").value = `${n1} ${sym} ${n2} = `
   sym = null
   statscomplete = true
   

   
}

//Reseta todos os valores
function reset(params) {
    document.getElementById ("cont").value = null
    document.getElementById ("resulted").value = null
    symold = sym
    n1 = null
    n2 = null
}

//botão apagar
function backspace(params) {
    document.getElementById ("cont").value = document.getElementById ("cont").value.substring(0, document.getElementById ("cont").value.length-1)
    if (sym == null) {
        n1 = parseInt(document.getElementById ("cont").value)
        document.getElementById ("resulted").value = null
    }else{
        n2 = parseInt(document.getElementById ("cont").value)
    }
}
