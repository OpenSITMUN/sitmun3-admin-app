#!/bin/bash
cd $MAIN_BUILD_DIR
#./gradlew clean bootRun # Este no termina (lanza un servidor)
./gradlew check # Necesitamos que termine para probar
