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
        style: "Autêntico, Rural, Tradicional",
        mood: "Saudade, Esperança, Simplicidade",
        bpm: "72–90 BPM",
        instrumentos: ["Viola Caipira", "Violão 6 Cordas", "Acordeon/Sanfona", "Zabumba", "Triângulo", "Palmas", "Assovio"],
        estrutura: "Introdução, Primeira Parte, Refrão, Solo de Viola, Segunda Parte, Finalização",
        arranjo: "Dupla vocal raiz, viola caipira em destaque, percussão regional, resposta instrumental",
        producao: "Mix orgânica, pouca compressão, ambiência de fazenda, reverb natural",
        dinamica: "Alternância entre versos calmos e refrões vibrantes, solos com expressão",
        emocoes: "Nostalgia, amor à terra, lida, saudade",
        tecnica: "Microfonação de viola, panning estéreo, automação de reverb sutil",
        negativo: "Evite beats eletrônicos, autotune, sons sintéticos"
      },
      {
        id: 'universitario',
        name: 'Sertanejo Universitário',
        style: "Moderno, Jovem, Festivo",
        mood: "Alegria, Paquera, Descontração",
        bpm: "100–125 BPM",
        instrumentos: ["Violão 6 Cordas", "Baixo Elétrico", "Bateria Acústica", "Guitarra", "Teclado/Synth Pads", "Coro Feminino", "Palmas"],
        estrutura: "Intro, Primeira Parte, Ponte, Refrão, Solo de Guitarra, Finalização",
        arranjo: "Dupla vocal, groove de violão, percussão marcada, refrão explosivo",
        producao: "Mix polida, camadas vocais, efeitos modernos, ambiência pop",
        dinamica: "Refrão animado, variação de intensidade, drop instrumental",
        emocoes: "Festa, animação, descontração",
        tecnica: "Harmonia vocal aberta, sidechain, reverb pop",
        negativo: "Evite excesso de elementos eletrônicos, mix embolada"
      },
      {
        id: 'romantico',
        name: 'Sertanejo Romântico',
        style: "Suave, Emotivo, Íntimo",
        mood: "Paixão, Sofrimento, Desejo",
        bpm: "80–112 BPM",
        instrumentos: ["Violão 6 Cordas", "Violão 12 Cordas", "Piano", "Baixo Elétrico", "Acordeon/Sanfona", "Gaita de Boca", "Voz Segunda"],
        estrutura: "Intro, Primeira Parte, Ponte, Refrão, Finalização",
        arranjo: "Violões em camadas, voz principal emotiva, gaita ou acordeon em solos",
        producao: "Mix suave, reverb longo, ênfase na voz",
        dinamica: "Crescendo em refrão, versos suaves",
        emocoes: "Amor, sofrimento, ternura",
        tecnica: "Automação dinâmica vocal, delays sutis, mix íntima",
        negativo: "Evite excesso de efeitos, voz robotizada"
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