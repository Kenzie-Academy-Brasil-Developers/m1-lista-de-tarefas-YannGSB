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

function createCard(taskInfo) {
  // Criando elementos necessários
  const taskCardItem = document.createElement("li");
  const taskCardContent = document.createElement("div");
  const taskTitle = document.createElement("span");
  const taskDescription = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo

  if (taskInfo.type === "Urgente") {
    taskTitle.classList.add("span-urgent");
  } else if (taskInfo.type === "Prioritário") {
    taskTitle.classList.add("span-priority");
  } else {
    taskTitle.classList.add("normal");
  }

  // Adicionando span e paragrafo a div
  taskCardContent.appendChild(taskTitle);
  taskCardContent.appendChild(taskDescription);

  // Criando botão para deletar tarefa
  const buttonDelete = document.createElement("button");

  // Adicionando icone ao botão
  buttonDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  /// Adicionando a div e o botão de deletar ao list item
  taskCardItem.appendChild(taskCardContent);
  taskCardItem.appendChild(buttonDelete);

  return taskCardItem;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
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
    tasks.splice(i, 1);
    renderElements(tasks);
  });

  taskCardItem.appendChild(taskCardContent);
  taskCardItem.appendChild(buttonDelete);

  return taskCardItem;
}
