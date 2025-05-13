import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'tasks';

const getData = async () => {
    return await AsyncStorage.getItem();
}

const setData = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}

export {
    getData,
    setData
}