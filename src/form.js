import React from 'react';
import logo from './logo.svg';

import formData from './formData';
import Input from './components/input';
import Radio from './components/radio';

function Viewer({ formData }) {
    return formData.map((question, index) => <div key={index}>{JSON.stringify(question)}</div>)
}
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData
        }
    }

    //页面演示时需要，实际开发可以删除
    onChange = (question, event) => {
        question.value = event.target.value;
        this.setState({

        })
    }

    //生成动态表单
    buildForm() {
        return this.state.formData.map((question, index) => {
            if (question.type === 'input') {
                return (
                    <div>
                        {question.label}
                        //原生写法
                        <input key={index} onChange={this.onChange.bind(this, question)} />
                    </div>
                )
            } else if (question.type === 'radio') {
                return (
                    <div>
                        <label>{question.label}
                            //原生写法
                            <input type="radio" key={index} onChange={this.onChange.bind(this, question)} />
                        </label>
                    </div>
                )
            }

            return 0;
        });
    }

    //查看表单数据
    viewFormData = () => {
        return this.state.formData.map((question, index) => <div key={index}>{JSON.stringify(question)}</div>)
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                {/* 动态表单 */}
                <div className="form-content">{this.buildForm()}</div>

                {/* 预览表单数据 */}
                <div className="viewer-content">
                    <div>变量FormData随用户的输入实时变化:</div>
                    <Viewer {...this.state} />
                </div>
            </header>
        )
    }
}

export default Form;