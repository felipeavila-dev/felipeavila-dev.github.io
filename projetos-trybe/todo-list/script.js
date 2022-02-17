document.querySelector('#criar-tarefa').addEventListener('click', newTask);
document.querySelector('#apaga-tudo').addEventListener('click', clearAllTasks);
document.querySelector('#remover-finalizados').addEventListener('click', clearCompletedTasks);
document.querySelector('#salvar-tarefas').addEventListener('click', saveTasks);
document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);
document.querySelector('#mover-cima').addEventListener('click', moveUp);
document.querySelector('#mover-baixo').addEventListener('click', moveDown);


window.onload = function() {
    //EFETUA A VERIFICAÇÃO DE EXISTE ITEM NO LOCALSTORAGE, SE EXISTIR ELE UTILIZA OS ITEMS
    if(localStorage.length > 0) {
        let tasks = localStorage.getItem('tasks');
        let orderedList = document.querySelector('ol');

        orderedList.innerHTML = tasks;

        //PERMITE ALTERAR E SELECIONAR NOVAMENTE OS ITEMS PUXADOS DO LOCALSTORAGE
        let savedTasks = document.querySelectorAll('ol li');
        for( let item of savedTasks ) {
            item.addEventListener('click', selectedItem);
            item.addEventListener('dblclick', doneUndone);
        }
    }
    
    // for( let item of tasks ) {
    //     let newLi = document.createElement('li');
    //     newLi.innerHTML = item;
    //     orderedList.appendChild(newLi);
    // }
    
   
}

//CRIA AS TAREFAS DE ACORDO COM O TEXTO NO INPUT
function newTask(){
    let inputValue = document.querySelector('#texto-tarefa');
    let orderedList = document.querySelector('#lista-tarefas');

    if(inputValue.value.length !== 0) {
        let newLi = document.createElement('li');
        newLi.innerHTML = inputValue.value;
        //Chama a funcao para verificar o item selecionado
        newLi.addEventListener('click', selectedItem);
        newLi.addEventListener('dblclick', doneUndone);
        orderedList.appendChild(newLi);
        inputValue.value = '';
    } else {
        alert('Voce precisa inserir uma tarefa no campo abaixo...')
    }
}

function selectedItem(event) {
    let getLiElements = document.querySelectorAll('li');
    for( let item of getLiElements ) {
        if( item.style.backgroundColor ) {
            item.style.removeProperty('background-color');
        }
    }
    event.target.style.backgroundColor = 'gray';    
}

//Verifica se as tarefas possuem ou nao a classe .completed
function doneUndone(event) {
    if( event.target.classList.contains('completed') ) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}

//Limpa toda a lista de tarefas
function clearAllTasks() {
    let orderedList = document.querySelector('ol');
    orderedList.innerHTML = '';
}

function clearCompletedTasks() {
    let completedItems = document.querySelectorAll('.completed');
    for (let i = 0; i < completedItems.length; i++ ){
        console.log(completedItems[i].remove());
    }
}

//Armazena tarefas no localSorage
function saveTasks() {
    let tasks = document.querySelector('ol');
    let tasksArray = [];

    localStorage.setItem('tasks', tasks.innerHTML);
  
}

//Remove a tarefa selecionada
function removeSelected() {
    let selectedItem = document.querySelectorAll('li');
    if( selectedItem.length > 0 ) {
        for( let item of selectedItem ) {
            if( item.style.backgroundColor ) {
                item.remove();
            }
        }
    }
}

// MOVE O ITEM SELECIONADO PARA CIMA
function moveUp() {
    let getList = document.querySelector('ol');
    let getAllItems = document.querySelectorAll('li');    
    let selectedItem = null;

    getAllItems.forEach( (e) => {
        if(e.style.backgroundColor) {
           selectedItem = e;
        }
    });
    
    if(selectedItem !== null) {
        //Verifica se existe um elemento acima -- CHECA O LENGTH 22 POIS IDENTIFIQUEI QUE O #TEXT GERADO PELO NODE É UM OBJETO 
        if( selectedItem.previousSibling.length !== 22) {
            console.log(selectedItem.previousSibling.length);
            getList.insertBefore(selectedItem, selectedItem.previousSibling);
        }
    }
}

// MOVE O ITEM SELECIONADO PARA BAIXO
function moveDown() {
    let getList = document.querySelector('ol');
    let getAllItems = document.querySelectorAll('li');   
    let nextElement = null; 
    let selectedItem = null;
    
    getAllItems.forEach( (e) => {
        if(e.style.backgroundColor) {
           selectedItem = e;
           nextElement = e.nextSibling;
        }
    });

    if(selectedItem !== null) {
        //Verifica se existe um proximo elemento após o selecionado e depois insere o item depois do proximo
        if( selectedItem.nextSibling ) {
            getList.insertBefore(selectedItem, nextElement.nextSibling);
        }}
    }
    

