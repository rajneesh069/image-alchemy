# Image Alchemy

### Setting up the project locally

1. To setup the project locally, clone the repo and install the dependencies using the following command :

```bash
npm install
#or
yarn install
#or
pnpm install
```

2. To run the development server, run the following command in your terminal :

```bash
npm run dev
#or
yarn dev
#or
pnpm run dev
```

The project should be up and running at : `http://localhost:3000`

## Features
0. Do Generative Fill, Image Restore, Object Recolor etc.
1. Sign in with Clerk.js using Google, GitHub or Apple.
2. User data maintained using Webhooks from Clerk.js and Stripe in MongoDB
3. Buy Credits using Stripe to edit more images.

## What I learned while working on this project?

1. Creating svg for the app using AI(ChatGPT and DALL&bull;E) and a proper folder structure.
2. Creating navbars specific to mobile and desktop views
3. Using ShadCn UI library and it's button, alert-dialog and sheet components.
4. Caching mongodb connections to optimize the performance as the Next.js app runs at EDGE.
5. Creating transaction model to handle transactions, image model for handling image tranformations and user model for user related queries.
6. Creating error handlers to handle different type of errors.
7. Server actions for handling database queries and form submissions, like user actions.
8. Webhooks(using Clerk) to `create/update/delete/read users` from and to our database.
9. Declaring types in a separate 'types' folder which contains index.d.ts file making the types to be available globally.
10. Ngrok and webhook testing on local machine.
11. Using the render feature in React hook forms to create custom fields.
12. Integrating Cloudinary's image upload widget and setting upload presets on the Cloudinary Website.
13. Adding Stripe as a payment gateway and understand how payments work.
---

## Tech Stack
1. Next.js
2. Stripe
3. Typescript
4. Cloudinary AI
5. Clerk.js
6. React Hook Form
7. Zod

