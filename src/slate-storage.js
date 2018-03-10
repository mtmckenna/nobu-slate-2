import { AsyncStorage } from 'react-native';

const SLATE_PROPS_KEY = 'SLATE_PROPS';

const DEFAULT_SLATE_DATA = {
  title: 'Title',
  scene: '1',
  take: '1',
  audioFile: '001',
  audioChannelL: 'Lav',
  audioChannelR: 'Boom'
};

async function saveSlateProps(slateProps) {
  try {
    await AsyncStorage.setItem(SLATE_PROPS_KEY, JSON.stringify(slateProps));
  } catch (error) {
    console.error('Error saving slate props: ', error);
  }
}

async function loadSlateProps() {
  try {
    const slateProps = JSON.parse(await AsyncStorage.getItem(SLATE_PROPS_KEY));
    return slateProps !== null ? slateProps : DEFAULT_SLATE_DATA;
  } catch (error) {
    console.error('Error loading slate props: ', error);
    return DEFAULT_SLATE_DATA;
  }
}

export { saveSlateProps, loadSlateProps };

