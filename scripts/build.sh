#!/usr/bin/env bash
if [ -z "$TRAVIS" ]; then
    echo "This script should only be run from TravisCI."
    exit
fi

yarn install
yarn build

exit_status=$?

if [ $exit_status -eq 1 ]; then
    echo "Gatsby Build Failed, clearing cache to attempt auto resolution. Build time may be extended by a long time."

    yarn run gatsby clean
    travis_wait 45 yarn build

    exit_status=$?
    return $exit_status;
fi
