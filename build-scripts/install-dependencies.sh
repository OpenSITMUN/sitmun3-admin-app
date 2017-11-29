#!/bin/bash
if [ -z $PLUGIN_DIR ]; then
    PLUGIN_DIR=$(mktemp -d)
fi

echo
echo "Install dependencies script ..."
echo

if git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-core.git $PLUGIN_DIR/sitmun-pof-plugin-core; then
    cd $PLUGIN_DIR/sitmun-pof-plugin-core
    ./gradlew clean install
else
    echo
    echo "Install dependencies script FAILED"
    echo
    exit 1
fi
  

if git clone https://github.com/OpenSITMUN/sitmun-pof-plugin-demo.git $PLUGIN_DIR/sitmun-pof-plugin-demo; then
    cd $PLUGIN_DIR/sitmun-pof-plugin-demo
    ./gradlew clean install
else
    echo
    echo "Install dependencies script FAILED"
    echo
    exit 1
fi
