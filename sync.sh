echo "Syncing repository with create-t3-app and shadcn/ui"

STAGING=./.sync

echo "Creating T3 App"
rm -rf .sync

npx -y create-t3-app@latest $STAGING --CI --trpc --prisma --nextAuth --tailwind --noInstall --noGit 

echo "Copying API Folder"
cp -r $STAGING/src/pages/api ./src/pages/

echo "Copying Utils Folder"
cp -r $STAGING/src/utils ./src/

echo "Copying env.mjs"
cp $STAGING/src/env.mjs ./src

echo "Replacing TS Path"
sed -i '' 's/\~/\@/g' ./src/**/*.ts

echo "Running shadcn/ui"
npx shadcn-ui@latest add --overwrite

rm -r $STAGING