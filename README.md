<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description ð
âĻA Simple CRUD API with NestJs, Postgres, Sequelize ORM.âĻ

## Installation ðĨ

```bash
$ npm install
```

## Running the app ð

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Swagger documentation ð
Swagger api documentation is available at `localhost:3000/api/v1/specs` ð

## Project documentation ð
Generate project documentation using following command

```bash
$ npx @compodoc/compodoc -p tsconfig.json -s
```
Open your browser and navigate to `http://localhost:8080` ð

## Notes ðïļ
* Index file in constants folder is a single place to keep all string values to avoid misspelling
* We can set global prefix for api using `app.setGlobalPrefix('api/v1');` in `main.ts`
* Rename .env-sample to .env and add environment variables
* Setting the `ConfigModule.forRoot({ isGlobal: true })` will make the .env properties available throughout the application.

## Relative Links ðĪ
[NestJS](https://docs.nestjs.com/)
[Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)
[freeCodeCamp](https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/)
