
function n(value){
    document.getElementById("input").value += value;
}
function c(){
    document.getElementById("input").value = "";
}
function calcular(){
    document.getElementById("input").value = eval(document.getElementById("input").value);
}