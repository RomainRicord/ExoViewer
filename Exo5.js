import {View} from 'react-native';

const Exo5 = () => (
  <View style={{flex:1}}>
    
    <View style={{flex:2,flexDirection:'row'}}>
      <View style={{flex:3,flexDirection:'column'}}>
        <View style={{backgroundColor:'purple', flex:3}}></View>
        <View style={{backgroundColor:'yellow', flex: 1}}></View>
        <View style={{backgroundColor:'pink', flex:1}}></View>
      </View>
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{backgroundColor:'red', flex: 1}}></View>
        <View style={{backgroundColor:'blue', flex:0.5}}></View>
      </View>
      <View style={{flex:1,flexDirection:'column'}}>
          <View style={{backgroundColor:'cyan', flex: 2}}></View>
          <View style={{backgroundColor:'hotpink', flex:1}}></View>
      </View>
    </View>

    <View style={{backgroundColor:'gray',flex:3}}></View>

  </View>
)

export default Exo5