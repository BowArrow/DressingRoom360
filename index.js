import {AppRegistry} from 'react-360';
import TopPosts from './TopPosts';
import CurrentPost from './CurrentPost';
import PlayerView from './PlayerView';
import * as Store from './Store';
// Store.initialize('AIzaSyA_Vtvifka6Ft4KmikI8ikyns7OFoSSpx8');

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('PlayerView', () => PlayerView);