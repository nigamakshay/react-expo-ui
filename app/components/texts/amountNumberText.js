import { View } from 'react-native';
import { amountIconSize } from 'componentStyles';
import { AppTextSmall } from 'appTextSmall';

export const AmountNumberText = (options) => {
  //ToDo: fix currency for all countries
  let amount = '\u20B9' + options.amount;
  return (
    <View {...options.viewStyle}>
      <AppTextSmall
        style={{fontSize: amountIconSize}}
        text={amount}>
      </AppTextSmall>
    </View>
  );
}
