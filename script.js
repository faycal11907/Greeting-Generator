let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let h1 = document.getElementById("the-greeting");

// Instead of fetch, use data directly
const data = {
    greetings: ["Hello", "Hi", "Hey", "Welcome"],
    compliments: [
        "You are amazing today!",
        "You have a great smile!",
        "You are super smart!",
        "You light up the room!",
        "You are really creative!",
        "You are awesome!"
    ]
};

btn.addEventListener("click", () => {
    const name = inp.value;
    const greeting = data.greetings[Math.floor(Math.random() * data.greetings.length)];
    const compliment = data.compliments[Math.floor(Math.random() * data.compliments.length)];

    h1.innerHTML = `${greeting}, <span>${name}</span> ${compliment}`;
    inp.value = "";

    if (name.length === 0 || name.trim() === "") {
        alert("please enter your name");
        h1.innerHTML = "";
    }
});

addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        const name = inp.value;
        const greeting = data.greetings[Math.floor(Math.random() * data.greetings.length)];
        const compliment = data.compliments[Math.floor(Math.random() * data.compliments.length)];

        h1.innerHTML = `${greeting}, <span>${name}</span> ${compliment}`;
        inp.value = "";

        if (name.length === 0 || name.trim() === "") {
        alert("please enter your name");
        h1.innerHTML = "";
        }
    }
})
