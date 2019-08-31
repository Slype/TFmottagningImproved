function updateRows(){
    let list = document.querySelectorAll("div.row:not(.rowHeader)");
    let hideDisabled = document.getElementById("hideDisabled").checked;
    let search = document.getElementById("search").value;
    for(let row of list){
        if(search == "" && !(row.className.includes("Disabled") && hideDisabled))
            row.style.display = "flex";
        else {
            let word = row.children[0].innerText.toLowerCase();
            let includes = true;
            for(let inpWord of search.split(" ")){
                if(!word.includes(inpWord.toLowerCase())){
                    includes = false;
                }
            }
            row.style.display = includes && !(row.className.includes("Disabled") && hideDisabled) ? "flex" : "none";
        }
    }
}

let lastHeaderClick = 0;
let headerClickCount = 0;
let headerClickActive = false;
document.getElementById("header").addEventListener("click", e => {
    if(headerClickActive)
        return;
    let t =  new Date().getTime();
    if(t - lastHeaderClick < 400 || lastHeaderClick == 0)
        headerClickCount++;
    else
        headerClickCount = 0;
    if(headerClickCount >= 3){
        document.getElementById("header").style.animationName = "headerSpin";
        headerClickActive = true;
    }
    lastHeaderClick = t;
});
