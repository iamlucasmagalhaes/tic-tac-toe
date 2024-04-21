const table = document.querySelector('table') //seleciona a minha table
const td = document.querySelectorAll('td') //seleciona todos os meus table data
const firstRow = document.querySelectorAll('.firstRow td') //recebe todos os td da primeira linha
const secondRow = document.querySelectorAll('.secondRow td') //recebe todos os td da segunda linha
const thirdRow = document.querySelectorAll('.thirdRow td') //recebe todos os td da terceira linha

//verifica se todos os value da linha são iguais, se forem mostra o ganhador
function checkRowWinner (indexOfRow){
    let awnserRow = []
    indexOfRow.forEach(function (checkValue){
        const value = checkValue.dataset.value
        if(value !== '' && value !== undefined && value !== null){
            awnserRow.push(value)

            if(awnserRow[0] === awnserRow[1] && awnserRow[0] === awnserRow[2]){
                console.log('funcionou')
            }
        }
    })
}

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
                
                //chama a minha função, que vai receber o indice da linha como parâmetro para verificar se X é o gannhador
                checkRowWinner(firstRow)
                checkRowWinner(secondRow)
                checkRowWinner(thirdRow)

                table.dataset.player = 'circle'
            } else {
                selectedField.innerText = 'O'
                selectedField.dataset.value = 'O'
                //remove a classe active do O para ser adicionada no X
                crossPlayer.classList.add('active')
                circlePlayer.classList.remove('active')

                //chama a minha função, que vai receber o indice da linha como parâmetro para verificar se O é o gannhador
                checkRowWinner(firstRow)
                checkRowWinner(secondRow)
                checkRowWinner(thirdRow)

                table.dataset.player = 'cross'
            }
        }
    })
})