# 🚀 Fluxo do Usuário no Controle de Alimentação (MVP)

## 1. Acesso ao app / login

- Usuário faz login no app.
- No dashboard, vê a seção “Alimentação” com chamadas de ação:
  - Exemplo: “Crie o plano alimentar do seu pet!” se não houver plano ativo.

---

## 2. Criação do Plano Alimentar

- Botão: **Adicionar Plano Alimentar**
- Passos guiados:
  - Seleciona o pet.
  - Sugestão automática de horários e quantidades (baseadas em peso/raça).
  - Possibilidade de ajuste manual.
  - Confirmação e salvamento.
- Feedback: “Plano alimentar criado com sucesso! 🎉”

---

## 3. Recebendo lembretes

- App envia push notification nos horários programados:
  - Exemplo: “Hora da refeição do Max! Não esqueça de registrar.”
- Notificação secundária após 10 minutos, se não houver registro:
  - “Ainda não registramos a refeição de Max. Precisa de ajuda?”

---

## 4. Registro da refeição

- Notificação leva ao formulário de registro:
  - Pet (pré-selecionado)
  - Tipo (ração, petisco, suplemento)
  - Quantidade e unidade
  - Botão **Registrar**
- Feedback visual e vibratório:
  - “Ótimo! Max está bem alimentado hoje! 😊”

---

## 5. Visualização do histórico

- Menu: **Histórico de Alimentação**
- Apresentação:
  - Gráficos diários e semanais (círculo de adesão)
  - Lista detalhada de refeições registradas.
  - Opção de exportar relatório (PDF).

---

## 6. Alertas de falhas

- Caso o tutor não registre uma refeição dentro do intervalo esperado:
  - Alerta: “⚠ Max não teve a refeição das 12h registrada. Está tudo bem?”
- Possibilidade de registro retroativo.

---

## 7. Edição de plano alimentar

- Tutor acessa o plano alimentar a qualquer momento.
- Pode editar horários e quantidades.
- Feedback após confirmação.

---

## 8. Encerramento de plano

- Quando o plano for desativado:
  - Notificação: “O plano alimentar do Max foi encerrado. Gostaria de criar um novo?”

---

\*

# Estrutura das Entidades no Fluxo do Usuário

## ✅ 1. `FeedingPlanTable` (Plano Alimentar)

### Onde entra no fluxo:

- Quando o usuário acessa o app e clica em **Adicionar Plano Alimentar**, ele está criando registros nesta tabela.
- O usuário informa: horários das refeições, tipo (ração, petisco, suplemento), quantidade, unidade e observações.
- Essas informações ficam salvas e o app usa esses planos para gerar lembretes automáticos e previsões de registro.

### Importância no fluxo:

- É o coração da função.
- Toda notificação, alerta e sugestão se baseia no que foi planejado aqui.
- O usuário pode visualizar, editar ou encerrar esse plano a qualquer momento.

---

## ✅ 2. `MealRecordTable` (Registro da Refeição)

### Onde entra no fluxo:

- Quando o usuário recebe uma notificação e acessa o app para **registrar a refeição**, esse dado é gravado aqui.
- Cada registro faz o relacionamento entre o `feedingPlanId` e a refeição de fato (quanto foi dado, qual horário, tipo, etc.).
- O registro pode ser feito no momento exato ou retroativo.

### Importância no fluxo:

- Essencial para calcular o cumprimento do plano.
- Gera dados para o histórico diário, semanal e relatórios.
- Serve como base para alertas de refeições não registradas.

---

## ✅ 3. `FeedingReminderTable` (Lembretes de Alimentação)

### Onde entra no fluxo:

- Quando o usuário cria o plano, o app automaticamente gera lembretes baseados nesses horários.
- Essa tabela controla o horário em que o push notification será enviado, se o lembrete está ativo e quando foi o último envio.
- O usuário poderá ativar ou desativar lembretes de forma granular no futuro.

### Importância no fluxo:

- Mantém o usuário engajado e disciplinado.
- Reduz esquecimento e abandono do plano.
- Controla o volume de notificações para evitar sobrecarga.

---

## ✅ 4. `FeedingHistoryTable` (Histórico de Alimentação)

### Onde entra no fluxo:

- Quando o usuário vai na tela de **Histórico de Alimentação**, o app monta gráficos e indicadores usando os dados dessa tabela.
- A tabela armazena o resumo do dia: quantas refeições estavam previstas, quantas foram cumpridas e o percentual de adesão.

### Importância no fluxo:

- Dá ao usuário uma visão de disciplina alimentar ao longo dos dias.
- Base para gamificação e feedback motivacional.
- Também é utilizado na exportação de relatórios e pode gerar insights para recomendações futuras.

---
