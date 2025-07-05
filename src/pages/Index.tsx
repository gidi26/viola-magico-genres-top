import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { musicGenres } from "@/data/musicGenres";

const Index = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const sertanejoGenre = musicGenres.find(genre => genre.id === 'sertanejo');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background">
      {/* Header */}
      <div className="border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Gêneros Musicais Sertanejo</h1>
            <p className="text-muted-foreground">Olá, {user?.email}</p>
          </div>
          <div className="flex gap-2">
            {isAdmin && (
              <Button onClick={() => navigate('/admin')} variant="outline">
                Painel Admin
              </Button>
            )}
            <Button onClick={handleSignOut} variant="ghost">
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {/* Sertanejo Main Card */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">{sertanejoGenre?.name}</CardTitle>
              <CardDescription>
                Explore os diferentes subgêneros do sertanejo brasileiro
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Subgenres Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sertanejoGenre?.subgenres.map((subgenre) => (
              <Card key={subgenre.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{subgenre.name}</CardTitle>
                    <Badge variant="secondary">{subgenre.bpm}</Badge>
                  </div>
                  <CardDescription className="font-medium text-primary/80">
                    {subgenre.style}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Características:</h4>
                    <p className="text-sm text-muted-foreground">{subgenre.mood}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Instrumentos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subgenre.instrumentos.slice(0, 4).map((instrumento, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {instrumento}
                        </Badge>
                      ))}
                      {subgenre.instrumentos.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{subgenre.instrumentos.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Emoções:</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {subgenre.emocoes}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;