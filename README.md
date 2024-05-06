# create-t3-turbo

This is the "stock" create-t3-turbo repo. The onlyc changes are on the page.tsx file in the nextjs app.

To reproduce just do pnpm install and run pnpm lint.

I noticed that eslint stops working in the entire file without warning untill the deps are added in the useEffect array.

Also when running pnpm lint it crashes with the: TypeError: context.getSource is not a function
