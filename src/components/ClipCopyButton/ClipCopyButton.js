import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './index.css';

class ClipCopyButton extends React.Component {
  state = {
    value: '',
    copied: false,
  };
 
  render() {
    return (
      <div id="ccb-container">
        <input value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <div id="copy-subtext">Copy to </div>
        </CopyToClipboard>
 
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy</button>
        </CopyToClipboard>
 
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
  }
}
 
const appRoot = document.createElement('div');
document.body.appendChild(appRoot);

export default ClipCopyButton