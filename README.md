# Teste para Engenheiro de Software

O teste consiste em utilizar React para uma simples aplicação que exibe o valor de ações através de chamadas de API. Crie uma tela apenas com um input de texto que receberá um símbolo de ação (ex: aapl para Apple, fb para Facebook, twtr para Twitter) e retornará o último valor de ação da empresa, assim como outras informações relevantes. Sinta-se livre para utilizar quaisquer dependências que você desejar no npm e auxiliar no desenvolvimento da aplicação.

* Utilizar componentes React para montar a interface e Redux para controlar o estado
* Você pode utilizar a API gratuita do [IEX](https://iextrading.com/developer/) para obter os dados necessários
* A documentação da API sugerida pode ser acessada [aqui](https://iextrading.com/developer/docs/#stocks)
* As informações de ações para cada símbolo são encontradas [aqui](https://iextrading.com/developer/docs/#quote) (Estamos interessados apenas no `latestPrice`)
* A mesma API também retorna [as informações mais relevantes da empresa](https://iextrading.com/developer/docs/#company)
* Plotar um gráfico com [a evolução do valor das ações](https://iextrading.com/developer/docs/#chart) (PS: utilizamos o pacote [Recharts](http://recharts.org))

## Desafios extras

Se você gostaria de fazer um pouco mais, sugerimos os seguintes desafios:

* Componentes reutilizáveis: que tal montar a interface usando seus próprios componentes de apresentação? Uma ideia: criar componentes genéricos de UI que poderiam ser utilizados em outros projetos. É o que fazemos internamente com nossos projetos! Adoramos o [`styled-components`](https://styled-components.com)
* Atualizações: a API é atualizada quase em tempo real e poderia atualizar as informações de acordo (conforme faz o [Yahoo! Finance](https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch))
* Animação à la [Bloomberg](https://www.bloomberg.com): exibir em formato de marquee o valor e variação percentual do valor das ações
