import {View} from 'react-native';

const Exo4 = () => (
  <View style={{flex:1}}>
    <View style={{flex:2,flexDirection:'row'}}>
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{backgroundColor:'blue', flex:1}}></View>
        <View style={{backgroundColor:'red', flex: 3}}></View>
      </View>
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{backgroundColor:'purple', flex:3}}></View>
        <View style={{backgroundColor:'yellow', flex: 1}}></View>
        <View style={{backgroundColor:'pink', flex:1}}></View>
      </View>
    </View>
    <View style={{backgroundColor:'gray',flex:3}}></View>
  </View>
)

export default Exo4