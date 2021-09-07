const api = []
let points = 0
const generateApi =  function(){
    $.get("https://opentdb.com/api.php?amount=1&category=27&type=boolean", data=>{
        api.push(data.results[0])
        $("#question").html(api[0].question).text()
        $("#dificultad").html(`Difficulty: ${api[0].difficulty}`)
        console.log(api[0])
        let victoryMessage = document.querySelector(".swal-overlay")
        victoryMessage.style.backgroundColor = null;
        if (points > 499){
            points = 0
            $("#puntos").html(`Points: ${points}`)
            let victoryMessage = document.querySelector(".swal-overlay")
            victoryMessage.style.backgroundColor = 'rgba(43, 165, 137, 0.45)';
            swal("Victory!", "You got 500 points! Congratulations", {
                button: "Play Again!"
            })
            points = 0
            $("#puntos").html(`Points: ${points}`)
            $("#question").html("Press Start!")
            $("#dificultad").html("Difficulty: ")
            boton = document.querySelector('#boton');
            boton.className = "tf"
            trueBoton = document.querySelector('#true');
            falseBoton = document.querySelector('#false');
            trueBoton.className = "displayNone";
            falseBoton.className = "displayNone";
        }
    })
}
const generateQuestion = function(){
    $("#dificultad").html(`Difficulty: ${api[0].difficulty}`)
    api.shift()
}

$("#true").click(function(){
    if (points < 500){
        if (api[0].correct_answer == "True"){
            if (api[0].difficulty == "easy"){
                points += 50
                $("#puntos").html(`Points: ${points}`)
                swal("Correct Answer!", "You won 50 points", "success")
            }
            if (api[0].difficulty == "medium"){
                points += 100
                $("#puntos").html(`Points: ${points}`)
                swal("Correct Answer!", "You won 100 points", "success")
            }
            if (api[0].difficulty == "hard"){
                points += 150
                $("#puntos").html(`Points: ${points}`)
                swal("Correct Answer!", "You won 150 points", "success")
            }
            
        }else{
            swal ( "Wrong Answer!" ,  "Start again" ,  "error" )
            points = 0
            $("#puntos").html(`Points: ${points}`)
        }
    }else{
        points = 0
        $("#puntos").html(`Points: ${points}`)
    }
    generateApi()
    generateQuestion()
})

$("#false").click(function(){
    console.log($(".swal.overlay"))
    if (points < 500){
        if (api[0].correct_answer == "False"){
            if (api[0].difficulty == "easy"){
                points += 50
                $("#puntos").html(`Points: ${points}`)
                swal("Correct Answer!", "You won 50 points", "success")
            }
            if (api[0].difficulty == "medium"){
                points += 100
                $("#puntos").html(`Points: ${points}`)
                swal("Correct Answer!", "You won 100 points", "success")
            }
            if (api[0].difficulty == "hard"){
                points += 150
                $("#puntos").html(`Points: ${points}`)
                swal("Correct Answer!", "You won 150 points", "success")
            }
        }else{
            swal ( "Wrong Answer!" ,  "Start again" ,  "error" )
            points = 0
            $("#puntos").html(`Points: ${points}`)
        }
    }else{
        points = 0
        $("#puntos").html(`Points: ${points}`)
    }
    generateApi()
    generateQuestion()
})

$("#boton").click(function(){
    boton = document.querySelector('#boton');
    boton.className = "displayNone";
    trueBoton = document.querySelector('#true');
    falseBoton = document.querySelector('#false');
    trueBoton.className = "tf";
    falseBoton.className = "tf";
    generateApi();
    generateQuestion();
})

// Tooltip code

const popperInstance = Popper.createPopper(button, tooltip, {
    modifiers: [
        {
        name: 'offset',
        options: {
            offset: [0, 8],
        },
        },
    ],
    });

    function show() {
        tooltip.setAttribute('data-show', '');
        popperInstance.update();
    }

    function hide() {
        tooltip.removeAttribute('data-show');
    }
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];
    showEvents.forEach(event => {
        button.addEventListener(event, show);
    });
    hideEvents.forEach(event => {
        button.addEventListener(event, hide);
    });
