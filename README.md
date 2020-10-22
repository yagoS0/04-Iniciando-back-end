# Recuperacão de senha

**RF**

- O usuario deve poder recuperar sua senha informado e seu e-email;
- O usuario deve receber um e-email com instrucão de recuperacão de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Ultilizar Mailtrap para testar envios em ambitente dev;
- Ultilizar Amazon SES para envios em producão;
- O envio de e-emails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atualizacao do perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha;

**RN**

- O usuario não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber um notificacão sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificacões não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificacões do prestador devem ser armazenadas no MongoDB;
- As notificacões do prestador devem ser enviados em tempo-real ultilizando Socket.io;

**RN**

-A notificacão deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de servicos

**RF**

- O usuario deve poder listar todos prestadores de servico cadastrado;
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenado em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuario não pode agendar em um horario já ocupado;
- O usuario não pode agendar em um horario que já passou;
- O usuario não pode agendar servicos consigo mesmo;
# 04-Iniciando-back-end
