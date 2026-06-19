import { Howl } from 'howler';

export const sounds = {
  bgMusic: new Howl({
    src: ['/sounds/chessbg.mp3'],
    loop: true,
    volume: 0.2,
  })
};
