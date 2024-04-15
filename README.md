 # Share Prompt - AI Prompt Sharing Platform
![A photo of share prompt](https://cdn.hashnode.com/res/hashnode/image/upload/v1712578451474/3170c807-a378-4f0c-a7ed-ced7afe6b4da.png)

## Project Introduction and Story line 

The emergence of Generative AI marks a remarkable milestone in human achievement. However, its potential may seem wasted if one doesn't know how to utilize the technology effectively to enhance productivity. A friend of mine recently experienced this dilemma when he purchased credits on a platform, hoping to use AI prompts to generate high-quality content efficiently. He needed the AI to craft a write-up that didn't obviously appear to be machine-generated but rather reflected his own voice. Despite his efforts, he found himself burning through his limited credits without much success.

Observing his struggle, I offered to assist by refining the prompt. With a better-crafted input, the machine executed the task flawlessly. This experience sparked a realization: How many others might be facing similar challenges? What if we could share our successful prompts? It occurred to me that many prompts we struggle to formulate have likely been perfected by others. The solution was to create a platform where users can share effective AI prompts, enabling individuals to leverage collective expertise and optimize their AI interactions**. Share Prompt** was born.


### What is Share Prompt

Share Prompt is a web application that allows users to share and discover creative AI prompts.

### The choice of Tech Stack 
As with any project destined for success and longevity, it all boils down to design and planning. And that planning begins with the crucial step of selecting the right technology stack to build your project.

One of the most significant non-technical challenges faced was deciding on the appropriate tech stack for the project. Initially, I considered using FastAPI with Python or Flask, as these were familiar frameworks from my previous experience and aligned with the roadmap set by the project requirements. However, given the need for rapid development and integration of OAuth authentication, I had to reconsider my approach. Ultimately, I opted for Next.js, the official React framework, which offered a more expedient path to meeting the MVP deadline.

When it came to selecting a database, my initial inclination was towards SQL due to my familiarity with it from my studies with ALX. However, considering the constraints of budget and resources available to me, I had to reassess my options. I realized that my application didn't require intricate relational structures. If simplicity in querying and handling large volumes of data was the priority, then NoSQL seemed like the ideal solution. After weighing the options, MongoDB emerged as the best fit for my needs. While I did consider Firebase, its serverless nature imposed constraints on development that didn't align with our requirements, prompting me to opt for MongoDB. Additionally, cost considerations also favored MongoDB over Firebase, which appeared to be comparatively expensive.

### Current Feature and Implementation 

I implemented the search functionality using Next JS, allowing users to find prompts efficiently.
I also designed a user-friendly interface to encourage prompt sharing and discovery.

### This is project was design with the Following Technologies 

- Next JS
- Mongo DB
- Varcel for Deployment
  

Feel free to explore the deployed application at [share prompt](https://share-prompts-lovat.vercel.app/)!


To set this project locally  you can follow the instruction below

First, run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Install the dependencies
```bash
npm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the  [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
