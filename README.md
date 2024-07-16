# Teste prático processo seletivo VR

## Frontend

### Teste Automatizado com Cypress - Adicionar Produtos ao Carrinho
Este projeto contém um teste automatizado desenvolvido com Cypress para validar a funcionalidade de adicionar produtos ao carrinho na loja virtual do site www.vr.com.br.
#### Pré-requisitos
Antes de executar o teste, certifique-se de ter o Node.js e o npm instalados em sua máquina.
#### Configuração

1. Clone este repositório para o seu ambiente local:
```sh 
git clone https://github.com/espita/Test-VR.git 
```

2. Instale as dependências do projeto:
```sh 
npm install 
```
#### Executando o Teste

Você pode executar o teste de duas maneiras:

- **Modo Interativo:** Abra o Cypress em uma interface gráfica para selecionar e executar o teste manualmente.

```sh 
npm run cy:open 
```
- **Modo de Linha de Comando:** Execute o Cypress em modo de linha de comando para executar o teste automaticamente.
```sh
npm run test
```

## Backend

### 1) Teste Automatizado desenvolvido com Ruby+cucumber+HTTParty para validar um endpoint de consultas com informações de produtos e estabelecimentos

#### Pré-requisitos
- Ruby v3.0.0 instalado na sua máquina
- Bundler (para instalar as dependências do projeto)
#### Configuração
1. Entrar na pasta ruby-vr-test para instalar as dependências do projeto:
```sh
Blundle install
```
#### Executando o Teste
```sh
blundle exec cucumber
```

### 2) Teste Método em ruby que recebe dois parâmetros uma string e um array 

#### Descrição

Este projeto contém um método em Ruby chamado `remover_texto_apos_simbolos` que recebe uma string e uma matriz de símbolos como entrada. O método remove todo o texto que vem após qualquer um dos símbolos presentes na matriz de símbolos da string de entrada.

#### Pré-requisitos

- Ruby instalado na sua máquina
- Bundler (para instalar as dependências do projeto)

#### Configuração
1. Entrar na pasta remover_texto_apos_simbolos para instalar as dependências:
```sh
Blundle install 
```
#### Executando o Teste
```sh
blundle exec rspec 
```

#### Uso do método 
Você pode usar o método remover_texto_apos_simbolos em seu código Ruby da seguinte maneira:

```ruby
require_relative 'metodo/remover_texto'

string = "Exemplo de string com marcadores # e !"
marcadores = ["#", "!"]
resultado = remover_texto_apos_simbolos(string, marcadores)
puts resultado
# Saída esperada: "Exemplo de string com marcadores"
```
Substitua **'string'** pela sua própria string de entrada e **'marcadores'** pelos seus próprios marcadores.
