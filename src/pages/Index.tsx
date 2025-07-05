import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Bem-vindo ao Sistema
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Olá, {user?.email}! Você está logado no sistema.
        </p>
        <div className="flex gap-4 justify-center">
          {isAdmin && (
            <Button onClick={() => navigate('/admin')} size="lg">
              Painel Admin
            </Button>
          )}
          <Button onClick={handleSignOut} variant="outline" size="lg">
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;