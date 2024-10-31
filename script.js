function addTarefa() {
  const inputTarefa = document.getElementById('inputTarefa');
  const listaTarefas = document.getElementById('listaTarefas');

  if (inputTarefa.value.trim() === "") {
    alert("Campo não pode ficar vazio!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = inputTarefa.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Excluir";
  deleteButton.onclick = function () {
    listaTarefas.removeChild(li);
  };

  li.appendChild(deleteButton);
  listaTarefas.appendChild(li);

  inputTarefa.value = "";
}