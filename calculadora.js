calc = [0];

function display(){
    document.getElementsByClassName('screen')[0].innerHTML = calc.join('');
}

function clean(){
    calc = [0];
    display();
}
function cleanLast(){
    if(calc.length > 1){
        calc.pop();
    }else{
        calc[0] = 0;
    }
    display();
}

function result(){
    while(isNaN(calc[calc.length-1])){
        calc.pop();
    }
    calc = [eval(calc.join(''))];
    if(document.getElementById("round").checked == true){
        calc[0] = Math.round(calc[0]);
    }

    display();
}

function addNum(intr){
    switch(typeof intr){
        case 'number':
            if(calc[calc.length-1] == 0){
                calc[calc.length-1] = intr;
            }else{
                if(isNaN(calc[calc.length-1])){
                    calc.push(intr);
                }else{
                    calc[calc.length-1] += intr;
                }
            }
            break;

        case 'string':
            if(isNaN(calc[calc.length-1])){
                calc[calc.length-1] = intr;
            }else{
                calc.push(intr);
            }
            break;
    }
    display();
}

display();