# Imersão Full Stack & FullCycle - Sistema de Venda de Ingressos

## Descrição

Repositório da API feita com Nest.js (Reserva de Ingressos)

## Rodar a aplicação

Dentro da pasta `nest` execute o comando abaixo para rodar os containers `Docker`:
```
docker compose up
```

Quando os containers estiverem prontos, precisamos acessar o container do `app` e executar a aplicação:

```
// entrar no container:
docker compose exec app bash

// instalar as dependências:
npm install

// executar a migração do primeiro parceiro:
npm run migrate:partner1


// Executar o partner1 na porta 3000
npm run start:dev


```

Espere os logs verdinhos do Nest para verificar se deu certo.

* Acessar o arquivo './partner1.http' para criar / listar os eventos, reservar lugares e comprar ingressos do Parceiro 1.

### Para Windows 

Lembrar de instalar o WSL2 e Docker. Vejo o vídeo: [https://www.youtube.com/watch?v=btCf40ax0WU](https://www.youtube.com/watch?v=btCf40ax0WU) 

Siga o guia rápido de instalação: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart)