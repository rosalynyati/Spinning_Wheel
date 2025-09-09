const names = [];
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const namelist = document.getElementById("nameList");
const spinBtn = document.getElementById("spinBtn");
const wheel = document.getElementById("wheel");
const winnerDisplay = document.getElementById("winnerDisplay");

//Add name

    adddBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name){
    name.push(name);
    name.Input.value = " ";
    updateList();
    }
});

//UPDATE LIST

function updateList(){
namelist.innerHTML = "";
names.forEach((n, index)=>{
    const li=document.createElement("li");
    li.className="list.group-ite d-flex justify-content-between aligh-item-center";
    li.textContent= n;

const delBtn=document.createElement("button");
delBtn.className= "btn btn-small btn-danger";
delBtn.innerHTML= '<i class="fa-solid fa-trash"> </i>';
delBtn.onclick= () => {
    names.splice(index, 1);
    updateList();
};

li.append(delBtn);
namelist.appendChild(li);

});
}

//SPIN FUNCTION

spinBtn.addEventListener("click", () => {
    if(names.length=0){
        alert("Please add somes first")
        return;
    }
    //random rotation
    const randomDegree=Math.floor(Math.random()*360)+720;
    wheel.style.transform='rotate(${randomDegree}deg)';


});

setTimeout(() => {
    const winner = names[Math.floor(Math.random() * names.length)];
    winnerDisplay.innerHTML= '<i class="fa-solid fa-trophy"></i> Winner: ${winner}';
}, 3000);
});
