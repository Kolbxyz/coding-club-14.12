const calendar = document.getElementById('my-calendar');
const time = document.getElementById('time')
const remaining_time = document.getElementById("remaining-time")
const date = new Date();
let currentDay = date.getDate();
const dir = 'sounds/';

var music = new Audio(dir + 'Music.mp3')
var noice = new Audio(dir + "click-nice.mp3")

const sound_number = 14
var opened = 0

time.textContent = "Aujourd'hui, " + (date.getDate().toString()) + " décembre"
remaining_time.textContent = "Il reste, " + (25 - date.getDate()).toString() + " jours avant noël"

music.play();
music.loop = true;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setupResetButton() {
    var button = document.createElement("Button");
    button.innerHTML = "Reset";
    button.classList.add("reset");
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        location.replace(location.href);
    });
}

setupResetButton();

for (let i = 1; i <= 24; i++) {
    const dayElement = document.createElement('calendar');

    dayElement.classList.add("day");
    dayElement.setAttribute('data-day', i);
    dayElement.textContent = i;

    calendar.appendChild(dayElement);

    if (currentDay == i) {
        dayElement.style.borderColor = '#0000FF'
    }
    else if (currentDay >= i) {
        dayElement.style.borderColor = '#FF0055'
    }

    dayElement.addEventListener('click', () => {
        if (currentDay >= i) {
            let number1 = getRandomInt(50); let number2 = getRandomInt(50);
    
            let symbol = getRandomInt(2)
            let answer = symbol == 1 && (number1 + number2) || (number1 - number2)
    
            let query = prompt(number1.toString() + (symbol == 1 && " + " || " - ") + number2.toString(), "0");
    
            let text;
            if (answer == query) {
                text = "Bonne réponse!";
                alert(text);
            } else {
                text = "Mauvaise réponse!";
                alert(text);
                return;
            }
    
    
            music.pause();
            dayElement.style.backgroundColor = "#00FF00"
            dayElement.style.borderColor = "#00FF00"
    
            var sound = new Audio(dir + getRandomInt(14).toString() + ".mp3")
            sound.play()
    
            alert(surprises[i - 1]);
    
            music.play();
            opened++
    
            if (opened >= 24) {
                noice.play();
                alert("🎁 Félicitations! Vous avez ouvert toutes les cases!");
            }
        }
        else {
            alert("Vous devez attendre encore " + (i - currentDay).toString() + " jour" + ((i - currentDay) > 1 && "s" || ""))
        }
    });
}

/*dayElement.classList.add('day');
/*dayElement.day{

/*}*/
