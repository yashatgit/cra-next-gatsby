BASEDIR=$(pwd)

rm -rf build

mkdir build
cd build
mkdir cra
mkdir next
mkdir gatsby
cd $BASEDIR

cp -r packages/cra/build/ build/cra/
cp -r packages/next/out/ build/next/
cp -r packages/gatsby/public/ build/gatsby/

cd build
touch index.html
echo "<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head><body><p><a href="cra/index.html">CRA</a></p><p><a href="next/index.html">NextJS</a></p><p><a href="gatsby/index.html">Gatsby</a></p></body></html>" >> index.html