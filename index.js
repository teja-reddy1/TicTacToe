var box = document.getElementsByClassName("box");
var res = document.querySelector(".result");

function boxclick(a) {
    alert(a.id);
}

var S = [2, 2, 2, 2, 2, 2, 2, 2, 2];
var P = 0;

function validate() {
    if ((S[0] == S[1] && S[1] == S[2] && S[0] != 2) || (S[3] == S[4] && S[4] == S[5] && S[3] != 2) || (S[6] == S[7] && S[7] == S[8] && S[6] != 2)) {
        alert((P + 1) + " won");
        return;
    } else if ((S[0] == S[3] && S[3] == S[6] && S[0] != 2) || (S[1] == S[4] && S[4] == S[7] && S[1] != 2) || (S[2] == S[5] && S[5] == S[8] && S[2] != 2)) {
        alert((P + 1) + " won");
        return;
    } else if ((S[0] == S[4] && S[4] == S[8] && S[0] != 2) || (S[2] == S[4] && S[4] == S[6] && S[2] != 2)) {
        alert((P + 1) + " won");
        return;
    }
    var j = 0;
    for (var i = 0; i < 9; i++) {
        if (S[i] != 2) {
            j += 1;
        }
    }
    if (j == 9) {
        alert('Its a Draw');
    }
}

for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function() {
        //alert(this.id);
        if (S[this.id] == 2) {
            if (P == 0) {
                this.classList.toggle('X');
                S[this.id] = 0;
                validate();
                P = 1;
                res.innerHTML = "Player 2's Turn";
                res.classList.toggle("result1");
            } else {
                this.classList.toggle('O');
                S[this.id] = 1;
                validate();
                P = 0;
                res.innerHTML = "Player 1's Turn";
                res.classList.toggle("result1");
            }
        } else {
            alert('Already selcted');
        }
    });
}