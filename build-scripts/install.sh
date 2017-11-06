#!/bin/bash
eval "export MAIN_BUILD_DIR=${PWD}"

# ArtifactID in gradle by default uses the name of the directory
# So using temp dirs with random names does not work (it can be
# changed in build.gradle, but for now I'll stick to the names of the
# repositories)
#PLUGIN1DIR=$(mktemp -d)
#PLUGIN2DIR=$(mktemp -d)
eval "export PLUGIN1DIR=(/tmp/sitmun-pof-plugin-core)"
eval "export PLUGIN2DIR=(/tmp/sitmun-pof-plugin-demo)"

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN1DIR
git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-demo.git $PLUGIN2DIR

$PLUGIN1DIR/gradlew clean install
$PLUGIN2DIR/gradlew clean install
