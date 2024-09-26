import AsyncStorage from '@react-native-async-storage/async-storage';

// Save an item to AsyncStorage
export const saveToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data to storage', error);
  }
};

// Load an item from AsyncStorage
export const loadFromStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error loading data from storage', error);
  }
};

// Remove an item from AsyncStorage
export const removeFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from storage', error);
  }
};
