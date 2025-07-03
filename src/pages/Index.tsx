import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Music, Copy, Music2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sertanejoPresets = {
  raiz: {
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
  universitario: {
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
  pop: {
    style: "Pop, Comercial, Acessível",
    mood: "Romântico, Inspirador, Contagiante",
    bpm: "100–120 BPM",
    instrumentos: ["Violão 6 Cordas", "Violão 12 Cordas", "Baixo Elétrico", "Bateria Acústica", "Teclado/Synth Pads", "Coro Feminino", "Guitarra"],
    estrutura: "Intro, Verso, Ponte, Refrão, Solo, Final",
    arranjo: "Camadas de violão, vocais limpos, synth pop discreto, refrão marcante",
    producao: "Mix brilhante, reverb pop, compressão moderada, ambiência moderna",
    dinamica: "Construção para refrão, drop, final emotivo",
    emocoes: "Romance, alegria, esperança",
    tecnica: "Afinação vocal, automação de delays, reforço de graves",
    negativo: "Evite voz sem emoção, loops previsíveis, mix abafada"
  },
  romantico: {
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
  },
  modao: {
    style: "Épico, Intenso, Tradicional",
    mood: "Dramático, Saudoso, Heróico",
    bpm: "90–112 BPM",
    instrumentos: ["Viola Caipira", "Violão 12 Cordas", "Acordeon/Sanfona", "Baixo Elétrico", "Zabumba", "Triângulo", "Gaita de Boca"],
    estrutura: "Introdução, Primeira Parte, Ponte, Refrão, Solo de Viola, Final",
    arranjo: "Viola em destaque, solos instrumentais, segunda voz potente",
    producao: "Mix aberta, room natural, reverberação generosa",
    dinamica: "Versos lentos, refrão explosivo, solos expressivos",
    emocoes: "Nostalgia, grandeza, esperança",
    tecnica: "Automação de viola, mix estéreo aberta",
    negativo: "Evite timbres pop, synths exagerados"
  },
  sofrencia: {
    style: "Profundo, Doloroso, Contundente",
    mood: "Sofrimento, Solidão, Lamento",
    bpm: "80–110 BPM",
    instrumentos: ["Violão 6 Cordas", "Acordeon/Sanfona", "Baixo Elétrico", "Piano", "Gaita de Boca", "Voz Segunda"],
    estrutura: "Intro, Verso, Ponte, Refrão, Final",
    arranjo: "Voz marcante, refrão intenso, solos de gaita",
    producao: "Mix dramática, reverb longo, compressão leve",
    dinamica: "Versos calmos, refrão poderoso",
    emocoes: "Dor, superação, esperança",
    tecnica: "Automação dramática de voz, delays, reverb profundo",
    negativo: "Evite mix abafada, voz monótona, loops"
  },
  agro: {
    style: "Rústico, Agro, Festivo",
    mood: "Energia, Alegria, Força",
    bpm: "110–132 BPM",
    instrumentos: ["Violão 6 Cordas", "Baixo Elétrico", "Bateria Acústica", "Teclado/Synth Pads", "Palmas", "Percussão Brasileira", "Coro Masculino"],
    estrutura: "Intro, Primeira Parte, Ponte, Refrão, Solo, Final",
    arranjo: "Groove acelerado, refrão explosivo, backing vocals animados",
    producao: "Mix aberta, graves presentes, efeitos modernos",
    dinamica: "Refrão forte, partes dançantes",
    emocoes: "Festa, alegria, empolgação",
    tecnica: "Sidechain em percussão, automação de graves",
    negativo: "Evite excesso de synth, mix embolada"
  },
  eletrificado: {
    style: "Modernizado, Pop, Dance",
    mood: "Animado, Enérgico, Dançante",
    bpm: "115–130 BPM",
    instrumentos: ["Violão 6 Cordas", "Baixo Elétrico", "Guitarra", "Teclado/Synth Pads", "Bateria Acústica", "Percussão Brasileira"],
    estrutura: "Intro, Verso, Ponte, Refrão, Drop, Solo, Final",
    arranjo: "Guitarras processadas, synths, grooves eletrônicos",
    producao: "Mix moderna, compressão sidechain, ambiência pop/eletrônica",
    dinamica: "Construção progressiva, drop dançante",
    emocoes: "Alegria, festa, empolgação",
    tecnica: "Automação de FX, delays, panning criativo",
    negativo: "Evite sons sintéticos demais, mix embolada"
  },
  feminino: {
    style: "Delicado, Forte, Inspirador",
    mood: "Autoestima, Romance, Superação",
    bpm: "95–120 BPM",
    instrumentos: ["Violão 6 Cordas", "Piano", "Coro Feminino", "Acordeon/Sanfona", "Baixo Elétrico", "Gaita de Boca"],
    estrutura: "Intro, Primeira Parte, Ponte, Refrão, Solo, Final",
    arranjo: "Voz principal feminina, coros, instrumentação delicada",
    producao: "Mix aberta, ênfase em voz, reverberação suave",
    dinamica: "Versos suaves, refrão poderoso, solos de piano/gaita",
    emocoes: "Força, esperança, paixão",
    tecnica: "Afinação vocal natural, automação de reverb, mix transparente",
    negativo: "Evite compressão pesada, voz sem brilho"
  },
  country: {
    style: "Western, Country, Sertanejo de Fronteira",
    mood: "Aventura, Saudade, Liberdade",
    bpm: "100–128 BPM",
    instrumentos: ["Guitarra slide", "Pedal Steel", "Violão 12 Cordas", "Banjo", "Pandeiro", "Baixo Elétrico", "Bateria Acústica"],
    estrutura: "Intro, Verso, Refrão, Solo, Finalização",
    arranjo: "Violão marcado, pedal steel, solos instrumentais, ritmo country",
    producao: "Mix aberta, ambiência de estrada, compressão leve",
    dinamica: "Refrão marcante, solos envolventes",
    emocoes: "Saudade, liberdade, alegria",
    tecnica: "Automação de pedal steel, pan estéreo de cordas",
    negativo: "Evite loops eletrônicos, mix artificial"
  }
};

const instrumentosOptions = [
  "Viola Caipira", "Violão 6 Cordas", "Violão 12 Cordas", "Acordeon/Sanfona",
  "Bateria Acústica", "Baixo Elétrico", "Contrabaixo Acústico", "Guitarra (clean/drive/slide/chorus)",
  "Pedal Steel", "Cavaquinho", "Banjo", "Pandeiro", "Zabumba", "Triângulo",
  "Harpa", "Teclado/Synth Pads", "Percussão Brasileira", "Flauta", "Voz Principal",
  "Voz Segunda", "Coro Feminino", "Coro Masculino", "Palmas", "Assovio", "Gaita de Boca"
];

const Index = () => {
  const { toast } = useToast();
  const [subgenero, setSubgenero] = useState("raiz");
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

  const preencherSugestoes = (subgeneroKey: string) => {
    const preset = sertanejoPresets[subgeneroKey as keyof typeof sertanejoPresets];
    if (preset) {
      setStyle(preset.style);
      setMood(preset.mood);
      setBpm(preset.bpm);
      setInstrumentos(preset.instrumentos);
      setEstrutura(preset.estrutura);
      setArranjo(preset.arranjo);
      setProducao(preset.producao);
      setDinamica(preset.dinamica);
      setEmocoes(preset.emocoes);
      setTecnica(preset.tecnica);
      setNegativo(preset.negativo);
    }
  };

  useEffect(() => {
    preencherSugestoes(subgenero);
  }, [subgenero]);

  const gerarPrompt = () => {
    const subgeneroTexto = {
      raiz: "Sertanejo Raiz (Tradicional)",
      universitario: "Sertanejo Universitário",
      pop: "Pop-Sertanejo",
      romantico: "Sertanejo Romântico",
      modao: "Modão de Viola",
      sofrencia: "Sertanejo Sofrência",
      agro: "Sertanejo Agro",
      eletrificado: "Sertanejo Eletrificado",
      feminino: "Sertanejo Feminino",
      country: "Country Sertanejo"
    }[subgenero];

    const instrumentosTexto = instrumentos.join(", ");
    
    const promptGerado = `<SONG_PROMPT>
   <SONG_DETAILS>
      [GENRES: Sertanejo, ${subgeneroTexto}]
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
        title: "Prompt copiado!",
        description: "O prompt foi copiado para a área de transferência.",
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o prompt.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sertanejo-warm to-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-sertanejo-primary to-sertanejo-secondary text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold">
              <Music className="h-8 w-8" />
              Meta Tag Sertanejo Motta
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Subgênero */}
            <div className="space-y-2">
              <Label htmlFor="subgenero" className="flex items-center gap-2">
                <Music2 className="h-4 w-4" />
                Subgênero Sertanejo:
              </Label>
              <Select value={subgenero} onValueChange={setSubgenero}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="raiz">Sertanejo Raiz (Tradicional)</SelectItem>
                  <SelectItem value="universitario">Sertanejo Universitário</SelectItem>
                  <SelectItem value="pop">Pop-Sertanejo</SelectItem>
                  <SelectItem value="romantico">Sertanejo Romântico</SelectItem>
                  <SelectItem value="modao">Modão de Viola</SelectItem>
                  <SelectItem value="sofrencia">Sertanejo Sofrência</SelectItem>
                  <SelectItem value="agro">Sertanejo Agro</SelectItem>
                  <SelectItem value="eletrificado">Sertanejo Eletrificado</SelectItem>
                  <SelectItem value="feminino">Sertanejo Feminino</SelectItem>
                  <SelectItem value="country">Country Sertanejo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Campos em linha */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="style">Estilo/Atmosfera:</Label>
                <Input 
                  id="style"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  placeholder="Caloroso, Romântico, Festivo, Sofrido"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mood">Mood/Humor:</Label>
                <Input 
                  id="mood"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  placeholder="Saudade, Paixão, Superação, Alegria"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bpm">Tempo (BPM):</Label>
                <Input 
                  id="bpm"
                  value={bpm}
                  onChange={(e) => setBpm(e.target.value)}
                  placeholder="72–132 BPM"
                />
              </div>
            </div>

            {/* Instrumentação */}
            <div className="space-y-2">
              <Label>Instrumentação Principal:</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-40 overflow-y-auto border rounded p-2">
                {instrumentosOptions.map((instrumento) => (
                  <label key={instrumento} className="flex items-center space-x-2 text-sm">
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
                      className="rounded"
                    />
                    <span>{instrumento}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Outros campos */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="estrutura">Estrutura Musical (seções):</Label>
                <Input 
                  id="estrutura"
                  value={estrutura}
                  onChange={(e) => setEstrutura(e.target.value)}
                  placeholder="Introdução, Primeira Parte, Ponte, Refrão, Solo de Viola, Segunda Parte, Modulação, Finalização"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="arranjo">Arranjo/Construção:</Label>
                <Input 
                  id="arranjo"
                  value={arranjo}
                  onChange={(e) => setArranjo(e.target.value)}
                  placeholder="Dupla vocal, violas em diálogo, camadas harmônicas, percussão orgânica, solos instrumentais"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="producao">Produção:</Label>
                <Input 
                  id="producao"
                  value={producao}
                  onChange={(e) => setProducao(e.target.value)}
                  placeholder="Mix aberta, timbres naturais, uso de reverb de sala, ambiência rural, harmônicos brilhantes"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dinamica">Dinâmica/Expressividade:</Label>
                <Input 
                  id="dinamica"
                  value={dinamica}
                  onChange={(e) => setDinamica(e.target.value)}
                  placeholder="Subidas de refrão, solos expressivos, pausas dramáticas, variação de intensidade"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="emocoes">Emoções:</Label>
                <Input 
                  id="emocoes"
                  value={emocoes}
                  onChange={(e) => setEmocoes(e.target.value)}
                  placeholder="Saudade, Romance, Festa, Superação, Sofrimento, Esperança"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tecnica">Tratamento Técnico/Sugestões:</Label>
                <Input 
                  id="tecnica"
                  value={tecnica}
                  onChange={(e) => setTecnica(e.target.value)}
                  placeholder="Dupla vocal bem destacada, automação de reverb, solos de viola, panning detalhado"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="negativo">Prompt Negativo (evitar):</Label>
                <Input 
                  id="negativo"
                  value={negativo}
                  onChange={(e) => setNegativo(e.target.value)}
                  placeholder="Evite timbres artificiais, loops repetitivos, mix abafada, voz sem emoção"
                />
              </div>
            </div>

            {/* Botão Gerar */}
            <Button 
              onClick={gerarPrompt}
              className="w-full bg-sertanejo-primary hover:bg-sertanejo-secondary text-white"
            >
              Gerar Prompt
            </Button>

            {/* Área do Prompt */}
            {prompt && (
              <div className="space-y-2">
                <Label htmlFor="prompt-txt">Prompt gerado:</Label>
                <Textarea 
                  id="prompt-txt"
                  value={prompt}
                  readOnly
                  className="min-h-80 bg-slate-900 text-white border-slate-700"
                />
                <Button 
                  onClick={copiarPrompt}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copiar Prompt
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
