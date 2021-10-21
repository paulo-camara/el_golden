# Gerenciador

## Descrição

Sistema desenvolvido como desafio de processo seletivo. Possui duas telas, sendo elas Gerenciamento de Categorias e Gerenciamento de Dispositivos, onde é possivel gravar novas categorias e dispositivos. 

## Tecnologias

Para criar o back-end foi usado NODE.js com base de dados com PostgresSQl.

Para criar o front-end foi usado React.JS, criando componente com React Hooks, requests utilizando Axios. Durante o desenvolvimento, foi usado a menor quantidade de bibiliotecas possiveis, para que fosse possivel analisar mais precisamente a questão de código.

## Deploy
Para uma melhor visualização foi feito deploy do front-end no AWS S3. Foi feito também o deploy do back-end e banco de dados, porém por questões de custo a maquina EC2 e RDS foram desligados e por conta disso o front-end foi feito deploy com dados fakes.

Link do S3 bucket: http://management-eldorado.s3-website-us-east-1.amazonaws.com

## Start no projeto front-end
```
git clone <projeto>
cd el_golden/front_el_golden
npm install
npm run start
```

## Start no projeto back-end
```
git clone <projeto>
cd el_golden/api_el_golden
npm install
npm run start-dev
```
