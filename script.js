document.addEventListener('DOMContentLoaded', function () {
    // Personalização com nomes (altere aqui)
    const nomeNamorada = "Clara"; // Substitua pelo nome da sua namorada
    const seuNome = "Matheus"; // Substitua pelo seu nome
    const dataInicioRelacionamento = "2024-10-27"; // Substitua pela data de início do relacionamento (formato YYYY-MM-DD)

    document.getElementById('nome-namorada').textContent = nomeNamorada;
    document.getElementById('seu-nome').textContent = seuNome;
    document.getElementById('ano-atual').textContent = new Date().getFullYear();

    // Array de mensagens românticas
    const mensagens = [
        `Cada dia ao seu lado é um presente que eu amo muito`,
        `Você é a razão do meu sorriso todos os dias`,
        `Amo o jeito que você me faz sentir especial`,
        `Nenhuma palavra pode descrever o quanto você significa para mim`,
        `Você é o amor da minha vida e meu maior presente`,
        `Eu te amo hoje e sempre`,
        `Você é a mulher da minha vida para sempre`,
        `Eu tenho muito orgulho de você meu amor`,
        `Você me da forças todos os dias`,
        `Você foi o melhor "sim" que a vida me deu`,
        `Amo como você transforma momentos simples em memórias especiais`,
        `Amo seu sorriso`,
        `Amo seu rosto`,
        `Amo seu cabelo`, 
        `Amo você`,
        ];

    // Botão para mudar mensagens
    const btnMensagem = document.getElementById('btn-mensagem');
    const mensagemElement = document.getElementById('mensagem-personalizada');

    btnMensagem.addEventListener('click', function () {
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        mensagemElement.textContent = mensagemAleatoria;

        // Efeito visual
        mensagemElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            mensagemElement.style.transform = 'scale(1)';
        }, 300);
    });

    // Adicionar fotos (substitua pelas URLs das suas fotos)
    const fotos = [
        'url("foto1.jpg")',// Foto exemplo 1
        'url("foto2.JPG")', // Foto exemplo 2
        'url("foto3.JPG")',  // Foto exemplo 3
    ];

    fotos.forEach((foto, index) => {
        document.getElementById(`foto${index + 1}`).style.backgroundImage = foto;
    });

    // Criar linha do tempo de lembranças
    const lembrancas = [
        {
            data: "08/08/2024",
            titulo: "Dia em que te conheci",
            descricao: "A gente demorou pra começar a falar, mas quando começamos, não paramos mais KKKKK",
        },
        {
            data: "15/09/2024",
            titulo: "Primeiro Bichinho",
            descricao: "Foi no shopping ventura, antes da gente ir pro cinema",
            foto: "url('foto4.JPG')"
        },
        {
            data: "29/09/2024",
            titulo: "Primeira vez no parque juntos",
            descricao: "Com a manu, nossa maior fã KKKK",
            foto: "url('foto5.JPG')"
        },
        {
            data: "19/10/2024",
            titulo: "Primeiro Eu Te Amo",
            descricao: "Depois de ver o melhor filme do mundo (Coringa 2) KKKKK, mas foi um dia muito marcante",
            foto: "url('te amo.jpg')"
        },
        {
            data: "27/10/2024",
            titulo: "Pedido de Namoro",
            descricao: "Confesso que eu tava muito nervoso, mas depois de ouvir seu sim, minha vida se tornou muito melhor",
            foto: "url('pedido.jpg')"
        },
        {
            data: "10/11/2024",
            titulo: "Dia que conheci seus pais",
            descricao: "Foi um dia muito marcante para mim também, conheci o Hulk KKKKKK",
            foto: "url('casa.jpg')"
        },
        {
            data: "16/11/2024",
            titulo: "Primeiro vez no circo juntos",
            descricao: "Foi um dia muito especial para mim, muito top também",
            foto: "url('circo.jpg')"
        },
        {
            data: "25/12/2024",
            titulo: "Primeiro Natal Juntos",
            descricao: "Algo que me marcou muito e foi um dia muito especial",
            foto: "url('natal.JPG')"
        },
        {
            data: "15/01/2025",
            titulo: "Nosso piquenique no parque",
            descricao: "Essa foto é incrível",
            foto: "url('linda.jpg')"
        },
        {
            data: "15/01/2025",
            titulo: "Nossas camisas lindas",
            descricao: "Nem preciso falar das camisas do Mcqueen e da Sally",
            foto: "url('camisa.PNG')"
        },
        {
            data: "15/01/2025",
            titulo: "A gente no parque",
            descricao: "Eu achei você muito linda nessa foto",
            foto: "url('clara.jpg')"
        },
        {
            data: "29/01/2025",
            titulo: "E daí em diante foram diversos rolês",
            descricao: "A gente",
            foto: "url('nós3.jpg')"
        },
        {
            data: "08/02/2025",
            titulo: "A gente aqui em casa",
            descricao: "Muito lindos não tem como",
            foto: "url('nós.JPG')"
        },
        {
            data: "15/02/2025",
            titulo: "A gente na sua casa",
            descricao: "Você enrolando o cabelo e eu ajudando muito",
            foto: "url('IMG_2386.jpg')"
        },
        {
            data: "07/03/2025",
            titulo: "A gente com a Manu",
            descricao: "Nossa maior fã",
            foto: "url('nós2.jpg')"
        },
        {
            data: "09/03/2025",
            titulo: "A gente no aniversário",
            descricao: "A gente ficou muito bonito na foto de verdade",
            foto: "url('role2.jpg')"
        },
        {
            data: "06/04/2025",
            titulo: "A gente no outro parque",
            descricao: "Essa foto ficou top",
            foto: "url('role.jpg')"
        },
        {
            data: `<div class="infinito-container">
              <span class="infinito-simbolo">∞</span>
              <span class="infinito-texto">para sempre</span>
           </div>`,
            titulo: "Muitas memórias ainda estão por vir",
            descricao: "E eu mal posso esperar para viver cada uma delas ao seu lado! ❤️",
        }
    ];

    const timeline = document.getElementById('timeline');

    lembrancas.forEach(lembranca => {
        const evento = document.createElement('div');
        evento.className = 'evento';
        evento.innerHTML = `
        <div class="evento-header">
            <h3>${lembranca.titulo}</h3>
            <p class="data">${lembranca.data}</p>
        </div>
        <div class="evento-content">
            ${lembranca.foto ? `<div class="evento-foto" style="background-image: ${lembranca.foto}"></div>` : ''}
            <p>${lembranca.descricao}</p>
        </div>
    `;
        timeline.appendChild(evento);
    });

    // Contador de tempo juntos
    function atualizarContador() {
        const dataInicio = new Date(dataInicioRelacionamento);
        const agora = new Date();

        const diferenca = agora - dataInicio;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById('tempo-juntos').textContent =
            `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }

    // Atualizar contador imediatamente e a cada segundo
    atualizarContador();
    setInterval(atualizarContador, 1000);

    // Sistema de promessas de amor
    const btnPromessa = document.getElementById('btn-promessa');
    const textoPromessa = document.getElementById('texto-promessa');
    const promessasSalvas = document.getElementById('promessas-salvas');

    // Carregar promessas salvas do localStorage
    function carregarPromessas() {
        const promessas = JSON.parse(localStorage.getItem('promessasAmor')) || [];

        // Limpar promessas exibidas
        while (promessasSalvas.children.length > 1) {
            promessasSalvas.removeChild(promessasSalvas.lastChild);
        }

        // Adicionar promessas salvas
        promessas.forEach((promessa, index) => {
            const divPromessa = document.createElement('div');
            divPromessa.className = 'promessa-item';
            divPromessa.innerHTML = `
                        <p><strong>Promessa ${index + 1}:</strong> ${promessa.texto}</p>
                        <small>${new Date(promessa.data).toLocaleDateString('pt-BR')}</small>
                        <button class="btn-remover" data-id="${index}">Remover</button>
                    `;
            promessasSalvas.appendChild(divPromessa);
        });

        // Adicionar event listeners aos botões de remover
        document.querySelectorAll('.btn-remover').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-id'));
                removerPromessa(id);
            });
        });
    }

    // Adicionar nova promessa
    btnPromessa.addEventListener('click', function () {
        const texto = textoPromessa.value.trim();

        if (texto === '') {
            alert('Por favor, escreva sua promessa de amor!');
            return;
        }

        const promessa = {
            texto: texto,
            data: new Date().toISOString()
        };

        // Obter promessas existentes ou criar array vazio
        const promessas = JSON.parse(localStorage.getItem('promessasAmor')) || [];

        // Adicionar nova promessa
        promessas.push(promessa);

        // Salvar no localStorage
        localStorage.setItem('promessasAmor', JSON.stringify(promessas));

        // Recarregar promessas
        carregarPromessas();

        // Limpar campo
        textoPromessa.value = '';

        // Feedback
        alert('Promessa guardada com amor! ❤️');
    });

    // Remover promessa
    function removerPromessa(id) {
        const promessas = JSON.parse(localStorage.getItem('promessasAmor')) || [];

        if (id >= 0 && id < promessas.length) {
            promessas.splice(id, 1);
            localStorage.setItem('promessasAmor', JSON.stringify(promessas));
            carregarPromessas();
        }
    }

    // Carregar promessas ao iniciar
    carregarPromessas();

    // Efeito de corações flutuantes
    const coracoesContainer = document.getElementById('coracoes');

    function criarCoracao() {
        const coracao = document.createElement('div');
        coracao.className = 'coracao';
        coracao.innerHTML = '❤️';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.animationDuration = Math.random() * 3 + 2 + 's';
        coracoesContainer.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 5000);
    }

    setInterval(criarCoracao, 300);

    // Tocar música automaticamente (opcional)
    const audioPlayer = document.getElementById('audio-player');

    // Descomente a linha abaixo se quiser que a música comece automaticamente
    // audioPlayer.play().catch(e => console.log("Autoplay não permitido pelo navegador"));
});
