const ideas = [];

// Função para salvar a ideia
function saveIdea() {
    const noteInput = document.getElementById('noteInput');
    const idea = noteInput.value.trim();
    
    if (idea) {
        ideas.push(idea);
        noteInput.value = ''; // Limpa o campo de entrada
        updateIdeaList();
    }
}

// Função para atualizar a lista de ideias
function updateIdeaList() {
    const ideaList = document.getElementById('ideaList');
    ideaList.innerHTML = ''; // Limpa a lista atual

    ideas.forEach((idea, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = idea;
        
        // Botão para excluir a ideia
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => {
            deleteIdea(index);
        };
        
        listItem.appendChild(deleteButton);
        ideaList.appendChild(listItem);
    });
}

// Função para excluir uma ideia
function deleteIdea(index) {
    ideas.splice(index, 1);
    updateIdeaList();
}

// Função para ajustar a altura do textarea conforme o conteúdo
function adjustTextareaHeight() {
    const noteInput = document.getElementById('noteInput');
    noteInput.style.height = 'auto'; // Reseta a altura
    noteInput.style.height = `${noteInput.scrollHeight}px`; // Define a nova altura
}

// Adiciona um evento para ajustar a altura quando o conteúdo muda
document.getElementById('noteInput').addEventListener('input', adjustTextareaHeight);
