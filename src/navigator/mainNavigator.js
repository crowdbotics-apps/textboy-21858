import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp18162270Navigator from '../features/SignUp18162270/navigator';
import SignUp29162269Navigator from '../features/SignUp29162269/navigator';
import Messaging2161611Navigator from '../features/Messaging2161611/navigator';
import SignIn13161610Navigator from '../features/SignIn13161610/navigator';
import SignIn24161609Navigator from '../features/SignIn24161609/navigator';
import SignIn46161607Navigator from '../features/SignIn46161607/navigator';
import SignIn57161606Navigator from '../features/SignIn57161606/navigator';
import BlankScreen0156826Navigator from '../features/BlankScreen0156826/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp18162270: { screen: SignUp18162270Navigator },
SignUp29162269: { screen: SignUp29162269Navigator },
Messaging2161611: { screen: Messaging2161611Navigator },
SignIn13161610: { screen: SignIn13161610Navigator },
SignIn24161609: { screen: SignIn24161609Navigator },
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
