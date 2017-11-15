import React, {Component} from 'react';

export default class MarkdownEditor extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.state = {
            value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \n' +
                    'Paragraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a lin' +
                    'e to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~' +
                    'strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNum' +
                    'bered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign' +
                    '---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    getRawMarkup() {
        const Remarkable = require('remarkable');
        const md = new Remarkable();
        return {
            __html: md.render(this.state.value)
        };

    }

    render() {
        return (
            <div className="MarkdownEditor">
                <textarea className="col-md-6"
                    rows='22'
                    type='text'
                    onChange={this.handleChange}
                    defaultValue={this.state.value}/>

                <div className="content col-md-6" dangerouslySetInnerHTML={this.getRawMarkup()}/>
            </div>
        )
    }
}