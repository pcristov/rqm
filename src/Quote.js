import React, {Component} from 'react';

export default class Quote extends Component {

constructor(props) {
    super(props)
    
    this.state = {
	    ql: "",	// quotes list
        q: "",	// quote
        author: "",
        url: ""
    }
}

componentDidMount() {
    this.getQuotesList();
}

getQuotesList() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => this
        .setState({
    		ql: data.quotes },
    		() => {
				const index = this.randomIndex(this.state.ql.length);
				this.setState({
	        		q: this.state.ql[index].quote,
	        		author: this.state.ql[index].author,
	        	})
			}
	    ));
}

randomIndex(arrayLength) {
	return Math.floor(Math.random() * arrayLength)
}

render() {
	return (
	  <div id="quote-box">
	  	<div id="text">{ this.state.q }</div>
	  	<div id="author">{ this.state.author }</div>
			<button id="new-quote">New quote</button>
			<a
				id="tweet-quote"
				href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
				target="_blank"
				rel="noopener noreferrer"
			>
				Tweet
			</a>
	  </div>
	)}
}