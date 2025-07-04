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
        style: "Comercial, Radio-Friendly, Polido, Acessível, Hit Potential",
        mood: "Otimista, Energético, Contagiante, Positivo, Motivacional",
        bpm: "120–128 BPM",
        instrumentos: ["Synths", "Bateria Eletrônica", "Baixo Sintetizado", "Guitarra Pop", "Vocais Processados", "Strings Sintéticas", "Backing Vocals"],
        estrutura: "Intro hook (8 compassos), Verso melódico, Pré-refrão tension, Refrão catchphrase, Verso 2, Ponte contrastante, Refrão final com ad-libs",
        arranjo: "Hook melódico marcante, camadas vocais estratégicas, instrumentos em layers, drops e builds calculados, elementos percussivos modernos",
        producao: "Mix brilhante e wide, compressão paralela agressiva, auto-tune sutil mas presente, reverb espacial, sidechain pumping, master loud e competitivo",
        dinamica: "Build-up progressivo, drops impactantes, variações de energia seção por seção, clímax no final bridge",
        emocoes: "Felicidade contagiante, empoderamento pessoal, nostalgia moderna, energia positiva, celebração da vida",
        tecnica: "Vocal stacking complexo, sidechain em todos elementos, reverb de placa digital, delay sincronizado, compression multiband",
        negativo: "Evitar sonoridade datada, vocal mono, mix narrow, falta de energia, elementos depressivos"
      },
      {
        id: 'electropop',
        name: 'Electropop',
        style: "Eletrônico, Dançante, Futurista, Sintético, Club-Ready",
        mood: "Energético, Sintético, Vibrante, Escapista, Noturno",
        bpm: "128–140 BPM",
        instrumentos: ["Synthesizers", "Drum Machines", "Arpeggios", "Vocoder", "Pads Eletrônicos", "Bass Synth", "Lead Synths"],
        estrutura: "Intro build, Verso eletrônico, Pre-drop tension, Drop explosivo, Breakdown minimal, Second drop mais intenso, Outro fade",
        arranjo: "Synth leads como melodia principal, basslines eletrônicas pulsantes, vocal chops rítmicos, elementos percussivos programados",
        producao: "Compressão sidechain pesada, reverb digital espacial, delays sincronizados ao BPM, distorção controlada, stereo imaging wide",
        dinamica: "Energia constante alta, builds progressivos, drops súbitos, breakdowns para respirar, final explosivo",
        emocoes: "Euforia dançante, futurismo otimista, escapismo noturno, liberdade digital, transcendência eletrônica",
        tecnica: "LFO modulation complexa, filter sweeps automatizados, vocal processing criativo, sidechaining rítmico",
        negativo: "Evitar sons analógicos, instrumentos acústicos, tempos lentos, melancolia excessiva"
      },
      {
        id: 'pop-rock',
        name: 'Pop Rock',
        style: "Energético, Guitarrístico, Anthemic, Jovem, Stadium-Ready",
        mood: "Empolgante, Rebelde, Otimista, Poderoso, Libertador",
        bpm: "115–135 BPM",
        instrumentos: ["Guitarra Elétrica", "Baixo Elétrico", "Bateria Acústica", "Teclado/Synth Pads", "Vocal Potente", "Backing Vocals", "Guitarra Acústica"],
        estrutura: "Intro guitar-driven, Verso dinâmico, Pré-refrão crescente, Refrão anthemic, Verso 2, Solo de guitarra, Refrão final expandido",
        arranjo: "Guitarras como protagonistas, seção rítmica sólida, vocal poderoso e claro, harmonias vocais nos refrões, momentos instrumentais marcantes",
        producao: "Mix punch e definida, compressão rock, reverb ambiental, guitarras com presença, vocal sempre audível, master dinâmico",
        dinamica: "Alternância verso-refrão marcante, build-ups para solos, energia crescente, explosões no refrão",
        emocoes: "Empoderamento jovem, rebeldia positiva, energia coletiva, liberdade, força interior",
        tecnica: "Microfonação de guitarra múltipla, compression paralela na bateria, vocal doubles, reverb Hall",
        negativo: "Evitar over-production eletrônica, vocal muito processado, falta de energia, sons sintéticos demais"
      },
      {
        id: 'indie-pop',
        name: 'Indie Pop',
        style: "Alternativo, Artístico, Orgânico, Criativo, Autêntico",
        mood: "Melancólico, Introspectivo, Nostálgico, Sonhador, Contemplativo",
        bpm: "90–115 BPM",
        instrumentos: ["Guitarra Limpa", "Baixo", "Bateria Orgânica", "Sintetizadores Vintage", "Vocal Natural", "Instrumentos Inusitados", "Strings Reais"],
        estrutura: "Intro atmosférica, Verso contemplativo, Refrão melódico, Verso 2 evolutivo, Ponte instrumental criativa, Refrão final modificado",
        arranjo: "Instrumentação criativa e orgânica, vocal como narrativa, texturas sonoras interessantes, dinâmicas naturais, elementos surpresa",
        producao: "Mix orgânica com character, compressão musical, reverb natural, espacialização criativa, preservação de imperfeições humanas",
        dinamica: "Dinâmicas naturais e expressivas, crescendos orgânicos, momentos de intimidade, explosões controladas",
        emocoes: "Nostalgia urbana, melancolia romântica, criatividade, autenticidade, vulnerabilidade artística",
        tecnica: "Gravação orgânica, microfonação natural, processamento sutil, automation expressiva, vintage character",
        negativo: "Evitar produção muito polida, auto-tune, comercialização excessiva, falta de personalidade"
      },
      {
        id: 'teen-pop',
        name: 'Teen Pop',
        style: "Jovem, Colorido, Divertido, Inocente, Energético",
        mood: "Alegria juvenil, Primeira paixão, Diversão, Inocência, Otimismo",
        bpm: "125–135 BPM",
        instrumentos: ["Synths Coloridos", "Bateria Pop", "Baixo Pop", "Guitarra Limpa", "Vocal Jovem", "Backing Vocals", "Elementos Lúdicos"],
        estrutura: "Intro cativante, Verso narrativo, Pré-refrão buildUp, Refrão chiclete, Verso 2, Ponte divertida, Refrão final com energia máxima",
        arranjo: "Melodias grudentaς, harmonias simples mas efetivas, instrumentação colorida, vocal claro e expressivo, elementos lúdicos",
        producao: "Mix brilhante e colorida, compressão controlada, reverb alegre, processamento vocal natural, master otimista",
        dinamica: "Energia jovem constante, variações divertidas, momentos de intimidade adolescente, explosões de alegria",
        emocoes: "Alegria pura, primeiro amor, amizade, diversão inocente, otimismo juvenil, liberdade adolescente",
        tecnica: "Vocal clarity, harmonias simples, reverb colorido, delay musical, processing jovem",
        negativo: "Evitar temas adultos, produção pesada, melancolia profunda, complexidade excessiva"
      },
      {
        id: 'synth-pop',
        name: 'Synth Pop',
        style: "Retro-Futurista, Anos 80, Nostálgico, Colorido, Eletrônico",
        mood: "Nostalgia dos anos 80, Futurismo retro, Romance sintético, Escapismo, Sonhador",
        bpm: "110–125 BPM",
        instrumentos: ["Synthesizers Vintage", "Drum Machines", "Bass Synth", "Arpeggios", "Vocal Processado", "Pads Atmosféricos", "Lead Synths"],
        estrutura: "Intro synth icônica, Verso synth-driven, Pré-refrão tensão, Refrão melódico marcante, Verso 2, Solo de synth, Refrão final épico",
        arranjo: "Sintetizadores como protagonistas, programações vintage, vocal melódico central, texturas eletrônicas ricas, arpeggios constantes",
        producao: "Som vintage mas moderno, compressão anos 80, reverb digital época, delay synchro, gated reverb ocasional",
        dinamica: "Groove constante, builds eletrônicos, drops controlados, solos de synth expressivos, finais épicos",
        emocoes: "Nostalgia tecnológica, romance futurista, melancolia colorida, otimismo retro, sonhos eletrônicos",
        tecnica: "Analog emulation, vintage compression, digital reverb clássico, arpeggiator sync, vocoder touches",
        negativo: "Evitar sons muito modernos, hip-hop elements, organic instruments, produção crua"
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
        style: "Atemporal, Poderoso, Épico, Anthemic, Stadium Rock",
        mood: "Rebelde, Livre, Intenso, Nostálgico, Heroico",
        bpm: "115–140 BPM",
        instrumentos: ["Guitarra Elétrica", "Baixo Elétrico", "Bateria Acústica", "Órgão Hammond", "Vocal Potente", "Guitarra Rítmica", "Piano Rock"],
        estrutura: "Intro marcante, Verso narrativo, Refrão anthemic, Solo de guitarra épico, Verso 2, Refrão final explosivo, Outro instrumental",
        arranjo: "Guitarras twin lead, seção rítmica poderosa, vocal carismático e potente, órgão Hammond atmosférico, momentos instrumentais épicos",
        producao: "Gravação ao vivo com room tone, reverb natural de estúdio, compressão analógica, valve saturation, espacialização clássica",
        dinamica: "Alternância dramática verso-refrão, build-ups para solos, explosões de energia, finais apoteóticos",
        emocoes: "Liberdade absoluta, rebeldia romântica, paixão desenfreada, nostalgia heroica, força coletiva",
        tecnica: "Microfonação clássica de amplificador, panning tradicional L-R, valve compression, natural reverb chambers",
        negativo: "Evitar auto-tune, programação digital, sons sintéticos, over-production moderna, compressão excessiva"
      },
      {
        id: 'alternative-rock',
        name: 'Rock Alternativo',
        style: "Experimental, Indie, Autêntico, Urbano, Artístico",
        mood: "Melancólico, Introspectivo, Angustiado, Reflexivo, Contemplativo",
        bpm: "85–125 BPM",
        instrumentos: ["Guitarras Distorcidas", "Baixo", "Bateria", "Efeitos Pedais", "Vocal Emotivo", "Guitarra Limpa", "Sampling Ocasional"],
        estrutura: "Formas não convencionais, dinâmicas inesperadas, seções contrastantes, desenvolvimento orgânico, finais abertos",
        arranjo: "Texturas sonoras ricas, espaços e silêncios, atmosferas densas, guitarras em layers, dinâmicas extremas",
        producao: "Lo-fi elements controlados, reverb profundo e espacial, compressão criativa, preservação de imperfeições",
        dinamica: "Contrastes quiet-loud extremos, crescendos orgânicos, explosões súbitas, decaimentos naturais",
        emocoes: "Angústia urbana, reflexão profunda, autenticidade crua, vulnerabilidade, busca por sentido",
        tecnica: "Efeitos criativos de guitarra, layering atmosférico, ambient sounds, microfonação natural",
        negativo: "Evitar produção muito polida, clichês comerciais, auto-tune, fórmulas pop, comercialização excessiva"
      },
      {
        id: 'hard-rock',
        name: 'Hard Rock',
        style: "Pesado, Agressivo, Poderoso, Direto, Riff-Driven",
        mood: "Agressivo, Determinado, Rebelde, Intenso, Confrontativo",
        bpm: "120–150 BPM",
        instrumentos: ["Guitarra Pesada", "Baixo Distorcido", "Bateria Potente", "Vocal Rasgado", "Guitarra Rítmica", "Percussão Adicional"],
        estrutura: "Intro riff pesado, Verso agressivo, Refrão potente, Solo de guitarra técnico, Bridge heavy, Refrão final brutal",
        arranjo: "Riffs de guitarra como base, seção rítmica tight e pesada, vocal poderoso e agressivo, solos técnicos virtuosos",
        producao: "Mix pesada e punch, compressão agressiva controlada, distorção de qualidade, reverb controlado, master impactante",
        dinamica: "Energia alta constante, variações de intensidade, explosões nos refrões, solos climáticos",
        emocoes: "Poder bruto, determinação, rebeldia agressiva, força interior, confronto",
        tecnica: "High-gain amps, tight gating, precision timing, powerful drum sounds, vocal presence",
        negativo: "Evitar sons limpos demais, produção fraca, falta de peso, vocal sem atitude"
      },
      {
        id: 'indie-rock',
        name: 'Indie Rock',
        style: "Independente, Criativo, Orgânico, DIY, Autoral",
        mood: "Nostálgico, Sonhador, Melancólico, Otimista, Autêntico",
        bpm: "95–130 BPM",
        instrumentos: ["Guitarra Jangly", "Baixo Melódico", "Bateria Orgânica", "Vocal Natural", "Instrumentos Diversos", "Sintetizadores Vintage"],
        estrutura: "Estruturas criativas e livres, experimentação formal, seções inesperadas, desenvolvimentos orgânicos",
        arranjo: "Instrumentação criativa, melodias hooky, harmonias interessantes, texturas sonoras únicas, elementos surpresa",
        producao: "Estética DIY controlada, warmth analógico, imperfeições preservadas, espacialização criativa, character sonoro",
        dinamica: "Dinâmicas expressivas naturais, crescendos emotivos, contrastes suaves, momentos de intimidade",
        emocoes: "Nostalgia juvenil, otimismo melancólico, criatividade, autenticidade, vulnerabilidade romântica",
        tecnica: "Gravação orgânica, vintage gear, natural room sound, creative processing, analog warmth",
        negativo: "Evitar over-production, comercialização, falta de personalidade, sons genéricos, auto-tune"
      },
      {
        id: 'prog-rock',
        name: 'Rock Progressivo',
        style: "Complexo, Técnico, Conceitual, Épico, Experimental",
        mood: "Cerebral, Épico, Místico, Grandioso, Contemplativo",
        bpm: "Variável 80–180 BPM",
        instrumentos: ["Guitarra Técnica", "Baixo Complexo", "Bateria Elaborada", "Teclados/Synths", "Vocal Versátil", "Instrumentos Orquestrais"],
        estrutura: "Formas extensas e complexas, múltiplas seções, desenvolvimento temático, movimentos sinfônicos, narrativa musical",
        arranjo: "Composições elaboradas, instrumentação rica, solos virtuosos, dinâmicas complexas, orquestrações detalhadas",
        producao: "Produção detalhista, separação instrumental clara, espacialização complexa, dinâmicas preservadas, qualidade audiófila",
        dinamica: "Variações dramáticas extremas, builds épicos, climaxes orquestrais, momentos íntimos, explosões sinfônicas",
        emocoes: "Grandiosidade épica, transcendência, complexidade intelectual, viagem emocional, espiritualidade",
        tecnica: "Multi-tracking elaborado, precision recording, complex mixing, orchestral arrangements, virtuoso performances",
        negativo: "Evitar simplificação excessiva, produção barata, falta de dinâmicas, elementos comerciais clichês"
      },
      {
        id: 'punk-rock',
        name: 'Punk Rock',
        style: "Cru, Direto, Agressivo, Rebelde, DIY",
        mood: "Revoltado, Urgente, Confrontativo, Libertário, Anárquico",
        bpm: "150–200 BPM",
        instrumentos: ["Guitarra Distorcida", "Baixo Simples", "Bateria Rápida", "Vocal Gritado", "Power Chords", "Feedback Controlado"],
        estrutura: "Estruturas simples e diretas, versos rápidos, refrões gritados, solos curtos ou inexistentes, finais abruptos",
        arranjo: "Power chords dominantes, ritmo frenético, vocal direto e agressivo, simplicidade intencional, energia crua",
        producao: "Estética crua e direta, compressão mínima, distorção natural, gravação live, preservação da energia bruta",
        dinamica: "Energia alta constante, ataques súbitos, intensidade máxima, finais explosivos, sem respiro",
        emocoes: "Revolta social, urgência existencial, rebeldia juvenil, confronto com autoridade, liberdade radical",
        tecnica: "Fast attack, minimal processing, live recording, raw amplification, aggressive performance",
        negativo: "Evitar over-production, sons limpos, tempos lentos, complexidade desnecessária, comercialização"
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
        style: "Suave, Sensual, Sofisticado, Moderno, Polido",
        mood: "Romântico, Sedutor, Emocional, Íntimo, Passionate",
        bpm: "70–95 BPM",
        instrumentos: ["Piano Elétrico", "Rhodes", "Baixo Elétrico", "Bateria com Groove", "Cordas", "Vocal Principal", "Backing Vocals", "Synth Pads"],
        estrutura: "Intro atmosférica, Verso intimista, Pré-refrão tension, Refrão emotivo, Verso 2, Ponte vocal, Refrão final com ad-libs",
        arranjo: "Vocal como elemento central absoluto, harmonias vocais ricas e complexas, groove sofisticado, instrumentação que sustenta sem competir",
        producao: "Compressão sutil e musical, reverb quente e envolvente, espacialização vocal precisa, warmth analógico, master dinâmico",
        dinamica: "Dinâmicas suaves e expressivas, build-ups graduais e emotivos, momentos de intimidade, explosões controladas de emoção",
        emocoes: "Amor profundo, sensualidade madura, vulnerabilidade emocional, paixão intensa, conexão íntima",
        tecnica: "Vocal layering complexo, compression gentil mas presente, stereo imaging sofisticado, reverb musical",
        negativo: "Evitar produção fria e digital, vocal sem emoção, instrumentação pesada, falta de groove humano"
      },
      {
        id: 'neo-soul-rnb',
        name: 'Neo Soul R&B',
        style: "Orgânico, Alternativo, Artístico, Conscious, Vintage-Modern",
        mood: "Espiritual, Introspectivo, Consciente, Sensual, Autêntico",
        bpm: "75–100 BPM",
        instrumentos: ["Rhodes", "Guitarra Limpa", "Baixo Elétrico", "Bateria Live", "Vocal Soul", "Backing Vocals", "Instrumentos Orgânicos"],
        estrutura: "Forma livre e orgânica, desenvolvimento melódico natural, seções que fluem, improvisação controlada",
        arranjo: "Instrumentação orgânica e rica, vocal expressivo central, groove pocket perfeito, harmonias jazzy e sofisticadas",
        producao: "Warmth analógico, gravação orgânica, compressão musical natural, reverb espacial mas controlado",
        dinamica: "Groove constante mas dinâmico, variações sutis, build-ups orgânicos, expressão natural",
        emocoes: "Espiritualidade moderna, consciência social, sensualidade madura, autenticidade artística",
        tecnica: "Analog warmth emulation, natural compression, organic recording, vintage processing",
        negativo: "Evitar quantização rígida, sons digitais frios, over-production, comercialização excessiva"
      },
      {
        id: 'trap-soul',
        name: 'Trap Soul',
        style: "Moderno, Hip-Hop influenced, Urbano, Melódico, Contemporary",
        mood: "Urbano, Melancólico, Moderno, Sensual, Conflituoso",
        bpm: "65–85 BPM",
        instrumentos: ["808 Drums", "Hi-hats", "Synths", "Vocal R&B", "Auto-tune sutil", "Bass Sub", "Pads Atmosféricos"],
        estrutura: "Intro minimalista, Verso melodioso, Hook cativante, Refrão emotivo, Bridge experimental, Outro atmosférico",
        arranjo: "Beats trap como base, vocal melódico R&B, elementos minimalistas, atmosferas densas, hooks melódicos",
        producao: "Auto-tune sutil e musical, compressão moderna, reverb espacial, sub-bass presente, stereo imaging wide",
        dinamica: "Contraste entre seções minimalistas e refrões cheios, variações de energia, momentos de tensão",
        emocoes: "Melancolia urbana, amor moderno, vulnerabilidade masculina, conflitos internos, sensualidade contemporânea",
        tecnica: "Vocal tuning musical, 808 programming, atmospheric pads, modern compression",
        negativo: "Evitar vocal muito processado, falta de emoção, beats muito agressivos, comercialização excessiva"
      },
      {
        id: 'classic-soul',
        name: 'Soul Clássico',
        style: "Vintage, Tradicional, Poderoso, Emocional, Gospel-influenced",
        mood: "Passionate, Espiritual, Poderoso, Emotivo, Celebrativo",
        bpm: "85–120 BPM",
        instrumentos: ["Órgão Hammond", "Guitarra Soul", "Baixo Elétrico", "Bateria Live", "Metais", "Vocal Poderoso", "Coro Gospel"],
        estrutura: "Intro instrumental marcante, Verso narrativo, Refrão poderoso, Solo instrumental, Bridge gospel, Final apoteótico",
        arranjo: "Vocal poderoso central, seção de metais marcante, órgão Hammond atmosférico, groove tight, coro gospel nos finais",
        producao: "Gravação vintage mas limpa, compressão analógica, reverb natural de estúdio, warmth característico",
        dinamica: "Build-ups dramáticos, explosões nos refrões, momentos íntimos, finais apoteóticos com coro",
        emocoes: "Espiritualidade profunda, paixão avassaladora, força interior, celebração da vida, conexão divina",
        tecnica: "Vintage recording techniques, analog compression, natural reverb, live performance energy",
        negativo: "Evitar modernização excessiva, sons digitais, falta de emoção, produção fria"
      },
      {
        id: 'quiet-storm',
        name: 'Quiet Storm',
        style: "Suave, Noturno, Sophisticated, Laid-back, Romantic",
        mood: "Romântico, Relaxante, Íntimo, Sedutor, Contemplativo",
        bpm: "60–80 BPM",
        instrumentos: ["Piano Elétrico", "Guitarra Jazz", "Baixo Elétrico", "Bateria Brush", "Cordas", "Vocal Suave", "Sax ocasional"],
        estrutura: "Intro jazz-influenced, Verso contemplativo, Refrão suave mas marcante, Solo instrumental, Outro relaxante",
        arranjo: "Vocal suave central, instrumentação jazz-influenced, harmonias sofisticadas, groove relaxado mas presente",
        producao: "Mix suave e envolvente, compressão gentil, reverb quente, espacialização íntima, master dinâmico",
        dinamica: "Energia baixa mas constante, variações sutis, momentos de solo, expressão contida",
        emocoes: "Romance noturno, serenidade, contemplação, sensualidade madura, paz interior",
        tecnica: "Gentle compression, warm reverb, intimate mixing, jazz-influenced recording",
        negativo: "Evitar energia excessiva, produção agressiva, vocal muito processado, falta de sutileza"
      },
      {
        id: 'alternative-rnb',
        name: 'Alternative R&B',
        style: "Experimental, Indie, Artístico, Não-convencional, Creative",
        mood: "Introspectivo, Experimental, Melancólico, Criativo, Vulnerável",
        bpm: "70–110 BPM",
        instrumentos: ["Sintetizadores", "Guitarra Processada", "Bateria Eletrônica", "Vocal Processado", "Samples", "Texturas Sonoras", "Instrumentos Inusitados"],
        estrutura: "Formas não-convencionais, experimentação estrutural, seções inesperadas, desenvolvimentos criativos",
        arranjo: "Texturas sonoras criativas, vocal como instrumento expressivo, instrumentação experimental, atmosferas únicas",
        producao: "Processamento criativo, efeitos experimentais, espacialização não-convencional, character sonoro único",
        dinamica: "Contrastes dramáticos, mudanças inesperadas, momentos de tensão, releases criativos",
        emocoes: "Vulnerabilidade artística, criatividade sem limites, melancolia moderna, experiência emocional única",
        tecnica: "Creative processing, experimental effects, unconventional mixing, artistic sound design",
        negativo: "Evitar fórmulas comerciais, produção genérica, falta de personalidade, comercialização excessiva"
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
        style: "Alegre, Brasileiro, Festivo, Roda de Samba, Comunidade",
        mood: "Celebração, Comunidade, Alegria, Descontração, União",
        bpm: "120–140 BPM",
        instrumentos: ["Cavaquinho", "Pandeiro", "Surdo", "Tantan", "Banjo", "Percussão Brasileira", "Vocal", "Cuíca", "Reco-reco"],
        estrutura: "Intro percussiva, Primeira Parte narrativa, Segunda Parte marcante, Solo de cavaquinho, Improvisação vocal, Final em crescendo",
        arranjo: "Percussão como fundação rítmica, cavaquinho melódico protagonista, vocal brasileiro expressivo, call-and-response, harmonias simples",
        producao: "Gravação orgânica com room tone, ambiência natural de roda de samba, compressão mínima, reverb ambiente natural",
        dinamica: "Energia constante e contagiante, momentos de improviso vocal, solos instrumentais, final crescente com palmas",
        emocoes: "Alegria genuína, brasilidade, união social, festa popular, espontaneidade",
        tecnica: "Microfonação ambiente, captação de room tone, natural balance, minimal processing",
        negativo: "Evitar eletrônicos, auto-tune, produção artificial, excesso de compressão, sons sintéticos"
      },
      {
        id: 'samba-enredo',
        name: 'Samba Enredo',
        style: "Carnavalesco, Narrativo, Épico, Coletivo, Tradicional",
        mood: "Grandioso, Festivo, Patriótico, Épico, Celebrativo",
        bpm: "130–150 BPM",
        instrumentos: ["Bateria de Escola", "Surdo", "Tamborim", "Agogô", "Cuíca", "Caixa", "Vocal Principal", "Coro Massivo"],
        estrutura: "Intro de bateria, Primeira Parte narrativa, Refrão principal marcante, Segunda Parte, Refrão final com coro massivo",
        arranjo: "Bateria como protagonista absoluta, vocal narrativo central, coro massivo nos refrões, percussão em camadas complexas",
        producao: "Gravação de multidão, reverb de quadra, compressão para impacto, espacialização wide, energia de arquibancada",
        dinamica: "Build-up épico, explosões nos refrões, energia crescente, final apoteótico com bateria",
        emocoes: "Orgulho brasileiro, grandiosidade, festa coletiva, patriotismo, euforia carnavalesca",
        tecnica: "Multi-microfonação de bateria, crowd recording, natural reverb, dynamic builds",
        negativo: "Evitar intimidade, produção limpa demais, falta de energia coletiva, sons eletrônicos"
      },
      {
        id: 'samba-rock',
        name: 'Samba Rock',
        style: "Dançante, Urbano, Moderno, Sofisticado, Fusion",
        mood: "Groove, Sofisticação, Dança, Urbano, Cool",
        bpm: "110–130 BPM",
        instrumentos: ["Guitarra Limpa", "Baixo Elétrico", "Bateria", "Percussão Brasileira", "Órgão Hammond", "Vocal Suave", "Metais"],
        estrutura: "Intro groove, Verso dançante, Refrão marcante, Bridge instrumental, Solo de guitarra, Final groove",
        arranjo: "Guitarra com groove característico, baixo marcante, percussão brasileira integrada, vocal suave, metais pontuais",
        producao: "Mix groove-oriented, compressão musical, reverb controlado, espacialização dançante, warmth vintage",
        dinamica: "Groove constante, variações de intensidade, solos expressivos, energia dançante mantida",
        emocoes: "Sofisticação urbana, groove irresistível, alegria madura, dança, brasilidade moderna",
        tecnica: "Groove emphasis, vintage processing, guitar clarity, rhythmic precision",
        negativo: "Evitar rigidez rítmica, produção fria, falta de swing, over-production"
      },
      {
        id: 'bossa-nova',
        name: 'Bossa Nova',
        style: "Sofisticado, Intimista, Suave, Jazzístico, Elegante",
        mood: "Romântico, Contemplativo, Sofisticado, Melancólico, Intimista",
        bpm: "90–120 BPM",
        instrumentos: ["Violão Nylon", "Vocal Suave", "Piano", "Baixo Acústico", "Bateria Brush", "Flauta", "Sax Tenor"],
        estrutura: "Intro violão, Verso contemplativo, Refrão suave, Solo instrumental, Bridge harmônica, Final intimista",
        arranjo: "Violão como base harmônica sofisticada, vocal suave central, instrumentação minimalista mas rica, harmonias jazzísticas",
        producao: "Gravação íntima, reverb sutil, compressão gentil, espacialização próxima, warmth natural",
        dinamica: "Dinâmicas sutis, expressão contida, solos contemplativos, crescendos delicados",
        emocoes: "Romance sofisticado, melancolia elegante, contemplação, intimidade, brasilidade requintada",
        tecnica: "Close miking, subtle reverb, gentle compression, intimate balance",
        negativo: "Evitar energia excessiva, produção agressiva, vocal forte demais, percussão pesada"
      },
      {
        id: 'samba-jazz',
        name: 'Samba Jazz',
        style: "Instrumental, Sofisticado, Improvised, Técnico, Fusion",
        mood: "Intelectual, Sofisticado, Groove, Contemplativo, Criativo",
        bpm: "100–140 BPM",
        instrumentos: ["Piano", "Baixo Elétrico", "Bateria Jazz", "Percussão Brasileira", "Guitarra Jazz", "Metais", "Vocal Ocasional"],
        estrutura: "Head melódico, Solos improvisados, Trading sections, Desenvolvimento harmônico, Return to head",
        arranjo: "Instrumentação jazz com percussão brasileira, solos virtuosos, interação musical, harmonias complexas",
        producao: "Gravação live, reverb natural, separação instrumental clara, dinâmicas preservadas, stereo imaging preciso",
        dinamica: "Variações expressivas, solos climáticos, interação dinâmica, builds orgânicos",
        emocoes: "Sofisticação intelectual, criatividade musical, groove brasileiro, expressão artística",
        tecnica: "Live recording techniques, natural reverb, instrument separation, dynamic preservation",
        negativo: "Evitar rigidez, over-production, falta de swing, comercialização excessiva"
      },
      {
        id: 'sambareggae',
        name: 'Samba Reggae',
        style: "Percussivo, Afro-brasileiro, Rítmico, Poderoso, Tribal",
        mood: "Tribal, Poderoso, Celebrativo, Ancestral, Energia",
        bpm: "90–110 BPM",
        instrumentos: ["Timbaus", "Surdos", "Repinique", "Caixa", "Agogô", "Atabaque", "Vocal Call", "Alfaia"],
        estrutura: "Intro percussiva crescente, Call vocal, Response coletivo, Breaks percussivos, Final tribal crescente",
        arranjo: "Percussão afro-brasileira como protagonista absoluta, vocal call-and-response, layers percussivas complexas",
        producao: "Gravação percussiva potente, reverb ambiente, compressão controlada, espacialização tribal, energia coletiva",
        dinamica: "Builds percussivos, explosões rítmicas, energy waves, final crescente tribal",
        emocoes: "Conexão ancestral, poder tribal, celebração afro-brasileira, energia coletiva, espiritualidade",
        tecnica: "Percussion-focused recording, tribal reverb, rhythmic layering, collective energy capture",
        negativo: "Evitar melodismo excessivo, harmonia complexa, instrumentação não-percussiva, individualismo"
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
        style: "Moderno, Inspirador, Poderoso, Comercial, Radio-Friendly",
        mood: "Fé, Esperança, Celebração, Vitória, Inspiração",
        bpm: "90–130 BPM",
        instrumentos: ["Piano", "Órgão Hammond", "Guitarra", "Baixo Elétrico", "Bateria", "Coro Gospel", "Vocal Principal", "Cordas"],
        estrutura: "Intro contemplativa, Verso testemunhal, Pré-refrão preparatório, Refrão de louvor, Verso 2, Ponte espiritual, Refrão final glorioso",
        arranjo: "Coro gospel como elemento central, vocal emotivo protagonista, instrumentação rica e envolvente, momentos de adoração e celebração",
        producao: "Reverb natural e espacial, compressão suave mas presente, espacialização coral complexa, warmth espiritual, master inspirador",
        dinamica: "Build-ups emocionais graduais, momentos íntimos de adoração, explosões de louvor, climaxes espirituais",
        emocoes: "Fé genuína, esperança renovada, gratidão profunda, celebração espiritual, conexão divina",
        tecnica: "Harmonia vocal complexa, organ swells, dynamic automation, reverb Hall natural",
        negativo: "Evitar secularização excessiva, produção mundana, falta de reverência, comercialização desrespeitosa"
      },
      {
        id: 'traditional-gospel',
        name: 'Gospel Tradicional',
        style: "Clássico, Roots, Espiritual, Autêntico, Church-based",
        mood: "Reverência, Tradição, Espiritualidade profunda, Comunidade, Ancestralidade",
        bpm: "80–110 BPM",
        instrumentos: ["Órgão Hammond", "Piano Acústico", "Vocal Principal", "Coro da Igreja", "Palmas", "Tamborim", "Baixo Simples"],
        estrutura: "Chamada pastoral, Verso bíblico, Refrão congregacional, Testimonio, Call and response, Final em glória",
        arranjo: "Vocal como pregação musical, órgão Hammond atmosférico, coro congregacional participativo, call-and-response tradicional",
        producao: "Gravação de igreja real, reverb natural do templo, dinâmicas preservadas, ambiência espiritual autêntica",
        dinamica: "Começar em reverência, crescer em adoração, momentos de testimonio, final em celebração coletiva",
        emocoes: "Reverência sagrada, tradição familiar, espiritualidade ancestral, comunidade de fé, conexão geracional",
        tecnica: "Church recording, natural reverb, congregational balance, traditional miking",
        negativo: "Evitar modernização forçada, produção artificial, perda da autenticidade, comercialização"
      },
      {
        id: 'urban-gospel',
        name: 'Urban Gospel',
        style: "Urbano, Hip-Hop influenced, Moderno, Jovem, Street",
        mood: "Testemunho urbano, Força, Superação, Fé real, Autenticidade",
        bpm: "85–115 BPM",
        instrumentos: ["Beats Hip-Hop", "Piano Elétrico", "Baixo Elétrico", "Vocal Urban", "Backing Vocals", "Samples", "Organ Stabs"],
        estrutura: "Intro beat, Verso testemunhal, Hook gospel, Refrão poderoso, Verso 2, Bridge worship, Refrão final expansivo",
        arranjo: "Beat urbano como base, vocal testemunhal direto, elementos gospel tradicionais integrados, harmonias urbanas",
        producao: "Mix urbana mas espiritual, compressão moderna, reverb controlado, vocal presente, master impactante",
        dinamica: "Groove urbano constante, builds emocionais, drops espirituais, energia de testimonio",
        emocoes: "Fé urbana real, testimonio de superação, força espiritual, autenticidade de rua, esperança concreta",
        tecnica: "Urban production, gospel elements, vocal processing, beat programming",
        negativo: "Evitar mundanismo, falta de espiritualidade, comercialização vazia, desrespeito à fé"
      },
      {
        id: 'southern-gospel',
        name: 'Southern Gospel',
        style: "Quarteto, Harmônico, Tradicional Americano, Família, Country-influenced",
        mood: "Família, Tradição, Simplicidade, Alegria, Comunidade rural",
        bpm: "100–130 BPM",
        instrumentos: ["Piano", "Guitarra Country", "Baixo Elétrico", "Bateria Simples", "Quarteto Vocal", "Órgão", "Dobro ocasional"],
        estrutura: "Intro harmônica, Verso narrativo, Refrão familiar, Verso 2, Solo instrumental, Refrão final com harmonias",
        arranjo: "Quarteto vocal como protagonista, harmonias fechadas precisas, instrumentação country-gospel, simplicidade elegante",
        producao: "Gravação familiar, reverb controlado, vocal clarity máximo, instrumentação supporting, warmth tradicional",
        dinamica: "Harmonia constante, variações vocais, solos instrumentais simples, final harmônico crescente",
        emocoes: "Tradição familiar, simplicidade cristã, alegria comunitária, valores rurais, fé transmitida",
        tecnica: "Quartet vocal balance, country guitar, traditional recording, harmony emphasis",
        negativo: "Evitar complexidade excessiva, modernização forçada, perda da simplicidade, urbanism"
      },
      {
        id: 'praise-worship',
        name: 'Praise & Worship',
        style: "Congregacional, Adoração, Participativo, Moderno, Arena",
        mood: "Adoração, Louvor, Comunhão, Exaltação, Presença divina",
        bpm: "70–120 BPM variável",
        instrumentos: ["Guitarra Acústica", "Piano", "Baixo", "Bateria", "Cordas", "Vocal Principal", "Coro Congregacional", "Pads"],
        estrutura: "Intro adoração, Verso íntimo, Pré-refrão preparação, Refrão congregacional, Bridge adoração, Momento espontâneo, Final em glória",
        arranjo: "Vocal como condutor de adoração, instrumentação que facilita participação congregacional, momentos íntimos e explosivos",
        producao: "Mix congregacional, reverb de arena, compressão musical, espacialização que inclui multidão, master dinâmico",
        dinamica: "Variações de intimidade à celebração, crescendos congregacionais, momentos espontâneos, builds espirituais",
        emocoes: "Presença divina, adoração coletiva, intimidade com Deus, celebração espiritual, comunhão",
        tecnica: "Congregational mixing, arena reverb, live performance energy, worship flow",
        negativo: "Evitar performance excessiva, ego artístico, complexidade que impeça participação, frieza espiritual"
      },
      {
        id: 'black-gospel',
        name: 'Black Gospel',
        style: "Poderoso, Emotivo, Tradicional Afro-Americano, Soul-influenced, Pentecostal",
        mood: "Poder espiritual, Emoção profunda, Libertação, Alegria explosiva, Força ancestral",
        bpm: "90–140 BPM",
        instrumentos: ["Piano Gospel", "Órgão Hammond", "Bateria Gospel", "Baixo Elétrico", "Vocal Poderoso", "Coro Massa", "Metais", "Palmas"],
        estrutura: "Intro piano, Verso pregação, Refrão poderoso, Verso 2, Vamp section, Coro massa, Final em glória",
        arranjo: "Piano gospel virtuoso, vocal de poder extremo, coro massa participativo, seção rítmica gospel tight, momentos de vamp",
        producao: "Gravação de igreja tradicional, reverb natural poderoso, compressão que preserva dinâmicas, energia congregacional",
        dinamica: "Builds emocionais extremos, explosões de poder, momentos íntimos raros, finais apoteóticos com coro",
        emocoes: "Poder espiritual ancestral, libertação emocional, alegria explosiva, força comunitária, transcendência",
        tecnica: "Traditional black church recording, powerful vocal capture, congregation energy, gospel piano emphasis",
        negativo: "Evitar contenção emocional, produção fria, falta de poder espiritual, modernização que perca essência"
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
        style: "Pesado, Rítmico, Urbano, Favela, Ostentação",
        mood: "Energia, Atitude, Diversão, Poder, Ostentação",
        bpm: "130–150 BPM",
        instrumentos: ["Bateria Eletrônica", "Bass 808", "Samples", "Vocal Rápido", "Sirenes", "Efeitos", "MC Voice", "Percussão Eletrônica"],
        estrutura: "Intro beat pesado, Verso rap, Refrão dançante, Drop funk, Verso 2, Final explosivo com sirenes",
        arranjo: "Batida como protagonista absoluta, vocal rítmico marcante, drops pesados estratégicos, elementos de rua autênticos",
        producao: "Compressão heavy agressiva, sub-bass proeminente, efeitos criativos, sidechain pesado, master loud para pancadão",
        dinamica: "Alta energia constante, drops impactantes, builds rápidos, explosões sonoras, energia de baile",
        emocoes: "Festa de rua, rebeldia juvenil, energia urbana, diversão desenfreada, poder das periferias",
        tecnica: "Sidechain pesado, bass boost extremo, vocal chopping, beat programming tight",
        negativo: "Evitar melodias complexas, instrumentação orgânica, tempos lentos, produção limpa demais"
      },
      {
        id: 'funk-melody',
        name: 'Funk Melody',
        style: "Melódico, Romântico, Suave, Comercial, Radio-friendly",
        mood: "Romance, Sedução, Paixão, Sensualidade, Amor",
        bpm: "95–120 BPM",
        instrumentos: ["Bateria Funk", "Baixo Elétrico", "Teclado Melody", "Vocal Melódico", "Backing Vocals", "Samples Românticos", "Guitarra Limpa"],
        estrutura: "Intro melódica, Verso romântico, Refrão melódico, Verso 2, Bridge sensual, Refrão final emotivo",
        arranjo: "Melodia como protagonista, vocal suave e expressivo, instrumentação romântica, harmonias simples mas efetivas",
        producao: "Mix suave mas groove, compressão musical, reverb romântico, vocal em destaque, master comercial",
        dinamica: "Groove constante suave, variações melódicas, momentos íntimos, crescendos românticos",
        emocoes: "Romance urbano, sedução, paixão jovem, sensualidade, amor periférico",
        tecnica: "Melody emphasis, smooth compression, romantic reverb, vocal clarity",
        negativo: "Evitar agressividade, beats muito pesados, vulgaridade excessiva, produção crua"
      },
      {
        id: 'funk-consciente',
        name: 'Funk Consciente',
        style: "Crítico, Social, Educativo, Reflexivo, Mensagem",
        mood: "Consciência, Protesto, Reflexão, Esperança, Luta",
        bpm: "110–135 BPM",
        instrumentos: ["Bateria Funk", "Baixo Marcante", "Samples Sociais", "Vocal Consciente", "Backing Vocals", "Instrumentos Diversos", "Efeitos Ambientes"],
        estrutura: "Intro reflexiva, Verso crítico, Refrão consciente, Verso 2 social, Bridge esperança, Final motivacional",
        arranjo: "Letra como protagonista, instrumental que apoia mensagem, elementos que reforçam consciência social",
        producao: "Clareza vocal máxima, instrumentação supporting, samples bem integrados, master que preserva mensagem",
        dinamica: "Variações que acompanham narrativa, momentos de reflexão, builds de conscientização",
        emocoes: "Consciência social, esperança de mudança, crítica construtiva, força comunitária, educação",
        tecnica: "Vocal clarity priority, message-supporting production, social samples integration",
        negativo: "Evitar frivolidade, ostentação, vulgaridade, mensagens vazias, comercialização que perca essência"
      },
      {
        id: 'funk-proibidao',
        name: 'Funk Proibidão',
        style: "Cru, Explícito, Underground, Realidade, Sem filtro",
        mood: "Realidade crua, Revolta, Protesto, Confronto, Verdade",
        bpm: "140–160 BPM",
        instrumentos: ["Bateria Pesada", "Bass 808 Extremo", "Samples Reais", "Vocal Agressivo", "Efeitos de Guerra", "Sirenes", "Ambientes Urbanos"],
        estrutura: "Intro impactante, Verso realidade, Refrão confronto, Verso 2 revolta, Drop guerra, Final resistência",
        arranjo: "Batida agressiva dominante, vocal direto e cru, samples da realidade, elementos de confronto",
        producao: "Produção crua intencional, compressão agressiva, distorção controlada, energia máxima, underground aesthetics",
        dinamica: "Energia máxima constante, impactos súbitos, agressividade controlada, força bruta",
        emocoes: "Revolta social, resistência, verdade crua, protesto, força das ruas",
        tecnica: "Raw production, aggressive compression, reality sampling, underground mixing",
        negativo: "Evitar comercialização, produção polida, censura, suavização da mensagem"
      },
      {
        id: 'funk-gospel',
        name: 'Funk Gospel',
        style: "Espiritual, Dançante, Jovem, Evangélico, Positivo",
        mood: "Fé, Alegria, Celebração, Louvor, Evangelização",
        bpm: "125–145 BPM",
        instrumentos: ["Bateria Funk", "Baixo Gospel", "Teclados", "Vocal Evangélico", "Coro Jovem", "Samples Gospel", "Percussão"],
        estrutura: "Intro louvor, Verso testemunhal, Refrão gospel dançante, Verso 2, Bridge adoração, Final celebração",
        arranjo: "Groove funk com mensagem gospel, vocal evangélico claro, elementos de louvor, energia positiva",
        producao: "Mix gospel moderna, compressão musical, reverb espiritual, vocal message clarity, master inspirador",
        dinamica: "Energia gospel positiva, builds de louvor, momentos de adoração, celebração final",
        emocoes: "Fé jovem, alegria espiritual, evangelização, celebração cristã, energia positiva",
        tecnica: "Gospel message priority, funk groove integration, spiritual reverb, youth energy",
        negativo: "Evitar mundanismo, vulgaridade, desrespeito espiritual, comercialização vazia"
      },
      {
        id: 'funk-pop',
        name: 'Funk Pop',
        style: "Comercial, Acessível, Radio-friendly, Mainstream, Polido",
        mood: "Diversão, Alegria, Festa, Descontração, Positividade",
        bpm: "115–135 BPM",
        instrumentos: ["Bateria Pop", "Baixo Funk", "Synths Pop", "Vocal Comercial", "Backing Vocals", "Guitarra Pop", "Elementos Eletrônicos"],
        estrutura: "Intro cativante, Verso pop, Pré-refrão build, Refrão chiclete, Verso 2, Bridge pop, Refrão final expansivo",
        arranjo: "Hook melódico forte, groove funk comercial, vocal acessível, instrumentação pop moderna",
        producao: "Mix polida e brilhante, compressão comercial, reverb pop, vocal processing, master radio-ready",
        dinamica: "Energia comercial constante, builds calculados, hooks estratégicos, finais impactantes",
        emocoes: "Diversão mainstream, alegria comercial, festa pop, descontração urbana, positividade jovem",
        tecnica: "Commercial polish, pop hooks, funk groove balance, radio-friendly mastering",
        negativo: "Evitar vulgaridade, agressividade, elementos underground, produção crua, mensagens pesadas"
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
        style: "Consciente, Lírico, Autêntico, Social, Periférico",
        mood: "Crítico, Reflexivo, Combativo, Realista, Esperançoso",
        bpm: "80–100 BPM",
        instrumentos: ["Samples", "Drums Programados", "Bass", "Scratches", "Vocal Rap", "Backing Vocals", "Instrumentos Diversos"],
        estrutura: "Intro sample, Verso narrativo, Refrão consciente, Verso 2 crítico, Bridge reflexivo, Outro sample",
        arranjo: "Vocal rap como protagonista absoluto, base instrumental simples mas impactante, samples criativos e contextuais",
        producao: "Mix seca e direta, vocal destacado e claro, samples bem trabalhados, compressão controlada, clareza da mensagem",
        dinamica: "Flow variado e expressivo, momentos de tensão social, builds de conscientização, impactos emocionais",
        emocoes: "Consciência social profunda, luta pela justiça, verdade das ruas, esperança de mudança, força comunitária",
        tecnica: "Vocal clarity máximo, sample chopping criativo, drum programming tight, message-focused mixing",
        negativo: "Evitar melodias açucaradas, produção pop comercial, mensagens vazias, comercialização que perca autenticidade"
      },
      {
        id: 'trap-rap',
        name: 'Trap Rap',
        style: "Moderno, Melódico, Auto-tuned, Comercial, Jovem",
        mood: "Confiante, Moderno, Urbano, Aspiracional, Flexível",
        bpm: "140–160 BPM",
        instrumentos: ["808 Drums", "Hi-hats Rápidos", "Synths", "Vocal Auto-tuned", "Bass Sub", "Pads Atmosféricos", "Samples Melódicos"],
        estrutura: "Intro atmospheric, Verso melódico, Hook cativante, Verso 2, Bridge experimental, Outro fade",
        arranjo: "Hi-hats em destaque rítmico, 808s pesados, vocal processado mas expressivo, atmosferas modernas",
        producao: "Auto-tune criativo e musical, reverb espacial moderna, compressão agressiva controlada, stereo imaging wide",
        dinamica: "Energia alta moderna, drops súbitos, variações de flow, builds atmosféricos, finais impactantes",
        emocoes: "Confiança jovem, modernidade urbana, aspirações, lifestyle, poder pessoal, sucesso",
        tecnica: "Vocal tuning musical, 808 programming, atmospheric production, modern stereo imaging",
        negativo: "Evitar instrumentação orgânica demais, produção vintage, flows antigos, mensagens datadas"
      },
      {
        id: 'rap-gospel',
        name: 'Rap Gospel',
        style: "Espiritual, Evangelístico, Positivo, Edificante, Testemunhal",
        mood: "Fé, Testimonio, Esperança, Força espiritual, Evangelização",
        bpm: "85–110 BPM",
        instrumentos: ["Samples Gospel", "Drums Hip-Hop", "Piano", "Strings", "Vocal Rap", "Coro", "Órgão Hammond"],
        estrutura: "Intro espiritual, Verso testemunhal, Refrão gospel, Verso 2 evangelístico, Bridge adoração, Final glorioso",
        arranjo: "Flow rap claro, samples gospel integrados, mensagem espiritual central, instrumental que apoia fé",
        producao: "Vocal clarity prioritário, reverb espiritual, samples gospel bem trabalhados, warmth cristão, master inspirador",
        dinamica: "Variações que acompanham testimonio, builds espirituais, momentos íntimos, explosões de fé",
        emocoes: "Fé genuína, testimonio poderoso, esperança cristã, força espiritual, evangelização efetiva",
        tecnica: "Message clarity, gospel sample integration, spiritual reverb, testimony-focused production",
        negativo: "Evitar mundanismo, vulgaridade, desrespeito espiritual, comercialização vazia da fé"
      },
      {
        id: 'boom-bap',
        name: 'Boom Bap',
        style: "Clássico, Old School, Cru, Tradicional, Underground",
        mood: "Nostálgico, Autêntico, Cru, Real, Tradicional",
        bpm: "85–95 BPM",
        instrumentos: ["Drums Vintage", "Samples Vinyl", "Bass", "Scratches", "Vocal Cru", "Minimal Elements"],
        estrutura: "Intro scratch, Verso clássico, Refrão simples, Verso 2, Scratch solo, Outro vintage",
        arranjo: "Drums como base sólida, samples vintage criativos, vocal direto e cru, elementos minimalistas",
        producao: "Estética vintage, compressão analógica, warmth do vinil, gravação crua mas limpa, stereo clássico",
        dinamica: "Groove clássico constante, variações de flow, breaks de scratch, energia underground",
        emocoes: "Nostalgia hip-hop, autenticidade das origens, cultura de rua pura, respeito às raízes",
        tecnica: "Vintage sampling, analog compression, classic stereo imaging, scratch integration",
        negativo: "Evitar modernização excessiva, auto-tune, trap elements, comercialização mainstream"
      },
      {
        id: 'gangsta-rap',
        name: 'Gangsta Rap',
        style: "Agressivo, Cru, Realista, Confrontativo, Street",
        mood: "Agressivo, Realista, Confrontativo, Cru, Intenso",
        bpm: "75–95 BPM",
        instrumentos: ["Drums Pesados", "Bass Profundo", "Samples Dark", "Vocal Agressivo", "Efeitos Urbanos", "Strings Tensas"],
        estrutura: "Intro dark, Verso agressivo, Refrão confrontativo, Verso 2 intenso, Bridge tenso, Final impactante",
        arranjo: "Atmosfera dark dominante, vocal agressivo central, instrumentação pesada, elementos de tensão",
        producao: "Mix pesada e agressiva, compressão intensa, reverb dark, vocal presente, master impactante",
        dinamica: "Intensidade alta, variações agressivas, builds de tensão, impactos sonoros, energia bruta",
        emocoes: "Realidade crua das ruas, confronto social, intensidade urbana, força bruta, resistência",
        tecnica: "Aggressive mixing, dark atmosphere, heavy compression, street authenticity",
        negativo: "Evitar suavização, produção pop, mensagens edificantes, comercialização mainstream"
      },
      {
        id: 'rap-melodico',
        name: 'Rap Melódico',
        style: "Melódico, Comercial, Acessível, Harmônico, Radio-friendly",
        mood: "Melodioso, Comercial, Acessível, Positivo, Romântico",
        bpm: "90–120 BPM",
        instrumentos: ["Melodias", "Drums Suaves", "Piano", "Strings", "Vocal Melódico", "Harmonias", "Instrumentação Rica"],
        estrutura: "Intro melódica, Verso rap melódico, Refrão cantado, Verso 2, Bridge harmônico, Final melódico",
        arranjo: "Melodia como base, rap integrado harmonicamente, vocal acessível, instrumentação rica e comercial",
        producao: "Mix comercial polida, compressão musical, reverb melódico, vocal processing, master radio-ready",
        dinamica: "Fluxo melódico constante, variações harmônicas, builds comerciais, finais impactantes",
        emocoes: "Acessibilidade comercial, melodia cativante, positividade, romance urbano, sucesso mainstream",
        tecnica: "Melodic integration, commercial polish, harmonic processing, radio-ready mastering",
        negativo: "Evitar agressividade, elementos underground, produção crua, mensagens pesadas"
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
        style: "Moderno, Agressivo, Eletrônico, Urbano, Pesado",
        mood: "Intenso, Futurista, Urbano, Confiante, Poderoso",
        bpm: "140–160 BPM",
        instrumentos: ["808 Drums", "Hi-hats Rápidos", "Synths", "Vocal Auto-tuned", "Bass Sub", "Pads Atmosféricos", "Samples"],
        estrutura: "Intro atmospheric, Verso trap, Hook melódico, Verso 2, Bridge experimental, Outro fade",
        arranjo: "Hi-hats em destaque, 808s pesados dominantes, vocal processado expressivo, atmosferas densas e modernas",
        producao: "Auto-tune criativo, reverb espacial, compressão agressiva, stereo imaging wide, sub-bass proeminente",
        dinamica: "Energia alta constante, drops súbitos impactantes, variações de flow, builds atmosféricos",
        emocoes: "Atitude urbana, modernidade, poder, confiança, energia futurista, sucesso",
        tecnica: "Vocal tuning musical, 808 programming preciso, atmospheric production, stereo width maximizado",
        negativo: "Evitar instrumentação orgânica, produção vintage, tempos lentos, elementos acústicos"
      },
      {
        id: 'trap-melody',
        name: 'Trap Melódico',
        style: "Melódico, Emotivo, Comercial, Auto-tuned, Romántico",
        mood: "Melancólico, Romântico, Emotivo, Vulnerável, Moderno",
        bpm: "70–90 BPM",
        instrumentos: ["808s Suaves", "Melodias Tristes", "Auto-tune", "Piano", "Strings", "Pads", "Hi-hats Sutis"],
        estrutura: "Intro melancólica, Verso emotivo, Refrão melódico, Verso 2, Bridge romântico, Final fade",
        arranjo: "Melodias tristes dominantes, vocal auto-tuned emotivo, 808s suaves, atmosferas românticas",
        producao: "Auto-tune melódico, reverb romântico, compressão suave, espacialização emotiva",
        dinamica: "Energia baixa emotiva, builds melódicos, momentos íntimos, crescendos românticos",
        emocoes: "Melancolia urbana, amor moderno, vulnerabilidade, tristeza, nostalgia",
        tecnica: "Melodic auto-tune, romantic reverb, soft compression, emotional mixing",
        negativo: "Evitar agressividade, energia alta, elementos pesados, produção crua"
      },
      {
        id: 'drill',
        name: 'Drill',
        style: "Sombrio, Agressivo, Cru, Underground, Realista",
        mood: "Sombrio, Agressivo, Realista, Tenso, Confrontativo",
        bpm: "140–150 BPM",
        instrumentos: ["808s Dark", "Hi-hats Agressivos", "Samples Sombrios", "Vocal Cru", "Bass Pesado", "Efeitos Dark"],
        estrutura: "Intro dark, Verso agressivo, Hook confrontativo, Verso 2, Bridge tenso, Final impactante",
        arranjo: "Atmosfera sombria dominante, vocal agressivo direto, beats pesados, elementos de tensão",
        producao: "Mix dark e pesada, compressão agressiva, reverb sombrio, vocal cru presente",
        dinamica: "Intensidade constante, builds agressivos, drops pesados, energia underground",
        emocoes: "Realidade crua, tensão urbana, agressividade, resistência, força das ruas",
        tecnica: "Dark atmosphere, aggressive processing, underground aesthetics, raw energy",
        negativo: "Evitar melodias, elementos pop, produção polida, comercialização mainstream"
      },
      {
        id: 'trap-gospel',
        name: 'Trap Gospel',
        style: "Espiritual, Moderno, Jovem, Evangélico, Inspirador",
        mood: "Fé moderna, Inspiração, Juventude cristã, Testimonio, Esperança",
        bpm: "120–140 BPM",
        instrumentos: ["808s Gospel", "Hi-hats", "Piano", "Strings", "Vocal Gospel", "Coro Jovem", "Samples Bíblicos"],
        estrutura: "Intro espiritual, Verso testemunhal, Refrão gospel, Verso 2, Bridge adoração, Final glorioso",
        arranjo: "Beat trap moderno, mensagem gospel clara, elementos espirituais, energia jovem cristã",
        producao: "Mix moderna gospel, compressão controlada, reverb espiritual, vocal message clarity",
        dinamica: "Energia gospel moderna, builds espirituais, momentos de adoração, finais inspiradores",
        emocoes: "Fé jovem, testimonio moderno, esperança, inspiração cristã, força espiritual",
        tecnica: "Modern gospel production, trap elements integration, spiritual messaging",
        negativo: "Evitar mundanismo, vulgaridade, desrespeito espiritual, comercialização vazia"
      },
      {
        id: 'trap-funk',
        name: 'Trap Funk',
        style: "Fusion, Dançante, Brasileiro, Moderno, Festivo",
        mood: "Festa, Dança, Energia, Diversão, Modernidade brasileira",
        bpm: "130–150 BPM",
        instrumentos: ["808s Funk", "Hi-hats Brasileiros", "Samples Funk", "Vocal Dançante", "Bass Brasileiro", "Percussão"],
        estrutura: "Intro fusion, Verso dançante, Drop funk-trap, Verso 2, Bridge brasileiro, Final festa",
        arranjo: "Fusion trap-funk, elementos brasileiros, vocal dançante, energia festiva constante",
        producao: "Mix festa brasileira, compressão dançante, elementos funk integrados, master energético",
        dinamica: "Energia festiva constante, drops dançantes, variações brasileiras, finais explosivos",
        emocoes: "Festa brasileira moderna, diversão, dança, energia jovem, brasilidade urbana",
        tecnica: "Fusion production, Brazilian elements integration, dance-focused mixing",
        negativo: "Evitar separação de estilos, produção fria, falta de groove brasileiro"
      },
      {
        id: 'trap-jazz',
        name: 'Trap Jazz',
        style: "Sofisticado, Experimental, Jazz-influenced, Artístico, Fusion",
        mood: "Sofisticado, Experimental, Criativo, Urbano elegante, Artístico",
        bpm: "80–120 BPM",
        instrumentos: ["808s Jazz", "Hi-hats Sutis", "Piano Jazz", "Samples Jazz", "Vocal Smooth", "Instrumentos Jazz", "Harmonias"],
        estrutura: "Intro jazz, Verso sophisticated, Hook harmônico, Solo jazz, Bridge experimental, Outro fusion",
        arranjo: "Elementos jazz integrados, harmonia sofisticada, groove urbano elegante, instrumentação rica",
        producao: "Mix sofisticada, compressão musical, reverb jazz, espacialização artística, warmth analógico",
        dinamica: "Groove sofisticado, variações jazzísticas, solos expressivos, builds artísticos",
        emocoes: "Sofisticação urbana, criatividade artística, elegância moderna, experimentação musical",
        tecnica: "Jazz-trap fusion, sophisticated processing, artistic production, harmonic complexity",
        negativo: "Evitar simplicidade excessiva, comercialização barata, falta de sofisticação musical"
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
        style: "Rural, Tradicional, Honesto, Storytelling, Roots",
        mood: "Nostalgia, Simplicidade, Liberdade, Amor pela terra, Valores familiares",
        bpm: "100–120 BPM",
        instrumentos: ["Guitarra Acústica", "Banjo", "Fiddle", "Steel Guitar", "Harmônica", "Vocal Country", "Bateria Simples"],
        estrutura: "Intro instrumental, Verso narrativo, Refrão marcante, Solo steel guitar, Verso 2, Final storytelling",
        arranjo: "Guitarra como base, steel guitar melódico, vocal storytelling central, instrumentação tradicional americana",
        producao: "Gravação natural, reverb sutil, compressão suave, warmth analógico, master dinâmico tradicional",
        dinamica: "Narrativa musical, momentos íntimos, crescendos emocionais, finais contemplativos",
        emocoes: "Saudade rural, honestidade, amor pela terra, valores tradicionais, simplicidade genuína",
        tecnica: "Natural room sound, instrument clarity, vocal presence, traditional recording",
        negativo: "Evitar eletrônicos, auto-tune, produção urbana, complexidade excessiva"
      },
      {
        id: 'country-rock',
        name: 'Country Rock',
        style: "Energético, Rock-influenced, Elétrico, Moderno, Powerful",
        mood: "Energia, Liberdade, Rebeldia rural, Força, Atitude",
        bpm: "120–140 BPM",
        instrumentos: ["Guitarra Elétrica", "Steel Guitar", "Baixo Elétrico", "Bateria Rock", "Vocal Potente", "Harmônica", "Fiddle"],
        estrutura: "Intro rock, Verso energético, Refrão poderoso, Solo guitarra, Bridge country, Final explosivo",
        arranjo: "Guitarras elétricas dominantes, steel guitar integrado, seção rítmica rock, vocal country potente",
        producao: "Mix rock mas country, compressão rock controlada, reverb americana, guitar presence",
        dinamica: "Energia rock constante, solos marcantes, builds poderosos, finais impactantes",
        emocoes: "Liberdade americana, rebeldia rural, energia, força interior, independência",
        tecnica: "Rock production with country elements, guitar-focused mixing, powerful dynamics",
        negativo: "Evitar perda da identidade country, produção muito urbana, excesso de distorção"
      },
      {
        id: 'bluegrass',
        name: 'Bluegrass',
        style: "Tradicional, Acústico, Virtuoso, Roots, Familiar",
        mood: "Tradição, Família, Nostalgia, Alegria rural, Comunidade",
        bpm: "120–160 BPM",
        instrumentos: ["Banjo", "Fiddle", "Mandolin", "Guitarra Acústica", "Contrabaixo", "Vocal Harmony", "Dobro"],
        estrutura: "Intro instrumental, Verso tradicional, Refrão harmônico, Solos virtuosos rotativos, Final ensemble",
        arranjo: "Instrumentos acústicos em destaque alternado, harmonias vocais fechadas, solos virtuosos",
        producao: "Gravação acústica natural, reverb mínimo, separação instrumental clara, dinâmicas preservadas",
        dinamica: "Energia acústica alta, solos expressivos, harmonias ricas, finais virtuosos",
        emocoes: "Tradição familiar, virtuosismo, alegria rural, comunidade, herança cultural",
        tecnica: "Acoustic recording, natural separation, virtuoso emphasis, harmonic clarity",
        negativo: "Evitar amplificação, eletrônicos, produção moderna, perda da tradição"
      },
      {
        id: 'country-pop',
        name: 'Country Pop',
        style: "Comercial, Mainstream, Acessível, Polido, Radio-friendly",
        mood: "Otimista, Romântico, Acessível, Positivo, Comercial",
        bpm: "110–130 BPM",
        instrumentos: ["Guitarra Country", "Piano", "Bateria Pop", "Baixo", "Steel Guitar", "Strings", "Vocal Comercial"],
        estrutura: "Intro cativante, Verso acessível, Pré-refrão, Refrão chiclete, Bridge pop, Final comercial",
        arranjo: "Elementos country com produção pop, vocal comercial central, instrumentação acessível",
        producao: "Mix polida comercial, compressão pop, reverb controlado, vocal processing sutil, master radio",
        dinamica: "Energia comercial, builds calculados, hooks estratégicos, finais impactantes",
        emocoes: "Romance acessível, otimismo, positividade, diversão, valores familiares modernos",
        tecnica: "Commercial polish, pop-country balance, radio-ready production, accessible mixing",
        negativo: "Evitar complexidade, elementos underground, produção crua, mensagens pesadas"
      },
      {
        id: 'outlaw-country',
        name: 'Outlaw Country',
        style: "Rebelde, Cru, Alternativo, Autêntico, Anti-establishment",
        mood: "Rebeldia, Liberdade, Autenticidade, Resistência, Independência",
        bpm: "90–120 BPM",
        instrumentos: ["Guitarra Crua", "Harmônica", "Piano Honky-tonk", "Bateria Simples", "Baixo", "Vocal Áspero", "Steel Guitar"],
        estrutura: "Intro cru, Verso rebelde, Refrão direto, Solo instrumental, Bridge autêntico, Final independente",
        arranjo: "Instrumentação crua mas expressiva, vocal áspero central, elementos rebeldes, simplicidade intencional",
        producao: "Estética crua controlada, compressão mínima, reverb natural, preservação de imperfeições",
        dinamica: "Energia crua, expressão autêntica, momentos intensos, finais honestos",
        emocoes: "Rebeldia autêntica, liberdade individual, resistência, honestidade crua, independência",
        tecnica: "Raw authenticity, minimal processing, honest recording, rebellious character",
        negativo: "Evitar polimento excessivo, comercialização, perda da autenticidade, mainstream appeal"
      },
      {
        id: 'folk-country',
        name: 'Folk Country',
        style: "Intimista, Storytelling, Acústico, Poético, Contemplativo",
        mood: "Contemplativo, Narrativo, Íntimo, Poético, Reflexivo",
        bpm: "80–110 BPM",
        instrumentos: ["Violão Acústico", "Harmônica", "Banjo Suave", "Vocal Íntimo", "Contrabaixo", "Fiddle Sutil", "Piano Simples"],
        estrutura: "Intro íntima, Verso narrativo, Refrão contemplativo, Verso 2 poético, Bridge reflexivo, Final sussurrado",
        arranjo: "Vocal como narrador central, instrumentação minimalista mas expressiva, atmosfera íntima",
        producao: "Gravação íntima, reverb sutil, compressão gentil, proximidade vocal, warmth natural",
        dinamica: "Dinâmicas sutis, expressão contida, momentos reflexivos, crescendos delicados",
        emocoes: "Contemplação profunda, poesia rural, intimidade, reflexão, simplicidade genuína",
        tecnica: "Intimate recording, subtle processing, storytelling emphasis, natural warmth",
        negativo: "Evitar energia excessiva, produção pesada, comercialização, perda da intimidade"
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