#!/usr/bin/env bash
if [ -z "$TRAVIS" ]; then
    echo "This script should only be run from TravisCI."
    exit
fi

COMMIT_MESSAGE=$(git log -1 --format="%h: %s")
if [ "$TRAVIS_BRANCH" == "master" ]; then
    netlify deploy --dir=public --functions=functions --prod --message="$COMMIT_MESSAGE"
else
    netlify deploy --dir=public --functions=functions --message="$COMMIT_MESSAGE"
fi
