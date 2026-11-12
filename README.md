# Ideas tracker (Vue + Appwrite)

Follows Appwrite's Vue tutorial: https://appwrite.io/docs/tutorials/vue/step-1

## Run

```bash
npm install
npm run dev -- --open --port 3000
```

## Appwrite setup

- Web platform with hostname `localhost`.
- Your endpoint and project ID go in `src/appwrite.js`; your database and table IDs go in `src/stores/ideas.js`.
- Table columns: `userId` (Varchar, required), `title` (Varchar, required), `description` (Text).
- Table permissions (not covered by the tutorial, but required): Any → Read, All users → Create, Row security on.

## Where this differs from the tutorial text

- The tutorial says `src/lib/stores/*.js`, but every import in its code expects `src/stores/` next to
  `src/appwrite.js`. The files live in `src/stores/` so all code runs exactly as written.
- `src/stores/ideas.js` imports `tablesDB` (the tutorial imports `databases`, which doesn't exist).
- Removed a stray `"` from the `v-for` line in `Home.vue` (it fails to compile otherwise).
- `src/style.css` holds a few basic styles; the tutorial has none. Empty it for the unstyled look.
