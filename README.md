## A non-coder's guide to changing links and text 
Hello! If you're reading this, you're probably trying to change some text on this website! Here's how: 

**First, switch to the dev branch of this repo. you can do that by clicking the dropdown above (it probably says main right now) and selecting dev**
**or, click here to switch to dev: https://github.com/siljawalenius/noah-portfolio/tree/dev** 

**To change copy, you should ONLY be changing content in the copy.json file. Do not change any other files in this project** 

1. open the "content" folder above : https://github.com/siljawalenius/noah-portfolio/tree/dev/content
2. open the folder called copy.json: https://github.com/siljawalenius/noah-portfolio/blob/dev/content/copy.json
3. click on the pencil in the top right hand corner of the file to edit. This will open an in-browser editor. 
4. Change whatever text or links out you want. If you're changing collage images, just make sure the **image size,name, and filetype** is the same. Upload the new image to the collageImg folder (https://github.com/siljawalenius/noah-portfolio/tree/dev/content/collageImg), and delete the old one. 
5. Check your work!! Save the file, then after a few minutes, check your work on this link: https://noah-melrose-git-dev-siljawalenius.vercel.app/ Pay special attention to links - do they all go to the right places? 
6. If things don't look right, go back and edit. If they really don't look right, don't panic. Nothing on this link is on your actual website yet. 
7. If everything is good, we can add these changes to the live site! 

### Adding changes to the live site
1. If you don't feel comfy here, let me know! This is a very quick thing for me to do 
2. If you feel good, click above where it says "2 branches" (it may say 2, 3 or more depending on where in the project we are) This is right next to the dropdown we clicked on earlier on the home page 
3. This will bring you to a page listing all the branches. Find the branch that says "dev" and click the button to the right of it that says "new pull request" 
4. change the **base to main** and the **compare to dev**. The arrow should be pointing FROM dev TO main. 
5. give your changes a helpful title (eg. "changing the link to my new portfolio") and click the green button that says "create pull request"
6. Finally, wait for the checks to complete (you'll see 2 green checkmarks when they do)
7. Once checks are complete, click "merge pull request". This is a green button at the bottom. Give it one last check if you want, then click "confirm merge" 
8. If you're given the option to delete dev, do NOT do it. 

### ✨🌈🎉Congrats! You're done! Changes should show up on your live site within 5-10 minutes ✨🌈🎉







This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
