// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p1.dataset.number = (parseInt(p1.dataset.number) + 10 ).toString();
p2.dataset.string = (parseInt(p2.innerHTML.length)).toString();

if(p4.dataset.bool){
    p4.innerHTML = "vrai"
}
else {
    p4.innerHTML = "faux"
}

p5.dataset.number = "1";
p6.dataset.string = "string";
p8.dataset.bool = "true";