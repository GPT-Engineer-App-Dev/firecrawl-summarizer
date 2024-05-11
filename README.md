# firecrawl-summarizer

create an app where the user can create new scrape jobs which call firecrawl with this request:

curl -X POST https://api.firecrawl.dev/v0/crawl \
    -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer fc-1a67435fe4b54212b98f775c0d8fbc21' \
    -d '{
      "url": "https://mendable.ai",
      "pageOptions": {
      }
    }'

Once it finishes, it asks gpt 3.5 to summarise the content and categorise it into "quality" of the text.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/firecrawl-summarizer.git
cd firecrawl-summarizer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
