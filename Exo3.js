import {View} from 'react-native';

const Exo3 = () => (
  <View style={{flex:1}}>
    <View style={{flex:1,flexDirection:'row'}}>
      <View style={{backgroundColor:'green', flex:3}}></View>
      <View style={{backgroundColor:'red', flex: 2}}></View>
      <View style={{backgroundColor:'blue', flex:1}}></View>
    </View>
    <View style={{flex:1,flexDirection:'column'}}>
      <View style={{backgroundColor:'purple', flex:3}}></View>
      <View style={{backgroundColor:'yellow', flex: 2}}></View>
      <View style={{backgroundColor:'pink', flex:1}}></View>
    </View>
  </View>
)

export default Exo3