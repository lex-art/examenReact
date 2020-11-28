
import React from 'react';


class Cronometro extends React.Component{
    /*intente hace un pequeño cronometro para que la paágina se vea algo mas interactiva*/
    constructor() {
        super();
        this.state = { time: {}, seconds: 86400 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.timer = setInterval(this.countDown, 1000);
        
      }
 
      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
 
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
 
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
 
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
 
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
 
      startTimer() {
          //renderiza a cada segundo
        if (this.timer == 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
 
      countDown() {
        // Quita un segundo, establece el estado para que ocurra una nueva renderización.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Comprueba si está en cero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }
    render(){
        return(
            <h2 >
                
                <span id="dias">00</span>:<span id="horas">{this.state.time.h}</span>:<span id="minutos" >{this.state.time.m}</span>:<span id="segundos">{this.state.time.s}</span>
               
                
            </h2>
        );
    }
}

export default Cronometro;