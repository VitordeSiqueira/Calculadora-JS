const p = document.querySelector('.resultado');

function inserir(num) {
    return p.innerHTML += num
};

function resultado() {
    try {
        if (p.innerHTML === '') {
            p.innerHTML = ''
        } else if (eval(p.innerHTML.length > 15)) {
            alert(eval(p.innerHTML))
        } else {
            let resultado = eval(p.innerHTML)

            // if para verificar se o número é decimal e fixar
            // quantos números depois da virgula.
            if (parseFloat(resultado) !== parseInt(resultado)) {
                p.innerHTML = resultado.toFixed(2)
            } else {
                p.innerHTML = resultado
            }
        }
    } catch {
        alert('Expressão mal formada')
        p.innerHTML = ''
    }
};

function limpar() {
    p.innerHTML = p.innerHTML.slice(0, -1)
};

function limparTodos() {
    p.innerHTML = ''
};

document.addEventListener('keydown', function key(e) {

    if (e.code === 'Enter' || e.code == 'NumpadEnter') return resultado()

    if (e.code === 'Backspace') return limpar()

    if (e.location === 3 && e.code === 'NumpadDecimal') return p.innerHTML += '.'

    if (e.location === 3 && e.code !== 'NumpadEnter') return inserir(e.key)

});