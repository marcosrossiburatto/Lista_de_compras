<p align="center">
  <img src='./front-end/orti-frutti/src/pages/assets/Logo_sv.png' alt="logo SV" />
</p>
<br/>
<h1 align="center">Lista de compras de Marcos Rossi Buratto</h1>
<p style="font-size: 14px; font-weight: 400; text-align: center;">STATUS: <span style="color: #000; background-color: #fff000;"> EM APROVAÇÃO</span></p>
<br/>



## Descrição
<br/>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">Este conteúdo refere-se ao TCC da primeira turma de desenvolvedores de programadores da Startup <span style="font-weight:700; color: #ff0">A Liga Digital</span>.</p>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">O projeto é dividido em 02 (duas) partes, o front-end e o back-end que se comunicam entre si. Refere-se ao desenvolvimento de uma lista de compras, com os recursos de inclusões, exclusões, alterações ou simplesmente a listagens dos itens presentes na referida Lista de Compras.</p>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">Foi utilizado neste projeto o banco de dados da plataforma Heroku. Porém, os dados de acesso ao sistema do Heroku, por motivos de segurança, não se encontram disponíveis para acesso através do GitHub.</p>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">As ferramentas utilizadas na confecção do programa foram o Visual Studio Code, versão: 1.67.0 (user setup), Node.js na versão 16.13.0 e OS: Windows_NT x 64 10.0.19044.</p>
<br/>

## Executando o app
<br/>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">Para colocar em funcionamento a aplicação do Back-end, utilizamos o endereço do próprio computador (localhost) na porta 3010. O aplicativo, assim como o complemento utilizado para colocar o back-end em funcionamento foi <span style="color: #ff0; font-weight: 600;"> npm run start:dev</span>. Nesta configuração, o sistema fica monitorando solicitações externas.</p>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">Para colocar em funcionamento a aplicação do front-end, também utilizamos o endereço do próprio computador (localhost) porém na porta 3000. Utilizamos o JavaScript em conjunto com a biblioteca React. Primeirmente utilizamos a instalação da biblioteca React utilizando a sintaxe <span style="color: #ff0; font-weight: 600;"> yarn create react-app orti-frutti</span>. Em seguida, alteramos o sub-diretório para orti-frutti e utilizamos a sintaxe <span style="color: #ff0; font-weight: 600;"> yarn start</span> para executar a aplicação.</p>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">Lembramos que as configurações do banco de dados da plataforma Heroku não estão disponíveis e deverão ser inseridos antes do funcionamento do mesmo, com a criação do arquivo .env. Neste arquivo deverão ser fornecidos os seguintes dados: <span style="color: #ff0; font-weight: 400;"> SERVER_PORT=</span>3010, <span style="color: #ff0; font-weight: 400;">MODE=</span>DEV, <span style="color: #ff0; font-weight: 400;">DB_HOST=</span>(inserir os dados proveniente do banco de dados), <span style="color: #ff0; font-weight: 400;">DB_PORT=</span>(inserir os dados proveniente do banco de dados), <span style="color: #ff0; font-weight: 400;">DB_USERNAME=</span>(inserir os dados proveniente do banco de dados), <span style="color: #ff0; font-weight: 400;">DB_PASSWORD=</span>(inserir os dados proveniente do banco de dados), <span style="color: #ff0; font-weight: 400;">DB_DATABASE=</span>(inserir os dados proveniente do banco de dados) e <span style="color: #ff0; font-weight: 400;">DB_SYNVHRONIZE=</span>true.</p>
<br/>

## Funcionalidades do projeto
<br/>
<ul style="font-size: 16px; font-weight: 400; text-align: justify;">
<li style="color: #ff0;">Listar Produtos<span style="color:#fff;">: Utilizamos esta funcionalidade para podermos listar todos os itens que se encontram inseridos em nossa lista de compras. Serão apresentados o nome do produto, a descrição (opcional) e a quantidade. Também serão apresentados a identificação do produto (id) assim como a data da última modificação efetuada no item.</li>
<br/>
<li style="color: #ff0;">Adicionar Produtos<span style="color:#fff;">: Utilizamos esta funcionalidade para podermos adicionar novos produtos à nossa lista de compras. Serão solicitados o campo nome do produto, o campo da descrição e o campo da quantidade. A identificação do produto (id) assim como a data da inserção serão incluídas automaticamente no registro do item.</li>
<br/>
<li style="color: #ff0;">Detalhes dos Produtos<span style="color:#fff;">: Para podermos utilizar esta funcionalidade, precisamos primeiramente utilizar a funcionalidade <span style="color: #FF0;">Listar Produtos</span>. Após localizarmos o referido produto que desejamos os detalhes, selecionamos o botão <span style="color: #FF0;">Detalhes</span> presente no próprio campo do produto desejado. Serão apresentados o nome do produto, a identificação (id), a data da última atualização, a descrição e a quantidade.</li>
<br/>
<li style="color: #ff0;">Editar dados dos Produtos<span style="color:#fff;">: Para podermos utilizar esta funcionalidade, precisamos primeiramente utilizar a funcionalidade <span style="color: #FF0;">Listar Produtos</span>. Após localizarmos o referido produto que desejamos editar os detalhes, selecionamos o botão <span style="color: #FF0;">Detalhes</span> presente no próprio campo do produto desejado. Neste novo campo, será apresentado o botão <span style="color: #FF0;">Editar</span>, permitindo que seja editado um ou mais dados do produto desejado.</li>
<br/>
<li style="color: #ff0;">Excluir Produtos<span style="color:#fff;">: Para podermos utilizar esta funcionalidade, precisamos primeiramente utilizar a funcionalidade <span style="color: #FF0;">Listar Produtos</span>. Após localizarmos o referido produto que desejamos editar os detalhes, selecionamos o botão <span style="color: #FF0;">Detalhes</span> presente no próprio campo do produto desejado. Neste novo campo, será apresentado o botão <span style="color: #FF0;">Excluir</span>, permitindo que seja excluído o produto desejado.</li>
<br/>
</ul>

## Suporte

<br/>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">Este código apresentado ainda está em fase de aprovação. Dessa maneira, a utilização por terceiros corre por conta e risco dos mesmos. O Autor não fornece suporte de utilização no momento.</p>
<br/>

## Contatos
<br/>
<ul style="font-size: 16px; font-weight: 400; text-align: justify;">
<li style="color: #ff0;">Author -<span style="color: #fff;"> Marcos Buratto</span></li>
<br/>
<li style="color: #ff0;">Linkedin -<span style="color: #fff;"> https://www.linkedin.com/in/marcosburatto/</span></li>
</ul>
<br/>

## Licença

<br/>
<p style="font-size: 16px; font-weight: 400; text-indent: 50px; text-align: justify;">Este código apresentado ainda está em fase de aprovação. Dessa maneira, a utilização por terceiros corre por conta e risco dos mesmos. Todas as ferramentas utilizadas para o desenvolvimento do mesmo, assim como para sua utilização possuem direitos próprios e deverão ser observados antes da referida utilização.</p>
<br/>
