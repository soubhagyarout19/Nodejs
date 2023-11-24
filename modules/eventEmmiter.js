const eventEmiter = require('events');

const event = new eventEmiter()

//creating event
event.on("print", ()=>{
    console.log("print event executed");
})

//calling event
event.emit('print');