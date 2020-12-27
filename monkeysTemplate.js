$(() => {
    
    var templateInfo = document.getElementById("monkeyInfo").innerHTML;
    // console.log(templateInfo);
    var templateX = Handlebars.compile(templateInfo);
    
    var templateData = templateX({monkeys});
    // console.log(templateData);
    document.getElementsByClassName("monkeys")[0].innerHTML += templateData;
    
});

function revealDetails(id){
    if(document.getElementById(`${id}`).style.display == "none")
        document.getElementById(`${id}`).style.display = "block";
    else {
        document.getElementById(`${id}`).style.display = "none";
    }
}