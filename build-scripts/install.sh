#!/bin/bash
git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN1DIR
git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-demo.git $PLUGIN2DIR

$PLUGIN1DIR/gradlew clean install
$PLUGIN2DIR/gradlew clean install
