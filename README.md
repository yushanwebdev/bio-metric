<div align="center">
  <br>
  <h1>🚀 Native Boilerplate 🚀</h1>
  <strong>Build enterprise React Native apps</strong>
</div>
<br />
<div align="center">

![iOS and Android](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=flat)

</div>

#### An opinionated [React Native](https://facebook.github.io/react-native/docs/getting-started) Starter Kit with [React Native Navigation](https://github.com/wix/react-native-navigation) + [Redux](https://github.com/reactjs/redux) + [TypeScript](https://github.com/Microsoft/TypeScript-React-Native-Starter) to build iOS and Android apps

The project has been setup based off [RN+TS Boilerplate by Amit Mangal](https://github.com/AmitM30/react-native-typescript-boilerplate) and [React Native Community's React Native Typescript Starter](https://github.com/react-native-community/react-native-template-typescript) repo.

<p align="center">
  <img alt="React Native Typescript Boilerplate" src="./src/view/assets/images/sample/gif_compressed.gif" height="800px" />
</p>

---

## Introduction

Jumpstart building robust apps using React Native and TypeScript with most commoly needed tools already setup. Just `yarn install` and get going from respective IDEs.

- **Routing and Navigation**
  - **Native** Tabbed navigation using [React Native Navigation v7](https://github.com/wix/react-native-navigation)
  - Side / Drawer Menu support
- State Management using **Flux Architecture**
  - [Redux](https://redux.js.org/introduction/getting-started)
  - [Redux-Thunk](https://github.com/reduxjs/redux-thunk) middleware - side-effect handling
  - [Redux Logger](https://github.com/LogRocket/redux-logger) middleware - Logging every State Change
- **Atomic Design pattern**
  - The structure of the app is inspired by [atomic design pattern](https://atomicdesign.bradfrost.com/chapter-2/).
  - Widgets / Elements: Build your own **Design Language System** with these building blocks.
    - **Theme**: Base Typography setup - Color, Font, LAYOUT, BUTTONS, FONTS, TEXT, INPUT
    - **elements**: `<BUTTON_DEFAULT>` or `<CTEXT>`. They are custom elements that have default properties like font, size and so on.
    ```typescript
    <CTEXT style={GLOBAL.CTA.Style.primaryText}>{title}</CTEXT>
    ```
    - **widgets**: Any component providing a complete functionality. E.g. carousels component, banner component, etc.
    ```typescript
    <Category componentId={componentId} title={locale.Categories} />
    ```
- **Type Definitions**
  - Type definitons for actions, reducers, store, components and more.
- **Built-in Splash screen**
- **Hermes** and **Flipper** integrations
- **Code Lint** using **ESLint** & **Typescript ESLint**
- **Support** editing through XCode & Android Studio

##### App Screens

| ![Splash](./src/view/assets/images/sample/1.png 'Splash') | ![Home](./src/view/assets/images/sample/2.png 'Home') | ![Side Menu](./src/view/assets/images/sample/3.png 'Side Menu') |
| :-------------------------------------------------------: | :---------------------------------------------------: | :-------------------------------------------------------------: |

##### Flipper Support

![Flipper](./src/view/assets/images/sample/4.png 'Flipper')

### Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Cheat Sheet](#cheat-sheet)
  - [M1 support](#m1-support)
  - [Single Screen vs Tabbed Based Navigation](#single-screen-vs-tabbed-based-navigation)
  - [Renaming the App](#renaming-the-app)
  - [iOS Launch Screen](#ios-launch-screen)
  - [Android Launch Screen](#android-launch-screen)

### Project Structure

```
/
├── android						Android Native code
├── ios							iOS Native Code
├── shared
│   ├── redux					Applications Logic
│   │   ├── actionCreators
│   │   ├── actionTypes
│   │   ├── reducers
│   │   └── store
│   └── utilities
│   ├── services
│   │   ├── core				Core Services - API (fetch/axios)
│   │   │  ├── API
│   │   └── auth
├── src
│   ├── config					Global Configuration
│   ├── constants				Screen names and ids, Localization
│   ├── navigators				Router, Navigation
│   ├── view					UI components
│   │   ├── elements				Custom elements
│   │   ├── assets
│   │   ├── screens
│   │   ├── styles				Theme
│   │   └── widgets				Custom components
│   └── utilities
├── __tests__					Unit Tests
├── .babelrc
├── .gitignore
├── tsconfig.json				TypeScript Configuration
├── app.json
├── index.js					Application Entry point
├── package.json
└── README.md
```

`shared`
Everything related to application business logic. The redux store.

`src`
Presentation layer for the app - screens, styles, images, icons etc.

### Getting Started

Make sure node version installed is `>=18.x.x`. Then install using yarn (or npm):

```
yarn install
```

Start the Metro Bundler:

```
yarn start
```

###### iOS

One time. Move to `ios` folder and install pods:

```
cd ios && pod install
```

Launch application from XCode (`Command + R`) Or launch from Terminal:

```
yarn ios
# runs the following command. change device name here
# `npx react-native run-ios --simulator='iPhone 11'`
```

###### Android

Start an Android Simulator from:

```
Android Studio > Tools > AVD Manager > Run any device
```

Similarly, run from Android Studio itself Or from Terminal:

```
yarn android
# runs the following command
# react-native run-android --variant=Debug
```

### Commands

|                              | Remark                                                             |
| ---------------------------- | ------------------------------------------------------------------ |
| `yarn start`                 | Starts metro bundler                                               |
| `yarn ios`                   | Starts iOS app. Start metro bundler first                          |
| `yarn android`               | Starts Android app. Start metro bundler and Android emulator first |
| `yarn lint`                  | linting                                                            |
| `yarn lint:fix`              | tries to fix linting issues automatically                          |
| `yarn build:android:debug`   | Android debug build                                                |
| `yarn build:android:release` | Android release build                                              |

### Cheat Sheet

#### iOS Launch Screen

```shell
XCode -> Project Folder -> Click on `Images.xcassets` -> Click on `LaunchScreen`
```

Change the 3 images here to set the new launch screen for iOS.

![Launch Screen](./src/view/assets/images/sample/splash-image.png 'Launch Screen')

#### Android Launch Screen

```shell
`./android/app/src/main/res/drawable-*` folders
```

Change the images the `drawable-*` folders to set the new launch screen for Android.

#### M1 support

Some additional steps may be required for project to work on M1.

- Disable Rosetta in Terminal
- Install ffi

```
sudo arch -x86_64 gem install ffi
```

- Re-install dependencies

```
arch -x86_64 pod install
```

Now try and run CocoaPods.

P.S.: Thanks to samanthadotcom#7043 (discord)

#### Single Screen vs Tabbed Based Navigation

The application launches with a splash screen, and then moves to a tabbed based navigation. Splash screen is a good place to fetch data / build application launch logic like getting user token from API or Async Store, load persist state etc.

For Single screen application, replace this tabbed based navigation with a single screen - just `home`, or simply use the splash screen to setup the app, may be with a burger menu.

#### Renaming the App

You might also want to rename the app for your own use. Follow any of the links below.

- [How to Rename A React Native App](https://medium.com/the-react-native-log/how-to-rename-a-react-native-app-dafd92161c35)

Or

- NPM Package: [react-native-rename](https://www.npmjs.com/package/react-native-rename)
