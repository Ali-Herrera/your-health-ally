<!-- LINK TO TOP -->
<a name="readme-top"></a>



<!-- PROJECT SHIELDS -->
<!-- ![https://flat.badgen.net/github/Contributors/Ali-Herrera/your-health-ally](https://flat.badgen.net/github/Contributors/Ali-Herrera/your-health-ally)
![https://flat.badgen.net/github/Stars/Ali-Herrera/your-health-ally](https://flat.badgen.net/github/Stars/Ali-Herrera/your-health-ally)
[![https://flat.badgen.net/github/License/Ali-Herrera/your-health-ally](https://flat.badgen.net/github/License/Ali-Herrera/your-health-ally)](https://github.com/Ali-Herrera/your-health-ally/blob/main/LICENCE)
![https://flat.badgen.net/github/Open-issues/Ali-Herrera/your-health-ally)](https://flat.badgen.net/github/Open-issues/Ali-Herrera/your-health-ally)
![https://flat.badgen.net/github/Open-prs/Ali-Herrera/your-health-ally](https://flat.badgen.net/github/Open-prs/Ali-Herrera/your-health-ally) -->
<!-- ![lastcommit](https://flat.badgen.net/github/Last-Commit/Ali-Herrera/your-health-ally) -->


<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://example.com" target="_blank">
    <img src="public/icons/heart-pink-medium.png" alt="Your Health Ally Logo" width="80px" height="80px">
  </a>

<h3 align="center">Your Health Ally</h3>

<p align="center">
    Everyone deserves to be heard.
    <br />
    <br />
      <!-- TODO: Replace link with deployed site -->
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Deployed App (TBD) </a>
      🔭
      <a href="https://github.com/Ali-Herrera/your-health-ally" target="_blank"> GitHub Repository</a>
    <br />
    <br /> 
    <!-- TODO: Make demo? -->
    <a href="" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/Ali-Herrera/your-health-ally/issues" target="_blank">Report a Bug</a>
    ·
    <a href="https://github.com/Ali-Herrera/your-health-ally/issues" target="_blank">Request a Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
    <ol>
        <li>
            <a href="#about-the-project">About The Project</a>
            <ul>
                <li><a href="#description">Description</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#stack">Stack</a></li>
                <li><a href="#branches">Branches</a></li>
                <li><a href="#dev-notes">Dev Notes</a></li>
            </ul>
        </li>
        <li><a href="#getting-started">Getting Started</a>
            <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
            </ul>
        </li>
        <li><a href="#npm-scripts">NPM Scripts</a>
            <ul>
                <li><a href="#development">Development</a></li>
                <li><a href="#build">Build</a></li>
                <li><a href="#start">Start</a></li>
                <li><a href="#test">Test</a></li>
                <li><a href="#other-scripts">Other Scripts</a></li>
            </ul>
        </li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contributors">Contributors</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- About the Project -->
## About the Project

### Description

**Your Health Ally** is an app designed to transform the way our users approach and manage their health by:
- Empower users to advocate for their well-being 
- Provide comprehensive information, resources, and tools, such as,
    - Types of doctors to see
    - Questions to bring to doctor
    - A checklist to prepare for office or virtual visits 

A study in 2022 found that **52%** of individuals in the U.S. feel their symptoms are ignored, dismissed, or not believed when seeking medical treatment; **50%** of those respondents also reported that "a healthcare provider assume(ed) something about (them) without asking." [^1]

These statistics increase depending on the patient's race/ethnicity, sexual orientation (LGBTQIA+ community), gender identity (female, transgender and non-binary individuals), chronic health conditions, or disabilities. [^1]

Additionally, the Journal of General Internal Medicine found that on average, patients get **11 seconds** to explain the reason for their visit **before** they are interrupted by their doctors [^4]. This can lead to delays in proper diagnosis and treatment for patients.

![average number of years to diagnosis for common chronic diseases](public/graphs/avgyearstodiagnosisBAR.png)
[^2] [^3] [^7] [^7]



### Features
- Responsive design
- Intuitive navigation
- Authentication
- AI Chat Bot
- Interactive Glossary
- Chat-to-PDF Conversion



### Stack

**Languages and Runtimes**

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Nodejs](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

**Frameworks & Libraries**

[![Clerkjs](https://img.shields.io/badge/%20ClerkJS%20-6d50fb?style=for-the-badge)](https://clerk.com/docs)
[![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/docs/latest/)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Mantine](https://img.shields.io/badge/%20Mantine%20-3a9ced?style=for-the-badge)](https://mantine.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![PostCSS](https://img.shields.io/badge/postcss-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org/)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://prettier.io/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

_Note:_
- Repo set up with [`Mantine Next App`](https://github.com/mantinedev/next-app-template) template for `app router`
- `PostCSS` setup with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [Prettier vs Lint](https://prettier.io/docs/en/comparison)

**APIs**

[![ChatGBT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)  

**Backing Services**

[![MongoDB](https://img.shields.io/badge/MongoDB-%25234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![ApolloGraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)](https://www.apollographql.com/docs/)

**Deployment Service**

[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**DevOps**

[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/doc)



### Dev Notes

**Mantine Imports** 

1. All `/hooks`, `/form` and `/core` components and their props, or any `React` hooks must be imported at the top of each file. Example below:

  ```
    import { useState } from 'react';
    import { useInputState, useMediaQuery } from '@mantine/hooks';
    import { useForm } from '@mantine/form';
    import { TextInput, NumberInput, Group, Text, ActionIcon } from '@mantine/core';
  ```

2. Import `Tabler` icons with the `ActionIcon` icon component.

  ```
  import { ActionIcon } from '@mantine/hooks';
  import { IconBrandLinkedin } from "@tabler/icons-react";
  ```

<p align="right">(<a href="#readme-top"> 🔝 </a>)</p>



<!-- GETTING STARTED -->
## Getting Started

<!-- PREREQUISITES -->
### Prerequisites

1. **Nodejs**

- Run `node -v` in the terminal to check if you already have `Node.js` installed.
- If it's installed, it will show the installed version.
- Follow Node.js [docs](https://nodejs.org/en/download/) to download.
- Once downloaded, run `node -v` command to double check it's installed.

2. **NPM**

- Run `npm -v` in the terminal to check if you already have `npm` installed.
- If it's installed, it will show the installed version.
- Follow npm [docs](https://docs.npmjs.com/about-npm) to create an account and to download.
- Once downloaded, run `npm -v` command to double check it's installed.
    - [Differences Between Yarn and NPM](https://www.knowledgehut.com/blog/web-development/yarn-vs-npm#differences-between-yarn-and-npm%C2%A0)

<!-- INSTALLATION -->
### Installation

1. Clone repository to your local computer.

2. Once cloned, open the repo in your terminal.

3. Download dependencies: `npm install` or `npm i`.

4. Set up your local `.gitignore` file in the root folder.
  - Create file: `touch .gitignore`  
  - Click through GitHub's `gitignore` templates. I suggest the `Node` template.  
  - If anything, make sure these are included in your file:

```
# macOS
.DS_Store

# LinuxOS
.*.swp

# Windows
*.pyc

# Dependency directories
node_modules/
jspm_packages/

# TypeScript cache
*.tsbuildinfo

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local
```

5. Set up `Clerkjs` for authentication.  
  - Create an [account](https://clerk.com/docs/quickstarts/setup-clerk) with `Clerkjs`.  
  - Install `@clerk/nextjs` in the root folder: `npm install @clerk/nextjs`  
  - Set up your environment keys in `.env.local`  in the root folder:
  ```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=​pk_test_example
  CLERK_SECRET_KEY=​sk_test_example
  ```
  - For more information, refer to the Clerkjs [Quickstart Guide](https://clerk.com/docs/quickstarts/nextjs) with Nextjs.  

<p align="right">(<a href="#readme-top"> 🔝 </a>)</p>



<!-- SCRIPTS -->
## NPM Scripts

### Development

- `dev` starts the dev server at `http://localhost:3000/`

### Build

- `build` - generates an optimized version of the app for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Start

- `start` - starts the app while in production mode
    - app must be compiled with `build` **before** `start`

### Test

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint to catch errors
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

_Note:_
- `ESLint` setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)
- `Jest` setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Other Scripts

- `prettier:write` – formats all files with Prettier

<p align="right">(<a href="#readme-top"> 🔝 </a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top"> 🔝 </a>)</p>



<!-- CONTRIBUTING -->
## Contributors

![AlisonHerrera](https://img.shields.io/badge/Ali%20Herrera-f36b6d?style=for-the-badge)  
<a href="mailto:alisonherrera02@gmail.com"><strong>Contact Ali</strong></a>  

[Portfolio](https://alisonherrera.com/) | [GitHub](https://github.com/Ali-Herrera) | [Medium](https://medium.com/@alisonherrera02)
<br />

![VictoriaMcNorrill](https://img.shields.io/badge/Victoria%20McNorrill-EE583F?style=for-the-badge)  
<a href="mailto:vmcnorrill@gmail.com"><strong>Contact Victoria</strong></a>  

[Portfolio](https://www.victoriamcodes.com/) | [GitHub](https://github.com/victoriamcn) | [Medium](https://medium.com/@vmcnorrill)

<p align="right">(<a href="#readme-top"> 🔝 </a>)</p>



<!-- LICENSE -->
## License

![MITLicense](https://flat.badgen.net/static/license/MIT/yellow)  
- <a href="https://github.com/Ali-Herrera/your-health-ally/blob/main/LICENCE" target="_blank"> Read more. </a>

<p align="right">(<a href="#readme-top"> 🔝 </a>)</p>



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

**Design Tools**  
[Canva](https://canva.com)  
[Excalidraw](https://excalidraw.com/)  
[Milanote](https://www.milanote.com/refer/rcEpkqyVyNt7y3JS1C)

**Project Management Tools**  
[ClickUp](https://clickup.com)  
[Slack](https:/slack.com/)

**Tutorials**  
[Best README](https://github.com/othneildrew/Best-README-Template/blob/master/README.md#roadmap)
[Emojipedia](https://emojipedia.org/)  
[Img Shields](https://shields.io)  
[GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)  
[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)  

<p align="right">(<a href="#readme-top"> 🔝 </a>)</p>

<!-- CITATIONS -->
[^1]: Harris poll: Many patients feel ignored or doubted when seeking medical treatment  . MITRE. (2022, December 20). https://www.mitre.org/news-insights/news-release/mitre-harris-poll-many-patients-feel-ignored-or-doubted#:~:text=MCLEAN%2C%20Va.%2C%20%26%20BEDFORD,believed%E2%80%9D%20when%20seeking%20medical%20treatment
[^2]: Ibrahim, A. (2021, September 1). Signs of ms may start five years before diagnosis. MS International Federation. https://www.msif.org/news/2018/08/26/signs-of-ms-may-start-five-years-before-diagnosis/
[^3]: Lupus facts and statistics. Lupus Foundation of America. (n.d.). https://www.lupus.org/resources/lupus-facts-and-statistics#:~:text=Lupus%20symptoms%20can%20also%20be,first%20notice%20their%20lupus%20symptoms.
[^4]: Singh Ospina, N., Phillips, K.A., Rodriguez-Gutierrez, R. et al. Eliciting the Patient’s Agenda- Secondary Analysis of Recorded Clinical Encounters. J GEN INTERN MED 34, 36–40 (2019). https://doi.org/10.1007/s11606-018-4540-5
[^5]: Ten early signs. Parkinson’s Foundation. (n.d.). https://www.parkinson.org/understanding-parkinsons/10-early-signs
[^6]: Twenty things you might not know about celiac disease. Celiac Disease Foundation. (2022, August 24). https://celiac.org/about-the-foundation/featured-news/2016/08/20-things-you-might-not-know-about-celiac-disease/#:~:text=There%20is%20an%20average%20delay,miscarriage%2C%20epilepsy%2C%20and%20more.
[^7]: Yale Medicine. (2024, January 19). Endometriosis. Yale Medicine. https://www.yalemedicine.org/conditions/endometriosis#:~:text=On%20average%2C%20women%20in%20the,are%20found%20to%20have%20it.