![HyCoDev Logo](public/images/icons/logo-hycodev.png)

## Installation 

This website is built in NextJs with Node Modules to set up your development
environment please execute the following steps

Download Node.js on to your machine `https://nodejs.org/en/download/`

To clone the repository into your machine, in your IDE terminal paste the following command.
`git clone https://github.com/xQuazor/hycodev.git`

Then install node modules by executing the following command in the terminal: `npm i`

## Development

To start the development server type in the terminal `npm run dev`. By default
the server will be started on `http://localhost:3000`, unless ports are configured otherwise.

#### Most Useful Docs

The website is primarily built with NextJS, Sass, and React.
`https://nextjs.org/docs`
`https://react.dev/learn`
`https://sass-lang.com/documentation/`

#### Folder Structure

├─ .next - NextJs server (generated when you run command `npm run build`)\
├─ .node_modules - folder for dependencies\
├─ public - folder for images, videos and fonts, fully accesable to the public \
├─ scss - stylesheet and component templates\
├─ src\
│&nbsp;&nbsp; ├─ app - the website itself. The name of each subdirectory is the route in the website.\
│&nbsp;&nbsp; ├─ assets - data used to dynamically generate components such as publications, people and software.\
│&nbsp;&nbsp; ├─ components - component templates used in webpages\
│&nbsp;&nbsp; ├─ scripts - update functions for publications

Easy changes to make, copy comment out template provided at start of file:\
\
`home-slides.ts` - info to generate home page showcase at _hycodev.com/home_.\
\
`hycodev-members.ts` - info to generate person box with (optionally) personal website links at _hycodev.com/the-team_.\
\
`news.ts` - info to generate news items at _hycodev.com/news_ and most recent entries to _hycodev.com/home_\
\
`open-positions.ts` - info to generate positions at _hycodev.com/join-us_.\
\
`projects.ts` - info to generate projects boxes at _hycodev.com/projects_ and project site at _hycodev.com/projects/project_name_\
\
`publications.json` - info to generate publication boxes at _hycodev.com/publications-all_\
\
`research.ts` info to generate pages from the homepage showcase at _hycodev.com/research/example_project_\
\
`software.ts` info to generate software boxes at _hycodev.com/software_

## Deployment

To preview server build type in the terminal the following commands
`npm run build` and then `npm run start`. Once again the server will be hosted at `http://localhost:3000`,
unless configured otherwise.

The repository is configured to automatically push project files to the host server when there's a push to 
the ```master``` branch in GitHub. 
\
The GitHub action script will connect to the remote server, send over files, build project
and queue a process to run it on the web. 
\
\
[Workflows/webpack.yml](./.github/workflows/webpack.yml) is the script responsible for this feature. Inside the script you can find the sequence of linux commands to for the update 
in case needed.
\
\
SSH logins can be found under repository secrets or in Hostinger.
