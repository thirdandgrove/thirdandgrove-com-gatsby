#!/bin/bash

recurse()
{
id="Gatsby Build Service - tagd8_gatsby"
status=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq -c -r '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .status')
name=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq -c -r '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .name')


if [[ $status == *"completed"* ]]; then
  echo "> $name has completed"
  echo "> Checking $name conclusion"

  local conclusion=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq -c -r '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .conclusion')

  if [[ $conclusion == *"success"* ]]; then
    echo "> $name: $conclusion"

    # curl json external_id
    local buildUrl=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq -c -r '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .external_id')

    # set cypress base url
    echo "::set-env name=CYPRESS_BASE_URL::https://build-$buildUrl.gtsb.io"
  else
    echo "> Gatsby build conclusion was not successful"
    echo $conclusion
    kill %%
  fi

else
  sleep 20s
  echo "> Waiting on $name to complete ... current status: $status"
  recurse $1
fi
}

recurse $SHA
