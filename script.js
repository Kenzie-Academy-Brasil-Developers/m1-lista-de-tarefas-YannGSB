const tasks = [
  {
    title: "Comprar comida para o gato",
    type: "Urgente",
  },
  {
    title: "Consertar Computador",
    type: "Prioritário",
  },
  {
    title: "Beber água",
    type: "Normal",
  },
];

function createCard(taskInfo, i) {
  const taskCardItem = document.createElement("li");
  const taskCardContent = document.createElement("div");
  const taskTitle = document.createElement("span");
  const taskDescription = document.createElement("p");

  if (taskInfo.type === "Urgente") {
    taskTitle.classList.add("span-urgent");
  } else if (taskInfo.type === "Prioritário") {
    taskTitle.classList.add("span-priority");
  } else {
    taskTitle.classList.add("span-normal");
  }

  taskDescription.innerText = taskInfo.title;
  taskCardContent.appendChild(taskTitle);
  taskCardContent.appendChild(taskDescription);

  const buttonDelete = document.createElement("button");

  buttonDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  buttonDelete.addEventListener("click", function () {
    const index = tasks.indexOf(taskInfo);
    if (index >= 0) {
      tasks.splice(index, 1);
      renderElements(tasks);
    }
  });

  taskCardItem.appendChild(taskCardContent);
  taskCardItem.appendChild(buttonDelete);

  return taskCardItem;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    const card = createCard(task);
    htmlList.appendChild(card);
  }
}
renderElements(tasks);

const buttonAddTask = document.querySelector("#btnSubmit");
buttonAddTask.addEventListener("click", function (event) {
  event.preventDefault();
  const inputTitle = document.querySelector("#input_title");
  const inputType = document.querySelector("#input_priority");
  const title = inputTitle.value;
  const type = inputType.value;

  const newTask = {
    title: title,
    type: type,
  };
  tasks.push(newTask);
  renderElements(tasks);
});
