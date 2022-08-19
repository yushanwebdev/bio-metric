import {NativeBaseProvider} from 'native-base';
import * as React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {SCREENS} from '../../constants/screen';

import * as Home from './home';
import * as Settings from './settings';
import * as Splash from './splash';

const registerComponentWithRedux =
  (redux: any) => (name: string, screen: any) => {
    Navigation.registerComponent(
      name,
      () => (props: any) =>
        (
          <NativeBaseProvider>
            <Provider store={redux.store}>
              <screen.default {...props} />
            </Provider>
          </NativeBaseProvider>
        ),
      () => screen.default,
    );
  };

export function registerScreens(redux: any) {
  registerComponentWithRedux(redux)(SCREENS.Splash, Splash);
  registerComponentWithRedux(redux)(SCREENS.Home, Home);
  registerComponentWithRedux(redux)(SCREENS.Settings, Settings);
}
