$(() => {
    console.log("loaded?")
    $("#send").click(()=>{
        // console.log("button clicked");
        // addMessages({name: 'Tim', message: 'hello'});
        var message = {name: $("#name").val(), message: $("#message").val()};
        postMessage(message);
    });
    getMessages();
})

function addMessages(message){
    console.log("addMessages", message);
    $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}

function getMessages() {
    console.log("getMessages", message);
    $.get('http://localhost:3000/messages', (data) => {
        data.forEach(addMessages);
    })
}

function postMessage(message) {
    console.log("postMessage", message);
    $.post('http://localhost:3000/messages', message)
}