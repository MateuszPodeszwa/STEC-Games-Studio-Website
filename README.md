# Scarborough TEC Games Studio

Scarborough TEC Games Studio is a genuine game development studio situated within the college where I am currently  
pursuing my studies. However, this is not an official project for STEC's studio; it is an assignment assigned to my  
computer science group to demonstrate my skills and achieve the desired level.

## 1. The purpose of this repo

As previously mentioned, the purpose of this repository is to showcase my work on the assignment, which aims to reflect  
our understanding of professional web development practices. In accordance with the assignment's requirements,  
I am maintaining this GitHub repository to demonstrate my commitment to professionalism and collaboration.

## 2. How to build a project?

The first step is to either download the repository using the Command Line Interface (CLI) or by clicking the Fork  
button on the GitHub page. If you choose to use the command line, you'll need to have Git installed on your computer.  
You can install Git by entering the following command in your CLI:

### 2.1. Installing git

Git is a free and open source distributed version control system designed to handle everything from small to very  
large projects with speed and efficiency.

#### 2.1.1. For linux distributions

If you’re on Fedora (or any closely-related RPM-based distribution, such as RHEL or CentOS), you can use dnf

```
sudo dfn install git-all
```

If you’re on a Debian-based distribution, such as Ubuntu, try apt:

```
sudo apt install git-all
```

#### 2.1.2. For Windows 
Install [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) tool if you don't already have it,
then type this command in command prompt or Powershell.

```
winget install --id Git.Git -e --source winget
```

#### 2.1.3. For MacOS

Install [homebrew](https://brew.sh/) if you don't already have it or use below command:   

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

, then:  
```
brew install git
```

For more information visit [git-scm.com/](https://git-scm.com/)

### 2.2. Installing NODE 

After downloading the repository to your desired location on your local machine, the next step is to ensure that  
the NPM package manager is installed. To do this, you must have Node.js installed on your computer.  
You can install Node.js by entering the following command into your Command Line Interface (CLI):

```javascript
node -v
```

, and then:

```
npm -v
```

If you encounter an error message during the process, it's likely that Node.js is not installed on your computer.  
To install it, visit the [Node.js](https://nodejs.org/en) website and follow the instructions provided.  
After successfully installing Node.js, try running the aforementioned command again.

### 2.3. Installing dependencies

With everything installed and functioning correctly, navigate to the root directory of your downloaded repository.  
Open a terminal window in that location and enter the following command:

 ```
npm install
```
This command will install all the dependencies listed in the 'package.json' file. Therefore,  
make sure you have a strong and reliable internet connection before proceeding. You should notice  
that **node_modules** folder has appeared.


## 3. Project Structure

Inside my project, you'll see the following folders and files:

```
root/
│
├── public/
│   ├── favicon.svg
│   └── *.img, jpg etc.
├── src/
│   ├── components/
│   │   ├── component.astro
│   │   └── oher .astro or .vue components
│   ├── layouts/
│   │   └── All .astro layouts
│   ├── scss/
│   │   ├── base
│   │   │   └── All .sass
│   │   ├── components
│   │   │   └── All .sass
│   │   ├── layout
│   │   │   └── All .sass
│   │   ├── pages
│   │   │   └── All .sass
│   │   ├── utilities
│   │   │   └── All .sass
│   │   ├── vendors
│   │   │   └── All .sass
│   │   └── global.scss
│   └── pages/
│       └── Main .astro pages e.g. homepage.astro
├── package.json
├── .broweserslistrc
├── This readme.md file
├── LICENSE.md
└── Other configs files
```

## 4. Good to know
Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.  
There's nothing special about `src/components/`, but that is where I put any Astro/Vue components.  
Any static assets, like images, are placed in the `public/` directory.

## 5. Commands

All commands are run from the root of the project, from a terminal:

| Action                                           | Command                |
| :----------------------------------------------- | :--------------------- |
| Installs dependencies                            | `npm install`          |
| Starts local dev server at `localhost:3000`      | `npm run dev`          |
| Build your production site to `./dist/`          | `npm run build`        |
| Preview your build locally, before deploying     | `npm run preview`      |
| Run CLI commands like `astro add`, `astro check` | `npm run astro ...`    |
| Get help using the Astro CLI                     | `npm run astro --help` |