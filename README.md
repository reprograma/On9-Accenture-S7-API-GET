# On9-Accenture-S7-API-GET

# Introdução ao HTTP

O HTTP desempenha um papel crucial no funcionamento da web e na relação cliente-servidor.

 

![imagem que ilustra o fluxo do navegador se comunicando com o servidor.](https://hackernoon.com/images/jot3yv6.jpg)

## HTTP

HyperText Transfer Protocol(HTTP), como o nome sugere, é um **protocolo**, um conjunto de regras que o servidor precisa seguir para transmitir todos os tipos de arquivos como imagens, texto, áudio, vídeo e outros tipos pela rede mundial de computadores (www).

 

_____

## HTTP métodos

Portanto, um cliente faz uma solicitação ao servidor, como o servidor saberia qual operação executar?

O HTTP usa métodos para informar ao servidor quais ações precisam ser realizadas quando o cliente envia uma solicitação. Também é chamado de *verbos HTTP*. Cada um desses métodos executa a operação necessária e retorna sucesso ou falha na sua conclusão.

 

Os métodos HTTP mais usados são: **GET**, **POST**, **PUT** e **DELETE**.

Existem alguns outros também, como HEAD, OPTIONS, TRACE. Vamos entender o que os quatro métodos amplamente usados fazem:

 

| Nome | Significado |
| ------ | ------ |
| GET |As solicitações GET são somente leitura, ler os dados, recuperá-los e devolvê-los ao cliente e fornece o recurso necessário sem nenhuma modificação. |
| POST |As solicitações POST são usadas para criar ou adicionar um novo item ao URL solicitado. Por exemplo, criar uma nova conta ou postar um novo blog, artigos no medium. Com base no seu URL, ele posta os dados em um local específico. Uma vez feito isso, ele responde com o código de status 201 (CREATED), junto com o link de localização dos dados postados. |
| PUT| As solicitações PUT são usadas para modificar ou substituir os dados atuais pelos dados solicitados. Por exemplo, alterar a senha em um site. Ele também pode ser usado para criar um novo item como o POST, mas o POST é mais apropriado para esse propósito. |
| DELETE | A solicitação DELETE é usada para excluir todos os dados do local de destino solicitado pelo cliente. É uma operação arriscada porque, uma vez excluída, não pode ser recuperada novamente. |

 

Mais informações sobre métodos [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods).

 

_____

## Status code (Código de status)

>Portanto, um cliente faz uma solicitação ao servidor, como o cliente saberia sobre o status da solicitação?

 

Os código de status nos permitem saber se a solicitação que fizemos ao servidor foi um sucesso ou uma falha ou algo intermediário.

 

Eles são divididos em **5 grupos**:

 

* 1xx - Informativo: O servidor não concluiu totalmente a solicitação, ainda está pensando e em fase de transição

* 2xx - Bem-sucedido: O servidor concluiu a solicitação com sucesso

* 3xx - Redirecionamentos: este bloqueio é para redirecionamentos, significa que você solicitou um endereço, mas foi enviado para outro lugar

* 4xx - Erros do cliente: há algum erro da sua parte

* 5xx - Erros do servidor: há algum erro no lado do servidor.

 

Mais informações sobre status code [aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status).

 

# API

 

Uma API, ou interface de programação de aplicativo, é simplesmente uma maneira de diferentes aplicativos se comunicarem.

 

![Imagem ilustando o fluxo de uma api](https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/05/API-2.png)

*Essa linda ilustração foi retirada [daqui](https://www.edureka.co/blog/what-is-api-testing)*

 

Suponha que você esteja procurando um quarto de hotel em um site de reservas de viagens online. Usando o formulário online do site, você preencherá as informações necessárias como a cidade em que deseja se hospedar, datas de check-in e check-out, número de hóspedes e número de quartos. Então você clica em “pesquisar.”. Mas o que está acontecendo entre inserir suas informações e receber suas escolhas de hotel? **APIs, é isso!** O site agrega informações de muitos hotéis diferentes. Quando você clica em “pesquisar”, o site interage com a API de cada hotel, que fornece resultados para quartos disponíveis que atendem aos seus critérios. E tudo isso acontece em segundos por causa de uma API, que atua como um mensageiro que vai e volta entre aplicativos, bancos de dados e dispositivos.

 

Mas, se uma API não funcionar de forma eficiente e eficaz, ela nunca será adotada, independentemente de ser gratuita ou não. Para evitar isso, as APIs são testadas antes de serem colocadas em uso.

 

![Exemplo de como é uma API se fossemos pedir uma comida em um restaurante](https://www.ceralytics.com/wp-content/uploads/2019/01/what-is-api.jpg)

 

______

 

# REST API

 

>Rest API é o conjunto de boas práticas utilizadas nas requisições HTTP realizadas por uma API em uma aplicação web. Entenda como funciona essa tecnologia, quais os tipos de APIs existentes e sua importância em um site.

 

Concebido como uma abstração da arquitetura da web, trata-se de um conjunto de princípios e definições necessários para a criação de um projeto com interfaces bem definidas, Rest, que é a abreviatura de ***Representational State Transfer***, é um conjunto de restrições utilizadas para que as requisições HTTP atendam as diretrizes definidas na arquitetura. Basicamente, as restrições determinadas pela arquitetura Rest são:

 

* Separação entre o cliente e servidor

Uma das vantagens de utilizar o modelo Rest API é a separação entre as aplicações front-end e back-end. Isso é importante para proteger o armazenamento de dados, pois não há o tratamento de regras de negócio, ou seja, é feita apenas a troca de informações seja para recuperar dados, seja para inserir ou deletar novos registros.

 

* Mais visibilidade, confiabilidade e escalabilidade

Por ter a separação cliente / servidor, há muito mais facilidade durante o desenvolvimento da aplicação. Isso porque ela pode ser facilmente escalada, já que há não há dificuldade para acoplar recursos. Como cada requisição é feita de maneira única e independente, é possível mudar uma requisição para outro DNS, sem que isso interfira na aplicação.

Em outras palavras, a API permite que a aplicação acesse banco de dados de diferentes servidores, o que muitas vezes é importante para o desenvolvimento em grandes aplicações. Portanto, sua utilização garante mais visibilidade e confiabilidade ao utilizar esses recursos.

 

* Multiplataforma

As requisições HTTP feitas em uma Rest API retornam dados no formato JSON. Vale ressaltar que existem outros formatos possíveis de retorno, como o XML, entretanto, o JSON é o mais utilizado. Portanto, a maioria dos sites que trabalha sob esse modelo recebe esse formato de dados.

Essa característica é essencial para o desenvolvimento de aplicações multiplataformas. Isso porque, ao receber os dados nesse formato, a camada front-end da aplicação é capaz de fazer o tratamento adequado para a exibição dos resultados de acordo com o tipo de dispositivo utilizado.

 

A utilização de Rest API é importante para adicionar diversas funcionalidades ao site. Suas características permitem a integração com diferentes aplicações; entre elas, as redes sociais e os sistemas de pagamento. Por isso, é uma tecnologia que garante maior confiabilidade e escalabilidade, além de facilitar o desenvolvimento de aplicações multiplataformas.

 

![Imagem que ilustra o fluxo de pagamento com api](https://cdn.substack.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5b0b27a-1767-41c0-8f71-f87cd5f82dc9_1600x1348.jpeg)

*Imagem retirada [dessa](https://technically.substack.com/p/whats-an-api) explicação muito boa.*

 

Como qualquer outro estilo de arquitetura, o REST também tem itens de orientações que devem ser seguidas para se tornar Restful.

 

* INTERFACE UNIFORME: Uso correto dos verbos HTTP:  GET, POST, PUT, DELETE, entre os demais verbos.Separação coesa dos recursos e de seus níveis.

 

* CLIENTE-SERVIDOR: Separação de responsabilidades entre Front-end e Backend-end.

 

* SEM ESTADO: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. [retirado daqui](https://github.com/rocketseat-content/youtube-api-rest-restful)

 

* CACHEÁVEL: As respostas do servidor devem determinar se aquela informação pode entrar ou não em um cache. Assim o cliente pode confiar se aquela resposta pode ser usada novamente em uma requisição equivalente.

 

* CAMADA EM SISTEMAS: permite que uma arquitetura seja composta de camadas hierárquicas, restringindo o comportamento do componente de forma que cada componente não possa "ver" além da camada imediata com a qual está interagindo.

 

* Código sob demanda(opcinal): Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente. [retirado daqui](https://github.com/rocketseat-content/youtube-api-rest-restful)

 

 

Partes do texto retirado [daqui](https://www.totvs.com/blog/developers/rest/)

 

Conteúdo extra: [Rest x Soap](https://blog.tecnospeed.com.br/rest-x-soap/)

 

# RESTful API

 

#### REST e RESTful são a mesma coisa?

Agora que você já conheceu um pouco mais sobre o REST, está na hora de entender o que é RESTful. Embora possam gerar certa confusão, os dois termos revelam o mesmo propósito. Sendo assim, podemos dizer que sistemas que utilizam *determinações* REST são chamados de ***RESTful***.

 

REST: representa um apanhado de princípios de arquitetura.

RESTful: representa a condição de um sistema específico em aplicar os conceitos de REST.

 

Conteúdo extra: [Cache, compressão e muito mais sobre performance em APIs RESTful](https://thiagolima.blog.br/parte-7-cache-compress%C3%A3o-e-muito-mais-sobre-performance-em-apis-restful-70d458d3879)

 

 

#### Utilizando boas práticas:

 

* Utilizar verbos HTTP para nossas requisições.

* Utilizar plural ou singular na criação dos endpoints? NÃO IMPORTA! use um padrão!!

* Não deixar barra no final do endpoint

* Nunca deixe o cliente sem resposta!

 

Conteúdo citado [aqui](https://github.com/rocketseat-content/youtube-api-rest-restful)

 

### Ferramentas de teste de API

Para realizar o teste de API com sucesso, você precisará de uma ferramenta para estruturar e gerenciar seus casos de teste.

 

* [Insomnia Core](https://insomnia.rest/download/)

* [Postman](https://www.postman.com/downloads/)

 

 

# Iniciando um projeto node

Precisa ter instalado o [Node.js](https://nodejs.org/) v4+ na sua máquina.

 

No terminal, dentro da pasta que você quer criar o seu projeto:

```sh

$ npm init

```

Precisaremos utilizar o [Express](https://expressjs.com/) para criar as nossas APIS.

```sh

$ npm install express

```

 

Como não temos um banco de dados, vamos utilizar um arquivo json para manipular os dados e criarmos nossa API com o verbo GET.

 

https://jsonplaceholder.typicode.com/users

 

 

Para criar todo o fluxo, você pode seguir o que fizemos.

 

 

# Atividade

 

O objetivo dessa atividade é criar uma API GET inspirada nesse [artigo](https://www.programaria.org/mulheres-que-fizeram-historia-na-tecnologia/) que fala sobre mulheres que fizeram/fazem história no mundo da tecnologia.

Escolha até 10 mulheres e crie um json, atribuindo os seguintes detalhes:

 

* id

* Nome 

* Descricao

* Leia mais

 

Em seguida, teste a API utilizando a ferramenta de testes Insomina ou Postman para verificar se os dados vieram na response.

 

O resultado deve ser 200 Ok com o json de todas as mulheres inseridas no arquivo json.

 

Bônus: Criar uma API GET mostrando apenas UM ID.

 

Você pode se inspirar nesse vídeo [aqui](https://www.youtube.com/watch?v=ghTrp1x_1As) para criar sua API.
[Apresentação da aula aqui](https://view.genial.ly/5f65f215aeba3b0d96caeb55/presentation-introducao-ao-nodejs)
