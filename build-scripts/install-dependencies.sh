#!/bin/bash
if [ -z $PLUGIN_DIR ]; then
    PLUGIN_DIR=$(mktemp -d)
fi

echo
echo "Install dependencies script ..."
echo

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN_DIR/sitmun-pof-plugin-core
./gradlew -p $PLUGIN_DIR/sitmun-pof-plugin-core clean install

git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN_DIR/sitmun-pof-plugin-demo
./gradlew -p $PLUGIN_DIR/sitmun-pof-plugin-demo clean install