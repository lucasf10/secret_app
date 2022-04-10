# Secret

An app inspired on the legacy Secret application, where you can share your secrets within your region.

This repo is the implementation of the backend and API of the application.

For the Node API that this App consumes, you should check the [secret-api repo](https://github.com/lucasf10/secret-api).

## How to run this app

1. Create your own **.env** file based on **.env.example**

2. Install all dependencies with yarn:

```bash
yarn
```

3. Start the app server:

```bash
yarn start
```

4. Start the app on android (or iOS)
```bash
yarn android //ios
```

## Technologies used

- React Native (CLI)
- Redux
- Redux-saga
- Redux-persist
- Atom Design
- Typescript
- Firebase (FCM)
- Yarn

## Features included

- Authentication (create account/login)
- Firebase Push Notifications
- Geolocation
- Create Post
- List posts within Location
- Like posts
- Comment on posts
- See and like comments
- Custom splash screen and icons
