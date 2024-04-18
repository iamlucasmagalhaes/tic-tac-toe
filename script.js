const table = document.querySelector('table') //seleciona a minha table
const td = document.querySelectorAll('td') //seleciona todos os meus table data

//percorre todos os meus table datas e atribui uma função para cada um
td.forEach(function (playerInputField){
    playerInputField.addEventListener('click', function (ev){
        const selectedField = ev.currentTarget
        //verifica se o campo já está preenchido
        if(selectedField.innerText !== 'X' && selectedField.innerText !== 'O'){
            if(table.dataset.player === 'cross'){
                selectedField.innerText = 'X'
                selectedField.dataset.value = 'X'
                table.dataset.player = 'circle'
            } else {
                selectedField.innerText = 'O'
                selectedField.dataset.value = 'O'
                table.dataset.player = 'cross'
            }
        }
    })
})