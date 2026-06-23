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
      "Futebol", "Basquete", "Vôlei", "Natação", "Piano", "Violão", "Tambor",
      "Microfone", "Câmera", "Computador", "Celular", "Televisão", "Sofá",
      "Espelho", "Escada", "Elevador", "Chave", "Carteira", "Dinheiro",
      "Coroa", "Anel", "Colar", "Bolsa", "Mochila", "Guarda-chuva", "Vela",
      "Lâmpada", "Estrela do mar", "Tubarão", "Baleia", "Elefante", "Leão",
      "Tigre", "Macaco", "Cavalo", "Vaca", "Porco", "Galinha", "Pato",
      "Coelho", "Urso", "Lobo", "Raposa", "Cobra", "Aranha", "Borboleta",
      "Abelha", "Formiga", "Joaninha", "Sapo", "Tartaruga", "Crocodilo",
      "Escova", "Pente", "Pia", "Chuveiro", "Sabonete", "Toalha", "Vassoura",
      "Pá", "Balde", "Esponja", "Detergente", "Roupa", "Cesta", "Varal",
      "Ventilador", "Cortina", "Tapete", "Almofada", "Estante", "Gaveta",
      "Caixa", "Saco", "Sacola", "Bandeja", "Tigela", "Jarra", "Frasco",
      "Pote", "Tampa", "Caneca", "Bule", "Açúcar", "Sal", "Pimenta", "Mel",
      "Manteiga", "Iogurte", "Biscoito", "Macarrão", "Arroz", "Feijão", "Sopa",
      "Salada", "Hambúrguer", "Cachorro-quente", "Pipoca", "Algodão-doce",
      "Picolé", "Brigadeiro", "Pudim", "Torta", "Doce", "Salgado", "Lanche",
      "Churrasco", "Feira", "Mercado", "Loja", "Shopping", "Cinema", "Teatro",
      "Parque", "Praça", "Zoológico", "Circo", "Fazenda", "Floresta",
      "Deserto", "Ilha", "Cachoeira", "Lago", "Oceano", "Vulcão", "Caverna",
      "Castelo", "Ponte", "Túnel", "Farol", "Igreja", "Hospital", "Bombeiros",
      "Delegacia", "Correio", "Banco", "Padaria", "Açougue", "Farmácia",
      "Dentista", "Veterinário", "Cabeleireiro", "Costureira", "Pedreiro",
      "Eletricista", "Encanador", "Jardineiro", "Pintor", "Motorista",
      "Piloto", "Marinheiro", "Astronauta", "Sereia", "Fada", "Bruxa", "Mago",
      "Dragão", "Fantasma", "Vampiro", "Lobisomem", "Múmia", "Esqueleto",
      "Robô", "Alienígena", "Dinossauro", "Unicórnio",
    ],
    medio: [
      "Saudade", "Liberdade", "Esperança", "Amizade", "Coragem", "Paciência",
      "Generosidade", "Justiça", "Igualdade", "Democracia", "Tradição",
      "Cultura", "Revolução", "Independência", "Globalização", "Reciclagem",
      "Sustentabilidade", "Tecnologia", "Inteligência", "Criatividade",
      "Imaginação", "Curiosidade", "Aventura", "Mistério", "Surpresa",
      "Nostalgia", "Melancolia", "Euforia", "Inveja", "Ciúme", "Orgulho",
      "Humildade", "Solidão", "Companhia", "Lealdade", "Traição", "Vingança",
      "Perdão", "Sacrifício", "Conquista", "Derrota", "Vitória", "Competição",
      "Cooperação", "Negociação", "Diplomacia", "Burocracia", "Hierarquia",
      "Autoridade", "Rebeldia", "Conformismo", "Empreendedorismo",
      "Investimento", "Falência", "Inflação", "Economia", "Eleição",
      "Constituição", "Cidadania", "Imigração", "Fronteira", "Civilização",
      "Arqueologia", "Astronomia", "Gravidade", "Eletricidade", "Magnetismo",
      "Evolução", "Genética", "Vacina", "Epidemia", "Quarentena", "Telepatia",
      "Hipnose", "Reencarnação", "Destino", "Karma", "Meditação", "Yoga",
      "Astrologia", "Horóscopo", "Labirinto", "Enigma", "Quebra-cabeça",
      "Sudoku", "Xadrez", "Estratégia", "Tática", "Improviso",
      "Espontaneidade", "Disciplina", "Procrastinação", "Produtividade",
      "Multitarefa", "Insônia", "Pesadelo", "Sonambulismo", "Hipocondria",
      "Claustrofobia", "Vertigem", "Alucinação", "Telecinese", "Levitação",
      "Teletransporte", "Viagem no tempo", "Linha do tempo", "Paradoxo",
      "Dimensão paralela", "Buraco negro", "Supernova", "Constelação",
      "Eclipse", "Maré", "Erupção vulcânica", "Terremoto", "Tsunami",
      "Avalanche", "Furacão", "Ansiedade", "Felicidade", "Tristeza", "Raiva",
      "Medo", "Confiança", "Insegurança", "Timidez", "Extroversão", "Empatia",
      "Compaixão", "Gratidão", "Arrependimento", "Frustração", "Satisfação",
      "Motivação", "Resiliência", "Determinação", "Persistência", "Teimosia",
      "Flexibilidade", "Adaptação", "Mudança", "Transformação", "Crescimento",
      "Aprendizado", "Conhecimento", "Sabedoria", "Experiência", "Habilidade",
      "Talento", "Vocação", "Propósito", "Significado", "Valor", "Princípio",
      "Ética", "Moral", "Caráter", "Personalidade", "Identidade",
      "Individualidade", "Coletividade", "Comunidade", "Sociedade",
      "População", "Geração", "Infância", "Adolescência", "Maturidade",
      "Velhice", "Memória", "Lembrança", "Esquecimento", "Sonho", "Fantasia",
      "Realidade", "Verdade", "Mentira", "Segredo", "Confidência",
      "Privacidade", "Intimidade", "Vulnerabilidade", "Proteção", "Segurança",
      "Risco", "Perigo", "Desafio", "Obstáculo", "Dificuldade", "Facilidade",
      "Conforto", "Bem-estar", "Saúde", "Doença", "Cura", "Tratamento",
      "Prevenção", "Diagnóstico", "Sintoma", "Recuperação", "Reabilitação",
      "Terapia", "Rotina", "Hábito", "Costume", "Ritual", "Cerimônia",
      "Celebração", "Comemoração", "Homenagem", "Tributo", "Legado", "Herança",
      "Patrimônio", "Riqueza", "Pobreza", "Desigualdade", "Oportunidade",
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
      "Plutocracia", "Tecnocracia", "Anarcossindicalismo", "Pós-modernismo",
      "Desconstrutivismo", "Surrealismo", "Expressionismo abstrato",
      "Minimalismo conceitual", "Dadaísmo", "Cubismo analítico",
      "Impressionismo", "Barroco", "Renascentista", "Mecânica quântica",
      "Física de partículas", "Teoria das cordas", "Princípio da incerteza",
      "Emaranhamento quântico", "Antimatéria", "Radiação cósmica",
      "Matéria escura", "Energia escura", "Big Bang", "Nucleossíntese",
      "Fotossíntese", "Mitose", "Epigenética", "Mutação genética",
      "Seleção natural", "Especiação", "Simbiose", "Parasitismo",
      "Comensalismo", "Bioma", "Biodiversidade", "Desertificação",
      "Aquecimento global", "Pegada de carbono", "Economia circular",
      "Obsolescência programada", "Inteligência artificial generativa",
      "Algoritmo de aprendizado", "Criptomoeda descentralizada", "Blockchain",
      "Realidade aumentada", "Neurociência cognitiva", "Plasticidade cerebral",
      "Sinapse", "Fenomenologia", "Hermenêutica", "Epistemologia", "Ontologia",
      "Cosmologia", "Escatologia", "Teleologia", "Dialética", "Falibilismo",
      "Pragmatismo", "Construtivismo", "Estruturalismo", "Pós-estruturalismo",
      "Funcionalismo", "Reducionismo", "Holismo", "Determinismo biológico",
      "Livre-arbítrio", "Causalidade", "Contingência", "Necessidade lógica",
      "Tautologia", "Sofisma", "Falácia argumentativa", "Silogismo", "Indução",
      "Dedução", "Abdução", "Heurística", "Algoritmo evolutivo",
      "Otimização combinatória", "Complexidade computacional", "Criptoanálise",
      "Esteganografia", "Topologia", "Geometria não-euclidiana",
      "Cálculo diferencial", "Integral de linha", "Transformada de Fourier",
      "Termodinâmica estatística", "Mecânica estatística",
      "Eletrodinâmica quântica", "Cromodinâmica quântica", "Supersimetria",
      "Teoria de cordas", "Cosmologia inflacionária", "Radiação de fundo",
      "Nucleossíntese primordial", "Horizonte de eventos",
      "Singularidade gravitacional", "Espaço-tempo curvo",
      "Princípio antrópico", "Biologia molecular", "Proteômica",
      "Transcriptômica", "Metabolômica", "Filogenia", "Taxonomia cladística",
      "Especiação simpátrica", "Deriva genética", "Seleção sexual",
      "Coevolução", "Mutualismo obrigatório", "Endossimbiose", "Epigenoma",
      "Telômero", "Apoptose", "Homeostase", "Alostase", "Neuroplasticidade",
      "Conectoma", "Sinaptogênese", "Neurotransmissão", "Cognição distribuída",
      "Metacognição", "Teoria da mente", "Vieses heurísticos",
      "Economia comportamental", "Teoria dos jogos", "Equilíbrio de Nash",
      "Assimetria de informação", "Risco moral", "Externalidade negativa",
      "Bem público", "Tragédia dos comuns", "Capital social",
      "Path dependence", "Disrupção tecnológica", "Convergência digital",
      "Soberania de dados", "Governança algorítmica", "Viés algorítmico",
      "Explicabilidade de IA", "Singularidade tecnológica", "Transumanismo",
      "Bioética", "Biopolítica", "Necropolítica", "Geopolítica dos recursos",
      "Diplomacia coercitiva", "Equilíbrio de poder",
    ],
  },
  filmes: {
    facil: [
      "Toy Story", "Procurando Nemo", "Shrek", "Frozen", "Moana", "Coco",
      "Up: Altas Aventuras", "Wall-E", "Os Incríveis", "Carros",
      "Divertida Mente", "Zootopia", "Enrolados", "A Era do Gelo",
      "Madagascar", "Kung Fu Panda", "Rio", "Homem-Aranha", "Batman",
      "Superman", "Aquaman", "Mulher Maravilha", "Pantera Negra", "Vingadores",
      "Thor", "Hulk", "Capitão América", "Homem de Ferro", "Star Wars",
      "Harry Potter", "Senhor dos Anéis", "Jurassic Park", "ET",
      "De Volta para o Futuro", "Rei Leão", "101 Dálmatas", "Branca de Neve",
      "Cinderela", "A Bela e a Fera", "Aladdin", "Mulan", "Pocahontas",
      "Tarzan", "Hércules", "Os Goonies", "Piratas do Caribe",
      "Velozes e Furiosos", "Missão Impossível", "Mr. & Mrs. Smith",
      "Karatê Kid", "Rocky", "Titanic", "Avatar", "Gladiador", "Matrix",
      "Forrest Gump", "Jumanji", "Coraline", "Hotel Transilvânia",
      "Meu Malvado Favorito", "Free Guy", "Sonic", "Pokémon Detetive Pikachu",
      "Procurando Dory", "Vida de Inseto", "Monstros S.A.", "Wreck-It Ralph",
      "Detona Ralph", "A Fuga das Galinhas", "Como Treinar o Seu Dragão",
      "Meu Amigão Trovão", "Sing", "Minions", "Meu Malvado Favorito 2",
      "Hotel Transilvânia 2", "Os Smurfs", "Alvin e os Esquilos", "Garfield",
      "Scooby-Doo", "Tom e Jerry", "Pernalonga", "Pica-Pau", "Os Flintstones",
      "Os Jetsons", "Sherek", "Shrek 2", "A Era do Gelo 2", "A Era do Gelo 3",
      "Kung Fu Panda 2", "Madagascar 2", "Rio 2", "Vaiana", "Lilo & Stitch",
      "Peter Pan", "A Pequena Sereia", "Pinóquio", "Dumbo", "Bambi",
      "A Dama e o Vagabundo", "Lady e o Vagabundo", "Os Aristogatos",
      "Robin Hood", "A Bela Adormecida", "A Princesa e o Sapo",
      "Wreck-It Ralph 2", "Os Incríveis 2", "Toy Story 2", "Toy Story 3",
      "Toy Story 4", "Carros 2", "Carros 3", "Divertida Mente 2",
      "Homem-Aranha 2", "Homem-Aranha 3", "Batman Begins",
      "Batman: O Cavaleiro das Trevas", "Aquaman 2", "Shazam!", "Flash",
      "Liga da Justiça", "Vingadores: Ultimato", "Vingadores: Guerra Infinita",
      "Pantera Negra 2", "Doutor Estranho", "Guardiões da Galáxia",
      "Homem-Formiga", "Capitã Marvel", "Viúva Negra", "Homem de Ferro 2",
      "Homem de Ferro 3", "Star Wars: Uma Nova Esperança",
      "Star Wars: O Império Contra-Ataca", "Star Wars: O Retorno de Jedi",
      "Indiana Jones", "E.T. - O Extraterrestre", "Os Caça-Fantasmas",
      "De Volta para o Futuro 2", "Karatê Kid 2", "Rocky 2",
      "Velozes e Furiosos 2", "Missão Impossível 2", "Sonic 2", "Free Guy 2",
      "Barbie", "Divertidamente", "Up: Altas Aventuras 2",
      "A Fantástica Fábrica de Chocolate", "James e o Pêssego Gigante",
      "A Família Addams", "Hotel Transilvânia 3", "Capitão Subcueca",
      "Plankton: O Filme", "Bob Esponja: O Filme", "Turma da Mônica",
    ],
    medio: [
      "Clube da Luta", "Pulp Fiction", "Cidade de Deus", "Tropa de Elite",
      "Bacurau", "O Auto da Compadecida", "Central do Brasil", "A Origem",
      "Interestelar", "Whiplash", "La La Land", "Coringa", "Parasita",
      "Ford vs Ferrari", "O Resgate do Soldado Ryan", "A Lista de Schindler",
      "O Senhor das Moscas", "Fala Sério, Mãe!", "Diário de uma Paixão",
      "Como Eu Era Antes de Você", "Simplesmente Amor", "500 Dias com Ela",
      "Garota Interrompida", "Antes do Amanhecer",
      "Brilho Eterno de uma Mente Sem Lembranças", "Quero Matar Meu Chefe",
      "A Rede Social", "Steve Jobs", "O Lobo de Wall Street", "Wall Street",
      "Moneyball", "Marte (Perdido em)", "Gravidade", "Contato", "Arrival",
      "Blade Runner", "Mad Max: Estrada da Fúria", "Ela", "Ex Machina",
      "Black Mirror: Bandersnatch", "Dunkirk", "1917", "Bastardos Inglórios",
      "Django Livre", "Kill Bill", "Era uma Vez em Hollywood",
      "Os Sete Samurais", "O Bom, o Mau e o Feio", "Era uma Vez no Oeste",
      "Apocalypse Now", "Platoon", "Nascido para Matar", "Cisne Negro", "Mãe!",
      "Hereditário", "Corra!", "Nós", "Um Lugar Silencioso",
      "Invocação do Mal", "Atividade Paranormal", "O Iluminado", "Psicose",
      "Que Horas Ela Volta?", "Aquarius", "O Som ao Redor", "Carandiru",
      "Lula, o Filho do Brasil", "Olga", "2 Filhos de Francisco", "Os Normais",
      "De Pernas pro Ar", "Minha Mãe é uma Peça", "Vai Que Cola",
      "Loucas pra Casar", "Até que a Sorte nos Separe", "Casa Comigo",
      "Como Se Fosse a Primeira Vez", "Não Se Pode Viver Sem Amor",
      "Hoje Eu Quero Voltar Sozinho", "Cidade Baixa", "Linha de Passe",
      "Estômago", "O Palhaço", "Bicho de Sete Cabeças", "Lavoura Arcaica",
      "Abril Despedaçado", "Cazuza: O Tempo Não Para", "Elis", "Heleno",
      "Nise: O Coração da Loucura", "A Hora da Estrela", "Vidas Secas",
      "Como É Cruel Viver Assim", "A Vida Invisível",
      "Bingo: O Rei das Manhãs", "Loucas pra Viajar", "Domésticas",
      "O Concurso", "Marighella", "Pacificado", "Retratos Fantasmas",
      "Ilha das Flores", "Joker: Folie à Deux", "Duna", "Duna: Parte Dois",
      "Oppenheimer", "Top Gun: Maverick", "John Wick", "Mad Max: Fury Road",
      "A Forma da Água", "Três Anúncios para um Crime", "Moonlight",
      "Manchester à Beira-Mar", "Lady Bird", "Pequena Miss Sunshine",
      "Birdman", "Sociedade dos Poetas Mortos", "Coach Carter",
      "Quase Famosos", "Náufrago", "A Vida é Bela", "O Pianista",
      "Réquiem para um Sonho", "Beleza Americana", "O Lutador",
      "Capitão Fantástico", "A Chegada", "Pantera Negra: Wakanda para Sempre",
      "Homem-Aranha: Sem Volta para Casa", "Os Eternos", "Thor: Amor e Trovão",
      "Doutor Estranho no Multiverso da Loucura", "Closer: Perto Demais",
      "Questão de Tempo", "A Culpa é das Estrelas", "Bohemian Rhapsody",
      "Rocketman", "Era Uma Vez em... Hollywood", "Kill Bill: Volume 1",
      "Kill Bill: Volume 2", "Seven: Os Sete Crimes Capitais",
      "O Silêncio dos Inocentes", "Garota Exemplar", "Midsommar", "A Bruxa",
    ],
    dificil: [
      "O Sétimo Selo", "Persona", "Stalker", "Solaris", "O Espelho",
      "Andrei Rublev", "Sacrifício", "Nostalgia", "Ladrões de Bicicleta",
      "Roma, Cidade Aberta", "Oito e Meio", "A Doce Vida", "Amarcord",
      "O Anjo Exterminador", "Viridiana", "Belle de Jour", "Persona Non Grata",
      "Cidadão Kane", "Vertigo", "Janela Indiscreta", "Um Corpo que Cai",
      "A Marca da Maldade", "O Terceiro Homem", "Encurralado",
      "Sunset Boulevard", "Crepúsculo dos Deuses", "O Mensageiro do Diabo",
      "Faces", "Mulheres sob Influência", "Glória Feita de Sangue",
      "Holocausto Canibal", "Salò: 120 Dias de Sodoma", "Funny Games",
      "A Fita Branca", "Amor", "A Professora de Piano", "Caché", "Dogville",
      "Anticristo", "Melancolia", "Ninfomaníaca", "A Casa que Jack Construiu",
      "Eraserhead", "Cidade dos Sonhos", "Estrada Perdida",
      "Twin Peaks: Fire Walk with Me", "O Discreto Charme da Burguesia",
      "A Fera Humana", "Stalker (Tarkovski)", "Aguirre, a Cólera dos Deuses",
      "Fitzcarraldo", "O Enigma de Kaspar Hauser", "Lawrence da Arábia",
      "2001: Uma Odisseia no Espaço", "Barry Lyndon", "Eyes Wide Shut",
      "Nasce uma Estrela (1954)", "O Mágico de Oz", "Metropolis", "Nosferatu",
      "O Gabinete do Dr. Caligari", "Andrei Tarkovski: O Espelho",
      "O Encouraçado Potemkin", "A Paixão de Joana D'Arc", "Vampyr", "Ordet",
      "Gertrud", "A Regra do Jogo", "A Grande Ilusão", "Umberto D.",
      "A Aventura", "A Noite (Antonioni)", "O Eclipse", "Blow-Up",
      "Profissão: Repórter", "O Deserto Vermelho", "Acossado", "O Desprezo",
      "Pierrot le Fou", "Alphaville", "Sans Soleil", "La Jetée",
      "O Ano Passado em Marienbad", "Hiroshima Meu Amor", "Cleo das 5 às 7",
      "Sem Teto Nem Lei", "A Mulher de Ao Lado", "O Último Metrô",
      "Jules e Jim", "Os Quatrocentos Golpes", "Mouchette",
      "Au Hasard Balthazar", "Pickpocket", "A Grande Beleza",
      "Roma (Sorrentino)", "Youth - A Juventude", "Dogman", "Reality",
      "Gomorra", "Il Divo", "A Mão de Deus", "Boyhood", "Antes do Amanhecer",
      "Antes do Pôr do Sol", "Antes da Meia-Noite", "A Garota Dinamarquesa",
      "O Discurso do Rei", "A Teoria de Tudo", "Judy", "Spencer", "Jackie",
      "Vice", "Pequenas Mulheres", "Orgulho e Preconceito",
      "Razão e Sensibilidade", "Mulher-Maravilha 1984", "Watchmen",
      "V de Vingança", "Sin City", "300", "Sucker Punch",
      "Scott Pilgrim Contra o Mundo", "Chumbo Quente", "Three Billboards",
      "Hell or High Water", "Sicario", "Prisioneiros", "Incêndios",
      "Blade Runner 2049", "Coringa: Delírio a Dois",
      "Pesadelo Antes do Natal", "A Noiva Cadáver",
      "As Aventuras de Peabody e Sherman", "Os Mundos de Coraline",
      "Anomalisa", "Bom Dia, Vietnã", "Adeus, Lenin!", "A Vida dos Outros",
      "O Tambor", "Asas do Desejo", "Paris, Texas", "Wings of Desire",
      "O Estado das Coisas", "O Amigo Americano", "Woyzeck",
      "Nosferatu (Herzog)", "A Balada de Narayama", "Tampopo", "Conta Comigo",
      "Onibaba", "Kwaidan", "Harakiri", "Lanterna Vermelha",
      "Adeus, Minha Concubina", "Devils on the Doorstep",
      "Em Busca de Comida, Roupa e Amor",
    ],
  },
  objetos: {
    facil: [
      "Lápis", "Caneta", "Borracha", "Tesoura", "Régua", "Caderno", "Mochila",
      "Garrafa", "Copo", "Prato", "Garfo", "Faca", "Colher", "Panela",
      "Frigideira", "Geladeira", "Fogão", "Micro-ondas", "Liquidificador",
      "Cafeteira", "Torradeira", "Travesseiro", "Cobertor", "Lençol", "Toalha",
      "Sabão", "Shampoo", "Escova de dentes", "Pasta de dente", "Pente",
      "Espelho", "Sapato", "Tênis", "Bota", "Chinelo", "Meia", "Camisa",
      "Calça", "Vestido", "Casaco", "Boné", "Chapéu", "Óculos", "Relógio",
      "Anel", "Colar", "Brinco", "Bolsa", "Carteira", "Chave", "Cadeado",
      "Guarda-chuva", "Vela", "Lanterna", "Lâmpada", "Pilha", "Carregador",
      "Fone de ouvido", "Celular", "Computador", "Teclado", "Mouse",
      "Impressora", "Televisão", "Controle remoto", "Câmera fotográfica",
      "Violão", "Piano", "Bateria musical", "Microfone", "Bola de futebol",
      "Bicicleta", "Skate", "Patins", "Mala de viagem", "Cadeira", "Mesa",
      "Sofá", "Cama", "Armário", "Estante", "Cortina", "Tapete",
      "Vaso de planta", "Quadro", "Porta", "Janela", "Escada", "Martelo",
      "Chave de fenda", "Parafuso", "Prego", "Serra", "Furadeira", "Vassoura",
      "Pá", "Mangueira", "Balde", "Esponja", "Detergente",
      "Caneta marca-texto", "Apontador", "Clipe de papel", "Grampeador",
      "Furador de papel", "Cola", "Fita adesiva", "Pasta", "Envelope", "Selo",
      "Carimbo", "Almofada de carimbo", "Calculadora", "Agenda", "Calendário",
      "Quadro branco", "Giz", "Apagador", "Mochila escolar", "Estojo",
      "Lancheira", "Garrafinha de água", "Squeeze", "Térmica", "Capa de chuva",
      "Bota de chuva", "Luva", "Cachecol", "Manta", "Edredom", "Fronha",
      "Cabide", "Varal de roupa", "Prendedor de roupa", "Cesto de roupa suja",
      "Escova de roupa", "Sapateira", "Porta-chaves", "Porta-retrato",
      "Vela aromática", "Incenso", "Difusor de aroma", "Almofada de sofá",
      "Puff", "Banqueta", "Mesinha de centro", "Luminária de mesa", "Abajur",
      "Persiana", "Cortina blackout", "Tapete de banheiro", "Saboneteira",
      "Porta-escova de dente", "Suporte de papel higiênico", "Lixeira",
      "Cesto de lixo", "Pá de lixo", "Rodo", "Balde de água", "Mop",
      "Pano de chão", "Pano de prato", "Avental de cozinha", "Luva térmica",
      "Escorredor de louça", "Forma de bolo", "Assadeira", "Panela de pressão",
      "Wok", "Espátula", "Concha", "Batedor de ovos", "Peneira", "Ralador",
      "Descascador", "Tábua de carne", "Pegador de salada", "Saladeira",
      "Travessa", "Tigela de mistura", "Forma de gelo", "Cooler",
      "Térmica de café", "Sanduicheira", "Grill elétrico", "Air fryer",
      "Panela elétrica de arroz", "Yogurteira", "Espremedor de frutas",
      "Garrafa térmica", "Mala pequena", "Necessaire", "Porta-óculos",
      "Estojo de maquiagem", "Pincel de maquiagem", "Esmalte",
      "Removedor de esmalte", "Cortador de unha", "Lima de unha",
    ],
    medio: [
      "Liquidificador de mão", "Aspirador de pó robô",
      "Máquina de lavar roupa", "Secadora de roupas", "Ferro de passar",
      "Tábua de passar roupa", "Extintor de incêndio", "Detector de fumaça",
      "Painel solar", "Gerador de energia", "Estabilizador de tensão",
      "Filtro de água", "Purificador de ar", "Umidificador",
      "Termômetro digital", "Balança de banheiro", "Cadeira de rodas",
      "Andador", "Muleta", "Bengala", "Capacete de moto",
      "Colete à prova de balas", "Extintor", "Alicate", "Trena",
      "Nível a laser", "Compressor de ar", "Esmerilhadeira", "Solda elétrica",
      "Tablet gráfico", "Drone", "Projetor multimídia",
      "Caixa de som bluetooth", "Carregador portátil", "Roteador Wi-Fi",
      "Disco rígido externo", "Pendrive", "Cartão de memória",
      "Leitor de código de barras", "Caixa registradora", "Máquina de cartão",
      "Telescópio", "Microscópio", "Bússola", "Sextante", "Mapa náutico",
      "Binóculo", "Luneta", "Estetoscópio", "Seringa",
      "Termômetro de mercúrio", "Tensiômetro",
      "Cadeira de escritório ergonômica", "Mesa digitalizadora", "Violino",
      "Saxofone", "Trompete", "Acordeão", "Harpa", "Flauta transversal",
      "Pedal de efeito de guitarra", "Amplificador de som", "Mesa de som",
      "Caixa acústica", "Estabilizador de imagem", "Tripé de câmera",
      "Refletor de luz", "Softbox de estúdio", "Slider de câmera", "Gimbal",
      "Lente teleobjetiva", "Lente grande angular", "Cartão de memória SD",
      "Leitor de cartão", "Adaptador HDMI", "Cabo USB-C", "Hub USB",
      "Estação de carregamento", "Power bank", "Caixa de ferramentas",
      "Chave inglesa", "Chave allen", "Chave de boca", "Torquímetro",
      "Macaco hidráulico", "Calibre paquímetro", "Esquadro de marcenaria",
      "Plaina manual", "Formão", "Lixadeira orbital", "Serra tico-tico",
      "Parafusadeira", "Furadeira de impacto", "Nível de bolha",
      "Trena a laser", "Detector de metais", "Detector de tubulação",
      "Capacete de segurança", "Óculos de proteção", "Protetor auricular",
      "Máscara respiratória", "Colete refletivo", "Cone de sinalização",
      "Triângulo de segurança", "Macaco de carro", "Estepe",
      "Calibrador de pneu", "Funil", "Lata de combustível", "Cabo de bateria",
      "Chave de roda", "Кit de primeiros socorros", "Maca dobrável",
      "Cadeira de praia", "Guarda-sol", "Isopor de praia", "Boia",
      "Colete salva-vidas", "Snorkel", "Nadadeiras de mergulho",
      "Prancha de surf", "Skate elétrico", "Patinete", "Carrinho de bebê",
      "Cadeirinha infantil", "Berço portátil", "Andador de bebê",
      "Babá eletrônica", "Termômetro infantil", "Aspirador nasal", "Mamadeira",
      "Chupeta", "Fralda descartável", "Trocador portátil",
      "Carrinho de supermercado", "Cesta de compras", "Etiquetadora de preço",
      "Balança de cozinha", "Balança digital", "Alarme de incêndio",
      "Extintor portátil", "Cofre digital", "Fechadura biométrica",
      "Câmera de segurança", "Campainha com vídeo", "Sensor de presença",
      "Controle de portão", "Antena de TV", "Conversor digital",
      "Roteador mesh", "Repetidor de sinal", "Modem 4G",
      "Estabilizador de energia", "No-break", "Régua de tomadas",
      "Filtro de linha", "Adaptador de tomada", "Carregador veicular",
      "Suporte de celular", "Capa protetora", "Película de tela",
    ],
    dificil: [
      "Centrífuga de laboratório", "Espectrômetro de massa",
      "Microscópio eletrônico", "Acelerador de partículas",
      "Ressonância magnética", "Tomógrafo", "Eletrocardiógrafo",
      "Desfibrilador", "Respirador artificial", "Bisturi elétrico",
      "Endoscópio", "Autoclave", "Estação meteorológica", "Anemômetro",
      "Sismógrafo", "Barômetro de mercúrio", "Giroscópio", "Acelerômetro",
      "Osciloscópio", "Multímetro digital", "Gerador de Van de Graaff",
      "Transformador elétrico", "Painel de controle industrial",
      "Robô articulado industrial", "Impressora 3D",
      "Scanner de corpo inteiro", "Leitor biométrico",
      "Sensor de movimento infravermelho", "Câmera térmica",
      "Drone de mapeamento topográfico", "Sonar de profundidade",
      "Radar meteorológico", "Antena parabólica", "Satélite de comunicação",
      "Painel fotovoltaico bifacial", "Turbina eólica",
      "Reator nuclear em miniatura", "Centrífuga de enriquecimento",
      "Cápsula de reentrada espacial", "Traje espacial pressurizado",
      "Telescópio espacial", "Submarino de pesquisa", "Batiscafo",
      "Quebra-gelo (navio)", "Guindaste de contêineres",
      "Empilhadeira hidráulica", "Prensa hidráulica industrial",
      "Torno mecânico de precisão", "Fresadora CNC", "Espectrofotômetro",
      "Cromatógrafo gasoso", "Cromatógrafo líquido", "Difratômetro de raios-X",
      "Microtomo", "Câmara de fluxo laminar", "Incubadora de CO2",
      "Banho-maria de laboratório", "Agitador magnético", "Bomba de vácuo",
      "Manômetro de precisão", "Termopar industrial",
      "Controlador lógico programável", "Sensor piezoelétrico",
      "Encoder rotativo", "Servomotor industrial", "Atuador pneumático",
      "Válvula solenoide", "Compressor de pistão",
      "Trocador de calor industrial", "Caldeira a vapor", "Turbina a gás",
      "Gerador diesel industrial", "Painel fotovoltaico monocristalino",
      "Inversor de frequência", "Transformador trifásico",
      "Disjuntor industrial", "Quadro de distribuição elétrica",
      "Subestação elétrica", "Para-raios industrial", "Cabo de fibra óptica",
      "Conversor óptico-elétrico", "Amplificador óptico",
      "Comutador de rede industrial", "Servidor blade", "Storage em rede",
      "Unidade de fita backup", "Leitor biométrico facial", "Scanner de íris",
      "Drone de inspeção industrial", "Robô de solda automatizado",
      "Braço robótico colaborativo", "Esteira transportadora industrial",
      "Empilhadeira elétrica", "Pórtico rolante", "Talha elétrica",
      "Plataforma elevatória", "Andaime tubular", "Betoneira industrial",
      "Vibrador de concreto", "Compactador de solo", "Perfuratriz hidráulica",
      "Britadeira pneumática", "Escavadeira hidráulica", "Retroescavadeira",
      "Trator de esteira", "Colheitadeira agrícola", "Pulverizador agrícola",
      "Plantadeira de precisão", "Sistema de irrigação por gotejamento",
      "Estação meteorológica agrícola", "Drone de pulverização agrícola",
      "Sensor de umidade do solo", "Medidor de pH de solo",
      "Centrífuga de mel", "Pasteurizador industrial",
      "Homogeneizador de leite", "Envasadora automática",
      "Rotuladora industrial", "Seladora a vácuo industrial",
      "Câmara fria industrial", "Esterilizador a vapor", "Liofilizador",
      "Espectrômetro de infravermelho", "Polarímetro",
      "Refratômetro de laboratório", "Densímetro de precisão", "Viscosímetro",
      "Calorímetro", "Bomba calorimétrica",
      "Espectrômetro de ressonância magnética nuclear", "Citômetro de fluxo",
      "Sequenciador de DNA", "Termociclador de PCR", "Eletroforese em gel",
      "Sonicador de laboratório", "Liofilizador de amostras biológicas",
      "Microinjetor celular", "Pipeta automática", "Dispensador de líquidos",
      "Leitor de microplacas",
    ],
  },
  acoes: {
    facil: [
      "Dormir", "Comer", "Beber", "Correr", "Andar", "Saltar", "Nadar", "Voar",
      "Dançar", "Cantar", "Rir", "Chorar", "Gritar", "Cochichar", "Cozinhar",
      "Lavar", "Limpar", "Estudar", "Ler", "Escrever", "Desenhar", "Pintar",
      "Jogar bola", "Pescar", "Caçar", "Plantar", "Colher", "Dirigir",
      "Pedalar", "Escalar", "Mergulhar", "Surfar", "Pular corda",
      "Brincar de pega-pega", "Esconder", "Procurar", "Construir", "Quebrar",
      "Consertar", "Pendurar roupa", "Passar roupa", "Varrer", "Aspirar",
      "Escovar os dentes", "Pentear o cabelo", "Tomar banho", "Vestir-se",
      "Calçar sapato", "Dirigir carro", "Tirar foto", "Filmar", "Assistir TV",
      "Ouvir música", "Tocar instrumento", "Acenar", "Abraçar", "Beijar",
      "Apertar a mão", "Bater palma", "Assoviar", "Espirrar", "Bocejar",
      "Tropeçar", "Cair", "Levantar", "Sentar", "Deitar", "Acordar",
      "Espreguiçar", "Apontar", "Engatinhar", "Rastejar", "Equilibrar",
      "Rodopiar", "Girar", "Rolar", "Empurrar", "Puxar", "Carregar",
      "Arrastar", "Levantar peso", "Agachar", "Esticar", "Dobrar", "Amassar",
      "Rasgar", "Costurar", "Bordar", "Tricotar", "Tecer", "Moldar argila",
      "Esculpir", "Martelar", "Serrar", "Pregar", "Pintar parede", "Encanar",
      "Trocar lâmpada", "Trocar pneu", "Estacionar", "Acelerar", "Frear",
      "Buzinar", "Sinalizar", "Atravessar a rua", "Esperar o ônibus",
      "Fazer fila", "Pagar a conta", "Trocar dinheiro", "Contar moedas",
      "Embrulhar presente", "Decorar a casa", "Arrumar a cama", "Passar pano",
      "Regar plantas", "Podar árvore", "Cortar grama", "Alimentar animal",
      "Passear com cachorro", "Dar banho no pet", "Pescar com vara", "Acampar",
      "Montar barraca", "Fazer fogueira", "Assar marshmallow", "Voar pipa",
      "Jogar bola de gude", "Brincar de amarelinha", "Pular elástico",
      "Andar de gangorra", "Balançar no balanço", "Escorregar",
      "Subir no escorregador", "Construir castelo de areia",
      "Fazer bolha de sabão", "Soprar vela", "Cantar parabéns", "Bater bolo",
      "Decorar bolo", "Servir comida", "Lavar louça", "Secar louça",
      "Guardar louça", "Fazer compras", "Empacotar", "Carregar sacola",
      "Estacionar a bicicleta", "Trocar de roupa", "Amarrar cadarço",
      "Fazer trança", "Barbear-se", "Maquiar-se", "Cortar cabelo",
      "Tirar selfie", "Posar para foto", "Acenar para câmera", "Aplaudir",
      "Vaiar", "Torcer", "Comemorar gol",
    ],
    medio: [
      "Negociar um acordo", "Apresentar um projeto", "Discutir com alguém",
      "Fazer um discurso", "Pedir desculpas", "Demitir alguém",
      "Pedir aumento", "Fazer uma entrevista de emprego", "Dirigir embriagado",
      "Tomar uma decisão difícil", "Mentir descaradamente",
      "Trair a confiança de alguém", "Resgatar alguém", "Fugir da polícia",
      "Roubar um banco", "Sequestrar alguém", "Negociar resgate",
      "Investigar um crime", "Defender alguém no tribunal",
      "Operar um paciente", "Dar à luz", "Pedir alguém em casamento",
      "Terminar um relacionamento", "Reconciliar-se", "Hipnotizar alguém",
      "Meditar profundamente", "Fazer um exorcismo", "Invocar um espírito",
      "Prever o futuro", "Viajar no tempo", "Construir um foguete",
      "Pilotar um avião", "Comandar um navio", "Liderar um exército",
      "Negociar um tratado de paz", "Declarar guerra", "Assinar um contrato",
      "Falir um negócio", "Lançar um produto", "Fazer uma fusão empresarial",
      "Sabotar um projeto", "Espionar alguém", "Decifrar um código secreto",
      "Hackear um sistema", "Clonar um animal", "Transplantar um órgão",
      "Ressuscitar alguém", "Hipnotizar uma platéia", "Organizar uma surpresa",
      "Planejar uma viagem", "Fazer as malas às pressas", "Perder o voo",
      "Pegar um táxi com pressa", "Negociar o preço de algo",
      "Pechinchar numa feira", "Devolver um produto", "Trocar um presente",
      "Reclamar de um serviço", "Elogiar um chef", "Avaliar um restaurante",
      "Fazer uma reserva", "Cancelar um compromisso", "Remarcar uma consulta",
      "Esperar resultado de exame", "Receber uma má notícia",
      "Comemorar uma conquista", "Comemorar um aniversário",
      "Surpreender alguém", "Pregar uma peça", "Contar uma piada",
      "Fazer alguém rir", "Consolar um amigo triste",
      "Confortar uma criança assustada", "Acalmar um bebê chorando",
      "Ensinar a andar de bicicleta", "Ensinar a nadar",
      "Treinar para uma maratona", "Participar de uma competição",
      "Vencer uma corrida", "Perder um jogo", "Empatar uma partida",
      "Comemorar um empate", "Arbitrar uma partida", "Marcar um pênalti",
      "Cobrar uma falta", "Defender um pênalti", "Fazer um gol de bicicleta",
      "Quebrar um recorde", "Bater um recorde pessoal",
      "Treinar todos os dias", "Desistir de algo", "Recomeçar do zero",
      "Mudar de carreira", "Pedir demissão", "Assinar um contrato de trabalho",
      "Negociar salário", "Fazer hora extra", "Tirar férias",
      "Voltar de férias", "Se mudar de cidade", "Procurar um apartamento",
      "Visitar um imóvel", "Assinar aluguel", "Montar um móvel novo",
      "Decorar um quarto novo", "Fazer uma reforma", "Pintar a casa",
      "Trocar o piso", "Consertar um vazamento", "Chamar um técnico",
      "Esperar a manutenção", "Reclamar de barulho",
      "Pedir silêncio ao vizinho", "Organizar uma festa surpresa",
      "Cancelar uma festa por chuva", "Remarcar um casamento",
      "Planejar uma lua de mel", "Comemorar bodas de prata", "Visitar os avós",
      "Cuidar de um idoso", "Levar ao médico", "Acompanhar uma cirurgia",
      "Doar sangue", "Fazer um exame de rotina", "Tomar uma vacina",
      "Sentir medo de agulha", "Enfrentar uma fobia", "Superar um trauma",
      "Buscar ajuda profissional", "Fazer terapia", "Meditar diariamente",
      "Praticar gratidão", "Manter um diário", "Refletir sobre o dia",
      "Tomar uma decisão importante", "Pedir conselho", "Dar um conselho",
      "Mediar um conflito", "Pedir perdão sinceramente",
      "Aceitar um pedido de desculpas",
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
      "Sintetizar um novo elemento químico", "Decodificar o genoma humano",
      "Provar um teorema matemático", "Treinar uma inteligência artificial",
      "Programar um algoritmo de aprendizado de máquina",
      "Negociar direitos de propriedade intelectual",
      "Arbitrar uma disputa diplomática",
      "Restaurar uma obra de arte renascentista",
      "Autenticar uma falsificação", "Interpretar um sonho segundo Jung",
      "Conduzir um ritual xamânico",
      "Traduzir simultaneamente em uma cúpula da ONU",
      "Mediar uma negociação sindical",
      "Auditar as finanças de uma corporação",
      "Recuperar dados de um disco rígido corrompido",
      "Criptografar uma mensagem com chave assimétrica",
      "Realizar uma autópsia forense",
      "Catalogar fósseis de uma escavação arqueológica",
      "Renegociar uma dívida soberana", "Conduzir uma due diligence",
      "Estruturar uma operação de IPO", "Realizar uma fusão hostil",
      "Defender-se de uma fusão hostil",
      "Reestruturar uma empresa em recuperação judicial",
      "Auditar demonstrações financeiras",
      "Calcular o valuation de uma startup",
      "Negociar uma rodada de investimento",
      "Apresentar um pitch para investidores",
      "Redigir um termo de confidencialidade",
      "Litigar um processo trabalhista", "Defender um réu em júri popular",
      "Redigir uma sentença judicial",
      "Interpretar uma cláusula contratual ambígua",
      "Arbitrar uma disputa internacional", "Negociar um acordo de extradição",
      "Conduzir uma investigação criminal", "Reconstituir uma cena de crime",
      "Coletar provas periciais", "Realizar uma perícia grafotécnica",
      "Analisar um exame de balística", "Decifrar um manuscrito antigo",
      "Restaurar um afresco histórico", "Datar um artefato por carbono-14",
      "Escavar um sítio arqueológico", "Catalogar um acervo museológico",
      "Curar uma exposição de arte", "Autenticar uma obra de arte",
      "Avaliar uma falsificação artística", "Negociar direitos autorais",
      "Registrar uma patente industrial", "Defender uma tese de doutorado",
      "Revisar um artigo por pares", "Conduzir um experimento controlado",
      "Replicar um estudo científico", "Formular uma hipótese testável",
      "Desenhar um ensaio clínico randomizado", "Conduzir uma metanálise",
      "Calcular significância estatística",
      "Modelar uma epidemia matematicamente",
      "Rastrear uma cadeia de transmissão", "Desenvolver uma vacina",
      "Conduzir testes de fase três", "Obter aprovação regulatória",
      "Negociar acesso a medicamentos", "Mediar uma crise humanitária",
      "Coordenar uma operação de resgate", "Negociar a libertação de reféns",
      "Desarmar um artefato explosivo", "Pilotar uma missão espacial",
      "Calcular uma trajetória orbital", "Realizar uma caminhada espacial",
      "Acoplar uma nave à estação espacial", "Reentrar na atmosfera terrestre",
      "Treinar um algoritmo de visão computacional",
      "Anotar um conjunto de dados", "Validar um modelo de machine learning",
      "Detectar viés em um algoritmo", "Auditar a segurança de um sistema",
      "Realizar um teste de penetração",
      "Responder a um incidente cibernético",
      "Recuperar-se de um ataque ransomware",
      "Negociar com sequestradores de dados",
      "Criptografar uma comunicação sensível", "Quebrar uma cifra histórica",
      "Traduzir um texto morto", "Decodificar uma inscrição hieroglífica",
      "Reconstruir uma língua extinta", "Mediar um conflito territorial",
      "Redesenhar fronteiras geopolíticas", "Negociar um tratado climático",
      "Calcular uma pegada de carbono corporativa",
      "Certificar um produto como sustentável",
      "Auditar uma cadeia de suprimentos", "Rastrear a origem de um produto",
      "Combater trabalho análogo à escravidão",
      "Investigar uma rede de tráfico",
      "Desmantelar uma organização criminosa",
      "Infiltrar-se em uma investigação undercover",
      "Negociar imunidade processual", "Redigir uma delação premiada",
    ],
  },
};

