import React from "react";

class DrumPad extends React.Component {
    refAudio = React.createRef();

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown)

    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown)
    }

    playSound = () => {
        this.refAudio.current.play()
        this.refAudio.current.currentTime = 0;
        this.props.handleDisplay(this.props.name);
    }

    handleKeyDown = (e) => {
       if(e.key.toUpperCase() === this.props.text) {
           this.playSound();
       }
    }

    render() {
        const { text, audio } = this.props;
        return(
            <div className="drum-pad" onClick={this.playSound} >
                { text }
                <audio ref={this.refAudio} className="clip" src={audio}/>
            </div>
        )
    }
}


export default DrumPad;
