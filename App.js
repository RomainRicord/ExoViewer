import { useState, useEffect } from 'react';
import {View, Text} from 'react-native';

import Exo1 from './Exo1.js'
import Exo2 from './Exo2.js';
import Exo3 from './Exo3.js';
import Exo4 from './Exo4.js';
import Exo5 from './Exo5.js';

const Returnview_ = (v) => {
  if(v.v == 0){
    return(<Exo1></Exo1>)
  } else if (v.v == 1) {
    return(<Exo2></Exo2>)
  }else if (v.v == 2) {
    return(<Exo3></Exo3>)
  }else if (v.v == 3) {
    return(<Exo4></Exo4>)
  }else if (v.v == 4) {
    return(<Exo5/>)
  }
}

const Exo_ = () => {

  const [getCount,setCount] = useState(0)

  useEffect(() => {

    let count_ = 0

    let interval = setInterval(() => {
      
      count_ = count_ + 1
      if (count_ >= 5) {
        count_ = 0
      }

      setCount(count_)
      
    }, 2500);
    return () => {};
  }, []);

  return (
    <View style={{flex:1}}>
      <Returnview_ v={getCount}/>
      <Text style={{position:'absolute',fontSize:32,color:'white',marginTop:8,marginLeft:8}}>Exercice {getCount+1}</Text>
    </View>
  )
}

export default Exo_