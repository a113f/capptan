import { create } from 'apisauce'
import { AsyncStorage } from 'react-native'
import { URL_BASE } from '../utils/constants';

const api = create({
  baseURL: URL_BASE,
  timeout: 1000
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@Capptan:Token');

  request.headers['Authorization'] = `Bearer ${token}`
});

export default api;