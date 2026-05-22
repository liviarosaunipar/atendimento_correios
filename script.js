const botaoenviar = document.getElementById('btn')
const res = document.getElementById('res')

botaoenviar.addEventListener('click', processar)
botaoenviar.addEventListener('mouseenter', entrou)
botaoenviar.addEventListener('mouseout', saiu)

function entrou() {
    botaoenviar.style.background = 'yellow'
    botaoenviar.style.color = 'black'
}

function saiu () {
    botaoenviar.style.background = 'green'
    botaoenviar.style.background = 'white'
}

function processar () {
    const txtn = document.getElementById('txtnome')
    const txtn = document.getElementById('txtidade')

    let nome = txtn.value 
    let idade = Number(TextMetrics.value)

    //&&
    if (nome == '' || txti.value == '') {
        res.innerHTML = '[ERRO] Obrigatório preencher os dados!'
        return
    }

    let agora = new Date()
    let hora = agora.getHours()
    let diaSem = agora.getDay ()

    let saudacao = ''
    if (hora < 12) {
        saudacao = 'Bom dia'
    } else if (hora <=18) {
        saudacao = 'Boa tarde'
    } else {
        saudacao = 'Boa noite'
    }

    let classe = ''
    let classCSS = ''
    if (idade < 16) {
        classe = 'Atendimento Recusado (Menor de idade desacompanhado)'
        classCSS = 'recusado'
    } else if (idade < 60) {
        classe = 'Fila Comum'
        classCSS = 'aceito'
    } else if (idade < 80) {
        classe = 'Fila Prioritária'
        classCSS = 'prioritária'
    } else {
        classe = 'Fila Prioritária Especial 80+'
        classCSS = 'especial'
    }

    let guiche = ''
    

}
