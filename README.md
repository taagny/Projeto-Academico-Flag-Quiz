# 🌍 Flag Quiz

Aplicativo mobile de quiz de bandeiras desenvolvido com **React Native + Expo**.

## Sobre o App

O Flag Quiz é um jogo onde o usuário deve adivinhar a qual país pertence uma bandeira exibida na tela. A cada acerto, o nível avança e uma nova bandeira é apresentada. Em caso de erro, o jogo reinicia com uma nova bandeira no mesmo nível.

## Funcionalidades

- Tela inicial com animação de pulso
- 20 países com imagens reais das bandeiras
- 4 alternativas por pergunta (embaralhadas aleatoriamente)
- Animação de entrada da bandeira a cada nível
- Animação de shake ao errar
- Tela de "Nível Concluído" ao acertar
- Progressão infinita de níveis

## Estrutura do Projeto

```
FlagQuiz/
├── assets/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── GameScreen.js
│   │   └── ResultScreen.js
│   ├── data/
│   │   └── flags.js
│   ├── utils/
│   │   └── shuffle.js
│   └── App.js
├── App.js
├── app.json
├── package.json
└── babel.config.js
```

## Como rodar

```bash
npm install
npm start
```

Escaneie o QR Code com o aplicativo **Expo Go** no seu celular.

## Tecnologias

- React Native
- Expo SDK 56
- flagcdn.com (API de bandeiras)

## Atividade

Desenvolvido como entrega da AECO da disciplina **Programação para Dispositivos Móveis** — Curso de Ciência da Computação.