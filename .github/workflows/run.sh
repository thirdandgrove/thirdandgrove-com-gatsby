#!/bin/sh

echo "$SHA"

buildUrl=https://build-$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$SHA/check-runs | jq -c -r '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .external_id').gtsb.io/

echo "$buildUrl"

NODE_ENV=test CYPRESS_BASE_URL=$buildUrl cypress run
