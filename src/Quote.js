import React, {Component} from 'react';

export default class Quote extends Component {

constructor(props) {
    super(props)
}

render() {
	return (
	  <div id="quote-box">
	  	<div id="text"></div>
	  	<div id="author"></div>
			<button id="new-quote">New quote</button>
			<a
				id="tweet-quote"
				href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
				target="_blank"
			>
				Tweet
			</a>
	  </div>
	)}
}