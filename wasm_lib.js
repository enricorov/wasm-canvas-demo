var host = "127.0.0.1";
var port = "3000";

var simSocket = new WebSocket("ws://" + host + ":" + port);
var action_fifo = [];
// orange
var bg_color = "#ffb400";
//green
var fg_color = "#6ace96";

var timer;

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

// function refresh_screen (
     
//     instance.exports.refresh_screen() 
// )

WebAssembly.instantiateStreaming(fetch('graphics.wasm'), { js: { global } })
.then(({instance}) => {

});

// Get 2d drawing context
const canvas_sim = document.getElementById("canvas_sim");
const ctx_sim = canvas.getContext('2d');

const pointer = instance.exports.refresh_buffer();
const data = new Uint8ClampedArray(memory.buffer, pointer, width * height * 4);
const img = new ImageData(data, width, height);
ctx.putImageData(img, 0, 0);
