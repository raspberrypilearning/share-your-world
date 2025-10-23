// 时间线
const currentDate = new Date();

document.addEventListener("DOMContentLoaded", function () {
  const nodesContainer = document.getElementById("nodes");
  const addButton = document.getElementById("add-event-btn");
  const inputYear = document.getElementById("year-input");
  const inputEvent = document.getElementById("event-input");
  var historicalEvents = [];

  function loadEventsFromLocalStorage() {
    const storedEvents = localStorage.getItem("historicalEvents");
    if (storedEvents) {
      historicalEvents = JSON.parse(storedEvents);
      renderTimelineEvents();
    } else {
      // 初始事件
        historicalEvents = [
          { year: 1977, event: "野猫队成立" },
          { year: 1980, event: "加入国家联赛" },
          { year: 1996, event: "获得冠军奖杯" },
          { year: currentDate.getFullYear(), event: "现在" },
        ];
        renderTimelineEvents();
    }
  } 

  // 将事件放在时间线上的函数
  function renderTimelineEvents() {
    nodesContainer.innerHTML = "";
    const minYear = historicalEvents[0].year;
    const maxYear = historicalEvents[historicalEvents.length - 1].year;
    const totalYears = maxYear - minYear;

    historicalEvents.forEach((event) => {
      const node = document.createElement("div");
      node.classList.add("event");

      // 根据时间差计算百分比宽度
      let percentageWidth = ((event.year - minYear) / totalYears) * 100;
      console.log(percentageWidth);
      node.style.left = percentageWidth + "%";
      node.innerHTML = `<span class="year">${event.year}</span><span class="event-description">${event.event}</span>`;
      nodesContainer.appendChild(node);
    });
  }

  // 添加新事件的函数
  function addNewEvent(year, event) {
    const newEvent = { year: parseInt(year), event: event };
    historicalEvents.push(newEvent);
    historicalEvents.sort((a, b) => a.year - b.year); // 按时间顺序对事件进行排序
    renderTimelineEvents();
    localStorage.setItem("historicalEvents", JSON.stringify(historicalEvents));

  }

  // 页面加载时添加初始事件
  loadEventsFromLocalStorage(); 

  // 鼠标悬停
  nodesContainer.addEventListener("mouseover", function (event) {
    const targetNode = event.target.closest(".event");
    if (targetNode) {
      const description = targetNode.querySelector(".event-description");
      description.style.display = "block";
    }
  });

  nodesContainer.addEventListener("mouseout", function (event) {
    const targetNode = event.target.closest(".event");
    if (targetNode) {
      const description = targetNode.querySelector(".event-description");
      description.style.display = "none";
    }
  });

  // 添加事件监听器以添加新事件
  addButton.addEventListener("click", function () {
    const yearInputValue = inputYear.value;
    const eventInputValue = inputEvent.value;

    if (yearInputValue && eventInputValue) {
      addNewEvent(yearInputValue, eventInputValue);
      inputYear.value = "";
      inputEvent.value = "";
    } else {
      alert("请填写年份和事件字段。");
    }
  });
});