
# WebPortal

Projeto pessoal para desenvolvimento pessoal.
Atualmente conta com uma página (cliente), a qual o usuáro logado pode acompanhar a cotação atual do dolar, por meio de um background service rodando no backend.

O sistema possui dois tipos de usuários, sendo eles, clientes e colaboradores, identificados por meio do token JWT. O cadastro da tela de login cadastra um novo COLABORADOR.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

### FRONTEND

`NEXT_PUBLIC_API_BASE_URL` ---> URL do backend

### BACKEND

`TokenKey` ---> UUID Utilizada para geração dos tokens JWT

`FromEmail` ---> Email para o envio do código de cadastro

`EmailServerPort` ---> Porta do serviço de email

`EmailPassword` ---> Senha de APP do email utilizado


## Instalação

### FRONTEND

Clone este repositório, navegue até a pasta referente ao front-end e rode os seguintes comandos:

```bash
  yarn
  yarn dev

  or

  npm install
  npm run dev
```

### BACKEND

Clone este repositório, navegue até a pasta referente ao back-end, abra utilizando o VisualStudio e rode o projeto.

Observação*: Adicione as variáveis de ambiente necessárias do sistema para que o funcionamento não seja prejudicado.
    
    
## Documentação da API

A API contém o middleware do swagger, ou seja, para uma melhor visualização, clone o projeto, sete as variáveis de ambiente necessárias e rode o back-end pelo Visual Studio que uma página será aberta automaticamente com a documentação detalhada.

#### Envia código para o email (início de registro)

```http
  POST /user/startRegister
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email`     | `string`   | **Obrigatório**. Email o qual o código será enviado |

---

#### Verifica o código enviado para o email

```http
  POST /user/codeVerify
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email o qual o código foi enviado |
| `code`      | `string` | **Obrigatório**. Código enviado para o email |

---

#### Finaliza o registro de usuário (precisa do token retornado da verificação anterior como header de autorização)

```http
  POST /user/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email de cadastro |
| `password`      | `string` | **Obrigatório**. Senha de cadastro |

---

#### Login de usuário (retorna o token de navegação)

```http
  POST /user/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email de cadastro |
| `password`      | `string` | **Obrigatório**. Senha de cadastro |

#### Retorna a máxima do dolar durante o periodo que a API foi iniciada até o momento

```http
  GET /dolar/getmax
```

#### Retorna a mínima do dolar durante o periodo que a API foi iniciada até o momento

```http
  GET /dolar/getmin
```

#### Retorna a média do dolar durante o periodo que a API foi iniciada até o momento

```http
  GET /dolar/getmedia
```

#### Retorna todas as cotações buscadas

```http
  GET /dolar/getall
```

#### Cadastro de clientes

```http
  POST /client/post
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email de cadastro |
| `password`      | `string` | **Obrigatório**. Senha de cadastro |

#### Listagem de clientes

```http
  GET /client/getall
```

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Pink              | ![#e708ee](https://via.placeholder.com/10/e708ee?text=+) #e708ee |
| Purple            | ![#6633a5](https://via.placeholder.com/10/6633a5?text=+) #6633a5 |
| Black             | ![#120F1A](https://via.placeholder.com/10/120F1A?text=+) #120F1A |
| White             | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |


## Licença

Todo direitos reservados [Paulo Mendes](https://github.com/PauloMendees)

