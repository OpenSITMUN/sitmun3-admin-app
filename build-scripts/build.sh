#!/bin/bash
# For local builds

# Get the absolute path of this script
# so we can call it from anywhere and keep the
# other scripts with relative paths

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Using source makes all of them run in the same shell process
# so they can share functions and variables

source $DIR/install.sh
source $DIR/script.sh
source $DIR/after_script.sh
