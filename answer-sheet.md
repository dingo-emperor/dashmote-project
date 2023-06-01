# Part1 General Questions

## Answer 1
I think there are too many points that can keep code efficient and clear, and there are some my personal experiences.

At first, the format of code should be pretty, e.g., use ESLint to make code prettier. 
Also, the readability is important, I will name every variable and function properly, so everyone can quickly know what the variable means or what the function does . 
And the reusablility concerns. For example, I will extract pure functions (which is unrelated to current state) to one individual directory in case they are reused, and this action will also improve the readability of code.
Of course, the knowledge to frame and language is the key to improve efficiency. For example, we should reduce rendering of components, so we should use more like global states and useEffect in React.js.

When I document my code, I will first explain how to use this code like introducing API's or how to start this project. Then in each file, I will write detailed annotations explaining what each function does and what each division means.

## Answer 2
During my last internship, I anticipated in building an back-end with microservice architecture on Azure cloud. This is an internal App Store management application. After logging in, users can access, add and delete (if has the authority) the web apps.

This appliction will start a microserver when a user logs in, and it's totally event-driven. There is a microserver serves as an event distributer, it will listen events from server or user, and distribute message to servers. This project uses MongoDB, and its back-end frame is Tornado.py.

In my perspective, a good architecture should support high concurrency and ready for the growth of user number. Since I'm junior in back-end architecture, I don't have much experience of it. Here is my own project that simply shows the event-driven architecture with microservices https://github.com/dingoEmperor/blog.


## Answer 3
I prefer the git branching model that uses **master** branch and **develop** branch as main branches, while uses **feature** branch, **release** branch and **hotfix** branch as auxiliary branches. 

Under this model, develop branch is forked from master, it will reflect the code change of next release, when it's ready to release, it will be merged to master. 
When I need to add one certain feature while it still cannot be releases, I can fork a feature branch from develop. 
When I need to release a version, I need to fork a release branch from master. 
If there occurs some accidential mistakes in master, I will fork a hotfix branch from master and merge to it after fix.

I have been using this branching model during my last internship, and I think it's quite easy to understand. This model divides all important requirements in development well so it's suitable for team working on one project. 

## Answer 4
I think CI/CD pipeine is a good way to deploy code to production. First the pipeline pack up the whole project with its dependencies by Docker. Then perform unit test and integration test to the product. After passing these, the new version can be released and deployed. All tasks during these process need to be performed in certain order, so the synchronization between processes should will concerned primarily.

# Part2 Case Programming

This is a front-end project running direcly on your host, it's written by Vue.js 3.0 and antd libraries https://antdv.com/components/overview.

## Start
Pull down the whole project, then under this directory, run <font color="#dd0000">serve -s dist</font> command, then you will see the project is running on your local server (default portal is http://localhost:3000).

## Explanation
I started learning Vue.js from the day I received this task (actually I've been writing React.js before and never used Vue), so I'm not very familiar with Vue, especially I don't know how to build a mobile app by Vue, and that's why I failed in building an mobile version.

Also, you may find that this site is not so delicate, that is mainly because that I'm not familiar with the antd liberary and I have few experience writing css myself.
