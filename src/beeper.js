const Sound = require('react-native-sound');

const DEFAULT_BEEP_PATH = 'beep.wav';
const DEFAULT_BEEP_FINAL_PATH = 'beep_final.wav';

export default class Beeper {
  constructor() {
    Sound.setCategory('Playback');
    this.beepAudio = preloadAudio(DEFAULT_BEEP_PATH);
    this.beepFinalAudio = preloadAudio(DEFAULT_BEEP_FINAL_PATH);
  }

  beep() {
    this.beepAudio.play((success) => {
        if (!success) {
          console.error('playback failed due to audio decoding errors');
          this.beepAudio.reset();
        }
      }
    );
  }

  beepFinal() {
    this.beepFinalAudio.play();
  }
}

function preloadAudio(path) {
  return new Sound(path, Sound.MAIN_BUNDLE, (error) => {
    if (error) console.error('failed to load the sound', error);
  });
}
