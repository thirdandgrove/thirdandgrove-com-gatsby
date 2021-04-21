#!/bin/bash

recurse()
{
status=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq '.check_runs[1].status')
name=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq '.check_runs[1].status')

if [[ $status == *"completed"* ]]; then
  echo "> Check has completed"
  echo "> Check Gatsby build conclusion"
  echo $status
  local conclusion=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq '.check_runs[1].conclusion')
  echo $conclusion

  if [[ $conclusion == *"success"* ]]; then
    echo $conclusion == "success"
  else
    echo "> Gatsby build conclusion was not successful"
    echo $conclusion
    kill %%
  fi

else
  sleep 10s
  echo "Waiting on check to complete ... "
  echo $status
  echo $name
  recurse $1
fi
}

recurse $SHA
