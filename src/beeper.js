const Sound = require('react-native-sound');

const DEFAULT_BEEP_PATH = 'audio/beep.wav';
const DEFAULT_BEEP_FINAL_PATH = 'audio/beep-final.wav';

export default class Beeper {
  constructor() {
    Sound.setCategory('Playback');
    this.beepAudio = preloadAudio(DEFAULT_BEEP_PATH);
    this.beepFinalAudio = preloadAudio(DEFAULT_BEEP_FINAL_PATH);
  }

  beep() {
    this.beepAudio.play();
  }

  beepFinal() {
    this.beepFinalAudio.play();
  }
}

function preloadAudio(path) {
  return new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) console.log('failed to load the sound', error);
  });
}
