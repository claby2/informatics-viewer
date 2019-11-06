let problemset = [
    "https://atcoder.jp/contests/abc085/tasks/abc085_c",
    "https://atcoder.jp/contests/arc096/tasks/arc096_a",
    "https://atcoder.jp/contests/agc012/tasks/agc012_f",
    "https://atcoder.jp/contests/abc043/tasks/abc043_b",
    "https://atcoder.jp/contests/abc076/tasks/abc076_b",
    "https://atcoder.jp/contests/abc144/tasks/abc144_d",

    "https://atcoder.jp/contests/abc001/tasks/abc001_a",
    "https://atcoder.jp/contests/arc093/tasks/arc093_b",
    "https://atcoder.jp/contests/agc020/tasks/agc020_e",
    "https://atcoder.jp/contests/abc080/tasks/abc080_a",
    "https://atcoder.jp/contests/abc077/tasks/abc077_a",
    "https://atcoder.jp/contests/abc142/tasks/abc142_a",
];

let problemClass = document.getElementById("problemClass");
let problemCon = document.getElementsByClassName("problemCon");

//https://kenkoooo.com/atcoder/resources/problems.json

function getProblemInformation(problemname){
    return fetch('https://kenkoooo.com/atcoder/resources/problems.json')
    .then(res=>res.json())
    .then(data=>data);
}


function displayProblems (){
    return fetch('https://kenkoooo.com/atcoder/resources/problems.json')
    .then(res=>res.json())
    .then(data => data.filter(e => problemset.find(x => x.endsWith(e.id))))
    .then(data => {
        data.forEach((e,i) => {
            let problem = document.createElement('h3');
            problem.innerText = e.title;

            let id = document.createElement('h4');
            id.innerText = e.id;

            let url = document.createElement('a');
            url.href = "https://atcoder.jp/contests/" + e.contest_id + "/tasks/" + e.id;
            url.target = "_Blank";
            url.innerText = "Link";


            let div = document.createElement('div');
            div.className = "problemCon";

            div.appendChild(problem);
            div.appendChild(id);
            div.appendChild(url);


            problemClass.appendChild(div);



        })
    });
};

displayProblems();