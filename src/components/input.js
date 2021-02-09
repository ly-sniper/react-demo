import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (event) => {
        this.props.question.value = event.target.value;
        //页面演示时需要，实际开发可以删除
        this.props.onChange();
    }

    render() {
        return (
            <div>
                {this.props.question.label}：
                <input onChange={this.onChange} />
            </div>
        )
    }
}

export default Input;