// ---------------------------------------------------------------------------
// METADADOS
// ---------------------------------------------------------------------------

const CATEGORY_META = {
  palavras: { label: "Palavras", icon: "Aa" },
  objetos: { label: "Objetos", icon: "📦" },
  acoes: { label: "Ações", icon: "✨" },
  filmes: { label: "Filmes", icon: "🎬" },
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
  const [mode, setMode] = useState("equipes"); // "equipes" | "individual"
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
      h("img", { className: "title-logo", src: "./logo.png", alt: "INSIGHT" }),
      h("p", { className: "subtitle" }, "Desenhe. Adivinhe. Marque pontos.")
    ),
    h(
      "div",
      { className: "setup-section" },
      h("h2", { className: "section-label" }, "Modo de jogo"),
      h(
        "div",
        { className: "duration-toggle" },
        h(
          "button",
          {
            className: `duration-btn ${mode === "equipes" ? "duration-active" : ""}`,
            onClick: () => setMode("equipes"),
          },
          "⚔ Equipes"
        ),
        h(
          "button",
          {
            className: `duration-btn ${mode === "individual" ? "duration-active" : ""}`,
            onClick: () => setMode("individual"),
          },
          "★ Individual"
        )
      )
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
        { className: "chip-grid diff-grid" },
        Object.entries(DIFFICULTY_META).map(([key, meta]) =>
          h(
            "button",
            {
              key,
              className: `chip diff-chip ${difficulties[key] ? "chip-active" : ""}`,
              "data-diff": key,
              style: difficulties[key] ? { borderColor: meta.color } : undefined,
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
        onClick: () => onStart({ selectedCategories, selectedDifficulties, duration, mode }),
      },
      "Começar a jogar"
    ),
    !canStart &&
      h("p", { className: "hint-text" }, "Selecione ao menos uma categoria e uma dificuldade.")
  );
}

