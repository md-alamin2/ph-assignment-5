// switch to blog page
const swap = document
  .getElementById("swap")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });

// current day
const currentDay = new Date();
const day = currentDay.getDay();

const days = ["Sun", "Mon", "Tue", "Wed", "The", "Fri", "Sat"];

document.getElementById("current-day").innerText = days[day];

//  current date

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.toLocaleDateString("default", { month: "long" });
const year = currentDate.getFullYear();
const fullDate = `${month} ${date}, ${year}
`;

document.getElementById("date").innerText = fullDate;

// task complete event

const cards = document.querySelectorAll(".cards");

let allBtnClicked = [];
for (let card of cards) {
  let titles = card.querySelector(".title");
  const completedBtn = card.querySelector("button");
  completedBtn.addEventListener("click", function (event) {
    event.target.classList.add("btn-disabled");
    event.target = alert("Board update Successfully");

    // assigned task decrement
    let taskAssigned = document.getElementById("task-assigned");
    const remainingTask = parseInt(taskAssigned.innerHTML);
    taskAssigned.innerText = remainingTask - 1;

    // completed work increment
    let completedTask = document.getElementById("completed-work");
    const totalCompletedTask = parseInt(completedTask.innerText);
    completedTask.innerText = totalCompletedTask + 1;

    // current time
    function currentTime() {
      const times = new Date();
      const time = times.toLocaleTimeString();
      return time;
    }
    const realTime = currentTime();

    // activity log message
    const title = titles.innerText;
    const message = document.getElementById("message");
    const div = document.createElement("div");
    div.classList.add("bg-[#3751fd13]", "p-2", "mb-4");
    div.innerHTML = `
        <p class="text-sm">You have Complete ${title} Task at <span class="realTime">${realTime}</span></p>
        `;
    message.appendChild(div);

    // clear history
    const clearHistory = document.getElementById("clear");
    clearHistory.addEventListener("click", function () {
      message.removeChild(div);
    });

    allBtnClicked.push(event.target);
    if (allBtnClicked.length === 6) {
      alert("congratulations!!! You have complete all the current task");
    }
  });
}

// bg color change randomly

document.getElementById("theme-btn").addEventListener("click", function () {
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);

  document.querySelector(
    "body"
  ).style.backgroundColor = `rgb(${num1},${num2},${num3})`;
});
