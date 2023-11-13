# TESTE TÉCNICO U

## ℹ️ Informações sobre o projeto

CRUD de pacientes utilizando os principios do SOLID.

## Tarefas

- [x] - registro de um paciente;
- [x] - listagem de todos os pacientes;
- [x] - editar as informaços de um paciente;
- [x] - remoção de um paciente;
- [x] - utilização de um banco de dados SQL (Postgres). 

 ### Indo além
 
- [x] - listagem de pacientes por ala (através de query param);
- [x] - listagem de dados de um único paciente;
- [x] - validação de todos os campos do cadastro/edição de um paciente.

### Extra

- [x] - todo o ambiente da aplicação foi montado com Docker/Docker Compose (ambiente de desenvolvimento);
- [x] - testes unitários;
- [x] - repository pattern para trabalhar com injeção e inversão de dependência.

&nbsp;

## 🚀 Rodar a aplicação

### Pré-requisitos

* Docker e Docker Compose

&nbsp;
  
### Etapas

* Clone o repositório.
  
```bash
git clone https://github.com/felipeaz3vedo/teste-tecnico-u.git
```

&nbsp;

*  Entre no diretório do projeto.

```bash
cd teste-tecnico-u
```
   
&nbsp;

* Crie um .env tendo como base o arquivo .env.example (para facilitar o processo, deixei todas as variáveis de ambiente preenchidas).

```bash
cp .env.example .env
```
&nbsp;

* Instale as dependências do projeto

```bash
npm install
```

&nbsp;

* Suba os containers
   
```bash
docker compose up -d
```

&nbsp;

* Entre no container do server e rode todas as migrações do Prisma
   
```bash
docker exec -it api-server bash

npx prisma migrate deploy
```

&nbsp;

* Nesse ponto, a aplicação está rodando localmente (localhost) e está pronta pra ser consumida por qualquer client na porta 5000

* Caso queira utilizar o Postgres via interface visual (pgadmin) basta (1) entrar no seu navegador, (2) consumir a URL: localhost:8888, 
(3) entrar com a senha e login especificados no .env (email: admin@email.com | senha: admin), (4) clicar com o botão direito em servers
e (5) preencher com as informações do container do Postgres. OBS: na hora do registro, na aba connections, campo  Host name/adress, 
coloque o nome do serviço do Postgres especicificado no arquivo docker-compose.yml, no caso: db.

&nbsp;

## Rotas (REST API)

### Listar todos os pacientes
+ Médoto: **GET**
+ Endpoint: `http://localhost:5000/patients`
+ Query Param: `ala` - ala em que o paciente se encontra (A ou B) (Opcional)
+ Exemplo de endpoint com query param: `http://localhost:5000/patients?ala=A`

<br>

### Buscar um paciente
+ Médoto: **GET**
+ Endpoint: `http://localhost:5000/patients/:id`
+ Route Param: `id` - id do paciente
+ Exemplo de endpoint com query param: `http://localhost:5000/patients/1`
  
<br>

### Registrar um paciente
+ Médoto: **POST**
+ Endpoint: `http://localhost:5000/patients`
+ Campos:
  
| nome | tipo | obrigatório | Observações |
|------|------------|----|----|
| `nomeCompleto`   | string | S | No mímino 3 caracteres e no máximo 100.
| `telefone`       | string | S | Adicionar um DDD válido sem o 0 a esquerda. Podem ser adicionados nºs de celulares ou telefones fixos válidos. Formatos permitidos: (DD) XXXXX-XXXX, (DD) XXXXXXXXX, (DD)XXXXXXXXX,  (DD)XXXXX-XXXX, (DD)XXXXXXXXX,  DD XXXXX-XXXX, DD XXXXXXXXX, DDXXXXX-XXXX ou DDXXXXXXXXX (Os números fixos tem menos que 9 caracteres, não tem problema, a validação não barra eles). 
| `dataNascimento` | string | S | Data de nascimento no formato dd/mmm/yyyy.
| `sexo`           | string | S |
| `ala`            | string | S | A ou B
| `quarto`         | number | S | De 1 a 9

+ Exemplo de Body
    
            {
              "nomeCompleto": "Felipe de Azevedo Pessoa",
              "telefone": "(84) 98755-4362",
              "dataNascimento": "09/12/1991",
              "sexo": "masculino",
              "ala": "A",
              "quarto": 1
            }

<br>

### Atualizar o registro de um paciente

+ Médoto: **PATCH**
+ Endpoint: `http://localhost:5000/patients/:id`
+ Route Param: `id` - id do paciente
+ Exemplo de endpoint com query param: `http://localhost:5000/patients/1`
+ Campos:

| nome | tipo | obrigatório | Observações |
|------|------------|----|----|
| `nomeCompleto`   | string | N | No mímino 3 caracteres e no máximo 100.
| `telefone`       | string | N | Adicionar um DDD válido sem o 0 a esquerda. Podem ser adicionados nºs de celulares ou telefones fixos válidos. Formatos permitidos: (DD) XXXXX-XXXX, (DD) XXXXXXXXX, (DD)XXXXXXXXX,  (DD)XXXXX-XXXX, (DD)XXXXXXXXX,  DD XXXXX-XXXX, DD XXXXXXXXX, DDXXXXX-XXXX ou DDXXXXXXXXX (Os números fixos tem menos que 9 caracteres, não tem problema, a validação não barra eles). 
| `dataNascimento` | string | N | Data de nascimento no formato dd/mmm/yyyy.
| `sexo`           | string | N |
| `ala`            | string | N | A ou B
| `quarto`         | number | N | De 1 a 9

+ Exemplo de Body

            {
              "nomeCompleto": "Alice Alves",
              "telefone": "(84) 3218-1131",
              "dataNascimento": "09/12/2000",
              "sexo": "feminino",
              "ala": "B",
              "quarto": 1
            }
  
<br>

### Remover o registro de um paciente

+ Médoto: **DELETE**
+ Endpoint: `http://localhost:5000/patients/:id`
+ Route Param: `id` - id do paciente
+ Exemplo de endpoint com query param: `http://localhost:5000/patients/1`


