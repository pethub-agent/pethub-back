# SaaS para Animais de Estimação

# [MVP](./topicos/mvp.md)

## Tecnologias

**PWA**, **Angular**, **NestJS**

## Funcionalidades Principais

### 1. [Rastreamento](./topicos/rastreamento.md) 📍

- **O que incluir?** Cadastro do animal, localização em tempo real (se viável), histórico de movimentação.
- **Tecnologias:** GPS integrado (se houver hardware), APIs de localização (Google Maps, OpenStreetMap).
- **Passo inicial:** Criar um modelo de dados para armazenar informações do animal e sua localização.

### 2. Gestão de Saúde 🏥

- **O que incluir?** Vacinação, histórico médico, lembretes de consultas.
- **Tecnologias:** Banco de dados estruturado (PostgreSQL, MongoDB com NestJS + Prisma), notificações.
- **Passo inicial:** Criar o modelo de dados para registros médicos e implementar CRUD básico.

### 3. Agendamento de Serviços 📅

- **O que incluir?** Agendamento com veterinários, pet shops, passeadores.
- **Tecnologias:** Calendário interativo (FullCalendar, Angular Material), sistema de notificações.
- **Passo inicial:** Criar o modelo de dados para agendamentos e um endpoint para criar reservas.
