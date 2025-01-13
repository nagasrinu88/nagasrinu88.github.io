@echo off
echo Building Next.js application...
next build

echo Creating .nojekyll file...
if not exist out mkdir out
echo.> out/.nojekyll

echo Adding build output to Git...
git add out
git commit -m "Deploy to GitHub Pages"

echo Pushing to gh-pages branch...
for /f "tokens=*" %%a in ('git subtree split --prefix out master') do set SUBTREE_SPLIT=%%a
git push origin %SUBTREE_SPLIT%:gh-pages --force
echo Deployment complete!
