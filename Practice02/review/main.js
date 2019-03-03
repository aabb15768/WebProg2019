// hard-coding the urls 
var urls = [];
urls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJwEe3YO8sPC5CHCd8n2aWT-ab-kgoKl8A19lrInjN0AnFyKMXA");
urls.push("./images/pizza01.jpg");
urls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFjzx8NFySqy-2iyvmHrhTI3eLIMoFi89Jqbm8vy6m022Ob0C");
urls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9doKwlIPqicmGCkpMg2V-7NiyH2-8MvSCBjEzcOfTxvjrtOzt")

var click_counts = 1;

// getting html elements
var next_button = document.getElementById("next");
var back_button = document.getElementById("back");
var display_image = document.getElementById("display");
var display = display_image.parentElement;
var source = document.getElementById("source")

function checkState(){
    if(click_counts === urls.length - 1){
        next_button.classList.add("disabled");
    }
    else{
        next_button.classList.remove("disabled")
    }
    
    if(click_counts === 0){
        back_button.classList.add("disabled")
    }
    else{
        back_button.classList.remove("disabled")
    }
    display_image.setAttribute("src",urls[click_counts]);
    source.innerText = "source: " + urls[click_counts]
}

function Click(e){
    // not clickable if it is disabled
    if(!e.classList.contains("disabled")){
        
        if (e.id === "next") {
            click_counts += 1;
        }
        else {
            click_counts -= 1; 
        }
        checkState()
    }
}


 
