#!/bin/bash

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN_DIR/sitmun-pof-plugin-core
cd $PLUGIN_DIR/sitmun-pof-plugin-core
./gradlew clean install

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN_DIR/sitmun-pof-plugin-demo
cd $PLUGIN_DIR/sitmun-pof-plugin-demo
./gradlew clean install