let problemset = {
    "0" : "https://atcoder.jp/contests/abc085/tasks/abc085_c",
    "1" : "https://atcoder.jp/contests/arc096/tasks/arc096_a"
};

let problemClass = document.getElementById("problemClass");
let problemCon = document.getElementsByClassName("problemCon");

//https://kenkoooo.com/atcoder/resources/problems.json

function getProblemInformation(problemname){
    return fetch('https://kenkoooo.com/atcoder/resources/problems.json')
    .then(res=>res.json())
    .then(data=>data);
}

Object.size = function(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function getProblemSet (n) {
    if (problemset.hasOwnProperty(n)) {
        return problemset[n];
    } else {
        return n;
    }
};

function displayProblems (){
    for(let i = 0; i < Object.size(problemset); i++){
        let problem = document.createElement('h3');
        problem.innerText = getProblemSet(i);
        problemClass.childNodes[2*i+1].appendChild(problem);
    }
};

displayProblems();