# Express.js Template (TypeScript)

A modern boilerplate for building Express.js apps with TypeScript. Skip the repetitive setup and get started faster with this clean and structured template.

---

## 🚀 Features

- ✅ **Express.js 5** + **TypeScript**
- ⚙️ **Prisma ORM** for database access
- 🧠 ESLint & Prettier pre-configured
- 📄 Swagger (OpenAPI) integration
- 🔁 Hot reload with Nodemon + ts-node

---

## 🛠 Setup Instructions

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
npm run build
npm run start
```

---

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
