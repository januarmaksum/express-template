# Express.js Template (TypeScript)

A modern boilerplate for building Express.js apps with TypeScript. Skip the repetitive setup and get started faster with this clean and structured template.

## 🚀 Features

- ✅ **Express.js 5** + **TypeScript**
- ⚙️ **Prisma ORM** for database access
- 🧠 ESLint & Prettier pre-configured
- 📄 Swagger (OpenAPI) integration
- 🔁 Hot reload with Nodemon + ts-node

## 🛠 Setup Instructions

Installs all required dependencies listed in `package.json`
```bash
npm install
```
Generates the Prisma client based on the schema defined in `prisma/schema.prisma`
```bash
npx prisma generate
```
Runs the database migrations locally. This will also generate the Prisma client
```bash
npx prisma migrate dev
```
> 💡 Make sure you have a valid DATABASE_URL set in your .env file before running this command

Starts the development server using `ts-node-dev` with hot reload enabled
```bash
npm run dev
```
Compiles the TypeScript source code into JavaScript files in the `dist` folder
```bash
npm run build
```
Runs the production server using the compiled code from the `dist` directory
```bash
npm run start
```

## 📘 API Documentation
This project uses Swagger for interactive API documentation. <br>
After starting the server, you can access the documentation at:
```bash
http://localhost:3000/api/docs
```
> 🧪 This page is powered by swagger-ui-express and serves the docs defined in the swagger.yaml file

You can use this interface to:

- Explore available endpoints
- Test API requests directly from the browser
- View request/response formats and examples

### 🌐 Live Access
If the project is deployed to a platform like Vercel, the Swagger docs will be available at:
```bash
https://your-domain.vercel.app/api/docs
```
> 💡 Replace your-domain with your actual deployed domain

## 📂 Project Structure

```
├── src/
│ ├── configs/
│ │ └── env.config.ts
│ ├── constants/
│ │ └── message.ts
│ ├── controllers/
│ │ └── user.controller.ts
│ ├── database/
│ │ └── prisma.client.ts
│ ├── docs/
│ │ └── users.yaml
│ ├── models/
│ │ └── user.model.ts
│ ├── queries/
│ │ └── user.query.ts
│ ├── routes/
│ │ ├── index.ts
│ │ └── user.route.ts
│ ├── utils/
│ │ └── helper.util.ts
│ ├── index.ts
│ └── swagger.ts
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package.json
├── readme.md
├── tsconfig.json
└── vercel.json
```
