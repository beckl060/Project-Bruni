import React from 'react';
import './CallbackButton.css';

class CallbackButton extends React.Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
          console.log("Clicked: " + this.props.command)

          if (window.AppWrap!= null) {
            if (this.props.url) {var url = " url: " + this.props.url} else var url = ""
            console.log("Sending command: " + this.props.command + url)
            
            window.AppWrap.sendCommand(this.props.command, this.props.url || null)
          }
          else {
            console.log("AppWrap is null")
          }
      }

      render() {
        return (
          <button className = "simpleButton" onClick={this.handleClick}>
            {this.props.command}
          </button>
        );
      }

}

export default CallbackButton;