// ---------------------------------------------------------------------------
// PLAYERS SCREEN (modo individual)
// ---------------------------------------------------------------------------

function PlayersScreen({ config, onStart, onBack }) {
  const [players, setPlayers] = useState(["", "", ""]);
  const [inputting, setInputting] = useState(null);

  const updatePlayer = (i, val) => {
    const next = [...players];
    next[i] = val;
    setPlayers(next);
  };

  const addPlayer = () => {
    if (players.length < 8) setPlayers([...players, ""]);
  };

  const removePlayer = (i) => {
    if (players.length > 2) setPlayers(players.filter((_, idx) => idx !== i));
  };

  const validPlayers = players.map((p) => p.trim()).filter(Boolean);
  const canStart = validPlayers.length >= 2;

  return h(
    "div",
    { className: "screen setup-screen" },
    h(
      "div",
      { className: "setup-header" },
      h("img", { className: "title-logo", src: "./logo.png", alt: "INSIGHT" }),
      h("p", { className: "subtitle" }, "Modo Individual")
    ),
    h(
      "div",
      { className: "setup-section" },
      h("h2", { className: "section-label" }, "Jogadores (2–8)"),
      players.map((name, i) =>
        h(
          "div",
          { key: i, className: "player-row" },
          h("input", {
            className: "player-input",
            type: "text",
            placeholder: `Jogador ${i + 1}`,
            value: name,
            maxLength: 14,
            onInput: (e) => updatePlayer(i, e.target.value),
          }),
          players.length > 2 &&
            h(
              "button",
              { className: "player-remove-btn", onClick: () => removePlayer(i) },
              "✕"
            )
        )
      ),
      players.length < 8 &&
        h(
          "button",
          { className: "add-player-btn", onClick: addPlayer },
          "+ Adicionar jogador"
        )
    ),
    h(
      "button",
      {
        className: "primary-btn",
        disabled: !canStart,
        onClick: () => onStart({ ...config, players: validPlayers }),
      },
      "Iniciar"
    ),
    !canStart && h("p", { className: "hint-text" }, "Preencha ao menos 2 jogadores."),
    h("button", { className: "ghost-btn", onClick: onBack }, "← Voltar")
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
  const isIndividual = config.mode === "individual";
  const players = config.players || [];

  // Estado equipes
  const [teamScores, setTeamScores] = useState({ a: 0, b: 0 });
  const [activeTeam, setActiveTeam] = useState("a");

  // Estado individual
  const [playerScores, setPlayerScores] = useState(() =>
    Object.fromEntries(players.map((p) => [p, 0]))
  );
  const [drawerIndex, setDrawerIndex] = useState(0);
  const [showWhoGuessed, setShowWhoGuessed] = useState(false); // tela de seleção de quem acertou

  const intervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Toca um beep sintético via Web Audio API (funciona offline, sem arquivo externo)
  const playBeep = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      // Três bipes curtos descendentes
      [0, 0.18, 0.36].forEach((delay, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880 - i * 220;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.4, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.15);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.15);
      });
    } catch (e) {
      // Web Audio não disponível, ignora silenciosamente
    }
  }, []);

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

  // Dispara o beep quando o tempo esgota
  useEffect(() => {
    if (finished) playBeep();
  }, [finished]);

  const resetRound = useCallback(() => {
    clearTimer();
    setRunning(false);
    setFinished(false);
    setTimeLeft(config.duration);
  }, [clearTimer, config.duration]);

  const nextCard = useCallback(
    (didScore, guesser) => {
      setCurrent(drawNext());
      if (isIndividual) {
        if (didScore === "acerto" && guesser != null) {
          const drawer = players[drawerIndex];
          setPlayerScores((s) => {
            const next = { ...s };
            next[drawer] = (next[drawer] || 0) + 1;
            if (guesser !== drawer) next[guesser] = (next[guesser] || 0) + 1;
            return next;
          });
        }
        setDrawerIndex((i) => (i + 1) % players.length);
        setShowWhoGuessed(false);
      } else {
        if (didScore === "acerto") {
          setRoundResult((s) => ({ ...s, acertos: s.acertos + 1 }));
          setTeamScores((s) => ({ ...s, [activeTeam]: s[activeTeam] + 1 }));
        } else if (didScore === "pulo") {
          setRoundResult((s) => ({ ...s, pulos: s.pulos + 1 }));
        }
        setActiveTeam((t) => (t === "a" ? "b" : "a"));
      }
      resetRound();
    },
    [resetRound, activeTeam, isIndividual, players, drawerIndex]
  );

  const handleAcertou = () => {
    if (isIndividual) {
      clearTimer();
      setRunning(false);
      setShowWhoGuessed(true);
    } else {
      nextCard("acerto");
    }
  };

  const skipCard = () => {
    setCurrent(drawNext());
  };

  const pct = (timeLeft / config.duration) * 100;
  const diffMeta = DIFFICULTY_META[current.difficulty];
  const catMeta = CATEGORY_META[current.category];
  const drawerName = isIndividual ? players[drawerIndex] : null;

  // Tela de "quem acertou?" no modo individual
  if (showWhoGuessed) {
    return h(
      "div",
      { className: "screen game-screen" },
      h(
        "div",
        { className: "who-guessed-wrap" },
        h("p", { className: "who-guessed-title" }, `"${current.word}"`),
        h("p", { className: "who-guessed-sub" }, "Quem acertou?"),
        h(
          "div",
          { className: "who-guessed-grid" },
          players
            .filter((p) => p !== drawerName)
            .map((p) =>
              h(
                "button",
                { key: p, className: "who-guessed-btn", onClick: () => nextCard("acerto", p) },
                p
              )
            )
        ),
          h(
          "button",
          { className: "result-btn result-pulo", style: { width: "100%", marginTop: 8 }, onClick: () => nextCard("pulo") },
          "Ninguém acertou"
        )
      )
    );
  }

  return h(
    "div",
    { className: "screen game-screen" },
    h(
      "div",
      { className: "game-topbar" },
      h("button", { className: "icon-btn", onClick: onExit, "aria-label": "Voltar" }, "←"),
      isIndividual
        ? h(
            "div",
            { className: "individual-scoreboard" },
            players.map((p, i) =>
              h(
                "div",
                { key: p, className: `ind-pill ${i === drawerIndex ? "ind-pill-active" : ""}` },
                h("span", { className: "ind-name" }, p),
                h("span", { className: "ind-score" }, playerScores[p] || 0)
              )
            )
          )
        : h(
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
        h("p", { className: `card-word ${!running && !finished ? "card-word-hidden" : ""}` },
          !running && !finished ? "?" : current.word
        )
      )
    ),
    finished &&
      h("p", { className: "time-up-banner" }, "Tempo esgotado — registre o resultado"),
    isIndividual && !finished && !showWhoGuessed &&
      h("p", { className: "drawer-banner" }, `✏️ ${drawerName} está desenhando`),
    h(
      "div",
      { className: "game-controls" },
      !running && !finished &&
        h("button", { className: "primary-btn", onClick: startTimer }, "Iniciar rodada"),
      running &&
        h(
          "div",
          { className: "result-row" },
          h("button", { className: "secondary-btn", onClick: skipCard }, "Pular carta"),
          h(
            "button",
            { className: "result-btn result-acerto", onClick: handleAcertou },
            "Acertou!"
          )
        ),
      finished &&
        h(
          "div",
          { className: "result-row" },
          h(
            "button",
            { className: "result-btn result-pulo", onClick: () => nextCard("pulo") },
            "Não acertou"
          ),
          h(
            "button",
            { className: "result-btn result-acerto", onClick: handleAcertou },
            "Acertou!"
          )
        ),
      !running && !finished && roundResult.acertos + roundResult.pulos > 0 &&
        h("button", { className: "ghost-btn", onClick: skipCard }, "Trocar carta")
    )
  );
}

// ---------------------------------------------------------------------------
// APP ROOT
// ---------------------------------------------------------------------------

function InsightApp() {
  const [screen, setScreen] = useState("setup"); // "setup" | "players" | "game"
  const [config, setConfig] = useState(null);

  const handleSetupStart = (cfg) => {
    setConfig(cfg);
    if (cfg.mode === "individual") {
      setScreen("players");
    } else {
      setScreen("game");
    }
  };

  const handlePlayersStart = (cfg) => {
    setConfig(cfg);
    setScreen("game");
  };

  const handleExit = () => {
    setConfig(null);
    setScreen("setup");
  };

  return h(
    "div",
    { className: "app-root" },
    screen === "setup" && h(SetupScreen, { onStart: handleSetupStart }),
    screen === "players" && h(PlayersScreen, {
      config,
      onStart: handlePlayersStart,
      onBack: () => setScreen("setup"),
    }),
    screen === "game" && h(GameScreen, { config, onExit: handleExit })
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
