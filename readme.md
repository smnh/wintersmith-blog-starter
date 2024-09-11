
# Wintersmith on Netlify Create

This is the default [wintersmith](https://github.com/jnordberg/wintersmith) template adjusted for [Netlify Create](https://www.netlify.com/platform/create/).

![Wintersmith Netlify Create Demo](./contents/images/wintersmith-netlify-create-demo.gif "Wintersmith Netlify Create Demo")

1. Clone this repo.
2. Install dependeices:

   ```shell
   npm install
   ```
   
3. Install stackbit CLI (local Netlify Create)

   ```shell
   npm install -g @stackbit/cli
   ```

4. Open one terminal and run wintersmith

   ```shell
   npm run dev
   ```
  
   Wintersmith development server should start locally on localhost:3000

5. Open second terminal and run:

   ```shell
   stackbit dev
   ```
   
   Once visual editor server starts you should see a link http://localhost:8090/_stackbit, click it to open the visual editor. You will need to have a Netlify account.

6. Now you can edit the contents of your Wintersmith site and your changes will be saved in markdown files.

