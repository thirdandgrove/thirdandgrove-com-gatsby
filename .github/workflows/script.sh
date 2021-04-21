#!/bin/bash

recurse()
{
id="Gatsby Build Service - tagd8_gatsby"
status=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq -c -r '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .status')
name=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq -c -r '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .name')


if [[ $status == *"completed"* ]]; then
  echo "> Check has completed"
  echo "> Check Gatsby build conclusion"
  echo $status
  local conclusion=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq -c '.check_runs[]? | select( .name | contains("Gatsby Build Service - tagd8_gatsby")) | .conclusion')
  echo $conclusion

  if [[ $conclusion == *"success"* ]]; then
    echo [[ $conclusion == *"success"* ]]
    echo "> Gatsby build service: $conclusion"
  else
    echo "> Gatsby build conclusion was not successful"
    echo $conclusion
    kill %%
  fi

else
  sleep 20s
  echo "> Waiting on check to complete ... current status: $status"
  recurse $1
fi
}

recurse $SHA
