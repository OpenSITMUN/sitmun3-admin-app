#!/bin/bash
MAIN_BUILD_DIR=${PWD}

PLUGIN1DIR=$(mktemp -d)
PLUGIN2DIR=$(mktemp -d)

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN1DIR
git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-demo.git $PLUGIN2DIR

cd $PLUGIN1DIR
./gradlew clean install
cd $PLUGIN2DIR
./gradlew clean install
cd $MAIN_BUILD_DIR
#./gradlew clean bootRun # Este no termina (lanza un servidor)
./gradlew check # Necesitamos que termine para probar

rm --interactive=never -R $PLUGIN1DIR 
rm --interactive=never -R $PLUGIN2DIR 
