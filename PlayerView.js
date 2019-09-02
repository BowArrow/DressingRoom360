import * as React from 'react';
import {Animated, View, asset} from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect} from './Store';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
class PlayerView extends React.Component {
  rotation = new Animated.Value(0);
  playerLoaded = true;

  componentDidMount() {
      this.rotation.setValue(-90);
      Animated.timing(this.rotation, {toValue: 270, duration: 20000}).start();
  }

  runAnimation() {
    this.rotation.setValue(-90);
    Animated.timing(this.rotation, {
        toValue: 270,
        duration: 20000,
    }).start(() => this.runAnimation());
  }

  render() {
    return (
      <View>
        {this.runAnimation()}
        <AmbientLight intensity={2.0} color={'#ffffff'} />
        <PointLight
          intensity={0.4}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        <AnimatedEntity
          style={{transform: [{rotateY: this.rotation},{scale: .75}]}}
          source={{obj: asset('steve-obj/steve.obj'), mtl: asset('steve-obj/steve.mtl')}}
        />
      </View>
    );
  }
}

const ConnectedPlayerView = connect(PlayerView);

export default ConnectedPlayerView;