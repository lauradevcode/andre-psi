// Testes Psicológicos Interativos
const testesPsicologicos = {
    ansiedade: {
        titulo: "Teste de Ansiedade",
        perguntas: [
            {
                pergunta: "Nas últimas duas semanas, com que frequência você se sentiu nervoso(a), ansioso(a) ou extremamente preocupado(a)?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você não conseguiu parar ou controlar a preocupação?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você se preocupou excessivamente sobre diferentes assuntos?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você teve dificuldade em relaxar?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você se sentiu tão inquieto(a) que era difícil ficar parado(a)?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você ficou irritável(a) ou facilmente incomodado(a)?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você teve medo de que algo terrível pudesse acontecer?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            }
        ],
        resultados: {
            minimo: { min: 0, max: 4, titulo: "Ansiedade Mínima", descricao: "Você apresenta níveis mínimos de ansiedade. Continue mantendo hábitos saudáveis e técnicas de relaxamento." },
            leve: { min: 5, max: 9, titulo: "Ansiedade Leve", descricao: "Você apresenta sintomas leves de ansiedade. Considere técnicas de relaxamento e, se necessário, procure orientação profissional." },
            moderada: { min: 10, max: 14, titulo: "Ansiedade Moderada", descricao: "Você apresenta sintomas moderados de ansiedade. É recomendável procurar um profissional para avaliação e acompanhamento." },
            severa: { min: 15, max: 21, titulo: "Ansiedade Severa", descricao: "Você apresenta sintomas severos de ansiedade. É importante procurar ajuda profissional especializada o mais breve possível." }
        }
    },
    
    depressao: {
        titulo: "Teste de Depressão",
        perguntas: [
            {
                pergunta: "Nas últimas duas semanas, com que frequência você teve pouco interesse ou prazer em fazer as coisas?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você se sentiu para baixo, deprimido(a) ou sem esperança?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você teve dificuldade para dormir ou dormiu mais que o habitual?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você se sentiu cansado(a) ou com pouca energia?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você teve pouco apetite ou comeu mais que o habitual?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você se sentiu mal consigo mesmo(a) ou achou que é um fracasso?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você teve dificuldade de se concentrar nas coisas (como ler o jornal ou assistir TV)?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você se moveu ou falou tão lentamente que outras pessoas notaram, ou o contrário - esteve muito agitado(a) ou inquieto(a)?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            },
            {
                pergunta: "Nas últimas duas semanas, com que frequência você pensou em se ferir ou que seria melhor estar morto(a)?",
                opcoes: ["Nenhuma vez", "Vários dias", "Mais da metade dos dias", "Quase todos os dias"]
            }
        ],
        resultados: {
            minimo: { min: 0, max: 4, titulo: "Depressão Mínima", descricao: "Você apresenta níveis mínimos de sintomas depressivos. Continue mantendo hábitos saudáveis e atividades prazerosas." },
            leve: { min: 5, max: 9, titulo: "Depressão Leve", descricao: "Você apresenta sintomas leves de depressão. Considere aumentar atividades sociais e, se necessário, procure orientação profissional." },
            moderada: { min: 10, max: 14, titulo: "Depressão Moderada", descricao: "Você apresenta sintomas moderados de depressão. É recomendável procurar um profissional para avaliação e tratamento." },
            severa: { min: 15, max: 27, titulo: "Depressão Severa", descricao: "Você apresenta sintomas severos de depressão. É fundamental procurar ajuda profissional especializada imediatamente." }
        }
    },
    
    autismo: {
        titulo: "Teste de Rastreio de Autismo em Adultos",
        perguntas: [
            {
                pergunta: "Eu geralmente percebo pequenos sons que outros não notam.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu geralmente me concentro mais nas pequenas detalhes do que no quadro geral.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu frequentemente noto padrões que outros não percebem.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu tenho uma fascinação por números e padrões.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu prefiro fazer coisas sozinho(a) do que com outras pessoas.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu me sinto sobrecarregado(a) em situações sociais.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu tenho dificuldade em entender o que as pessoas estão sentindo.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu gosto de coletar informações sobre categorias de coisas.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu tenho dificuldade em fazer novas amizades.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            },
            {
                pergunta: "Eu tenho rotinas muito específicas e fico chateado(a) quando elas mudam.",
                opcoes: ["Concordo totalmente", "Concordo parcialmente", "Discordo parcialmente", "Discordo totalmente"]
            }
        ],
        resultados: {
            baixo: { min: 0, max: 10, titulo: "Baixa Probabilidade", descricao: "Você apresenta poucos traços associados ao espectro autista. Seus padrões de comportamento estão dentro da variação típica." },
            medio: { min: 11, max: 20, titulo: "Probabilidade Média", descricao: "Você apresenta alguns traços que podem estar associados ao espectro autista. Considere uma avaliação profissional se tiver dificuldades significativas." },
            alto: { min: 21, max: 30, titulo: "Alta Probabilidade", descricao: "Você apresenta vários traços associados ao espectro autista. É recomendável procurar uma avaliação profissional especializada." },
            muito_alto: { min: 31, max: 40, titulo: "Probabilidade Muito Alta", descricao: "Você apresenta muitos traços associados ao espectro autista. É importante procurar uma avaliação profissional para diagnóstico adequado." }
        }
    },
    
    tdah: {
        titulo: "Teste de TDAH em Adultos",
        perguntas: [
            {
                pergunta: "Com que frequência você tem dificuldade em terminar os detalhes finais de projetos?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você tem dificuldade em organizar tarefas e atividades?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você evita ou adia tarefas que exigem esforço mental prolongado?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você perde coisas necessárias para tarefas ou atividades?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você é facilmente distraído(a) por estímulos externos?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você é esquecido(a) com obrigações do dia a dia?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você inquieta as mãos ou os pés ou se mexe na cadeira?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você se levanta quando deveria permanecer sentado(a)?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você se sente como se estivesse com um motor ligado?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você fala excessivamente?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            }
        ],
        resultados: {
            improvavel: { min: 0, max: 17, titulo: "Improvável TDAH", descricao: "Seus sintomas são improváveis de serem TDAH. Se tiver dificuldades, considere outras causas possíveis." },
            possivel: { min: 18, max: 24, titulo: "TDAH Possível", descricao: "Você apresenta alguns sintomas compatíveis com TDAH. Considere uma avaliação profissional para esclarecimento." },
            provavel: { min: 25, max: 40, titulo: "TDAH Provável", descricao: "Você apresenta muitos sintomas compatíveis com TDAH. É recomendável procurar uma avaliação profissional especializada." },
            muito_provavel: { min: 41, max: 50, titulo: "TDAH Muito Provável", descricao: "Você apresenta sintomas muito sugestivos de TDAH. É importante procurar uma avaliação profissional para diagnóstico e tratamento." }
        }
    }
};

// Variáveis globais do teste
let testeAtual = null;
let perguntaAtual = 0;
let respostas = [];

// Funções do sistema de testes
function iniciarTeste(tipo) {
    testeAtual = tipo;
    perguntaAtual = 0;
    respostas = [];
    
    const teste = testesPsicologicos[tipo];
    document.getElementById('testeTitulo').textContent = teste.titulo;
    
    document.getElementById('testeModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    mostrarPergunta();
}

function mostrarPergunta() {
    const teste = testesPsicologicos[testeAtual];
    const pergunta = teste.perguntas[perguntaAtual];
    
    // Atualizar progresso
    const progressoPercentual = ((perguntaAtual + 1) / teste.perguntas.length) * 100;
    document.getElementById('progresso-fill').style.width = progressoPercentual + '%';
    document.getElementById('progresso-texto').textContent = `${perguntaAtual + 1} de ${teste.perguntas.length}`;
    
    // Atualizar pergunta
    document.getElementById('pergunta-texto').textContent = pergunta.pergunta;
    
    // Atualizar opções
    const container = document.getElementById('respostas-container');
    container.innerHTML = '';
    
    pergunta.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.className = 'resposta-option';
        button.textContent = opcao;
        button.onclick = () => selecionarResposta(index, button);
        container.appendChild(button);
    });
    
    // Atualizar botões de navegação
    document.getElementById('btn-anterior').style.display = perguntaAtual > 0 ? 'block' : 'none';
    document.getElementById('btn-proximo').style.display = perguntaAtual < teste.perguntas.length - 1 ? 'block' : 'none';
    document.getElementById('btn-finalizar').style.display = perguntaAtual === teste.perguntas.length - 1 ? 'block' : 'none';
    
    // Desabilitar botão de próximo se não houver resposta
    document.getElementById('btn-proximo').disabled = respostas[perguntaAtual] === undefined;
    document.getElementById('btn-finalizar').disabled = respostas[perguntaAtual] === undefined;
    
    // Manter seleção anterior se existir
    if (respostas[perguntaAtual] !== undefined) {
        const buttons = container.querySelectorAll('.resposta-option');
        buttons[respostas[perguntaAtual]].classList.add('selected');
    }
}

function selecionarResposta(indice, button) {
    respostas[perguntaAtual] = indice;
    
    // Atualizar UI
    const buttons = document.querySelectorAll('.resposta-option');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    
    // Habilitar botão de próximo/finalizar
    document.getElementById('btn-proximo').disabled = false;
    document.getElementById('btn-finalizar').disabled = false;
}

function proximaPergunta() {
    if (perguntaAtual < testesPsicologicos[testeAtual].perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    }
}

function perguntaAnterior() {
    if (perguntaAtual > 0) {
        perguntaAtual--;
        mostrarPergunta();
    }
}

function finalizarTeste() {
    const teste = testesPsicologicos[testeAtual];
    let pontuacao = 0;
    
    // Calcular pontuação baseada nas respostas
    respostas.forEach(resposta => {
        pontuacao += resposta;
    });
    
    // Encontrar resultado correspondente
    let resultado = null;
    for (let key in teste.resultados) {
        const range = teste.resultados[key];
        if (pontuacao >= range.min && pontuacao <= range.max) {
            resultado = range;
            break;
        }
    }
    
    // Mostrar resultado
    mostrarResultado(resultado, pontuacao, teste.perguntas.length);
}

function mostrarResultado(resultado, pontuacao, totalPerguntas) {
    fecharModal();
    
    const resultadoHTML = `
        <div class="resultado-titulo">${resultado.titulo}</div>
        <div class="resultado-descricao">${resultado.descricao}</div>
        <div class="resultado-recomendacao">
            <h4>Importante:</h4>
            <p>Este é um teste de rastreio e não substitui uma avaliação profissional. Para um diagnóstico preciso, consulte um psicólogo ou psiquiatra.</p>
        </div>
        <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
            Sua pontuação: ${pontuacao} de ${(totalPerguntas - 1) * 3}
        </div>
    `;
    
    document.getElementById('resultado-conteudo').innerHTML = resultadoHTML;
    document.getElementById('resultadoModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.getElementById('testeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function fecharResultado() {
    document.getElementById('resultadoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function agendarConsulta() {
    fecharResultado();
    window.location.href = 'tel:+55-61992558044';
}

// Fechar modais ao clicar fora
window.onclick = function(event) {
    const testeModal = document.getElementById('testeModal');
    const resultadoModal = document.getElementById('resultadoModal');
    
    if (event.target === testeModal) {
        fecharModal();
    }
    if (event.target === resultadoModal) {
        fecharResultado();
    }
}

// Fechar com ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModal();
        fecharResultado();
    }
});

console.log('Sistema de Testes Psicológicos - Carregado com sucesso');
