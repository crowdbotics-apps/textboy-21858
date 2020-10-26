import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn46161607Navigator from '../features/SignIn46161607/navigator';
import SignIn57161606Navigator from '../features/SignIn57161606/navigator';
import BlankScreen0156826Navigator from '../features/BlankScreen0156826/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn46161607: { screen: SignIn46161607Navigator },
SignIn57161606: { screen: SignIn57161606Navigator },
BlankScreen0156826: { screen: BlankScreen0156826Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
