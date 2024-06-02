var currque = '';

function mySwap(i, j, string) {
    let temp = string[i];
    string[i] = string[j];
    string[j] = temp;
}

function gotoque(que) {
    document.getElementsByClassName('center')[0].style.display = 'none';
    document.getElementById(que).style.display = 'block';
    document.getElementsByClassName('backtoque')[0].style.display = 'flex';
    currque = que;
}

function backtoque() {
    const inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    document.getElementById(currque).style.display = 'none';
    document.getElementsByClassName('center')[0].style.display = 'flex';
    document.getElementsByClassName('backtoque')[0].style.display = 'none';
    document.getElementById("q3ol").innerHTML = "";
}

function q1ans() {
    const sentence = "This is the best SUV in the class.";
    const words = sentence.split(' ');
    const answer = words.find(word => word == "SUV");
    document.getElementById('q1ans').value = answer;
}

function q2ans() {
    const sentence = document.getElementById('q2sentence').innerHTML;
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] == "the") {
            words[i] = "a";
        }
    }
    document.getElementById('q2ans').value = words.join(' ');
}

function q3ans() {
    const sentence = document.getElementById('q3sentence').innerHTML;
    let words = sentence.split('');
    let htmlCode = "";
    for (let i = 0; i < words.length; i++) {
        htmlCode += `<li class="q3ans">${words[i]}</li>`;
    }
    document.getElementById('q3ol').innerHTML = htmlCode;
}

function q4ans() {
    let string = document.getElementById('q4string').innerHTML;
    document.getElementById('q4ans').value = string.split('').reverse().join('');
}

function q5ans() {
    setTimeout(() => {
        let name = document.getElementById('q5name').value;
        let i = 0, j = name.length - 1;
        if (name == '') {
            document.getElementById('q5ansyes').checked = false;
            document.getElementById('q5ansno').checked = false;
            document.getElementById('q5ans').value = '';
            return;
        }
        while (i < j) {
            if (name[i++] != name[j--]) {
                document.getElementById('q5ansno').checked = true;
                document.getElementById('q5ansyes').checked = false;
                i = -1;
                break;
            }
        }

        document.getElementById('q5ans').value = name.split('').reverse().join('');
        if (i != -1) {
            document.getElementById('q5ansyes').checked = true;
            document.getElementById('q5ansno').checked = false;
        }
    }, 1);
}

function q6ans() {
    const number = Math.floor(Math.random() * 11);
    document.getElementById('q6ans').value = number;
}

function q7ans() {
    function getTime() {
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);

        document.getElementById('q7ans').innerText = myDate;
    }
    getTime();
    let myInterval = setInterval(() => {
        getTime();
    }, 1000);
    setTimeout(() => {
        clearInterval(myInterval);
        document.getElementById('q7ans').innerText = '';
    }, 10000);
}

function q8ans() {
    setTimeout(() => {
        const cities = ["Mumbai", "Kolkata", "Delhi", "Chennai"];
        let htmlCode = "";
        for (let i = 0; i < cities.length; i++) {
            htmlCode += `<li class="q3ans q8li">${cities[i]}</li>`;
        }
        document.getElementById("q8ol").innerHTML = htmlCode;
    }, 1);
}

function q8ansCalc() {
    let cities = [];
    let temp = document.querySelectorAll(".q8li");
    for (let i = 0; i < temp.length; i++) {
        cities.push(temp[i].innerHTML);
    }
    const sentence = cities.join('-');
    document.getElementById('q8ans').value = sentence;
}