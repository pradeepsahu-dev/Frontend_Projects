const input = document.querySelector("input");
const task_btn = document.querySelector("#task_btn");

const ul = document.querySelector("ul");



task_btn.addEventListener("click",()=>{

    if(input.value === "") return;

    const list_item = document.createElement("li");
    list_item.textContent = input.value;


    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete"
    delbtn.classList.add("delete");

    list_item.appendChild(delbtn);
    ul.prepend(list_item);

    input.value ="";

});


//press Enter to add data ok
input.addEventListener("keypress" , function(e){
    if(e.key === "Enter"){
        task_btn.click();
    }
})

//using Event Delegation


ul.addEventListener("click", function(e){
    
    if(e.target.classList.contains("delete")){
           let list_itemd = e.target.parentElement;
           list_itemd.remove();
    }
});


//not working properly

// let delete_Btns = document.querySelectorAll(".delete");
// for(deletBtn of delete_Btns){
//     deletBtn.addEventListener("click",  function(){
//         console.log(this.parentElement);
//         let list_itemdelete = this.parentElement;
//         list_itemdelete.remove();
//     })
// }
