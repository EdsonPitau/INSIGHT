const DATA = {
  palavras: {
    facil: [
      "Cachorro", "Gato", "Sol", "Lua", "Estrela", "Casa", "Árvore", "Carro",
      "Bicicleta", "Bola", "Telefone", "Livro", "Mesa", "Cadeira", "Janela",
      "Porta", "Sapato", "Chapéu", "Óculos", "Relógio", "Chuva", "Nuvem",
      "Praia", "Montanha", "Rio", "Peixe", "Pássaro", "Flor", "Folha",
      "Coração", "Mão", "Pé", "Olho", "Boca", "Nariz", "Orelha", "Cabelo",
      "Bebê", "Família", "Amigo", "Escola", "Professor", "Médico", "Polícia",
      "Bombeiro", "Cozinha", "Banheiro", "Cama", "Travesseiro", "Cobertor",
      "Geladeira", "Fogão", "Panela", "Garfo", "Faca", "Colher", "Prato",
      "Copo", "Pizza", "Bolo", "Sorvete", "Chocolate", "Maçã", "Banana",
      "Laranja", "Uva", "Melancia", "Cenoura", "Batata", "Tomate", "Ovo",
      "Leite", "Pão", "Queijo", "Café", "Suco", "Água", "Fogo", "Gelo",
      "Vento", "Neve", "Avião", "Navio", "Trem", "Ônibus", "Moto", "Caminhão",
      "Presente", "Festa", "Aniversário", "Natal", "Música", "Dança",
      "Futebol", "Basquete", "Vôlei", "Natação", "Piano", "Violão",
      "Tambor", "Microfone", "Câmera", "Computador", "Celular", "Televisão",
      "Sofá", "Espelho", "Escada", "Elevador", "Chave", "Carteira", "Dinheiro",
      "Coroa", "Anel", "Colar", "Bolsa", "Mochila", "Guarda-chuva", "Vela",
      "Lâmpada", "Estrela do mar", "Tubarão", "Baleia", "Elefante", "Leão",
      "Tigre", "Macaco", "Cavalo", "Vaca", "Porco", "Galinha", "Pato",
      "Coelho", "Urso", "Lobo", "Raposa", "Cobra", "Aranha", "Borboleta",
      "Abelha", "Formiga", "Joaninha", "Sapo", "Tartaruga", "Crocodilo",
    ],
    medio: [
      "Saudade", "Liberdade", "Esperança", "Amizade", "Coragem", "Paciência",
      "Generosidade", "Justiça", "Igualdade", "Democracia", "Tradição",
      "Cultura", "Revolução", "Independência", "Globalização", "Reciclagem",
      "Sustentabilidade", "Tecnologia", "Inteligência", "Criatividade",
      "Imaginação", "Curiosidade", "Aventura", "Mistério", "Surpresa",
      "Nostalgia", "Melancolia", "Euforia", "Inveja", "Ciúme", "Orgulho",
      "Humildade", "Solidão", "Companhia", "Lealdade", "Traição",
      "Vingança", "Perdão", "Sacrifício", "Conquista", "Derrota",
      "Vitória", "Competição", "Cooperação", "Negociação", "Diplomacia",
      "Burocracia", "Hierarquia", "Autoridade", "Rebeldia", "Conformismo",
      "Empreendedorismo", "Investimento", "Falência", "Inflação", "Economia",
      "Eleição", "Constituição", "Cidadania", "Imigração", "Fronteira",
      "Civilização", "Arqueologia", "Astronomia", "Gravidade", "Eletricidade",
      "Magnetismo", "Evolução", "Genética", "Vacina", "Epidemia",
      "Quarentena", "Telepatia", "Hipnose", "Reencarnação", "Destino",
      "Karma", "Meditação", "Yoga", "Astrologia", "Horóscopo",
      "Labirinto", "Enigma", "Quebra-cabeça", "Sudoku", "Xadrez",
      "Estratégia", "Tática", "Improviso", "Espontaneidade", "Disciplina",
      "Procrastinação", "Produtividade", "Multitarefa", "Insônia",
      "Pesadelo", "Sonambulismo", "Hipocondria", "Claustrofobia",
      "Vertigem", "Alucinação", "Telecinese", "Levitação", "Teletransporte",
      "Viagem no tempo", "Linha do tempo", "Paradoxo", "Dimensão paralela",
      "Buraco negro", "Supernova", "Constelação", "Eclipse", "Maré",
      "Erupção vulcânica", "Terremoto", "Tsunami", "Avalanche", "Furacão",
    ],
    dificil: [
      "Existencialismo", "Determinismo", "Relativismo", "Niilismo",
      "Empirismo", "Racionalismo", "Idealismo", "Materialismo dialético",
      "Solipsismo", "Hedonismo", "Estoicismo", "Utilitarismo",
      "Antropocentrismo", "Transcendentalismo", "Behaviorismo",
      "Subjetividade", "Objetividade", "Ambiguidade", "Paradoxo temporal",
      "Efeito borboleta", "Entropia", "Singularidade", "Multiverso",
      "Consciência coletiva", "Inconsciente coletivo", "Arquétipo",
      "Dissonância cognitiva", "Viés de confirmação", "Efeito Dunning-Kruger",
      "Síndrome de impostor", "Procrastinação crônica", "Burnout",
      "Gentrificação", "Especulação imobiliária", "Hiperinflação",
      "Estagflação", "Bolha econômica", "Capital especulativo",
      "Soberania nacional", "Geopolítica", "Multilateralismo",
      "Protecionismo comercial", "Diplomacia silenciosa", "Realpolitik",
      "Hegemonia cultural", "Apropriação cultural", "Etnocentrismo",
      "Xenofobia institucional", "Segregação velada", "Meritocracia",
      "Plutocracia", "Tecnocracia", "Anarcossindicalismo",
      "Pós-modernismo", "Desconstrutivismo", "Surrealismo",
      "Expressionismo abstrato", "Minimalismo conceitual", "Dadaísmo",
      "Cubismo analítico", "Impressionismo", "Barroco", "Renascentista",
      "Mecânica quântica", "Física de partículas", "Teoria das cordas",
      "Princípio da incerteza", "Emaranhamento quântico", "Antimatéria",
      "Radiação cósmica", "Matéria escura", "Energia escura",
      "Big Bang", "Nucleossíntese", "Fotossíntese", "Mitose",
      "Epigenética", "Mutação genética", "Seleção natural",
      "Especiação", "Simbiose", "Parasitismo", "Comensalismo",
      "Bioma", "Biodiversidade", "Desertificação", "Aquecimento global",
      "Pegada de carbono", "Economia circular", "Obsolescência programada",
      "Inteligência artificial generativa", "Algoritmo de aprendizado",
      "Criptomoeda descentralizada", "Blockchain", "Realidade aumentada",
      "Neurociência cognitiva", "Plasticidade cerebral", "Sinapse",
    ],
  },
  filmes: {
    facil: [
      "Toy Story", "Procurando Nemo", "Shrek", "Frozen", "Moana",
      "Coco", "Up: Altas Aventuras", "Wall-E", "Os Incríveis",
      "Carros", "Divertida Mente", "Zootopia", "Enrolados",
      "A Era do Gelo", "Madagascar", "Kung Fu Panda", "Rio",
      "Homem-Aranha", "Batman", "Superman", "Aquaman",
      "Mulher Maravilha", "Pantera Negra", "Vingadores", "Thor",
      "Hulk", "Capitão América", "Homem de Ferro", "Star Wars",
      "Harry Potter", "Senhor dos Anéis", "Jurassic Park",
      "ET", "De Volta para o Futuro", "Rei Leão", "101 Dálmatas",
      "Branca de Neve", "Cinderela", "A Bela e a Fera",
      "Aladdin", "Mulan", "Pocahontas", "Tarzan", "Hércules",
      "Os Goonies", "Piratas do Caribe", "Velozes e Furiosos",
      "Missão Impossível", "Mr. & Mrs. Smith", "Karatê Kid",
      "Rocky", "Titanic", "Avatar", "Gladiador", "Matrix",
      "Forrest Gump", "Jumanji", "Coraline", "Hotel Transilvânia",
      "Meu Malvado Favorito", "Free Guy", "Sonic", "Pokémon Detetive Pikachu",
    ],
    medio: [
      "Clube da Luta", "Pulp Fiction", "Cidade de Deus", "Tropa de Elite",
      "Bacurau", "O Auto da Compadecida", "Central do Brasil",
      "A Origem", "Interestelar", "Whiplash", "La La Land",
      "Coringa", "Parasita", "Ford vs Ferrari", "O Resgate do Soldado Ryan",
      "A Lista de Schindler", "O Senhor das Moscas", "Fala Sério, Mãe!",
      "Diário de uma Paixão", "Como Eu Era Antes de Você",
      "Simplesmente Amor", "500 Dias com Ela", "Garota Interrompida",
      "Antes do Amanhecer", "Brilho Eterno de uma Mente Sem Lembranças",
      "Quero Matar Meu Chefe", "A Rede Social", "Steve Jobs",
      "O Lobo de Wall Street", "Wall Street", "Moneyball",
      "Marte (Perdido em)", "Gravidade", "Contato", "Arrival",
      "Blade Runner", "Mad Max: Estrada da Fúria", "Ela",
      "Ex Machina", "Black Mirror: Bandersnatch", "Dunkirk",
      "1917", "Bastardos Inglórios", "Django Livre", "Kill Bill",
      "Era uma Vez em Hollywood", "Os Sete Samurais",
      "O Bom, o Mau e o Feio", "Era uma Vez no Oeste",
      "Apocalypse Now", "Platoon", "Nascido para Matar",
      "Cisne Negro", "Mãe!", "Hereditário", "Corra!",
      "Nós", "Um Lugar Silencioso", "Invocação do Mal",
      "Atividade Paranormal", "O Iluminado", "Psicose",
    ],
    dificil: [
      "O Sétimo Selo", "Persona", "Stalker", "Solaris",
      "O Espelho", "Andrei Rublev", "Sacrifício", "Nostalgia",
      "Ladrões de Bicicleta", "Roma, Cidade Aberta",
      "Oito e Meio", "A Doce Vida", "Amarcord",
      "O Anjo Exterminador", "Viridiana", "Belle de Jour",
      "Persona Non Grata", "Cidadão Kane", "Vertigo",
      "Janela Indiscreta", "Um Corpo que Cai", "A Marca da Maldade",
      "O Terceiro Homem", "Encurralado", "Sunset Boulevard",
      "Crepúsculo dos Deuses", "O Mensageiro do Diabo",
      "Faces", "Mulheres sob Influência", "Glória Feita de Sangue",
      "Holocausto Canibal", "Salò: 120 Dias de Sodoma",
      "Funny Games", "A Fita Branca", "Amor",
      "A Professora de Piano", "Caché", "Dogville",
      "Anticristo", "Melancolia", "Ninfomaníaca",
      "A Casa que Jack Construiu", "Eraserhead",
      "Cidade dos Sonhos", "Estrada Perdida", "Twin Peaks: Fire Walk with Me",
      "O Discreto Charme da Burguesia", "A Fera Humana",
      "Stalker (Tarkovski)", "Aguirre, a Cólera dos Deuses",
      "Fitzcarraldo", "O Enigma de Kaspar Hauser",
      "Lawrence da Arábia", "2001: Uma Odisseia no Espaço",
      "Barry Lyndon", "Eyes Wide Shut", "Nasce uma Estrela (1954)",
      "O Mágico de Oz", "Metropolis", "Nosferatu",
      "O Gabinete do Dr. Caligari", "Andrei Tarkovski: O Espelho",
    ],
  },
  objetos: {
    facil: [
      "Lápis", "Caneta", "Borracha", "Tesoura", "Régua", "Caderno",
      "Mochila", "Garrafa", "Copo", "Prato", "Garfo", "Faca",
      "Colher", "Panela", "Frigideira", "Geladeira", "Fogão",
      "Micro-ondas", "Liquidificador", "Cafeteira", "Torradeira",
      "Travesseiro", "Cobertor", "Lençol", "Toalha", "Sabão",
      "Shampoo", "Escova de dentes", "Pasta de dente", "Pente",
      "Espelho", "Sapato", "Tênis", "Bota", "Chinelo", "Meia",
      "Camisa", "Calça", "Vestido", "Casaco", "Boné", "Chapéu",
      "Óculos", "Relógio", "Anel", "Colar", "Brinco", "Bolsa",
      "Carteira", "Chave", "Cadeado", "Guarda-chuva", "Vela",
      "Lanterna", "Lâmpada", "Pilha", "Carregador", "Fone de ouvido",
      "Celular", "Computador", "Teclado", "Mouse", "Impressora",
      "Televisão", "Controle remoto", "Câmera fotográfica",
      "Violão", "Piano", "Bateria musical", "Microfone",
      "Bola de futebol", "Bicicleta", "Skate", "Patins",
      "Mala de viagem", "Cadeira", "Mesa", "Sofá", "Cama",
      "Armário", "Estante", "Cortina", "Tapete", "Vaso de planta",
      "Quadro", "Porta", "Janela", "Escada", "Martelo", "Chave de fenda",
      "Parafuso", "Prego", "Serra", "Furadeira", "Vassoura", "Pá",
      "Mangueira", "Balde", "Esponja", "Detergente",
    ],
    medio: [
      "Liquidificador de mão", "Aspirador de pó robô",
      "Máquina de lavar roupa", "Secadora de roupas",
      "Ferro de passar", "Tábua de passar roupa",
      "Extintor de incêndio", "Detector de fumaça",
      "Painel solar", "Gerador de energia", "Estabilizador de tensão",
      "Filtro de água", "Purificador de ar", "Umidificador",
      "Termômetro digital", "Balança de banheiro",
      "Cadeira de rodas", "Andador", "Muleta", "Bengala",
      "Capacete de moto", "Colete à prova de balas",
      "Extintor", "Alicate", "Trena", "Nível a laser",
      "Compressor de ar", "Esmerilhadeira", "Solda elétrica",
      "Tablet gráfico", "Drone", "Projetor multimídia",
      "Caixa de som bluetooth", "Carregador portátil",
      "Roteador Wi-Fi", "Disco rígido externo", "Pendrive",
      "Cartão de memória", "Leitor de código de barras",
      "Caixa registradora", "Máquina de cartão",
      "Telescópio", "Microscópio", "Bússola", "Sextante",
      "Mapa náutico", "Binóculo", "Luneta", "Estetoscópio",
      "Seringa", "Termômetro de mercúrio", "Tensiômetro",
      "Cadeira de escritório ergonômica", "Mesa digitalizadora",
      "Violino", "Saxofone", "Trompete", "Acordeão",
      "Harpa", "Flauta transversal", "Pedal de efeito de guitarra",
      "Amplificador de som", "Mesa de som", "Caixa acústica",
    ],
    dificil: [
      "Centrífuga de laboratório", "Espectrômetro de massa",
      "Microscópio eletrônico", "Acelerador de partículas",
      "Ressonância magnética", "Tomógrafo", "Eletrocardiógrafo",
      "Desfibrilador", "Respirador artificial", "Bisturi elétrico",
      "Endoscópio", "Autoclave", "Estação meteorológica",
      "Anemômetro", "Sismógrafo", "Barômetro de mercúrio",
      "Giroscópio", "Acelerômetro", "Osciloscópio",
      "Multímetro digital", "Gerador de Van de Graaff",
      "Transformador elétrico", "Painel de controle industrial",
      "Robô articulado industrial", "Impressora 3D",
      "Scanner de corpo inteiro", "Leitor biométrico",
      "Sensor de movimento infravermelho", "Câmera térmica",
      "Drone de mapeamento topográfico", "Sonar de profundidade",
      "Radar meteorológico", "Antena parabólica",
      "Satélite de comunicação", "Painel fotovoltaico bifacial",
      "Turbina eólica", "Reator nuclear em miniatura",
      "Centrífuga de enriquecimento", "Cápsula de reentrada espacial",
      "Traje espacial pressurizado", "Telescópio espacial",
      "Submarino de pesquisa", "Batiscafo",
      "Quebra-gelo (navio)", "Guindaste de contêineres",
      "Empilhadeira hidráulica", "Prensa hidráulica industrial",
      "Torno mecânico de precisão", "Fresadora CNC",
    ],
  },
  acoes: {
    facil: [
      "Dormir", "Comer", "Beber", "Correr", "Andar", "Saltar",
      "Nadar", "Voar", "Dançar", "Cantar", "Rir", "Chorar",
      "Gritar", "Cochichar", "Cozinhar", "Lavar", "Limpar",
      "Estudar", "Ler", "Escrever", "Desenhar", "Pintar",
      "Jogar bola", "Pescar", "Caçar", "Plantar", "Colher",
      "Dirigir", "Pedalar", "Escalar", "Mergulhar", "Surfar",
      "Pular corda", "Brincar de pega-pega", "Esconder",
      "Procurar", "Construir", "Quebrar", "Consertar",
      "Pendurar roupa", "Passar roupa", "Varrer", "Aspirar",
      "Escovar os dentes", "Pentear o cabelo", "Tomar banho",
      "Vestir-se", "Calçar sapato", "Dirigir carro", "Tirar foto",
      "Filmar", "Assistir TV", "Ouvir música", "Tocar instrumento",
      "Acenar", "Abraçar", "Beijar", "Apertar a mão",
      "Bater palma", "Assoviar", "Espirrar", "Bocejar",
      "Tropeçar", "Cair", "Levantar", "Sentar", "Deitar",
    ],
    medio: [
      "Negociar um acordo", "Apresentar um projeto",
      "Discutir com alguém", "Fazer um discurso",
      "Pedir desculpas", "Demitir alguém", "Pedir aumento",
      "Fazer uma entrevista de emprego", "Dirigir embriagado",
      "Tomar uma decisão difícil", "Mentir descaradamente",
      "Trair a confiança de alguém", "Resgatar alguém",
      "Fugir da polícia", "Roubar um banco", "Sequestrar alguém",
      "Negociar resgate", "Investigar um crime",
      "Defender alguém no tribunal", "Operar um paciente",
      "Dar à luz", "Pedir alguém em casamento",
      "Terminar um relacionamento", "Reconciliar-se",
      "Hipnotizar alguém", "Meditar profundamente",
      "Fazer um exorcismo", "Invocar um espírito",
      "Prever o futuro", "Viajar no tempo",
      "Construir um foguete", "Pilotar um avião",
      "Comandar um navio", "Liderar um exército",
      "Negociar um tratado de paz", "Declarar guerra",
      "Assinar um contrato", "Falir um negócio",
      "Lançar um produto", "Fazer uma fusão empresarial",
      "Sabotar um projeto", "Espionar alguém",
      "Decifrar um código secreto", "Hackear um sistema",
      "Clonar um animal", "Transplantar um órgão",
      "Ressuscitar alguém", "Hipnotizar uma platéia",
    ],
    dificil: [
      "Desconstruir um argumento filosófico",
      "Negociar um cessar-fogo internacional",
      "Reformular a constituição de um país",
      "Conduzir uma sessão de psicanálise",
      "Realizar uma cirurgia a coração aberto sem anestesia",
      "Negociar com terroristas", "Liderar um golpe de estado",
      "Orquestrar uma fraude eleitoral", "Driblar a censura",
      "Subornar um funcionário público",
      "Lavar dinheiro através de empresas fantasmas",
      "Manipular uma bolsa de valores",
      "Calcular a trajetória de um asteroide",
      "Sintetizar um novo elemento químico",
      "Decodificar o genoma humano",
      "Provar um teorema matemático",
      "Treinar uma inteligência artificial",
      "Programar um algoritmo de aprendizado de máquina",
      "Negociar direitos de propriedade intelectual",
      "Arbitrar uma disputa diplomática",
      "Restaurar uma obra de arte renascentista",
      "Autenticar uma falsificação",
      "Interpretar um sonho segundo Jung",
      "Conduzir um ritual xamânico",
      "Traduzir simultaneamente em uma cúpula da ONU",
      "Mediar uma negociação sindical",
      "Auditar as finanças de uma corporação",
      "Recuperar dados de um disco rígido corrompido",
      "Criptografar uma mensagem com chave assimétrica",
      "Realizar uma autópsia forense",
      "Catalogar fósseis de uma escavação arqueológica",
    ],
  },
};

