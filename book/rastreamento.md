#### **1️⃣ Arquitetura da Integração do Rastreamento**

##### **Opção 1: Dispositivo GPS + API Backend**

- Um **dispositivo GPS** (como um chip de rastreamento) coleta as coordenadas do animal.
- O dispositivo envia **dados periodicamente** para o backend via **API REST/WebSocket**.
- O backend armazena as coordenadas no banco de dados e processa a movimentação.

##### **Opção 2: Aplicativo Móvel como Rastreador**

- Se não houver um dispositivo GPS dedicado, um aplicativo no celular do dono pode compartilhar a localização do animal quando estiver próximo.
- A cada intervalo de tempo (por exemplo, a cada 5 minutos), o app coleta a localização e envia para o backend.

#### **2️⃣ Tecnologias Envolvidas**

- **Dispositivo GPS:** Hardware com comunicação via **LTE/LoRaWAN/Bluetooth**.
- **Backend (NestJS):** Endpoint para receber localização e armazenar dados (exemplo: PostgreSQL com extensão PostGIS para geolocalização).
- **Frontend (Angular):** Integração com **Google Maps API** ou **OpenStreetMap/Leaflet/Mapbox(Geofencing)** para exibir a localização do animal em tempo real.
- **Notificações:** Se o animal sair de uma área delimitada, o sistema pode enviar alertas via **Firebase Cloud Messaging (FCM)**.

#### **3️⃣ Fluxo de Dados**

1. **O dispositivo GPS ou aplicativo coleta as coordenadas (latitude, longitude).**
2. **As coordenadas são enviadas para o backend via API REST/WebSocket.**
3. **O backend processa os dados e os armazena no banco.**
4. **O frontend acessa os dados via API e os exibe no mapa.**
5. **Caso o animal saia de uma área segura, o backend dispara um alerta.**

#### **4️⃣ Passo Inicial**

Para começar, você pode:

- Criar um **endpoint no NestJS** (`/location`) para receber coordenadas.
- Criar um **modelo no banco de dados** para armazenar histórico de localização.
- Integrar com **Google Maps API** no Angular para exibir as posições.

### 🌐 **Próximos Passos**

1. **Definir a abordagem do rastreamento**

   - O rastreamento incluirá **tempo real** e **histórico**.
   - Para **tempo real**, considerar o uso de **MQTT** para comunicação eficiente.
   - Para **histórico**, armazenar dados no banco de dados para consultas futuras.

2. **Escolher API de Mapas**

   - **Google Maps API** (pagamento por uso, mais documentação, melhor precisão)
   - **OpenStreetMap** (gratuito, requer mais configuração)

3. **Modelagem de Dados**

   - Implementar **PostGIS** (caso use PostgreSQL) ou **MongoDB com índices geoespaciais** para armazenar coordenadas.
   - Criar tabelas para **Pets e Localização**.

4. **Backend no NestJS**

   - Criar um **endpoint para salvar localizações**.
   - Implementar **filtros para buscar localizações por data, pet ou região**.

5. **Frontend no Angular**

   - Criar um **mapa interativo** para visualizar a localização dos pets.
   - Atualizar a posição do pet em tempo real, se necessário.

6. **Testes e Validação**
   - Validar precisão da geolocalização em diferentes dispositivos.
   - Garantir segurança dos dados de localização dos usuários.
