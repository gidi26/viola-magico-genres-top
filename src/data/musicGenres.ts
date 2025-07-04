export interface SubGenre {
  id: string;
  name: string;
  style: string;
  mood: string;
  bpm: string;
  instrumentos: string[];
  estrutura: string;
  arranjo: string;
  producao: string;
  dinamica: string;
  emocoes: string;
  tecnica: string;
  negativo: string;
  audioUrl?: string;
}

export interface Genre {
  id: string;
  name: string;
  subgenres: SubGenre[];
}

export const musicGenres: Genre[] = [
  {
    id: 'sertanejo',
    name: 'Sertanejo',
    subgenres: [
      {
        id: 'raiz',
        name: 'Sertanejo Raiz',
        style: "Autêntico, Rural, Tradicional, Raiz Caipira",
        mood: "Saudade profunda, Nostalgia do campo, Simplicidade, Melancolia rural",
        bpm: "65–85 BPM",
        instrumentos: ["Viola Caipira", "Violão 6 Cordas", "Acordeon/Sanfona", "Zabumba", "Triângulo", "Palmas", "Assovio", "Gaita de Boca"],
        estrutura: "Introdução instrumental, Primeira Parte (16 compassos), Refrão marcante, Solo de Viola expressivo, Segunda Parte, Finalização com fade ou repetição",
        arranjo: "Dupla vocal em terças e quintas, viola caipira como protagonista melódica, acordeon nos contrapontos, percussão regional marcante, resposta instrumental entre estrofes",
        producao: "Gravação orgânica com room tone, reverb natural de ambiente, compressão mínima para preservar dinâmicas naturais, espacialização panorâmica sutil",
        dinamica: "Começar intimista, crescer no refrão, solo de viola expressivo com rubato, finalização em decrescendo natural",
        emocoes: "Saudade do interior, amor pela terra natal, lida do homem do campo, simplicidade genuína, melancolia caipira",
        tecnica: "Microfonação próxima da viola caipira, captação ambiente para percussão, doubles vocais sutis, automação de reverb por seção",
        negativo: "Evitar beats eletrônicos, autotune, sintetizadores modernos, compressão excessiva, efeitos digitais"
      },
      {
        id: 'universitario',
        name: 'Sertanejo Universitário',
        style: "Moderno, Pop-Country, Jovem, Comercial, Festivo",
        mood: "Alegria contagiante, Paixão jovem, Festa, Descontração, Empolgação",
        bpm: "105–130 BPM",
        instrumentos: ["Violão 6 Cordas", "Baixo Elétrico", "Bateria Acústica", "Guitarra (clean/drive)", "Teclado/Synth Pads", "Coro Feminino", "Palmas", "Percussão Pop"],
        estrutura: "Intro marcante (8 compassos), Primeira Parte, Pré-refrão (lift), Refrão explosivo, Segunda Parte, Ponte instrumental, Refrão final com modulação",
        arranjo: "Dupla vocal em uníssono no refrão, violão base como fundação rítmica, baixo e bateria groove moderno, guitarra com delays e chorus, backing vocals femininos no refrão",
        producao: "Mix polida e brilhante, compressão paralela, reverb espacial, sidechain sutil no baixo, camadas vocais bem definidas, master loud e impactante",
        dinamica: "Build-up progressivo para o refrão, drop no pré-refrão, ponte mais intimista, explosão final com dobras vocais",
        emocoes: "Festa universitária, paixão jovem, diversão sem compromisso, energia positiva, celebração da vida",
        tecnica: "Harmonia vocal aberta, compression pumping sutil, reverb de placa, delay pingpong na guitarra, automation de filtros",
        negativo: "Evitar sonoridade muito eletrônica, vocal excessivamente processado, mix muito comprimida, falta de groove humano"
      },
      {
        id: 'romantico',
        name: 'Sertanejo Romântico',
        style: "Emotivo, Balada, Íntimo, Sensível, Sofrência",
        mood: "Paixão intensa, Sofrimento amoroso, Saudade romântica, Vulnerabilidade, Desejo",
        bpm: "70–95 BPM",
        instrumentos: ["Violão 6 Cordas", "Violão 12 Cordas", "Piano Acústico", "Baixo Elétrico", "Acordeon/Sanfona", "Gaita de Boca", "Voz Segunda", "Strings"],
        estrutura: "Intro delicada, Primeira Parte intimista, Pré-refrão emotivo, Refrão apaixonado, Segunda Parte, Solo instrumental (gaita/acordeon), Refrão final crescente",
        arranjo: "Voz principal como protagonista absoluta, violões em camadas (fingerpicking), piano ou acordeon nos contrapontos melódicos, gaita de boca em solos expressivos, segunda voz em momentos estratégicos",
        producao: "Mix quente e envolvente, reverb longo e musical, compressão suave para intimidade, delay sutil na voz, espacialização romântica",
        dinamica: "Começar sussurrado, crescer gradualmente, explosão emocional no refrão, solo instrumental como desabafo, finalização em clímax ou fade melancólico",
        emocoes: "Dor de amor, paixão avassaladora, saudade que machuca, vulnerabilidade masculina, romantismo intenso",
        tecnica: "Automação dinâmica na voz principal, delays musicais, reverb Hall longo, compression gentil, doubles vocais em momentos específicos",
        negativo: "Evitar produção fria, excesso de efeitos digitais, vocal muito processado, instrumentação pesada demais"
      },
      {
        id: 'feminejo',
        name: 'Feminejo',
        style: "Empoderado, Feminino, Moderno, Attitude, Independente",
        mood: "Empoderamento feminino, Independência, Força, Autoestima, Superação",
        bpm: "110–135 BPM",
        instrumentos: ["Violão 6 Cordas", "Baixo Elétrico", "Bateria Acústica", "Guitarra", "Teclado/Synth Pads", "Backing Vocals", "Percussão Pop"],
        estrutura: "Intro impactante, Verso assertivo, Pré-refrão de tensão, Refrão poderoso, Verso 2, Ponte empoderada, Refrão final com força máxima",
        arranjo: "Voz feminina protagonista, arranjo que sustenta sem competir, baixo e bateria groove sólido, guitarras com personalidade, backing vocals estratégicos",
        producao: "Mix moderna e definida, voz sempre em destaque, compressão controlada, espacialização contemporânea, master competitivo",
        dinamica: "Energia crescente, momentos de tensão e alívio, clímax no refrão, demonstração de força vocal",
        emocoes: "Força feminina, independência, superação, autoestima, determinação, empoderamento",
        tecnica: "Processamento vocal moderno mas natural, automation precisa, reverb contemporâneo, compression musical",
        negativo: "Evitar instrumentação que ofusque a voz, produção machista, sonoridade datada, excesso de efeitos"
      },
      {
        id: 'pisadinha',
        name: 'Sertanejo Pisadinha',
        style: "Dançante, Contagiante, Nordestino, Moderno, Festivo",
        mood: "Festa, Dança, Alegria, Diversão, Animação",
        bpm: "125–145 BPM",
        instrumentos: ["Acordeon/Sanfona", "Violão 6 Cordas", "Baixo Elétrico", "Bateria Eletrônica", "Percussão Nordestina", "Backing Vocals", "Sintetizadores"],
        estrutura: "Intro dançante, Verso groove, Pré-refrão acelerando, Refrão explosivo para dança, Verso 2, Solo de acordeon, Refrão final repetitivo",
        arranjo: "Acordeon como lead melódico, base rítmica pesada e dançante, vocal direto e claro, percussão marcada, elementos eletrônicos dosados",
        producao: "Mix punch e dançante, compressão para energia, reverb controlado, master loud para pista de dança, baixo presente",
        dinamica: "Energia constante alta, variações rítmicas, drops para dança, solos que mantêm a energia",
        emocoes: "Festa nordestina, alegria contagiante, dança, diversão coletiva, celebração",
        tecnica: "Sidechain rítmico, compression pumping, reverb de ambiente, processing de acordeon destacado",
        negativo: "Evitar lentidão, melancolia, produção muito limpa, falta de groove, sonoridade fria"
      },
      {
        id: 'gospel-sertanejo',
        name: 'Sertanejo Gospel',
        style: "Espiritual, Inspirador, Religioso, Esperançoso, Testemunhal",
        mood: "Fé, Esperança, Gratidão, Espiritualidade, Testemunho, Louvor",
        bpm: "80–110 BPM",
        instrumentos: ["Violão 6 Cordas", "Piano Acústico", "Baixo Elétrico", "Bateria Acústica", "Acordeon/Sanfona", "Coro", "Strings"],
        estrutura: "Intro contemplativa, Verso testemunhal, Pré-refrão de preparação, Refrão de louvor, Verso 2, Ponte de oração, Refrão final glorificado",
        arranjo: "Voz como pregação musical, instrumentação que sustenta a mensagem, momentos instrumentais contemplativos, coro nos refrões",
        producao: "Mix calorosa e envolvente, reverb natural, compressão gentil, espacialização espiritual, clareza na palavra cantada",
        dinamica: "Começar intimista, crescer em adoração, momentos de reflexão, clímax de louvor",
        emocoes: "Fé genuína, esperança renovada, gratidão profunda, espiritualidade, testemunho de vida",
        tecnica: "Vocal clarity máximo, reverb Hall natural, automation espiritual, instrumental supporting",
        negativo: "Evitar secularização excessiva, produção mundana, instrumentação pesada, falta de reverência"
      }
    ]
  },
  {
    id: 'pop',
    name: 'Pop',
    subgenres: [
      {
        id: 'pop-mainstream',
        name: 'Pop Mainstream',
        style: "Comercial, Acessível, Polido",
        mood: "Otimista, Energético, Contagiante",
        bpm: "120–128 BPM",
        instrumentos: ["Synths", "Bateria Eletrônica", "Baixo Sintetizado", "Guitarra Pop", "Vocais Processados", "Strings Sintéticas"],
        estrutura: "Intro, Verso, Pré-Refrão, Refrão, Ponte, Refrão Final",
        arranjo: "Camadas vocais, hooks melódicos, production moderna",
        producao: "Mix brilhante, compressão heavy, auto-tune sutil, espacialização",
        dinamica: "Build-ups, drops, variações de energia",
        emocoes: "Felicidade, empoderamento, nostalgia moderna",
        tecnica: "Sidechain, vocal stacking, reverb espacial",
        negativo: "Evite sonoridade datada, vocal mono, mix abafada"
      },
      {
        id: 'electropop',
        name: 'Electropop',
        style: "Eletrônico, Dançante, Futurista",
        mood: "Energético, Sintético, Vibrante",
        bpm: "128–140 BPM",
        instrumentos: ["Synthesizers", "Drum Machines", "Arpeggios", "Vocoder", "Pads Eletrônicos", "Bass Synth"],
        estrutura: "Intro, Build, Drop, Breakdown, Second Drop",
        arranjo: "Synth leads, basslines eletrônicas, vocal chops",
        producao: "Compressão sidechain, reverb digital, delays sincronizados",
        dinamica: "Energia constante, builds progressivos",
        emocoes: "Euforia, futurismo, escapismo",
        tecnica: "LFO modulation, filter sweeps, vocal processing",
        negativo: "Evite sons analógicos, instrumentos acústicos"
      }
    ]
  },
  {
    id: 'rock',
    name: 'Rock',
    subgenres: [
      {
        id: 'classic-rock',
        name: 'Rock Clássico',
        style: "Poderoso, Atemporal, Energético",
        mood: "Rebelde, Livre, Intenso",
        bpm: "120–140 BPM",
        instrumentos: ["Guitarra Elétrica", "Baixo Elétrico", "Bateria Acústica", "Órgão Hammond", "Vocal Potente"],
        estrutura: "Intro, Verso, Refrão, Solo de Guitarra, Verso, Refrão, Outro",
        arranjo: "Guitarra como lead, seção rítmica sólida, vocal marcante",
        producao: "Gravação ao vivo, reverb natural, compressão analógica",
        dinamica: "Alternância entre verses calmos e refrões potentes",
        emocoes: "Liberdade, rebeldia, paixão",
        tecnica: "Microfonação clássica, panning tradicional, valve saturation",
        negativo: "Evite auto-tune, programação eletrônica excessiva"
      },
      {
        id: 'alternative-rock',
        name: 'Rock Alternativo',
        style: "Experimental, Indie, Autêntico",
        mood: "Melancólico, Introspectivo, Urbano",
        bpm: "90–130 BPM",
        instrumentos: ["Guitarras Distorcidas", "Baixo", "Bateria", "Efeitos", "Sampling Ocasional"],
        estrutura: "Formas não convencionais, dinâmicas inesperadas",
        arranjo: "Texturas sonoras, espaços, atmosfera densa",
        producao: "Lo-fi elements, reverb profundo, compressão criativa",
        dinamica: "Contrastes extremos, quiet-loud dynamics",
        emocoes: "Angústia, reflexão, autenticidade",
        tecnica: "Efeitos criativos, layering, ambient sounds",
        negativo: "Evite produção muito polida, clichês comerciais"
      }
    ]
  },
  {
    id: 'rnb',
    name: 'R&B',
    subgenres: [
      {
        id: 'contemporary-rnb',
        name: 'R&B Contemporâneo',
        style: "Suave, Sensual, Sofisticado",
        mood: "Romântico, Sedutor, Emotional",
        bpm: "70–90 BPM",
        instrumentos: ["Piano Elétrico", "Baixo Elétrico", "Bateria com Groove", "Cordas", "Vocal Principal", "Backing Vocals"],
        estrutura: "Intro, Verso, Pré-Refrão, Refrão, Ponte, Refrão Final",
        arranjo: "Vocal como foco, harmonias ricas, groove sofisticado",
        producao: "Compressão sutil, reverb quente, espacialização vocal",
        dinamica: "Dinâmicas suaves, build-ups graduais",
        emocoes: "Amor, sensualidade, vulnerabilidade",
        tecnica: "Vocal layering, compression gentle, stereo imaging",
        negativo: "Evite produção fria, vocal sem emoção"
      }
    ]
  },
  {
    id: 'samba-pagode',
    name: 'Samba/Pagode',
    subgenres: [
      {
        id: 'pagode',
        name: 'Pagode',
        style: "Alegre, Brasileiro, Festivo",
        mood: "Celebração, Comunidade, Alegria",
        bpm: "120–140 BPM",
        instrumentos: ["Cavaquinho", "Pandeiro", "Surdo", "Tantan", "Banjo", "Percussão Brasileira", "Vocal"],
        estrutura: "Intro, Primeira Parte, Segunda Parte, Improvisação, Final",
        arranjo: "Percussão como base, cavaquinho melódico, vocal brasileiro",
        producao: "Gravação orgânica, ambiência de roda de samba",
        dinamica: "Energia constante, momentos de improviso",
        emocoes: "Alegria, brasilidade, união",
        tecnica: "Microfonação ambiente, capture de room tone",
        negativo: "Evite eletrônicos, auto-tune, produção artificial"
      }
    ]
  },
  {
    id: 'gospel',
    name: 'Gospel',
    subgenres: [
      {
        id: 'contemporary-gospel',
        name: 'Gospel Contemporâneo',
        style: "Inspirador, Poderoso, Espiritual",
        mood: "Fé, Esperança, Celebração",
        bpm: "90–130 BPM",
        instrumentos: ["Piano", "Órgão", "Guitarra", "Baixo", "Bateria", "Coro", "Vocal Principal"],
        estrutura: "Intro, Verso, Refrão, Ponte, Vamp, Final",
        arranjo: "Coro como elemento central, vocal emotivo, instrumentação rica",
        producao: "Reverb natural, compressão suave, espacialização coral",
        dinamica: "Build-ups emocionais, momentos íntimos",
        emocoes: "Espiritualidade, força, comunhão",
        tecnica: "Harmonia vocal complexa, organ swells, dynamic automation",
        negativo: "Evite secularização excessiva, produção fria"
      }
    ]
  },
  {
    id: 'funk',
    name: 'Funk',
    subgenres: [
      {
        id: 'funk-brasileiro',
        name: 'Funk Brasileiro',
        style: "Pesado, Rítmico, Urbano",
        mood: "Energia, Atitude, Diversão",
        bpm: "130–150 BPM",
        instrumentos: ["Bateria Eletrônica", "Bass 808", "Samples", "Vocal Rápido", "Sirenes", "Efeitos"],
        estrutura: "Intro, Verso, Refrão, Drop, Verso, Final",
        arranjo: "Batida como protagonista, vocal rítmico, drops pesados",
        producao: "Compressão heavy, sub-bass, efeitos criativos",
        dinamica: "Alta energia, drops impactantes",
        emocoes: "Festa, rebeldia, energia urbana",
        tecnica: "Sidechain pesado, bass boost, vocal chopping",
        negativo: "Evite melodias complexas, instrumentação orgânica"
      }
    ]
  },
  {
    id: 'rap',
    name: 'Rap',
    subgenres: [
      {
        id: 'rap-nacional',
        name: 'Rap Nacional',
        style: "Consciente, Lírico, Autêntico",
        mood: "Crítico, Reflexivo, Combativo",
        bpm: "80–100 BPM",
        instrumentos: ["Samples", "Drums Programados", "Bass", "Scratches", "Vocal Rap"],
        estrutura: "Intro, Verso, Refrão, Verso, Ponte, Outro",
        arranjo: "Vocal como protagonista, base simples, samples criativos",
        producao: "Mix seco, vocal destacado, samples bem trabalhados",
        dinamica: "Flow variado, momentos de tensão",
        emocoes: "Consciência social, luta, verdade",
        tecnica: "Vocal clarity, sample chopping, drum programming",
        negativo: "Evite melodias açucaradas, produção pop"
      }
    ]
  },
  {
    id: 'trap',
    name: 'Trap',
    subgenres: [
      {
        id: 'trap-brasileiro',
        name: 'Trap Brasileiro',
        style: "Moderno, Agressivo, Eletrônico",
        mood: "Intenso, Futurista, Urbano",
        bpm: "140–160 BPM",
        instrumentos: ["808 Drums", "Hi-hats Rápidos", "Synths", "Vocal Auto-tuned", "Bass Sub"],
        estrutura: "Intro, Verso, Hook, Verso, Bridge, Outro",
        arranjo: "Hi-hats em destaque, 808s pesados, vocal processado",
        producao: "Auto-tune criativo, reverb espacial, compressão agressiva",
        dinamica: "Energia alta, drops súbitos",
        emocoes: "Atitude, modernidade, poder",
        tecnica: "Vocal tuning, 808 tuning, stereo width",
        negativo: "Evite instrumentação orgânica, produção vintage"
      }
    ]
  },
  {
    id: 'country',
    name: 'Country',
    subgenres: [
      {
        id: 'country-americano',
        name: 'Country Americano',
        style: "Rural, Tradicional, Honesto",
        mood: "Nostalgia, Simplicidade, Liberdade",
        bpm: "100–120 BPM",
        instrumentos: ["Guitarra Acústica", "Banjo", "Fiddle", "Steel Guitar", "Harmônica", "Vocal Country"],
        estrutura: "Intro, Verso, Refrão, Solo, Verso, Refrão, Outro",
        arranjo: "Guitarra como base, steel guitar melódico, vocal storytelling",
        producao: "Gravação natural, reverb sutil, compressão suave",
        dinamica: "Narrativa musical, momentos íntimos",
        emocoes: "Saudade, honestidade, amor pela terra",
        tecnica: "Natural room sound, instrument clarity, vocal presence",
        negativo: "Evite eletrônicos, auto-tune, produção urbana"
      }
    ]
  },
  {
    id: 'mpb',
    name: 'MPB',
    subgenres: [
      {
        id: 'mpb-contemporanea',
        name: 'MPB Contemporânea',
        style: "Sofisticado, Brasileiro, Artístico",
        mood: "Poético, Reflexivo, Cultural",
        bpm: "80–120 BPM",
        instrumentos: ["Violão", "Piano", "Cordas", "Percussão Brasileira", "Flauta", "Vocal Brasileiro"],
        estrutura: "Formas livres, desenvolvimento melódico, improvisação",
        arranjo: "Harmonia rica, instrumentação orgânica, vocal expressivo",
        producao: "Gravação natural, espacialização sutil, dinâmicas naturais",
        dinamica: "Variedade expressiva, momentos contemplativos",
        emocoes: "Brasilidade, poesia, sofisticação",
        tecnica: "Microfonação natural, room ambience, subtle processing",
        negativo: "Evite artificialidade, produção comercial excessiva"
      }
    ]
  },
  {
    id: 'funk-soul',
    name: 'Funk Soul',
    subgenres: [
      {
        id: 'neo-soul',
        name: 'Neo Soul',
        style: "Orgânico, Groove, Moderno",
        mood: "Sensual, Spiritual, Urbano",
        bpm: "85–110 BPM",
        instrumentos: ["Rhodes", "Baixo Elétrico", "Bateria Live", "Guitarra Limpa", "Vocal Soul", "Metais"],
        estrutura: "Groove contínuo, seções fluidas, improvisação",
        arranjo: "Pocket rítmico, harmonias jazzy, vocal como instrumento",
        producao: "Warmth analógico, compressão musical, space natural",
        dinamica: "Groove constante, build-ups orgânicos",
        emocoes: "Sensualidade, espiritualidade, groove",
        tecnica: "Analog warmth, natural compression, vocal doubles",
        negativo: "Evite quantização rígida, sons digitais frios"
      }
    ]
  },
  {
    id: 'violao-voz',
    name: 'Violão e Voz',
    subgenres: [
      {
        id: 'acustico-brasileiro',
        name: 'Acústico Brasileiro',
        style: "Íntimo, Puro, Minimalista",
        mood: "Contemplativo, Honesto, Direto",
        bpm: "60–100 BPM",
        instrumentos: ["Violão Aço", "Violão Nylon", "Vocal Natural", "Percussão Sutil"],
        estrutura: "Forma canção, desenvolvimento linear, simplicidade",
        arranjo: "Violão como base harmônica, vocal protagonista",
        producao: "Gravação natural, reverb room, compressão mínima",
        dinamica: "Dinâmicas naturais, expressão orgânica",
        emocoes: "Intimidade, verdade, simplicidade",
        tecnica: "Close miking, natural room, minimal processing",
        negativo: "Evite over-production, eletrônicos, efeitos excessivos"
      }
    ]
  },
  {
    id: 'piano-voz',
    name: 'Piano e Voz',
    subgenres: [
      {
        id: 'piano-vocal-classico',
        name: 'Piano e Voz Clássico',
        style: "Elegante, Sofisticado, Atemporal",
        mood: "Romântico, Melancólico, Expressivo",
        bpm: "60–90 BPM",
        instrumentos: ["Piano Acústico", "Vocal Expressivo", "Strings Ocasionais"],
        estrutura: "Forma clássica, desenvolvimento melódico, dinâmicas naturais",
        arranjo: "Piano como harmonia e melodia, vocal como narrativa",
        producao: "Gravação de qualidade, reverb natural, espacialização clássica",
        dinamica: "Expressão através de dinâmicas, rubato natural",
        emocoes: "Romance, melancolia, sofisticação",
        tecnica: "Piano miking, vocal presence, natural reverb",
        negativo: "Evite modernização excessiva, backing tracks"
      }
    ]
  },
  {
    id: 'axe',
    name: 'Axé',
    subgenres: [
      {
        id: 'axe-tradicional',
        name: 'Axé Tradicional',
        style: "Festivo, Brasileiro, Energético",
        mood: "Alegria, Festa, Celebração",
        bpm: "120–140 BPM",
        instrumentos: ["Percussão Baiana", "Guitarra", "Baixo", "Metais", "Teclados", "Vocal Animado", "Coro"],
        estrutura: "Intro, Verso, Refrão Dançante, Percussão Solo, Final",
        arranjo: "Percussão como base, metais em destaque, vocal contagiante",
        producao: "Mix energético, compressão para dança, reverb festivo",
        dinamica: "Energia constante, momentos de percussão",
        emocoes: "Festa, alegria baiana, carnaval",
        tecnica: "Percussion emphasis, brass sections, crowd energy",
        negativo: "Evite melancolia, tempos lentos, produção fria"
      }
    ]
  }
];

export const instrumentosOptions = [
  "Viola Caipira", "Violão 6 Cordas", "Violão 12 Cordas", "Acordeon/Sanfona",
  "Bateria Acústica", "Bateria Eletrônica", "Baixo Elétrico", "Contrabaixo Acústico", 
  "Guitarra (clean/drive/slide/chorus)", "Piano Acústico", "Piano Elétrico", "Rhodes",
  "Pedal Steel", "Cavaquinho", "Banjo", "Pandeiro", "Zabumba", "Triângulo",
  "Harpa", "Teclado/Synth Pads", "Synthesizers", "Drum Machines", "808 Drums",
  "Percussão Brasileira", "Percussão Baiana", "Flauta", "Saxofone", "Trompete",
  "Trombone", "Voz Principal", "Voz Segunda", "Coro Feminino", "Coro Masculino", 
  "Backing Vocals", "Vocal Auto-tuned", "Vocoder", "Palmas", "Assovio", "Gaita de Boca",
  "Órgão Hammond", "Strings/Cordas", "Metais", "Samples", "Scratches", "Efeitos"
];