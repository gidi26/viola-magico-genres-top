import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

const Setup = () => {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const createAdminUser = async () => {
    setLoading(true)
    try {
      // Criar usuário no auth
      const { data, error } = await supabase.auth.signUp({
        email: 'g_dferreira@hotmail.com',
        password: 'admin123', // Senha padrão - ALTERE depois!
      })

      if (error) throw error

      // Criar registro na tabela users
      if (data.user) {
        const { error: dbError } = await supabase
          .from('users')
          .insert([
            {
              id: data.user.id,
              name: 'Administrador',
              email: 'g_dferreira@hotmail.com',
            }
          ])
        
        if (dbError && !dbError.message.includes('duplicate')) {
          throw dbError
        }
      }

      toast({
        title: 'Usuário criado com sucesso!',
        description: 'Email: g_dferreira@hotmail.com | Senha: admin123',
      })

      setTimeout(() => {
        navigate('/login')
      }, 2000)

    } catch (error: any) {
      toast({
        title: 'Erro ao criar usuário',
        description: error.message,
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Setup Inicial</CardTitle>
          <CardDescription>
            Criar usuário administrador padrão
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm">
            <p><strong>Email:</strong> g_dferreira@hotmail.com</p>
            <p><strong>Senha:</strong> admin123</p>
            <p className="text-destructive">⚠️ Altere a senha após o primeiro login!</p>
          </div>
          <Button 
            onClick={createAdminUser} 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Criando usuário...' : 'Criar Usuário Admin'}
          </Button>
          <Button 
            onClick={() => navigate('/login')} 
            variant="outline" 
            className="w-full"
          >
            Ir para Login
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Setup