const localStorageKey = "to-do-list"; // Definindo o nome da chave do localStorage

function validateIfExistNewTask() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let inputValue = document.getElementById("input-nova-tarefa");
  let exists = values.find((x) => x.name == inputValue.value);
  return !exists ? false : true;
}

function newTask() {
  let input = document.getElementById("input-nova-tarefa");
  input.style.border = "";

  // Validação
  if (!input.value) {
    input.style.border = "1px solid red";
    alert("Você precisa escrever algo para adicionar a sua lista!");
  } else if (validateIfExistNewTask()) {
    alert("Já existe uma terefa com essa descrição!");
  } else {
    // Guardar no localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    show();
  }
  input.value = "";
}

function show() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.getElementById("to-do-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button id="btn-ok" onclick="removeItem('${values[i]["name"]}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
  </svg></button></li>`;
    // Adicionando cada item à lista
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.findIndex((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  show();
} 

show(); // Chamando a função show() para exibir os itens já salvos ao carregar a página