// ---------------------------------------------------------------------------
// METADADOS
// ---------------------------------------------------------------------------

const CATEGORY_META = {
  palavras: { label: "Palavras", icon: "Aa" },
  objetos: { label: "Objetos", icon: "■" },
  acoes: { label: "Ações", icon: "✦" },
  filmes: { label: "Filmes", icon: "▶" },
};

const DIFFICULTY_META = {
  facil: { label: "Fácil", color: "#3a7d5c" },
  medio: { label: "Médio", color: "#b8862b" },
  dificil: { label: "Difícil", color: "#a14444" },
};

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildDeck(selectedCategories, selectedDifficulties) {
  let pool = [];
  selectedCategories.forEach((cat) => {
    selectedDifficulties.forEach((diff) => {
      const words = (DATA[cat] && DATA[cat][diff]) || [];
      words.forEach((w) =>
        pool.push({ word: w, category: cat, difficulty: diff })
      );
    });
  });
  return shuffle(pool);
}

// ---------------------------------------------------------------------------
// REACT SETUP (sem JSX / sem build step)
// ---------------------------------------------------------------------------

const { useState, useRef, useCallback, useEffect } = React;
const h = React.createElement;

// ---------------------------------------------------------------------------
// SETUP SCREEN
// ---------------------------------------------------------------------------

