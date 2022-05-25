import { View, Text ,Button} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';

export default function App() {

  const makePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_1vBNPn3T3zZWT5',
      amount: '5000',
      name: 'Acme Corp',
      // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
      // prefill: {
      //   email: 'gaurav.kumar@example.com',
      //   contact: '9191919191',
      //   name: 'Gaurav Kumar'
      // },
      theme: {color: '#53a20e'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button 
      title='Make a Payment'
      onPress={makePayment}
      />
    </View>
  )
}