# NextJs page router starter pack

### ✨ Typescript 🌟 Redux-toolkit 🪄 Eslint 🪄 Prettier 🔥 SWR ✔️ Cypress ✔️ React Testing library 🚀 Zod 💰 DaisyUi 🎁 Docker 👀 Husky 💀 Mongoose 


## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Run](#run)
- [Database](#database)
- [Tools](#tools)
- [Scripts](#scripts)

## Getting Started

### Docker
Make sure you have installed Docker in your machine. \
With docker you just have to run one command from your terminal to run project.\
To persist data to database have to set environment variable in .env file. See .env.example


MongoDB local connection issue: 

might cause issue:
```bash
mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1
```

Replace `127.0.0.1` with `mongo` in URI.

correct:
```bash
mongodb://mongo:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1
```


```bash
docker-compose up --build
```


### Manuel setup
Before you can use Event Manager, you need to install its dependencies. Follow these steps:

1. Clone this repository to your local machine.

```bash
git clone <repository-url>
cd event-manager
```

### Installation

First, install dependencies and initial setup:

```bash
npm i or yarn

# then for setup pre-commit hook

npm run setup:husky 

#or 

yarn setup:husky
```

### Run

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
```

## Database

Create a `.env` file in root directory. An example .env.example file added with key.

Add your mongoDB uri in env file.

#### Project is configured with Eslint config, prettier. If use Vscode editor, code will automatically show error on compile time and will format on save


## Tools

- [SWR](https://swr.vercel.app/) - Used for http request. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- [REDUX-TOOLKIT](https://redux-toolkit.js.org/) - State management
- [Redux-hook-form](https://react-hook-form.com/) - Form control 
- [ZOD](https://zod.dev/) - Zod is a TypeScript-first schema declaration and validation library.
- [React Icons](https://react-icons.github.io/react-icons/) 
- [Date-fns](https://date-fns.org/) - Date utility
- [DaisyUI](https://daisyui.com/) - Tailwind Css component library for default styling and theming
- [React testing library](https://testing-library.com/) - For unit and integration test
- Typescript
- Mongoose
- Husky - a pre-commit hook to run test and lint before commit

## Script 

### Test
 To run test 
 
 ```bash
 npm run test
 ```
 
 To clear jest cache
 ```bash
 npm run test:clear
 ```
 
 ### Prettify
 
 To manully format code
 
  ```bash
 npm run format
 ```
 
 To check lint issue
  ```bash
 npm run lint
 ```
 
 ### Other
 
 To find unused files or entrypoints
  ```bash
 npm run find:unused
 ```
 
 To analyze the bundle size
   ```bash
 npm run analyze
 
 #or
 npm run analyze:server
 
 #or
 npm run analyze:browser
 ```
