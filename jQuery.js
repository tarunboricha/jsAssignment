var currque = '';

function mySwap(i, j, string) {
    let temp = string[i];
    string[i] = string[j];
    string[j] = temp;
}

function gotoque(que) {
    $('.center').hide();
    $('#' + que).show();
    $('.backtoque').css('display', 'flex');
    currque = que;
}

function backtoque() {
    $('input').val('');
    $('#' + currque).hide();
    $('.center').css('display', 'flex');
    $('.backtoque').hide();
    $('#q3ol').empty();
}

function q1ans() {
    const sentence = "This is the best SUV in the class.";
    const words = sentence.split(' ');
    const answer = words.find(word => word == "SUV");
    $('#q1ans').val(answer);
}

function q2ans() {
    const sentence = $('#q2sentence').text();
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] == "the") {
            words[i] = "a";
        }
    }
    $('#q2ans').val(words.join(' '));
}

function q3ans() {
    const sentence = $('#q3sentence').text();
    let words = sentence.split('');
    let htmlCode = "";
    for (let i = 0; i < words.length; i++) {
        htmlCode += `<li class="q3ans">${words[i]}</li>`;
    }
    $('#q3ol').html(htmlCode);
}

function q4ans() {
    let string = $('#q4string').text();
    $('#q4ans').val(string.split('').reverse().join(''));
}

function q5ans() {
    setTimeout(() => {
        let name = $('#q5name').val();
        let i = 0, j = name.length - 1;
        if (name == '') {
            $('#q5ansyes').prop('checked', false);
            $('#q5ansno').prop('checked', false);
            $('#q5ans').val('');
            return;
        }
        while (i < j) {
            if (name[i++] != name[j--]) {
                $('#q5ansno').prop('checked', true);
                $('#q5ansyes').prop('checked', false);
                i = -1;
                break;
            }
        }

        $('#q5ans').val(name.split('').reverse().join(''));
        if (i != -1) {
            $('#q5ansyes').prop('checked', true);
            $('#q5ansno').prop('checked', false);
        }
    }, 1);
}

function q6ans() {
    const number = Math.floor(Math.random() * 11);
    $('#q6ans').val(number);
}

function q7ans() {
    function getTime() {
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        $('#q7ans').text(myDate);
    }
    getTime();
    let myInterval = setInterval(() => {
        getTime();
    }, 1000);
    setTimeout(() => {
        clearInterval(myInterval);
        $('#q7ans').text('');
    }, 10000);
}

function q8ans() {
    setTimeout(() => {
        const cities = ["Mumbai", "Kolkata", "Delhi", "Chennai"];
        let htmlCode = "";
        for (let i = 0; i < cities.length; i++) {
            htmlCode += `<li class="q3ans q8li">${cities[i]}</li>`;
        }
        $('#q8ol').html(htmlCode);
    }, 1);
}

function q8ansCalc() {
    let cities = [];
    let temp = $(".q8li");
    temp.each(function() {
        cities.push($(this).html());
    });
    const sentence = cities.join('-');
    $('#q8ans').val(sentence);
}
