# TAG V5

![Twitter Follow](https://img.shields.io/twitter/follow/thirdandgrove.svg?label=Third%20%26%20Grove&style=social)

Gatsby front end for Third and Grove's Drupal 8 backend.

## Requirements

* Node (10.x LTS at time of writing)
* Yarn
* CMS and Resumator Access

## Installation

1. Clone the repository and navigate to it in your terminal.
2. Run `yarn` in the project root.
3. Run `cp sample.env .env` and then modify the `.env` file with the appropriate credentials.

## Development

1. In the root of the project, run `yarn start`.
2. This will perform the initial build then launch your browser to your local site. 
3. Changing files in this state will also hot reload the files

## Build

1. In the root of the project, run `yarn build`.
2. The site will be built into the `public` folder of the project root.

## Testing

1. Ensure that you have your dev server running `yarn start`
2. Run tests with `yarn test`.
3. If you are developing tests, use `yarn cypress` instead.
