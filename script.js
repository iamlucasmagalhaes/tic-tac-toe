const boardGame = []
const width = 3
const height = 3

function start(){
    createBoardGameDataStructure()
    renderBoardGame()
    reload()
}

//cria a estrutura do meu tabuleiro
function createBoardGameDataStructure(){
    for(let i = 0; i < width; i++){
        boardGame[i] = []
        for(let j = 0; j < height; j++){
            boardGame[i][j] = ''
        }
    }

    return boardGame
}

function renderBoardGame(){
    const board = document.getElementById('board') //captura o meu tabuleira

    for(let i = 0; i < width; i++){
        const tr = document.createElement('tr') //cria uma nova linha a cada interação
        for(let j = 0; j < height; j++){
            const td = document.createElement('td') //cria um novo campo a cada interação
            const index = (i * width) + j //calcula um indice para cada campo
            td.innerText = boardGame[i][j] //atribui o valor da minha matriz ao tabuleiro
            td.dataset.index = index //atribuindo um indice
            td.dataset.row = i //adicona um valor para representar a linha
            td.dataset.col = j //adiciona um valor para representar a coluna
            td.addEventListener('click', handleClick)
            tr.appendChild(td) //adiciona o campo a linha  
        }
        board.appendChild(tr) //adicona a linha criada ao meu tabuleiro
    }
}

//função para tratar o evento de clique nos botões
function handleClick(){
    const table = document.querySelector('table')
    const row = Number(this.dataset.row) //obtem a linha clicada
    const col = Number(this.dataset.col) //obtem a coluna clicada
    //verifica se o valor dentro do campo clicado é vazio
    if(boardGame[row][col] === ''){
        const crossPlayer = document.querySelector('.Xturn')
        const circlePlayer = document.querySelector('.Oturn')
        if(table.dataset.player === 'cross'){
            boardGame[row][col] = 1 //altera o valor
            this.innerText = 'X' //muda o texto dentro da campo clicado
            crossPlayer.classList.remove('active')
            circlePlayer.classList.add('active')
            table.dataset.player = 'circle' //muda o valor da tabela
        } else if(table.dataset.player === 'circle'){
            boardGame[row][col] = 0 //altera o valor
            this.innerText = 'O' //muda o texto dentro da campo clicado
            crossPlayer.classList.add('active')
            circlePlayer.classList.remove('active')
            table.dataset.player = 'cross' //muda o valor da tabela
        }
        checkWinner()
    }
}

function checkWinner(){
    //verifica a linha que ganhou
    for(let i = 0; i < width; i++){
        if(
            boardGame[i][0] !== '' &&
            boardGame[i][0] === boardGame[i][1] &&
            boardGame[i][0] === boardGame[i][2]
        ){
            const modal = document.querySelector('.modal')
            const main = document.querySelector('main')
            modal.innerText = `O jogador ${(boardGame[i][0] === 1) ? 'X' : 'O'} ganhou`
            modal.classList.remove('hidden')
            modal.classList.add('transitionIn')
            main.classList.add('hidden')
            setTimeout(function (){
                location.reload()
            }, 2000)
            return
        }
    }

    //verifica a coluna que ganhou
    for(let j = 0; j < height; j++){
        if(
            boardGame[0][j] !== '' &&
            boardGame[0][j] === boardGame[1][j] &&
            boardGame[0][j] === boardGame[2][j]
        ){
            const modal = document.querySelector('.modal')
            const main = document.querySelector('main')
            modal.innerText = `O jogador ${(boardGame[0][j] === 1) ? 'X' : 'O'} ganhou`
            modal.classList.remove('hidden')
            modal.classList.add('transitionIn')
            main.classList.add('hidden')
            setTimeout(function (){
                location.reload()
            }, 2000)
            return
        }
    }

    //verifica a diagonal principal
    if (
        boardGame[0][0] !== '' &&
        boardGame[0][0] === boardGame[1][1] &&
        boardGame[0][0] === boardGame[2][2]
    ) {
        const modal = document.querySelector('.modal')
        const main = document.querySelector('main')
        modal.innerText = `O jogador ${(boardGame[0][0] === 1) ? 'X' : 'O'} ganhou`
        modal.classList.remove('hidden')
        modal.classList.add('transitionIn')
        main.classList.add('hidden')
        setTimeout(function (){
            location.reload()
        }, 2000)
        return
    }

    //verifica a diagonal secundária
    if (
        boardGame[0][2] !== '' &&
        boardGame[0][2] === boardGame[1][1] &&
        boardGame[0][2] === boardGame[2][0]
    ) {
        const modal = document.querySelector('.modal')
        const main = document.querySelector('main')
        modal.innerText = `O jogador ${(boardGame[0][2] === 1) ? 'X' : 'O'} ganhou`
        modal.classList.remove('hidden')
        modal.classList.add('transitionIn')
        main.classList.add('hidden')
        setTimeout(function (){
            location.reload()
        }, 2000)
        return
    }

    if(checkDraw()){
        alert('O jogo terminou em empate!')
    }
}

//verifica se houve empate
function checkDraw(){
    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){
            if(boardGame[i][j] === ''){
                return false
            }
        }
    }
    return true
}

//recarrega a página
function reload(){
    document.querySelector('button').addEventListener('click', function (){
        location.reload()
    })
}

start()