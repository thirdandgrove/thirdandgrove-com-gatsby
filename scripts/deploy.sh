#!/usr/bin/env bash
if [ -z "$TRAVIS" ]; then
    echo "This script should only be run from TravisCI."
    exit
fi

COMMIT_MESSAGE=$(git log -1 --format="%h: %s")
netlify deploy --dir=public --functions=functions --message="$COMMIT_MESSAGE"
