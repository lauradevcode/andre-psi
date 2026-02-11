/* ============================================
   SISTEMA DE TESTES PSICOLÓGICOS
   Código refatorado - Nível Sênior
   ============================================ */

/* ============================================
   DADOS DOS TESTES
   ============================================ */
const TESTES_PSICOLOGICOS = {
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
                pergunta: "Com que frequência você se distrai facilmente com estímulos externos?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você esquece compromissos ou obrigações?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            },
            {
                pergunta: "Com que frequência você se sente inquieto ou agitado?",
                opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Muito frequentemente"]
            }
        ],
        resultados: {
            baixo: { min: 0, max: 6, titulo: "Baixa Probabilidade de TDAH", descricao: "Você apresenta poucos sintomas de TDAH. Seus padrões de atenção e controle de impulsos estão dentro do esperado." },
            moderado: { min: 7, max: 12, titulo: "Probabilidade Moderada de TDAH", descricao: "Você apresenta alguns sintomas de TDAH. Considere uma avaliação profissional se esses sintomas estão afetando sua vida diária." },
            alto: { min: 13, max: 24, titulo: "Alta Probabilidade de TDAH", descricao: "Você apresenta vários sintomas de TDAH. É recomendável procurar uma avaliação profissional especializada para diagnóstico adequado." }
        }
    }
};


/* ============================================
   CLASSE PRINCIPAL - GERENCIADOR DE TESTES
   ============================================ */
class GerenciadorTestes {
    constructor() {
        this.testeAtual = null;
        this.perguntaAtual = 0;
        this.respostas = [];
        this.elementos = this.cacheElementos();
        this.inicializarEventos();
    }
    
    cacheElementos() {
        return {
            testeModal: document.getElementById('testeModal'),
            resultadoModal: document.getElementById('resultadoModal'),
            testeTitulo: document.getElementById('testeTitulo'),
            progressoFill: document.getElementById('progresso-fill'),
            progressoTexto: document.getElementById('progresso-texto'),
            perguntaTexto: document.getElementById('pergunta-texto'),
            respostasContainer: document.getElementById('respostas-container'),
            btnAnterior: document.getElementById('btn-anterior'),
            btnProximo: document.getElementById('btn-proximo'),
            btnFinalizar: document.getElementById('btn-finalizar'),
            resultadoConteudo: document.getElementById('resultado-conteudo')
        };
    }
    
