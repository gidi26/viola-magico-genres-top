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