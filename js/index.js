let btn_add = document.getElementById("btn-add");
let sec = document.querySelector("#text-sec");

const updateLSData = ()=>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note)=>{
        if(note.value.trim() != "")
        return notes.push(note.value);
    });
console.log(JSON.stringify(notes))
    localStorage.setItem('notes', JSON.stringify(notes));
     
}



btn_add.addEventListener('click', ()=> addNewNote());


function addNewNote(text = ''){

    const note = document.createElement("div");
    note.classList.add("text-div", "card", "p-0");


    note.insertAdjacentHTML("beforeend", `
        <span class="text-menu">
            <i id="btn-delete" class="fa-solid fa-trash shadow "></i>
        </span>
        <div class="text-body ">

        </div>
        <textarea class=""}" ></textarea>
    `);

    
    // console.log(note);

    sec.appendChild(note);

//delete

let btn_delete = note.querySelector("#btn-delete");

btn_delete.addEventListener('click', () => {
    note.remove();
    updateLSData();
});



let btn_save = note.querySelector("#btn-save");
let body = note.querySelector(".text-body");
let textarea = note.querySelector("textarea");


textarea.value = text;
body.innerHTML = text;

//save

textarea.addEventListener('change', (event) => {
    
    const value = event.target.value;
    body.innerHTML = value;

    updateLSData();


});
    
}


const data = JSON.parse(localStorage.getItem('notes'));

if(data)
{
    data.forEach((x)=>{
        addNewNote(x);
    })
}