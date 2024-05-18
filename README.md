Перед запуском необходимо установить зависимости и указать необходимые данные в файл `.env`:

```bash
npm i
```

```bash
cp .env.template .env
```

Запуск в dev режиме:

1. Запуск базы данных

```bash
  npm run db:start
```

2. Применение seeds

```bash
   npm run seeds
```

3. Запуск сервер-приложения

```bash
   npm run dev
```

Запуск в prod режиме:

```bash
  npm run deploy:start
```
