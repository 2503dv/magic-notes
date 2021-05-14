// console.log("hello");
 shownotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function(e){
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj= JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.value="";
    // console.log(notesobj);
    shownotes();
});

function shownotes(){
     let notes = localStorage.getItem("notes");
     if(notes == null)
     {
         notesobj = [];
     }
     else{
         notesobj = JSON.parse(notes);
     }
     let html = "";
     
     notesobj.forEach(function(element,index) {
         html +=`
         <div class="notecard my-2 mx-2 card" style="width: 18rem; background:#84aaa7;">
  <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
  <div class="card-body">
    <h5 class="card-title">Note ${index+1}</h5>
    <p class="card-text">  ${element}</p>
    <button id="${index}" onclick="deletenode(this.id)" class="btn btn-primary" style=" background:gray; box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);">Delete Note</button>
  </div>
</div>
         `   
     });

     let noteselm = document.getElementById("notes");
     if(notesobj.length !=0){
         noteselm.innerHTML = html;
     }
     else{
         noteselm.innerHTML = `Nothing To Show You Now !! use "Add a Note " section above to add notes. `;
     }
}

function deletenode(index){
    // console.log("i am deleting !",index);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj= JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}


let search = document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();
    // console.log("input event fired !!",inputval);
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})

