let bx= document.querySelectorAll(".box");
let rsbtn = document.querySelector("#reset-btn");
let nw = document.querySelector("#new-btn");
let ms = document.querySelector(".msg");
let msg = document.querySelector("#mg");
let bd = document.querySelector(".box");

let f = true;
let moves=0;

const winP = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetg = () =>{
    f=true;
    moves = 0;
    enableBoxs();
    ms.classList.add("hide");
};
const disableBoxs = () => {
    for(let box of bx)
    {
        box.disabled = true;
    }
};
const enableBoxs = () => {
    for(let box of bx)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

bx.forEach((box) => {
    box.addEventListener("click", () => {
        if (f) {
            box.innerText = "O";
            box.classList.add("playerO");
            box.classList.remove("playerX");
            f = false;
        } else {
            box.innerText = "X";
            box.classList.add("playerX");
            box.classList.remove("playerO");
            f = true;
        }
        box.disabled = true;
        moves++;
        let w = win();
        if (moves === 9 && !w) {
            draw();
        }
    });
});

const draw = () => {
    msg.innerText = `Game was a Draw.`;
    ms.classList.remove("hide");
    disableBoxes();
  };

const showw = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    ms.classList.remove("hide");
    disableBoxs();

};

const win = ()=>{
    for(let i of winP)
    {
        let v1=bx[i[0]].innerText;
        let v2=bx[i[1]].innerText;
        let v3=bx[i[2]].innerText;

        if(v1 != "" && v2 != "" && v3 != "")
        {
            if(v1 == v2 && v2 == v3)
            {
                showw(v1);
                return 1;
            }
        }

    }
};
nw.addEventListener("click",resetg);
rsbtn.addEventListener("click",resetg);