const table = document.querySelector('table') //seleciona a minha table
const td = document.querySelectorAll('td') //seleciona todos os meus table data

//percorre todos os meus table datas e atribui uma função para cada um
td.forEach(function (playerInputField){
    playerInputField.addEventListener('click', function (ev){
        const selectedField = ev.currentTarget
        //captura os meus jogadores
        const crossPlayer = document.querySelector('.Xturn')
        const circlePlayer = document.querySelector('.Oturn')
        //verifica se o campo já está preenchido
        if(selectedField.innerText !== 'X' && selectedField.innerText !== 'O'){
            if(table.dataset.player === 'cross'){
                selectedField.innerText = 'X'
                selectedField.dataset.value = 'X'
                //remove a classe active do X para ser adicionada no O
                crossPlayer.classList.remove('active')
                circlePlayer.classList.add('active')
                table.dataset.player = 'circle'
            } else {
                selectedField.innerText = 'O'
                selectedField.dataset.value = 'O'
                //remove a classe active do O para ser adicionada no X
                crossPlayer.classList.add('active')
                circlePlayer.classList.remove('active')
                table.dataset.player = 'cross'
            }
        }
    })
})