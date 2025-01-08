const btns = document.querySelectorAll('button');
const res = document.getElementById("result");
const userScore = document.getElementById("user-score")
const compScore = document.getElementById("comp-score")

let userScr = 0;
let compScr = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        // console.log(btn.id)
        const result = gameplay(btn.id,compChoice())
        res.innerHTML = result;
    })
})


const compChoice = ()=>{
    // or hmm ye bhi kar skte hai 3 likhne ke bajaye
    const choices = ["Rock","Paper","Scissor"];
    // Math.floor(Math.random(choices.length));

    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}

const gameplay = (user,comp)=>{
    if(user==comp) return "Match tie";
    else if( 
        (user=="Rock" && comp == "Scissor") ||
        (user=="Paper" && comp == "Rock") ||
        (user=="Scissor" && comp == "Paper")
    )
    {
        
        userScr++;
        userScore.innerHTML = userScr;
        return `Tu Jeet Gaila Ho Bhaiya! <br>${user} beats ${comp}`
    }
    else
    {
        compScr++;
        compScore.innerHTML = compScr;
        return `Bhkk Marde Computerwa Se Har Gaila! <br><span style="color: red;">${user} beats ${comp}</span>`
    }

}

