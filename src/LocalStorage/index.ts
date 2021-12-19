import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKey = {
  GITHUB: 'GITHUB',
  USER: 'USER',
};

export default class MyLocalStorage {
  static async getItem(key: string, cb?: () => {}) {
    return AsyncStorage.getItem(key, cb);
  }

  static async setItem(key: string, value: any) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    return AsyncStorage.setItem(key, value);
  }
}