function SetupScreen({ onStart }) {
  const [categories, setCategories] = useState({
    palavras: true,
    objetos: true,
    acoes: false,
    filmes: true,
  });
  const [difficulties, setDifficulties] = useState({
    facil: true,
    medio: true,
    dificil: false,
  });
  const [duration, setDuration] = useState(60);

  const toggleCategory = (key) =>
    setCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleDifficulty = (key) =>
    setDifficulties((prev) => ({ ...prev, [key]: !prev[key] }));

  const selectedCategories = Object.keys(categories).filter((k) => categories[k]);
  const selectedDifficulties = Object.keys(difficulties).filter((k) => difficulties[k]);
  const canStart = selectedCategories.length > 0 && selectedDifficulties.length > 0;

  return h(
    "div",
    { className: "screen setup-screen" },
    h(
      "div",
      { className: "setup-header" },
      h("h1", { className: "title" }, "INSIGHT"),
      h("p", { className: "subtitle" }, "Desenhe. Adivinhe. Marque pontos.")
    ),
    h(
      "div",
      { className: "setup-section" },
      h("h2", { className: "section-label" }, "Categorias"),
      h(
        "div",
        { className: "chip-grid" },
        Object.entries(CATEGORY_META).map(([key, meta]) =>
          h(
            "button",
            {
              key,
              className: `chip ${categories[key] ? "chip-active" : ""}`,
              onClick: () => toggleCategory(key),
            },
            h("span", { className: "chip-icon" }, meta.icon),
            meta.label
          )
        )
      )
    ),
    h(
      "div",
      { className: "setup-section" },
      h("h2", { className: "section-label" }, "Dificuldade"),
      h(
        "div",
        { className: "chip-grid" },
        Object.entries(DIFFICULTY_META).map(([key, meta]) =>
          h(
            "button",
            {
              key,
              className: `chip diff-chip ${difficulties[key] ? "chip-active" : ""}`,
              style: difficulties[key]
                ? { borderColor: meta.color, color: meta.color }
                : undefined,
              onClick: () => toggleDifficulty(key),
            },
            meta.label
          )
        )
      )
    ),
    h(
      "div",
      { className: "setup-section" },
      h("h2", { className: "section-label" }, "Tempo por rodada"),
      h(
        "div",
        { className: "duration-toggle" },
        h(
          "button",
          {
            className: `duration-btn ${duration === 60 ? "duration-active" : ""}`,
            onClick: () => setDuration(60),
          },
          "1:00"
        ),
        h(
          "button",
          {
            className: `duration-btn ${duration === 90 ? "duration-active" : ""}`,
            onClick: () => setDuration(90),
          },
          "1:30"
        )
      )
    ),
    h(
      "button",
      {
        className: "primary-btn",
        disabled: !canStart,
        onClick: () => onStart({ selectedCategories, selectedDifficulties, duration }),
      },
      "Começar a jogar"
    ),
    !canStart &&
      h(
        "p",
        { className: "hint-text" },
        "Selecione ao menos uma categoria e uma dificuldade."
      )
  );
}

