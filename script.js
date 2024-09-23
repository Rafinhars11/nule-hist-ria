const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

const story = {
    start: {
        text: "Você está em uma floresta misteriosa. Há dois caminhos à sua frente.",
        choices: [
            { text: "Ir para a esquerda", next: 'leftPath' },
            { text: "Ir para a direita", next: 'rightPath' }
        ]
    },
    leftPath: {
        text: "Você encontra uma charada: 'O que tem chaves mas não pode abrir portas?'",
        choices: [
            { text: "Responder 'Piano'", next: 'correctAnswer' },
            { text: "Responder 'Chaveiro'", next: 'wrongAnswer' }
        ]
    },
    rightPath: {
        text: "Você encontra um rio. Você pode tentar atravessar ou seguir o rio.",
        choices: [
            { text: "Atravessar o rio", next: 'crossRiver' },
            { text: "Seguir o rio", next: 'followRiver' }
        ]
    },
    correctAnswer: {
        text: "Correto! Você avança e encontra um tesouro.",
        choices: [
            { text: "Abrir o tesouro", next: 'treasure' },
            { text: "Deixar o tesouro", next: 'leaveTreasure' }
        ]
    },
    wrongAnswer: {
        text: "Errado! Você é atacado por um monstro e perde.",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    },
    crossRiver: {
        text: "Você atravessa o rio com sucesso e encontra uma vila.",
        choices: [
            { text: "Entrar na vila", next: 'village' },
            { text: "Evitar a vila", next: 'avoidVillage' }
        ]
    },
    followRiver: {
        text: "Você segue o rio e encontra uma cachoeira.",
        choices: [
            { text: "Explorar a cachoeira", next: 'waterfall' },
            { text: "Voltar", next: 'start' }
        ]
    },
    treasure: {
        text: "Você abre o tesouro e encontra riquezas além da imaginação. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    },
    leaveTreasure: {
        text: "Você deixa o tesouro e continua sua jornada. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    },
    village: {
        text: "Você é bem-vindo na vila e vive feliz para sempre. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    },
    avoidVillage: {
        text: "Você evita a vila e se perde na floresta. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    },
    waterfall: {
        text: "Você encontra uma caverna atrás da cachoeira e descobre um segredo antigo. Fim!",
        choices: [
            { text: "Recomeçar", next: 'start' }
        ]
    }
};

function startGame() {
    showStory('start');
}

function showStory(storyNode) {
    const node = story[storyNode];
    storyElement.innerText = node.text;
    choicesElement.innerHTML = '';
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });
}

startGame();
