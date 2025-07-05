# Hotmart Webhook Integration

Esta edge function processa webhooks da Hotmart para cadastro automático de usuários.

## Setup

1. **Execute a migration SQL** no Supabase para criar as tabelas:
   ```sql
   -- Execute o arquivo: supabase/migrations/001_create_users_and_purchases.sql
   ```

2. **Deploy a function**:
   ```bash
   supabase functions deploy hotmart-webhook
   ```

3. **Configure o webhook na Hotmart**:
   - URL: `https://[seu-projeto].supabase.co/functions/v1/hotmart-webhook`
   - Método: POST
   - Eventos: Compra aprovada, Assinatura ativada, etc.

## Estrutura do Payload Esperado

```json
{
  "data": {
    "buyer": {
      "name": "Nome do Comprador",
      "email": "email@exemplo.com",
      "document": "12345678901"
    },
    "product": {
      "id": 123456,
      "name": "Nome do Produto"
    },
    "purchase": {
      "transaction": "TXN123456",
      "status": "APPROVED",
      "date": "2024-01-01T12:00:00Z"
    }
  }
}
```

## Funcionalidades

- ✅ Cadastra novos usuários automaticamente
- ✅ Atualiza usuários existentes
- ✅ Registra compras/matrículas
- ✅ Validação de dados obrigatórios
- ✅ Logs detalhados para debug
- ✅ Tratamento de erros

## Testando

Você pode testar localmente usando:
```bash
curl -X POST https://[seu-projeto].supabase.co/functions/v1/hotmart-webhook \
  -H "Content-Type: application/json" \
  -d '{"data": {"buyer": {"name": "Teste", "email": "teste@email.com"}, "product": {"id": 123, "name": "Produto Teste"}, "purchase": {"transaction": "TEST123", "status": "APPROVED", "date": "2024-01-01T12:00:00Z"}}}'
```