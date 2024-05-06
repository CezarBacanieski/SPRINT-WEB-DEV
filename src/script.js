const localStorageKey = "to-do-list"; // Definindo o nome da chave do localStorage

function newTask() {
  let input = document.getElementById("input-nova-tarefa");

  // Validação
  if (!input.value) {
    alert("Você precisa escrever algo para adicionar a sua lista!");
  } else if(validateIfExistNewTask()) {

  }
  else {
    // Guardar no localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    show();
  }
}

function show() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.getElementById("to-do-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button id="btn-ok" onclick="removeItem('${values[i]["name"]}')">ok</button></li>`;
    // Adicionando cada item à lista
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.findIndex((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  show()
}

show(); // Chamando a função show() para exibir os itens já salvos ao carregar a página
