

# 🚀 Grupo-4D
Integrantes:
**Lorran Porto**, **Hannah Martins**, **Guilherme Vallim** e **João Gois**

Esse é o código do seguinte documentário: [link](https://github.com/lorranprt/grupo-4d)

# PROJETO FRONT-END GRUPO 4D

## Sobre a empresa:
A Nimbus, uma empresa de meteorologia fundada em 2020 no RJ e atualmente ela atua também em São Paulo e Curitiba, é especializada em oferecer soluções para a gestão de riscos climáticos em canteiros de obras e áreas urbanas. Em parceria com o Centro de Operações Rio, ela realiza monitoramento e previsão do tempo em todo o território brasileiro, focando principalmente no acompanhamento de pontos de obras na construção civil.

Sua atuação como *construtech* está centrada na avaliação de riscos climáticos específicos para o setor da construção civil. Utilizando dados meteorológicos precisos e tecnologia avançada, ela fornece previsões climáticas localizadas para os canteiros de obras, o que permite aos gestores planejar com mais eficiência o cronograma de execução, reduzir perdas de materiais e melhorar a segurança dos trabalhadores.

Sua abordagem inovadora torna as decisões dos gestores mais ágeis e precisas, resultando em uma redução significativa de prejuízos e um aumento notável na produtividade das operações de construção. A empresa está comprometida em oferecer soluções que ajudem a indústria da construção a enfrentar os desafios climáticos e a otimizar seus processos.
## Primeiro encontro com o cliente:
Desafio proposto pelo centro de operações do RJ: Monitora a meteorologia (previsão e impacto de chuvas).
Aprimorar a previsão de chuvas principalmente para a malha rodoviária, precisão para ajudar não só dentro da cidade mas também para o mercado de construção civil (obras na via, em lagos).

#### O que a plataforma faz?
Ela absorve os dados meteorológicos como radares que monitoram as nuvens em tempo real; dados de raios, descarga elétrica, dados de estações, vento/chuva, umidade, localização da obra, cronograma para a tomada de decisão para fornecer previsões por equações físicas e matemáticas para facilitar o planejamento da obra.

#### Solução Cronos:
Página de mapa para previsão por área, previsão em gráfico, alertas, GPS e radares.

## Pontos a serem melhorados:
1. **Histórico de dados**:
Armazena no banco de dados para depois serem recuperados por uma API e exportados em formato de arquivo de tabela. Desafio: Novo histórico de dados e CRIAR uma página mais robusta que disponibilize dados nessa forma:
- Tabelas, Gráficos (lineares, barras e vetores);
- Marcadores georreferenciados em um mapa;
- Botões para exportação para CSV, pdf e png;
- Interação entre os componentes;
- Adaptação para mobile.

2. **Requisição de dados**:
Deve ser feita através de um formulário que ira considerar uma serie de critérios como filtro, com data inicial, data final, tipo de variável meteorológica, estação ou ponto de monitoramento, frequência e operação matemática utilizada.
Chegar até a requisição da API.

3. **Mapa interativo**:
Com marcadores para cada ponto de monitoramento ou estação, preenchimento de cor de acordo com critérios de criticidade, retorno do histórico de um ou mais pontos mediante a interação com o marcador, seja utilizando polígonos para selecionar um ou mais pontos, ou seja através de um click individual.

4. **Gráfico mais esteticamente organizado** 
Dinâmicos, adaptados a frequência temporal (eixo horizontal) ordem de grandeza (eixo vertical) ao tipo de variável exibida, interagir com o gráfico e selecionar quais variáveis são exibidas simultaneamente. Apresentar uma otimização estética em termos de desempenho, responsividade e intuitividade.

5. **Ser exportável para CSV e PDF**

# 5W2H
1. **O que?** R: O sistema absorve os dados meteorológicos como: radares que monitoram as nuvens em tempo real.
2. **Por que?** R: Para fornecer previsões por equações físicas e matemáticas para facilitar o planejamento da obra.
3. **Quem?** R: Pessoas/Principalmente empresas que contratam o serviço (setores de planejamento, engenheiro, meteorologistas).
4. **Quando?** R: A entrada de dados é feita o tempo todo. Porém a consulta do cliente depende do horário desejado, seja 24H direto ou um planejamento programado.
6. **Como?** R: Será feita uma requisição de dados através de um formulário feita pelo usuário, os dados serão recuperados através de uma API e após isso será exportado no formato de arquivo de tabela.
5. **Onde?** R: Será utilizado em situações de preparação de obras e em pesquisas meteorológicas.
6. **Quanto?** R: O tempo de desenvolvimento do programador e da empresa.

# Propósito do Sistema:

O projeto tem como objetivo absorver os dados meteorológicos de forma organizada, para que possam ser adicionados, armazenados em um histórico de dados, editados e exportados, a fim de informar seus usuários das previsões desejadas.

O propósito do novo sistema é aprimorar as funções para que a interface seja mais filtrada e interativa, com a requisição de dados facilitada por um formulário, marcadores de mapa mais eficientes e variados, e também esteticamente mais organizado. Além disso, ser adaptado para facilitar o uso e expandir os consumidores da plataforma.

# Requisitos Funcionais:

- **RF1:** O sistema terá 2 abas na área superior da tela, página principal e histórico de dados.
- **RF2:** O sistema terá seus dados apresentados através de tabelas, gráficos (lineares, barras e vetores) e marcadores georreferenciados em um mapa. 
- **RF3:** O sistema terá na parte superior da tela uma área reservada para o requisito de dados através de um formulário. 
- **RF4:** O sistema possuirá um formulário que irá considerar uma série de critérios de filtro, com data inicial, data final, tipo de variável meteorológica, estação ou ponto de monitoramento, frequência e operação matemática utilizada. 
- **RF5:** O sistema terá no centro da tela terá um gráfico interativo. 
- **RF6:** O sistema terá um gráfico que será dinâmico e adaptará a frequência temporal, representada no eixo horizontal, e a ordem de grandeza no vertical, ao tipo de variável exibida.
- **RF7:** O sistema terá uma parte superior do gráfico que terá uma opção para selecionar quais variáveis serão exibidas. 
- **RF8:** O sistema terá na parte inferior à esquerda da tela o mapa interativo com marcadores para cada ponto de monitoramento ou estação. 
- **RF9:** O sistema terá marcadores com cores de acordo com a situação meteorológica do local.
- **RF10:** O sistema fará com que o usuário possa interagir com os marcadores para obter mais informações do local.
- **RF11:** O sistema terá essa interação que pode ser feita através de um único clique ou a ferramenta de polígono para selecionar um ou mais marcadores.
- **RF12:** O sistema terá na parte inferior à direita da tela uma tabela com as informações da área selecionada.
- **RF13:** O sistema fará com que o usuário seja capaz de exportar todas essas informações para os formatos CSV, PDF e PNG.
- **RF14:** O sistema terá um botão para exportação que se encontrará logo acima do recurso desejado, ou seja, se o usuário deseja gerar um PNG do mapa, deverá procurar o botão logo acima do mapa.

# Requisitos não funcionais:

- **RNF1**: O software deverá ter acessibilidade para mobile.
- **RNF2**: Deverá ser feito em React.
- **RNF3**: O site deverá ser totalmente responsivo.

# Casos de Uso:

#### Caso de uso 1: Armazenamento e análise de dados para estudos a longo prazo 

- **Ator Principal**: Pesquisador. 
- **Descrição do Cenário**: O pesquisador está fazendo um estudo a longo prazo sobre os padrões climáticos no Rio de Janeiro e seu impacto na construção civil ao longo dos anos. Ele precisará dos dados meteorológicos para sua pesquisa. 

**Passos**: 
1. O pesquisador acessa a plataforma da Nimbus Meteorologia e busca os dados meteorológicos necessários, como histórico de chuvas, ventos e umidade no Rio de Janeiro nos últimos. 
2. A plataforma busca no banco de dados, todos os dados solicitados e apresenta para o usuário. 
3. O pesquisador visualiza as informações através dos gráficos, tabelas e mapas para fazer sua análise. Utilizando esses dados, ele estuda para identificar tendências climáticas e outros padrões da região.
4. Os resultados da pesquisa ajudam a comunidade científica e a indústria da construção civil a compreender melhor os desafios meteorológicos da região para desenvolver estratégias de adaptação para amenizar riscos.

#### Caso de uso 2: Aprimoramento das previsões de chuva para obras nas redes de rodovias. 
 
- **Ator principal**: Engenheiro de uma empresa de construção civil.

- **Descrição do cenário**: Uma obra de construção civil em uma área de redes rodoviárias do Rio está sendo planejada pelo engenheiro. Então, a empresa de construção está preocupada com o clima e o tempo, pois o cronograma de obra pode ser atrasado se houver alguma chuva intensa, além de ser perigoso para os trabalhadores. 

**Passos:**
 1. O engenheiro acessa a Nimbus e digita a localização da obra na rede rodoviária e o cronograma. 
 2. A plataforma coleta dados meteorológicos recentes na região, como raios, ventos, chuvas, informações de radares, estações meteorológicas e umidade. 
 3. Com os dados, o engenheiro se baseia no histórico para analisar e praparar área que será efetuada a obra.  
 4. Após a análise, o engenheiro pode modificar o cronograma da obra, realocar recursos e tomar medidas para que a construção ocorra de forma eficiente e segura, se previnindo de possíveis impactos. 


***Ao clonar o repositório para a sua máquina use:***
ˋˋˋ
npm i -g npm@10.2.1 react-dom react-scripts cra-template leaflet
ˋˋˋ

## Stack:

Mapa responsivo:  [leaflet](https://leafletjs.com/reference.html)

