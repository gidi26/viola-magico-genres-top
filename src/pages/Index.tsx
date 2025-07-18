import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/ThemeToggle";
import { musicGenres, instrumentosOptions, Genre, SubGenre } from "@/data/musicGenres";
import { useIsMobile } from "@/hooks/use-mobile";
import studioBg1 from "@/assets/studio-bg-1.jpg";
import studioBg2 from "@/assets/studio-bg-2.jpg";
import studioBg3 from "@/assets/studio-bg-3.jpg";
import studioBg4 from "@/assets/studio-bg-4.jpg";
import studioBg5 from "@/assets/studio-bg-5.jpg";
import studioBg6 from "@/assets/studio-bg-6.jpg";

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [selectedGenre, setSelectedGenre] = useState<string>("sertanejo");
  const [selectedSubgenre, setSelectedSubgenre] = useState<string>("");
  const [style, setStyle] = useState("");
  const [mood, setMood] = useState("");
  const [bpm, setBpm] = useState("");
  const [instrumentos, setInstrumentos] = useState<string[]>([]);
  const [estrutura, setEstrutura] = useState("");
  const [arranjo, setArranjo] = useState("");
  const [producao, setProducao] = useState("");
  const [dinamica, setDinamica] = useState("");
  const [emocoes, setEmocoes] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [negativo, setNegativo] = useState("");
  const [prompt, setPrompt] = useState("");

  const currentGenre = musicGenres.find(g => g.id === selectedGenre);
  const currentSubgenre = currentGenre?.subgenres.find(s => s.id === selectedSubgenre);

  const getBannerInfo = () => {
    const defaultSubtitle = "A mente dos maiores Engenheiros de áudio, Produtores Musicais e Estúdios do mundo em um só lugar.";
    
    switch (selectedGenre) {
       case 'sertanejo':
         return {
           title: "Sertanejo",
           subtitle: defaultSubtitle,
           image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=1200&h=400&fit=crop"
         };
      case 'pop':
        return {
          title: "Pop",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop"
        };
       case 'rock':
         return {
           title: "Rock",
           subtitle: defaultSubtitle,
           image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop"
         };
       case 'rnb':
         return {
           title: "R&B",
           subtitle: defaultSubtitle,
           image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop"
         };
      case 'samba-pagode':
        return {
          title: "Samba/Pagode",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop"
        };
      case 'gospel':
        return {
          title: "Gospel",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop"
        };
       case 'funk':
         return {
           title: "Funk",
           subtitle: defaultSubtitle,
           image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop"
         };
       case 'rap':
         return {
           title: "Rap",
           subtitle: defaultSubtitle,
           image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=400&fit=crop"
         };
       case 'trap':
         return {
           title: "Trap",
           subtitle: defaultSubtitle,
           image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=400&fit=crop"
         };
      case 'country':
        return {
          title: "Country",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop"
        };
      case 'mpb':
        return {
          title: "MPB",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop"
        };
       case 'funk-soul':
         return {
           title: "Funk Soul",
           subtitle: defaultSubtitle,
           image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop"
         };
      case 'violao-voz':
        return {
          title: "Violão e Voz",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop"
        };
      case 'piano-voz':
        return {
          title: "Piano e Voz",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop"
        };
      case 'axe':
        return {
          title: "Axé",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop"
        };
      default:
        return {
          title: "Gerador de Prompts Musicais",
          subtitle: defaultSubtitle,
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop"
        };
    }
  };

  const bannerInfo = getBannerInfo();

  const getSubgenreBackground = (genreId: string, index: number) => {
    const backgrounds = [studioBg1, studioBg2, studioBg3, studioBg4, studioBg5, studioBg6];
    
    // Create a consistent but different seed for each genre to avoid repetition across genres
    const genreHash = genreId.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    // Shuffle backgrounds based on genre and use index to get unique images per subgenre
    const shuffledForGenre = [...backgrounds].sort((a, b) => {
      const aIndex = backgrounds.indexOf(a);
      const bIndex = backgrounds.indexOf(b);
      return ((aIndex + genreHash) % 1000) - ((bIndex + genreHash) % 1000);
    });
    
    const selectedBg = shuffledForGenre[index % shuffledForGenre.length];
    console.log('Background for genre', genreId, 'index', index, ':', selectedBg);
    return selectedBg;
  };

  const preencherSugestoes = (subgenre: SubGenre) => {
    setStyle(subgenre.style);
    setMood(subgenre.mood);
    setBpm(subgenre.bpm);
    setInstrumentos(subgenre.instrumentos);
    setEstrutura(subgenre.estrutura);
    setArranjo(subgenre.arranjo);
    setProducao(subgenre.producao);
    setDinamica(subgenre.dinamica);
    setEmocoes(subgenre.emocoes);
    setTecnica(subgenre.tecnica);
    setNegativo(subgenre.negativo);
  };

  useEffect(() => {
    if (currentGenre && currentGenre.subgenres.length > 0) {
      const firstSubgenre = currentGenre.subgenres[0];
      setSelectedSubgenre(firstSubgenre.id);
    }
  }, [selectedGenre]);

  useEffect(() => {
    if (currentSubgenre) {
      preencherSugestoes(currentSubgenre);
    }
  }, [currentSubgenre]);

  const gerarPrompt = () => {
    const genreTexto = currentGenre?.name || "";
    const subgenreTexto = currentSubgenre?.name || "";
    const instrumentosTexto = instrumentos.join(", ");
    
    const promptGerado = `<SONG_PROMPT>
   <SONG_DETAILS>
      [GENRES: ${genreTexto}, ${subgenreTexto}]
      [STYLE: ${style}]
      [MOOD: ${mood}]
      [TEMPO: ${bpm}]
      [INSTRUMENTATION: ${instrumentosTexto}]
      [ARRANGEMENT: ${arranjo}]
      [PRODUCTION: ${producao}]
      [STRUCTURE: ${estrutura}]
      [DYNAMICS: ${dinamica}]
      [EMOTIONS: ${emocoes}]
   </SONG_DETAILS>

   <TECHNICAL_TREATMENT>
      [${tecnica}]
   </TECHNICAL_TREATMENT>

   <NEGATIVE_PROMPT>
      ${negativo}
   </NEGATIVE_PROMPT>
</SONG_PROMPT>`;

    setPrompt(promptGerado);
  };

  const copiarPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast({
        title: "MetaTag copiado!",
        description: "O MetaTag foi copiado para a área de transferência.",
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o MetaTag.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 transition-colors duration-300">
      <ThemeToggle />
      
      <div className="max-w-5xl mx-auto">
        <div className="neo-card">
          {/* Dynamic Banner */}
          <div 
            className="relative text-center mb-8 h-64 rounded-3xl overflow-hidden transition-all duration-500"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${bannerInfo.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <p className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold mb-2 tracking-wider uppercase drop-shadow-lg`} style={{ color: 'hsl(var(--community-yellow))' }}>
                REDESIGN.APP
              </p>
              <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                {bannerInfo.title}
              </h1>
              <p className="text-white/90 text-sm md:text-lg max-w-2xl">
                {bannerInfo.subtitle}
              </p>
            </div>
          </div>

          {/* Seleção de Gênero */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="text-lg font-semibold text-primary">Selecione o Gênero Musical:</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {musicGenres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => setSelectedGenre(genre.id)}
                    className={`neo-button text-sm font-medium transition-all ${
                      selectedGenre === genre.id 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Seleção de Subgênero */}
            {currentGenre && (
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-primary">Escolha o Subgênero:</Label>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                   {currentGenre.subgenres.map((subgenre, index) => (
                       <div
                         key={subgenre.id}
                         className={`relative neo-card p-4 cursor-pointer transition-all overflow-hidden group ${
                           selectedSubgenre === subgenre.id 
                             ? 'bg-primary/10 shadow-lg' 
                             : 'hover:shadow-md'
                         }`}
                         onClick={() => setSelectedSubgenre(subgenre.id)}
                         style={{
                           backgroundImage: `url(${getSubgenreBackground(selectedGenre, index)})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center'
                         }}
                       >
                         <div className="absolute inset-0 bg-black/60 backdrop-blur-none"></div>
                          <div className="relative z-10">
                            <h3 className="font-semibold text-white drop-shadow-xl mb-2">{subgenre.name}</h3>
                            <p className="text-sm text-white/95 drop-shadow-xl font-medium">{subgenre.style}</p>
                            <p className="text-xs text-white drop-shadow-xl font-semibold mt-1">{subgenre.mood}</p>
                          </div>
                       </div>
                   ))}
                 </div>
              </div>
            )}

            {/* Formulário de Detalhes */}
            {currentSubgenre && (
              <div className="neo-card p-6 space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Configurações para {currentSubgenre.name}
                </h2>
                
                {/* Campos básicos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="style">Estilo/Atmosfera:</Label>
                    <input 
                      id="style"
                      value={style}
                      onChange={(e) => setStyle(e.target.value)}
                      placeholder="Ex: Romântico, Energético, Melancólico"
                      className="neo-input w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mood">Mood/Humor:</Label>
                    <input 
                      id="mood"
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                      placeholder="Ex: Alegre, Nostálgico, Intenso"
                      className="neo-input w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bpm">Tempo (BPM):</Label>
                    <input 
                      id="bpm"
                      value={bpm}
                      onChange={(e) => setBpm(e.target.value)}
                      placeholder="Ex: 120 BPM"
                      className="neo-input w-full"
                    />
                  </div>
                </div>

                {/* Instrumentação */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Instrumentação:</Label>
                  <div className="neo-card p-4 max-h-64 overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {instrumentosOptions.map((instrumento) => (
                        <label key={instrumento} className="flex items-center space-x-2 text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            checked={instrumentos.includes(instrumento)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setInstrumentos([...instrumentos, instrumento]);
                              } else {
                                setInstrumentos(instrumentos.filter(i => i !== instrumento));
                              }
                            }}
                            className="rounded accent-primary"
                          />
                          <span className="text-foreground">{instrumento}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outros campos */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="estrutura">Estrutura Musical:</Label>
                    <input 
                      id="estrutura"
                      value={estrutura}
                      onChange={(e) => setEstrutura(e.target.value)}
                      placeholder="Ex: Intro, Verso, Refrão, Ponte, Solo, Final"
                      className="neo-input w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="arranjo">Arranjo/Construção:</Label>
                    <input 
                      id="arranjo"
                      value={arranjo}
                      onChange={(e) => setArranjo(e.target.value)}
                      placeholder="Ex: Vocal principal, harmonias, base rítmica"
                      className="neo-input w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="producao">Produção:</Label>
                    <input 
                      id="producao"
                      value={producao}
                      onChange={(e) => setProducao(e.target.value)}
                      placeholder="Ex: Mix aberta, reverb natural, compressão sutil"
                      className="neo-input w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dinamica">Dinâmica/Expressividade:</Label>
                    <input 
                      id="dinamica"
                      value={dinamica}
                      onChange={(e) => setDinamica(e.target.value)}
                      placeholder="Ex: Build-ups, drops, variações de intensidade"
                      className="neo-input w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emocoes">Emoções:</Label>
                    <input 
                      id="emocoes"
                      value={emocoes}
                      onChange={(e) => setEmocoes(e.target.value)}
                      placeholder="Ex: Alegria, melancolia, empolgação"
                      className="neo-input w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tecnica">Tratamento Técnico:</Label>
                    <input 
                      id="tecnica"
                      value={tecnica}
                      onChange={(e) => setTecnica(e.target.value)}
                      placeholder="Ex: Vocal destacado, automação, panning criativo"
                      className="neo-input w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="negativo">Prompt Negativo (evitar):</Label>
                    <input 
                      id="negativo"
                      value={negativo}
                      onChange={(e) => setNegativo(e.target.value)}
                      placeholder="Ex: Evite elementos artificiais, mix abafada"
                      className="neo-input w-full"
                    />
                  </div>
                </div>

                {/* Botão Gerar */}
                <button 
                  onClick={gerarPrompt}
                  className="neo-button w-full !bg-primary !text-primary-foreground font-bold text-lg py-4"
                >
                  Gerar MetaTag
                </button>

                {/* Área do Prompt */}
                {prompt && (
                  <div className="space-y-3">
                    <Label htmlFor="prompt-txt" className="text-lg font-semibold">MetaTag Gerado:</Label>
                    <textarea 
                      id="prompt-txt"
                      value={prompt}
                      readOnly
                      className="neo-input w-full min-h-80 font-mono text-sm resize-none"
                    />
                    <button 
                      onClick={copiarPrompt}
                      className="neo-button w-full !bg-accent !text-accent-foreground font-bold flex items-center justify-center gap-2"
                    >
                      <Copy className="h-5 w-5" />
                      Copiar MetaTag
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
