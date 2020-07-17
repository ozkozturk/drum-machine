import React from 'react';
import './App.css';
import DrumPad from "./DrumPad";

class App extends React.Component {
  state= {
    sounds: [
        {
            key: "Q",
            name: "Cymbal-1",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/234[kb]606-cymbal1.wav.mp3"
        },
        {
            key: "W",
            name: "Cymbal-2",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/440[kb]606-cymbal2.wav.mp3"
        },
        {
            key: "E",
            name: "Kick-1",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/56[kb]606-kick1.wav.mp3"
        },
        {
            key: "A",
            name: "Kick-2",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/75[kb]606-kick2.wav.mp3"
        },
        {
            key: "S",
            name: "Snare-1",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/25[kb]606-snare1.wav.mp3"
        },
        {
            key: "D",
            name: "Snare-2",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/40[kb]606-snare2.wav.mp3"
        },
        {
            key: "Z",
            name: "Tom-1",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/79[kb]606-tom1.wav.mp3"
        },
        {
            key: "X",
            name: "Tom-2",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/77[kb]606-tom2.wav.mp3"
        },
        {
            key: "C",
            name: "Tom-3",
            audio: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/94[kb]606-tom3.wav.mp3"
        },
    ],
    soundName: "Check sound"
  }

  handleDisplay = soundName => {
    this.setState({soundName})
  }

  render() {
    const { sounds, soundName } = this.state;
    return (
      <div id="drum-machine">
          <div id="display" >
              <div className="sound-name">{soundName}</div>
              <div className="drum-pads">
                  {
                      sounds.map((sound, index) => (
                          <DrumPad key={index} text={sound.key}  audio={sound.audio} name={sound.name} handleDisplay={this.handleDisplay}/>
                      ))
                  }
              </div>
          </div>
      </div>
    );
  }
}

export default App;
