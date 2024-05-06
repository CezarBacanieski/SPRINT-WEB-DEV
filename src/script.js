const localStorageKey = "to-do-list";

function newTask() {
  let input = document.getElementById("input-nova-tarefa");

  //validacao
  if (!input.value) {
    alert("Você precisa escrever algo para adicionar a sua lista!");
  }
  //  else if() {

  //  }
  else {
    //guardar no local storage
    let values = JSON.parse(localStorage.getItem("localStorageKey") || "[]");
    values.push({
        name: input.value
    })
    localStorage.setItem(localStorageKey, JSON.stringify(values))
  }
}
