# BiglandForms.js

Esse repositório contém os fontes para cconstruir formulários adequados a API da Bigland.

Como a plataforma trabalha com dados complexos, existe a necessidade de documentar e padronizar os dados de entrada. Ou seja, nossa API é restrita em relação aos valores de campos.

Para que seja possível padronizar, há quatro opções de uso da biblioteca 
 
1. Usando o HTML padrão definido nos exemplos - **recomendado, use caso o formulário seja renderizado server side**
1. Usando *decorators* com forms nativos, onde não há nenhuma dependência de outras bibliotecas
1. Usando *decorators* com o componente [Selectize](http://selectize.github.io/selectize.js/) para cirar os campos
1. Usando o atributo collections, onde todos os dados estão organizados em arrays e dicionários 

**Demo** do formulário usando Selectize: [bigland-forms](http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com/bigland-forms/)

## Modo de uso

### Usando o HTML padrão - [Exemplo aqui](https://github.com/rhx-bigland/bigland-forms.js/blob/master/index.ejs)

**Esse é o método mais simples e mais recomendado**

O script adiciona um callback após o carregamento da página, assim caso hajam inputs no padrão definido, eles já serão preenchidos corretamente.

**Por padrão, o bigland-forms irá procurar pelo seguinte padrão**

```HTML
    <!-- selects com o atributo data-bl e uma das classes disponíevis  -->
    <select class="form-control bl-education_level"
            data-bl
            placeholder="Selecione o nível de educação"></select>
    
    <!-- Alguns campos precisam de mais informações -->
    <!-- Use este modelo para campos que serão atualizados sempre que um outro ser preenchido 
           data-filter-from="" Varia de campo a campo, veja nos exemplos
           data-filter-by=".bl-states" Uma query para obter o select pai
           
           Neste caso, sempre que o select.bl-states for alterado, vamos filtrar as cidades pelo atributo state
    -->
    <select class="form-control bl-cities"
            data-bl
            data-filter-by="state"
            data-filter-from=".bl-states"
            placeholder="Selecione a cidade"></select>
```

* O exemplo completo pode ser acessado neste repositório: [Exemplo aqui](https://github.com/rhx-bigland/bigland-forms.js/blob/master/index.ejs)
* Este mesmo arquivo é usado para a página de demonstração: [bigland-forms](http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com/bigland-forms/)

Caso o HTML do formulário esteja neste padrão definido, ele será automaticamente preenchido com os campos corretos.

Caso o HTML seja renderizado dinamicamente, ou contruído com alguma outra biblioteca como ReactJS, JQuery ou demais, é necessário inicializar a biblioteca usando:

```
BiglandForms.replaceAll();
// Adiciona os campos para todo HTML no padrão definido
```

Não é necessário usar o padrão do exemplo, entretando nesse caso deve-se usar a versão detalhada do *decorator*:

```
BiglandForms.select.countries({ query: '.my-countries' });
BiglandForms.select.disabilities({ query: '.my-disabilities' });
// Como parâmetro uma query para ser usada com document.querySelectorAll
```

**Os próximos métodos são mais baixo nível, mas permitem uma maior customização**

**Use-os para casos mais complexos ou uma integração mais completa**

O script disponibiliza a biblioteca na variável `BiglandForms.default`

![bigland forms api](http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com/github-media/bigland-forms-api.png)

### Usando a função `select`

A função select é usada para construir as opções dentro de *inputs* do tipo *select*

ex:
```HTML
<select class="form-control bl-gender"
        data-bl
        placeholder="Selecione o gênero"></select>

<!-- Em algum lugar depos do script ser importado -->

<script>BiglandForms.default.select.gender({ query: '.bl-gender' });</script>
```

As funções disponíveis para contruir os dados são:

![bigland forms collection object](http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com/github-media/bigland-forms-select.png)

### Usando a função `select` com `Selectize`

Para usar o selectize como select: 

1. Inclui-lo nos scripts da página (mais na [documentação do selectize](https://github.com/selectize/selectize.js#installation-and-files))
2. Usar a versão `bigland-forms.selectize.min.js` nos scripts.

### Usando o atibuto collections manualmente

Acessando o objeto `collectons` é possível operar com os dados organizados em dicionários e arrays.

![bigland forms collection object](http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com/github-media/bigland-forms-collections.png)

Cada objeto representa um atributo dentro da Bigland

Ex: Gênero
![bigland forms collection object](http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com/github-media/bigland-forms-collection-details.png)

Existe um atributo `map` e outro `collection`. 

* Com a `collection` é possível iterar sobre os dados
* O `map` pode ser usado para acessar uma informações pontualmente pelo seu valor. ex: `collections.gender['W'].label // feminino`

## Instalação

Adicione os scripts e estilos em seu `header`:

```HTML
<head>
    <!-- Apenas em caso de usar o SelectizeJS -->
    <script src="jquery/dist/jquery.min.js"></script>
    <script src="selectize/dist/js/standalone/selectize.min.js"></script>
    <link rel="stylesheet" href="selectize/dist/css/selectize.bootstrap3.css" />
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <!-- Apenas em caso de usar o SelectizeJS -->
    
    <link rel="stylesheet" href="bigland-forms.css" />
    
    <!-- Usar UM ou OUTRO -->
    <script src="bigland-forms.min.js"></script> <!-- Usar esse para select nativo -->
    <script src="bigland-forms.selectize.min.js"></script> <!-- Usar esse para o SejectizeJS -->
</head>
```

Recomendamos que seja usado um input de select com autocomplete.
Para usar o SelectizeJS basta usar o exemplo acima, e a nossa biblioteca já irá se integrar automaticamente.

```
<script src="bigland-forms.min.js"></script> <!-- Usar esse para select nativo -->
<script src="bigland-forms.selectize.min.js"></script> <!-- Usar esse para o SejectizeJS -->
```

Caso o HTML do formulário esteja no padrão do exemplo mas ainda assim não funcione, lembre-se de ler sobre os modos de uso.

---
Bigland.co
