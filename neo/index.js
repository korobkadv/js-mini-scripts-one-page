const message = [
    'Wake up, Neo...\n',
    'The Matrix has you...\n',
    'Follow the white rabbit.\n',
    'Knock, Knock, Neo.'
];

let line = 0;
let count = 0;
let outMessage = '';
let searchWrapper = document.querySelector('.wrapper');

function KnockKnock() {
    let ringtone = new Audio("./knock_knock.mp3");
    ringtone.play();
    ringtone.loop = false;
}

function WakeUp() {
    let interval = setInterval(function () {
        if (typeof message[line] !== 'undefined') {
            outMessage += message[line][count];
            searchWrapper.innerHTML = outMessage;
            count++;

            if (count >= message[line].length) {
                count = 0;
                line++;
                if (line == 1) {
                    clearTimeout(interval);
                    const createButton = document.createElement("button");
                    createButton.setAttribute("class", "buttonWho");
                    createButton.innerHTML = "who are you?";
                    
                    createButton.addEventListener("click", () => {
                        line = 1;
                        count = 0;
                        WakeUp();
                    });
                    searchWrapper.append(createButton);
                    return true;
                }
                if (line == message.length) {
                    clearTimeout(interval);
                    return KnockKnock();   
                }
            }

        }

        
    }, 100);
}


WakeUp();