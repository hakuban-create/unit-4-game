
$(document).ready(function() {




init();

var win=0;
var lose=0;

var targetNum;
var totalNum=0;

var crystal1;
var crystal2;
var crystal3;
var crystal4;


function init(){
    //fetching the win lose count from the local storage
    if(localStorage.getItem("win")!="undefined"){
        var historicalWin=localStorage.getItem("win");
        var historicalLose=localStorage.getItem("lose");
        win=historicalWin;
        lose=historicalLose;
    $('#win-count').html(historicalWin);
    $('#lose-count').html(historicalLose);
    }


targetNum=getRandom1(19,120);
$('#target-number').html(targetNum);
crystal1=getRandom1(1,12);
crystal2=getRandom2(1,12,crystal1);
crystal3=getRandom2(1,12,crystal1,crystal2);
crystal4=getRandom2(1,12,crystal1,crystal2,crystal3);
console.log("target: "+targetNum+"  "+crystal1+"  "+crystal2+"  "+crystal3+"  "+crystal4);

}

function addToTotal(num){
totalNum+=num;
$('#row-3').html(num);
$('#total-number').html(totalNum);
check();
}

function incrementWin(){
    win++;
    $('#win-count').html(win);
}

function incrementLose(){
    lose++;
    $('#lose-count').html(lose);
}

function check(){
    event.preventDefault();
    if(totalNum==targetNum){
        incrementWin();
        alert("You won!");
       saveAndInit();
    }else if(totalNum>targetNum){
        incrementLose();
        alert("You have lost! Your total is: "+totalNum);
        saveAndInit();
    }
}

function saveAndInit(){
    localStorage.setItem("lose",lose);
    localStorage.setItem("win",win);
}

$('#img-1').on('click',function(){
addToTotal(crystal1);
});

$('#img-2').on("click",function(){
    addToTotal(crystal2);
});
$('#img-3').on("click",function(){
    addToTotal(crystal3);
});
$('#img-4').on("click",function(){
    addToTotal(crystal4);
});



/*  *  *  *  * RANDOM NUM GENERATOR *  *  *  */
function getRandom1(min,max){
    min=min-1;
    var diff=max-min;
    var randomNum=Math.floor(Math.random()*diff+min+1);
    return randomNum;
};
function getRandom2(min,max,...exclude){
    newMin=min-1;
    var diff=max-newMin;
    var randomNum=Math.floor(Math.random()*diff+newMin+1);
    while(exclude.includes(randomNum)){
        randomNum=getRandom2(min,max,exclude);
    }
    return randomNum;
};
/*  *  *  *  *  *  *  *  *  *  * *  *  *  * */

});