const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

function clickButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();
    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            var info = fr.result;
            document.getElementById('output').textContent=fr.result;
    }
}
    catch{
        document.getElementById('output').textContent="Arquivo não localizado!";
    }
    finally{
        alert("Obrigado pela visita!");
    }
    
}