// ---------------------------------------------------------------------------
// GAME SCREEN
// ---------------------------------------------------------------------------

function GameScreen({ config, onExit }) {
  const deckRef = useRef(buildDeck(config.selectedCategories, config.selectedDifficulties));
  const indexRef = useRef(0);

  function drawNext() {
    if (indexRef.current >= deckRef.current.length) {
      deckRef.current = shuffle(deckRef.current);
      indexRef.current = 0;
    }
    const card = deckRef.current[indexRef.current];
    indexRef.current += 1;
    return card;
  }

  const [current, setCurrent] = useState(() => drawNext());
  const [timeLeft, setTimeLeft] = useState(config.duration);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [roundResult, setRoundResult] = useState({ acertos: 0, pulos: 0 });
  const [teamScores, setTeamScores] = useState({ a: 0, b: 0 });
  const [activeTeam, setActiveTeam] = useState("a");

  const intervalRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  const startTimer = useCallback(() => {
    setRunning(true);
    setFinished(false);
    clearTimer();
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearTimer();
          setRunning(false);
          setFinished(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }, [clearTimer]);

  const resetRound = useCallback(() => {
    clearTimer();
    setRunning(false);
    setFinished(false);
    setTimeLeft(config.duration);
  }, [clearTimer, config.duration]);

  const nextCard = useCallback(
    (didScore) => {
      setCurrent(drawNext());
      if (didScore === "acerto") {
        setRoundResult((s) => ({ ...s, acertos: s.acertos + 1 }));
        setTeamScores((s) => ({ ...s, [activeTeam]: s[activeTeam] + 1 }));
      } else if (didScore === "pulo") {
        setRoundResult((s) => ({ ...s, pulos: s.pulos + 1 }));
      }
      setActiveTeam((t) => (t === "a" ? "b" : "a"));
      resetRound();
    },
    [resetRound, activeTeam]
  );

  const skipCard = () => {
    setCurrent(drawNext());
  };

  const pct = (timeLeft / config.duration) * 100;
  const diffMeta = DIFFICULTY_META[current.difficulty];
  const catMeta = CATEGORY_META[current.category];

  return h(
    "div",
    { className: "screen game-screen" },
    h(
      "div",
      { className: "game-topbar" },
      h(
        "button",
        { className: "icon-btn", onClick: onExit, "aria-label": "Voltar" },
        "←"
      ),
      h(
        "div",
        { className: "team-scoreboard" },
        h(
          "button",
          {
            className: `team-pill team-a ${activeTeam === "a" ? "team-active" : ""}`,
            onClick: () => setActiveTeam("a"),
          },
          h("span", { className: "team-label" }, "Equipe A"),
          h("span", { className: "team-score" }, teamScores.a)
        ),
        h(
          "button",
          {
            className: `team-pill team-b ${activeTeam === "b" ? "team-active" : ""}`,
            onClick: () => setActiveTeam("b"),
          },
          h("span", { className: "team-label" }, "Equipe B"),
          h("span", { className: "team-score" }, teamScores.b)
        )
      )
    ),
    h(
      "div",
      { className: "timer-wrap" },
      h(
        "div",
        { className: "timer-track" },
        h("div", {
          className: "timer-fill",
          style: {
            width: `${pct}%`,
            background: finished ? "#a14444" : timeLeft <= 10 ? "#b8862b" : "#2b2b2b",
          },
        })
      ),
      h(
        "span",
        { className: "timer-label" },
        `${String(Math.floor(timeLeft / 60)).padStart(1, "0")}:${String(
          timeLeft % 60
        ).padStart(2, "0")}`
      )
    ),
    h(
      "div",
      { className: "card-area" },
      h(
        "div",
        { className: `card ${finished ? "card-locked" : ""}` },
        h(
          "div",
          { className: "card-meta" },
          h("span", { className: "card-category" }, `${catMeta.icon} ${catMeta.label}`),
          h(
            "span",
            {
              className: "card-difficulty",
              style: { color: diffMeta.color, borderColor: diffMeta.color },
            },
            diffMeta.label
          )
        ),
        h("p", { className: "card-word" }, current.word)
      )
    ),
    finished &&
      h("p", { className: "time-up-banner" }, "Tempo esgotado — registre o resultado"),
    h(
      "div",
      { className: "game-controls" },
      !running &&
        !finished &&
        h("button", { className: "primary-btn", onClick: startTimer }, "Iniciar rodada"),
      running &&
        h(
          "div",
          { className: "result-row" },
          h("button", { className: "secondary-btn", onClick: skipCard }, "Pular carta"),
          h(
            "button",
            {
              className: "result-btn result-acerto",
              onClick: () => nextCard("acerto"),
            },
            "Acertou!"
          )
        ),
      finished &&
        h(
          "div",
          { className: "result-row" },
          h(
            "button",
            {
              className: "result-btn result-pulo",
              onClick: () => nextCard("pulo"),
            },
            "Não acertou"
          ),
          h(
            "button",
            {
              className: "result-btn result-acerto",
              onClick: () => nextCard("acerto"),
            },
            "Acertou!"
          )
        ),
      !running &&
        !finished &&
        roundResult.acertos + roundResult.pulos > 0 &&
        h("button", { className: "ghost-btn", onClick: skipCard }, "Trocar carta")
    )
  );
}

// ---------------------------------------------------------------------------
// APP ROOT
// ---------------------------------------------------------------------------

function InsightApp() {
  const [config, setConfig] = useState(null);

  return h(
    "div",
    { className: "app-root" },
    config
      ? h(GameScreen, { config, onExit: () => setConfig(null) })
      : h(SetupScreen, { onStart: setConfig })
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(InsightApp));

// Registra o service worker para funcionamento offline
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
