# Website Using Tailwind

This project is Online on [Website](https://skant-portfolio.netlify.app/).

## Tailwind
![alt text](https://tailwindcss.com/_next/static/media/tailwindcss-logotype.ed60a6f85c663923c4d6ee9d85f359cd.svg)
<details>
<summary> 
About
</summary>

- Tailwind CSS can be used to style websites in the fastest and easiest way.
  
- Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
  
- The beauty of this thing called tailwind is it doesn’t impose design specifications or how your site should look, you simply bring tiny components together to construct a user interface that is unique. What Tailwind simply does is take a ‘raw’ CSS file, process this CSS file over a configuration file, and produces an output.  
  
</details>

<details>
<summary> 
Installation
</summary>
  
- ##### Install Tailwind CSS
    ```bash
    npm install -D tailwindcss
    ```


</details>
<details>
<summary> 
Setup
</summary>

- ##### Configure your template paths
  - Create your `tailwind.config.js` file.
  
  - Add the paths to all of your template files in your `tailwind.config.js` file.
  
   ```bash
   module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],
   }
   ```
- ##### Add the Tailwind directives to your CSS
  - Add the @tailwind directives for each of Tailwind’s layers to your main CSS file i.e `index.css`.
  
  
   ```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
 
- ##### Addition 
  - Add craco.config.js file
   ```bash
    module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  };
   ```  
</details>
