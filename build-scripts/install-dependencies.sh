#!/bin/bash
if [ -z $PLUGIN_DIR ]; then
    PLUGIN_DIR=$(mktemp -d)
fi

echo
echo "Install dependencies script ..."
echo

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN_DIR/sitmun-pof-plugin-core
cd $PLUGIN_DIR/sitmun-pof-plugin-core
./gradlew install

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-demo.git $PLUGIN_DIR/sitmun-pof-plugin-demo
cd $PLUGIN_DIR/sitmun-pof-plugin-demo
./gradlew install
