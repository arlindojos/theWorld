<h1>TheWorld </h1> 

### visite-nos [TheWorld](https://theworld.vercel.app/)

TheWorld é um cliente REST que nos permite visualizar e fazer o download das informações de propriedades dos países presentes na API (https://restcountries.eu) como nome, capital, região, sub-região, população, área, fuso horário, nome nativo e a bandeira.
<br /> Podendo fazer a pesquisa usando nome do país, Cidade Capital, Lingua e a Região. A aplicação pode ser visualisada no Modo de luz ou no Modo escuro.

<p align="center"><b>Light Mode</b> / <b>Darkt Mode</b></p>
<p align="center">
  <img src="https://github.com/arlindojos/theWorld/blob/master/src/styles/images/light-mode-country-info.PNG" alt="in Light Mode" width="47%" />
  <img src="https://github.com/arlindojos/theWorld/blob/master/src/styles/images/black-mode.PNG" alt="In Dark Mode" width="47%" />
</p>


## 🛠 Techs
Construido com [React.js](https://pt-br.reactjs.org/) e [Typescript](https://www.typescriptlang.org/).
### 🛠 Feramentas de auxilio 
 - [SWR](https://swr.vercel.app/) Uma FermWork do tipo Stele-While-Revalidate, ela aplica uma estrategia de cache no HTTP para permitir retornar os dados do cache depois buscar a validação. Éssa estrategia é aplicada para aumentar a experiencia do usuário, não ter que esperar a aplicação fazer o mesmo caregamento de dados na API.
 
 
 - [Axios](https://github.com/axios/axios) Usado junto com SWR para fazer as requisições na API
 
 - [React Context API](https://reactjs.org/docs/context.html) Para prover em toda a aplicação dados vindo da API e acções importante do usuário dentro da aplicação
 
 - [Styled-componets](https://github.com/styled-components/styled-components) Uma feramenta que nos permite usar CSS no arquivo Javascript ou Typescript
  
 ## ⚙ Instalação e Start
A aplicação já existe hopedada na vercel pelo dominio [theworld.vercel.app](https://theworld.vercel.app/).
<br />Para a intalação na sua maquina, primeiro certifique-se de que tenha instalado Node.js, antes de seguir os passos abaixo.

### Clonagem
Primeiro, clone o repositório para seu ambiente:

```bash
> git clone https://github.com/arlindojos/theWorld.git
```

No seu terminal, entra no repositorio clonado e insira o comando: 
<br />`npm install`  ou `yarn add` se tiver yarn instalado  #para instalar as dependencias
<br />`npm run start`  ou `yarn start` se tiver yarn instalado  #para inicial a aplicação

Provavelmente precisara da extensão "vscode-styled-components" intalada no seu vscode, se estiver usando vscode para que o editor possa enteder o CSS no arquivo ts

