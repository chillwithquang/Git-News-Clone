import { Toast } from 'native-base';
import __get from 'lodash/get';

export const showMessageError = (error: any) => {
  console.log(error);
  const message = __get(error, 'response.data.res', 'Error');
  Toast.show({ title: message, placement: 'top' });
};
