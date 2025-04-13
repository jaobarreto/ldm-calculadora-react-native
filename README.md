# Calculadora React Native

Este projeto é uma calculadora simples desenvolvida com React Native e TypeScript, seguindo as melhores práticas de componentização e gerenciamento de estado.

## 📋 Pré-requisitos

Antes de começar, verifique se você tem instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://expo.io/) (opcional, mas recomendado)
- Emulador Android/iOS ou dispositivo físico para teste

## 🚀 Como executar o projeto

1. **Clone o repositório**

```bash
git clone https://github.com/jaobarreto/ldm-calculadora-react-native.git
cd app-calculadora
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**

Para Android:
```bash
npm run android
# ou
yarn android
```

Para iOS:
```bash
npm run ios
# ou
yarn ios
```

Com Expo:
```bash
npm start
# ou
yarn start
```

## 🛠 Funcionalidades

- Operações básicas (+, -, *, /)
- Validação de entrada
- Tratamento de erros (divisão por zero)
- Interface limpa e intuitiva
- Teclado numérico otimizado
- Fechamento do teclado ao tocar fora

## 🧩 Componentes Principais

- `CalculatorScreen`: Tela principal da calculadora
- `InputField`: Componente de entrada de valores
- `Button`: Botões de operação
- `Display`: Área de resultados

## 📦 Estrutura do Projeto

```
/app-calculadora
├── components
│   ├── Button.tsx
│   ├── CalculatorScreen.tsx
│   ├── Display.tsx
│   └── InputField.tsx
├── app
│   ├── index.tsx
│   └── _layout.tsx
├── constants
│   └── Colors.ts
└── hooks
    └── useColorScheme.ts
```


## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
