# 📅 Aplicativo de Agendamento Médico

Este é um **aplicativo simples de agendamento de consultas médicas** desenvolvido em **React Native**. O aplicativo permite que os usuários escolham uma **data e um horário** para agendar uma consulta, armazenando os dados localmente usando **AsyncStorage**.

---

## 📌 Funcionalidades

✅ Agendar uma consulta selecionando **data e horário**  
✅ Listar consultas já agendadas  
✅ Excluir uma consulta  
✅ **Armazenamento local** das consultas com **AsyncStorage**  
✅ Interface amigável e intuitiva usando **React Native Paper**  

---

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile  
- **AsyncStorage** - Persistência de dados localmente  
- **@react-native-community/datetimepicker** - Seleção de datas  
- **React Native Paper** - Componentes de UI modernos e responsivos  
- **Expo** - Plataforma para desenvolvimento e testes  

---

## 💻 Como Executar o Projeto

### **1️⃣ Pré-requisitos**
- **Node.js** instalado
- **Expo CLI** instalado globalmente (`npm install -g expo-cli`)

### **2️⃣ Clonar o Repositório**
```sh
git clone https://github.com/thiagorussi/agendamentoMedico.git
cd agendamentoMedico
```

### **3️⃣ Instalar Dependências**
```sh
npm install
```

### **4️⃣ Executar o Aplicativo**
```sh
npx expo start
```
📱 Para testar no celular, basta escanear o **QR Code** exibido com o aplicativo **Expo Go**.

---

## 📜 Como Funciona?

1. **Selecionar uma data** – O usuário clica no botão "Selecionar Data" e escolhe um dia no calendário.  
2. **Inserir o horário** – O usuário digita o horário da consulta.  
3. **Agendar a consulta** – A consulta é salva localmente e aparece na lista.  
4. **Excluir consulta** – O usuário pode remover um agendamento clicando no botão "Excluir".  

---

## 🛠 Possíveis Melhorias Futuras

🚀 Conectar com um **backend real** para sincronizar agendamentos em tempo real  
📢 Implementar **notificações push** para lembrar os usuários sobre consultas  
🔍 Adicionar um **filtro de busca** para facilitar a organização das consultas  

---

## 📜 Licença

Este projeto é de código aberto e pode ser utilizado para fins acadêmicos e educacionais.
