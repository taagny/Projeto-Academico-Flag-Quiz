# 🌍 Flag Quiz

Aplicativo mobile de quiz de bandeiras desenvolvido com **React Native + Expo**.

## Sobre o App

O Flag Quiz é um jogo onde o usuário deve adivinhar a qual país pertence uma bandeira exibida na tela. A cada acerto, o nível avança e uma nova bandeira é apresentada. Em caso de erro, o jogo reinicia do Nível 1 com uma nova bandeira.

## Funcionalidades

- Tela inicial com animação de pulso no botão
- **50 países** com imagens reais das bandeiras (via flagcdn.com)
- 4 alternativas por pergunta (embaralhadas aleatoriamente)
- Animação de fade na entrada da bandeira a cada nível
- Animação de shake ao errar
- Tela de resultado verde (acerto) ou vermelha (erro) com animação spring
- Badge de nível exibido durante o jogo
- Botão "Sair" na tela do jogo e "Voltar ao início" na tela de resultado
- Botão "Fechar app" na tela inicial
- Progressão infinita de níveis sem repetição de bandeiras já usadas

## Estrutura do Projeto

```
FlagQuiz/
├── assets/
│   ├── icon.png
│   ├── splash.png
│   ├── android-icon-foreground.png
│   ├── android-icon-background.png
│   └── android-icon-monochrome.png
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js       # Tela inicial com animação de pulso
│   │   ├── GameScreen.js       # Tela do jogo com bandeira e alternativas
│   │   └── ResultScreen.js     # Tela de acerto/erro com animação spring
│   ├── data/
│   │   └── flags.js            # Array com 50 países, códigos e URIs
│   ├── utils/
│   │   └── shuffle.js          # Fisher-Yates shuffle e geração de questões
│   └── App.js                  # Controle de navegação e estado global
├── App.js                      # Entry point — registra src/App.js
├── app.json
├── eas.json
├── package.json
└── babel.config.js
```

## Como rodar localmente

```bash
npm install
npx expo start
```

Escaneie o QR Code com o aplicativo **Expo Go** no seu celular.

## Como gerar o APK (Android)

Este projeto está configurado com **EAS Build**. Para gerar um APK:

```bash
npm install -g eas-cli
eas login
eas build --profile preview --platform android
```

O APK ficará disponível para download no painel do EAS após o build.

## Tecnologias

- React Native
- Expo SDK 56
- EAS Build (Expo Application Services)
- flagcdn.com (imagens das bandeiras)

## Atividade

Desenvolvido como entrega da AECO da disciplina **Programação para Dispositivos Móveis** — Curso de Ciência da Computação.