    inicializarEventos() {
        // Fechar modal clicando fora
        window.onclick = (e) => {
            if (e.target === this.elementos.testeModal) this.fecharModal();
            if (e.target === this.elementos.resultadoModal) this.fecharResultado();
        };
        
        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.fecharModal();
                this.fecharResultado();
            }
        });
    }
    
    iniciarTeste(tipo) {
        if (!TESTES_PSICOLOGICOS[tipo]) {
            console.error(`Teste "${tipo}" não encontrado`);
            return;
        }
        
        this.testeAtual = tipo;
        this.perguntaAtual = 0;
        this.respostas = [];
        
        const teste = TESTES_PSICOLOGICOS[tipo];
        this.elementos.testeTitulo.textContent = teste.titulo;
        
        this.mostrarModal();
        this.mostrarPergunta();
    }
    
    mostrarModal() {
        this.elementos.testeModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    fecharModal() {
        this.elementos.testeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    fecharResultado() {
        this.elementos.resultadoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    mostrarPergunta() {
        const teste = TESTES_PSICOLOGICOS[this.testeAtual];
        const pergunta = teste.perguntas[this.perguntaAtual];
        const totalPerguntas = teste.perguntas.length;
        
        // Atualizar progresso
        const percentual = ((this.perguntaAtual + 1) / totalPerguntas) * 100;
        this.elementos.progressoFill.style.width = `${percentual}%`;
        this.elementos.progressoTexto.textContent = `${this.perguntaAtual + 1} de ${totalPerguntas}`;
        
        // Atualizar pergunta
        this.elementos.perguntaTexto.textContent = pergunta.pergunta;
        
        // Renderizar opções
        this.renderizarOpcoes(pergunta.opcoes);
        
        // Atualizar botões de navegação
        this.atualizarBotoesNavegacao(totalPerguntas);
    }
    
    renderizarOpcoes(opcoes) {
        this.elementos.respostasContainer.innerHTML = '';
        
        opcoes.forEach((opcao, index) => {
            const button = document.createElement('button');
            button.className = 'resposta-option';
            button.textContent = opcao;
            button.onclick = () => this.selecionarResposta(index, button);
            
            // Manter seleção anterior
            if (this.respostas[this.perguntaAtual] === index) {
                button.classList.add('selected');
            }
            
            this.elementos.respostasContainer.appendChild(button);
        });
    }
    
    atualizarBotoesNavegacao(totalPerguntas) {
        const isFirstQuestion = this.perguntaAtual === 0;
        const isLastQuestion = this.perguntaAtual === totalPerguntas - 1;
        const hasAnswer = this.respostas[this.perguntaAtual] !== undefined;
        
        this.elementos.btnAnterior.style.display = isFirstQuestion ? 'none' : 'block';
        this.elementos.btnProximo.style.display = isLastQuestion ? 'none' : 'block';
        this.elementos.btnFinalizar.style.display = isLastQuestion ? 'block' : 'none';
        
        this.elementos.btnProximo.disabled = !hasAnswer;
        this.elementos.btnFinalizar.disabled = !hasAnswer;
    }
    
    selecionarResposta(index, button) {
        this.respostas[this.perguntaAtual] = index;
        
        // Atualizar UI
        document.querySelectorAll('.resposta-option').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
        
        // Habilitar navegação
        this.elementos.btnProximo.disabled = false;
        this.elementos.btnFinalizar.disabled = false;
    }
    
    proximaPergunta() {
        const teste = TESTES_PSICOLOGICOS[this.testeAtual];
        if (this.perguntaAtual < teste.perguntas.length - 1) {
            this.perguntaAtual++;
            this.mostrarPergunta();
        }
    }
    
    perguntaAnterior() {
        if (this.perguntaAtual > 0) {
            this.perguntaAtual--;
            this.mostrarPergunta();
        }
    }
    
    finalizarTeste() {
        const teste = TESTES_PSICOLOGICOS[this.testeAtual];
        const pontuacao = this.calcularPontuacao();
        const resultado = this.encontrarResultado(teste.resultados, pontuacao);
        
        this.mostrarResultado(resultado, pontuacao, teste.perguntas.length);
    }
    
    calcularPontuacao() {
        return this.respostas.reduce((total, resposta) => total + resposta, 0);
    }
    
    encontrarResultado(resultados, pontuacao) {
        for (let key in resultados) {
            const range = resultados[key];
            if (pontuacao >= range.min && pontuacao <= range.max) {
                return range;
            }
        }
        return null;
    }
    
    mostrarResultado(resultado, pontuacao, totalPerguntas) {
        this.fecharModal();
        
        const maxPontuacao = (totalPerguntas - 1) * 3;
        
        const html = `
            <div class="resultado-titulo">${resultado.titulo}</div>
            <div class="resultado-descricao">${resultado.descricao}</div>
            <div class="resultado-recomendacao">
                <h4>Importante:</h4>
                <p>Este é um teste de rastreio e não substitui uma avaliação profissional. Para um diagnóstico preciso, consulte um psicólogo ou psiquiatra.</p>
            </div>
            <div style="margin-top: 1.5rem; font-size: 0.95rem; color: #666; font-weight: 500;">
                Sua pontuação: ${pontuacao} de ${maxPontuacao}
            </div>
        `;
        
        this.elementos.resultadoConteudo.innerHTML = html;
        this.elementos.resultadoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}


/* ============================================
   FUNÇÕES GLOBAIS (compatibilidade)
   ============================================ */
let gerenciador;

document.addEventListener('DOMContentLoaded', () => {
    gerenciador = new GerenciadorTestes();
});

function iniciarTeste(tipo) {
    gerenciador.iniciarTeste(tipo);
}

function proximaPergunta() {
    gerenciador.proximaPergunta();
}

function perguntaAnterior() {
    gerenciador.perguntaAnterior();
}

function finalizarTeste() {
    gerenciador.finalizarTeste();
}

function fecharModal() {
    gerenciador.fecharModal();
}

function fecharResultado() {
    gerenciador.fecharResultado();
}

function agendarConsulta() {
    gerenciador.fecharResultado();
    window.location.href = 'tel:+55-61992558044';
}

console.log('✓ Sistema de Testes Psicológicos carregado com sucesso');