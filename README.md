# TAG V5

![Twitter Follow](https://img.shields.io/twitter/follow/thirdandgrove.svg?label=Third%20%26%20Grove&style=social)

Gatsby front end for Third and Grove's Drupal 8 backend.

## Requirements

- Node (10.x LTS at time of writing)
- Yarn

## Installation

1. Clone this repository: `git clone git@github.com:thirdandgrove/thirdandgrove-com-gatsby.git`
2. Change directories into the project root: `cd thirdandgrove-com-gatsby`
3. Run `yarn` in the project root.
4. Run `cp sample.env .env` and then modify your new `.env` file with the appropriate credentials from the `TAGv5 Gatsby/CMS` entry in 1Password.

## Development

1. In the root of the project, run `yarn start`.
2. This will perform the initial build and then launch your browser to your local site (the first time you do this, it may take a few minutes).
3. Changing files in this state will also hot reload the files

## Build

1. In the root of the project, run `yarn build`.
2. The site will be built into the `public` folder of the project root.

## Testing

1. Ensure that you have your dev server running `yarn start`
2. Run tests with `yarn test`.
3. If you are developing tests, use `yarn cypress` instead.

## Deployment

This website is built with NodeJS. It uses the React-based open source framework [Gatsby](https://www.gatsbyjs.com/). This framework generates a static site.

This website uses [Netlify](https://www.netlify.com/) for deployment. Netlify's platform performs automated builds of the static site. It also links to GIT workflow. When a pull request is created it triggers an automated build of the static site that is pinned to the code in that Pull Request.

To deploy code to https://www.thirdandgrove.com/ a content editor has to either trigger a build after a content change or a developer has to push code to the master branch (whether that is a direct commit to master or merging a pull request).

Currently build times range from 45 min to 1 hr.

1. Create a pull request with the new code
2. Get verification that change is correct from the preview url
3. Merging code into master will trigger a production build
