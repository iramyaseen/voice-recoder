// var lable = document.getElementById("d_text");
// var inpt = document.getElementById("input");
// var submit = document.getElementById("submit");

// var arry = [
//   "Enter your Last name",
//   "Enter your Phone number",
//   "Enter your First name",
//   "Enter your Email",
//   "Introduce yourself",
//   "Why you apply for this internship",
//   "why should we hire you?",
// ];
// let arryIndex = 6;
// loadArry(arry[arryIndex]);

// function loadArry(song) {
//   lable.innerText = song;
//   inpt.setAttribute("placeholder", song);
// }
// submit.addEventListener("click", () => {
//   arryIndex++;
//   if (arryIndex > arry.length - 1) {
//     arryIndex = 0;
//   }
//   loadArry(arry[arryIndex]);
// });

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 3;
//   if (a === 5) {
//     resolve("Success");
//   } else {
//     reject("Not Success");
//   }
// });
// p.then((iram)=>{
//   console.log(iram)
// });
// p.catch((iram)=>{
//   console.log(iram)
// })
var startBtn = document.getElementById("startBtn");
var endBtn = document.getElementById("endBtn");
var recoder;
startBtn.addEventListener("click", () => {
  let device = navigator.mediaDevices.getUserMedia({ audio: true });
  let chunk = [];
  device.then((stream) => {
    recoder = new MediaRecorder(stream);
    recoder.ondataavailable = (e) => {
      chunk.push(e.data);
      if (recoder.state == "inactive") {
        let blob = new Blob(chunk, { type: "audio/webm" });
        document.getElementById("audio").innerHTML =
          '<source src="' +
          URL.createObjectURL(blob) +
          '" type="video/webm" />';
      }
    };
    recoder.start(1000);
  });
});
endBtn.addEventListener("click", () => {
  setTimeout(() => {
    recoder.stop();
  });
});

// Second btn


var btn2 = document.getElementById("btn2");
var endBtn2 = document.getElementById("endBtn2");
var recoder;
btn2.addEventListener("click", () => {
  let device = navigator.mediaDevices.getUserMedia({ audio: true });
  let chunk = [];
  device.then((stream) => {
    recoder = new MediaRecorder(stream);
    recoder.ondataavailable = (e) => {
      chunk.push(e.data);
      if (recoder.state == "inactive") {
        let blob = new Blob(chunk, { type: "audio/webm" });
        document.getElementById("audio2").innerHTML =
          '<source src="' +
          URL.createObjectURL(blob) +
          '" type="video/webm" />';
      }
    };
    recoder.start(1000);
  });
});
endBtn2.addEventListener("click", () => {
  setTimeout(() => {
    recoder.stop();
  });
});

// Third btn


var startBtn3 = document.getElementById("startBtn3");
var endBtn3 = document.getElementById("endBtn3");
var submitBtn = document.getElementById('submitBtn');
var recoder;
startBtn3.addEventListener("click", () => {
  let device = navigator.mediaDevices.getUserMedia({ audio: true });
  let chunk = [];
  device.then((stream) => {
    recoder = new MediaRecorder(stream);
    recoder.ondataavailable = (e) => {
      chunk.push(e.data);
      if (recoder.state == "inactive") {
        let blob = new Blob(chunk, { type: "audio/webm" });
        document.getElementById("audio3").innerHTML =
          '<source src="' +
          URL.createObjectURL(blob) +
          '" type="video/webm" />';
      }
    };
    recoder.start(1000);
  });
});
endBtn3.addEventListener("click", () => {
  setTimeout(() => {
    recoder.stop();
  });
});



submitBtn.addEventListener('click', ()=>{
  window.location.reload(true);
  alert("Submission successfully")
});