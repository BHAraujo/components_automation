# Projeto components_automation
Testes Automatizados dos componentes da página http://the-internet.herokuapp.com/

Link para download GitHub: https://github.com/BHAraujo/components_automation

Preparar o ambiente, downloads
  - Nodejs:
      - https://nodejs.org/en

  - VSCODE: 
     - https://code.visualstudio.com/

  - Cypress:
    - https://www.cypress.io/

  - Cypress-DownloadFile:
    - https://www.npmjs.com/package/cypress-downloadfile 
     
  - Cypress-File-Upload:
    - https://www.npmjs.com/package/cypress-file-upload
    
  - Cypress-MochaWesome-Reporter:
    - https://www.npmjs.com/package/cypress-mochawesome-reporter
   

# Configuração de Ambiente 
- Instalar as dependências do projeto 
   - npm install pakage.json --save-dev

# Executar o projeto
 **Arquivo de configuração padrão: ./environment/hml_cypress.config.js**
    - Executar os testes no CMD
        - "npm run cypress:run"
    
    - Executar os testes pelo navegador
        - "npm run cypress:open"

    - Definir o navegador a para executar os testes (Default: Chrome ) 
        - "npm run cypress:run:chrome" 
