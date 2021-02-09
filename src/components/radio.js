import React from 'react';
class Radio extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (event) => {
        console.log(event.target.value);
        this.props.question.value = event.target.value;
        //页面演示时需要，实际开发可以删除
        this.props.onChange();
    }

    render() {
        return (
            <div>
                {this.props.question.label}：
                {
                    this.props.question.options.map((option, index) => {
                        return <label key={index}>{option.label}<input type="radio" name="radio" value={option.value} onChange={this.onChange} key={index} /></label>
                    })
                }
            </div>
        )
    }
}

export default Radio;