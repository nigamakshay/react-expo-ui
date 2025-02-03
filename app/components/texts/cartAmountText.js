
import React, { useState, useEffect, useContext } from 'react';
import { Text } from 'react-native';
import { AmountNumberText } from 'amountNumberText';
import { AuthenticatedUserContext } from 'authenticatedUserProvider';

export const CartAmountText = (options) => {
  
  const [amount, setAmount] = React.useState(0);
  const userContext = useContext(AuthenticatedUserContext);

  useEffect(() => {
    setAmount(userContext.cartData.total_amount);    
  }, [userContext.cartData]);

  return (
    <Text>
      <AmountNumberText
        amount={amount}
        viewStyle={{alignItems: 'flex-end', borderWidth: 0, width: '50%'}}
      />
    </Text>
  );
}