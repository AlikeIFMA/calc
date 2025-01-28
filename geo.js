const calcular = document.getElementById('calcular');

function geo () {
    const qtd = document.getElementById('qtd').value;
    const resultado = document.getElementById('resultado');

    if (qtd !== '') {
        const qtd_lado = qtd;
        let classificacao = '';
        if (qtd_lado <3) {
            classificacao = 'Não existe uma forma geométrica com essa quantidade de lados!';
        }else if (qtd_lado == 3){
            classificacao = 'Este é um Triângulo !';
        }else if (qtd_lado == 4) {
            classificacao = 'Este é um Quadrado!';
        }else if (qtd_lado == 5){
            classificacao = 'Este é um Pentágono!';
        }else if (qtd_lado == 6){
            classificacao = 'Este é um Hexágono!';
        }else if (qtd_lado == 7){
            classificacao = 'Este é um Heptágono!';
        }else if (qtd_lado == 8){
            classificacao = 'Este é um Octógono!';
        }else if (qtd_lado == 9){
            classificacao = 'Este é um Nonágono!';
        }else if (qtd_lado == 10){
            classificacao = 'Este é um Decágono!';
        }else {
            classificacao = 'A calculadora não consegue calcular mais do que isso!';
        }

        resultado.textContent = `${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha o campos!';
    }

}

calcular.addEventListener('click', geo);
