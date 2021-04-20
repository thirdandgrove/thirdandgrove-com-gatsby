#!/bin/bash

recurse()
{
status=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq '.check_runs[0].status')

if [ $status == "completed" ]; then
  echo "> Check has completed"
  echo "> Check Gatsby build conclusion"
  echo $status
  local conclusion=$(curl -s  https://api.github.com/repos/thirdandgrove/thirdandgrove-com-gatsby/commits/$1/check-runs | jq '.check_runs[0].conclusion')
  echo $conclusion

  if [ $conclusion == "success" ]; then
    echo $conclusion == "success"
  else
    echo $conclusion
  fi

else
  echo "Waiting on check to complete ... "
  echo $1
  recurse $1
  echo $status
fi
}

recurse $SHA
