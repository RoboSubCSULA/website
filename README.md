# Website for Robosub at Cal State LA
This is the website for the Robosub team at Cal State LA. The website is used for both Club Members and Senior Design members.
The website is used to showcase the different Robosubs that have been built, this is also part of the Robosub competition requirements.
On the website you can also find useful information regarding events and on working with the Robosub.

## Getting started
1. To work with this website download this repository to your local machine.
When you have downloaded the repository to your local machine create a new branch with:

    `git checkout -b <Branch Name>`

    The branch name should reflect the update you are doing to the website.

2. The website is using `npm` as package manager, so we need to download all the  packages that the websites is dependent on. You do this by running the following command in the project folder:

    `npm install --force`

    The `--force` tag is needed because currently the website is using some dependencies that have been deprecated, and we will get an error if just using `npm install`.

    (See Troubleshooting if you have problem with this step.)

3. After all the packages are installed we use

    `npm start`

    This will start a local development server on the location `http://localhost:3000`.
    Open this site in the browser and you can see the website and make changes.



## Website Hosting
...

## Troubleshooting
When running `npm install --force` it did not work at first. I had to remove `package-lock.json` and then run the command again for it to work.
