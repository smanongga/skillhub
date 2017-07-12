# SkillHub

Created in Auckland, New Zealand, SkillHub is a community for people to share, discover and develop skills together. SkillHub was built by EDA students in June 2017:

## Getting Started
These instructions help you get a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Pull down the repo:
```
cd skillhub
npm i
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

## Testing
To run Unit Tests:
```
npm run test
```
