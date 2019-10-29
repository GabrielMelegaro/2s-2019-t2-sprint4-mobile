import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import {createBottomTabNavigator} from 'reat-navigation-tabs';
import {createAppContainer} from 'react-navigator';

//criar a navegação
const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Profile: {
        screen: ProfileScreen,
    }
});

//container
export default createAppContainer(MainNavigator);