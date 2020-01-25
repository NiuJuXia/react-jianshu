import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input , Button, List} from 'antd';
import store from '../store/index.js';

class ToduList extends Component {
    constructor (){
        super(...arguments)
        this.state = store.getState()
    }
    
    render() {
        return (
        <div style={{marginLeft:10,marginTop:10}}>
          <div>
              <Input value={this.state.inputValue} style = { {width: 300, marginRight : 10} }
                     onChange={this.handleInputChange}
              />
              <Button type='primary' onClick= { () => {this.handleButton()} }>提交</Button>
          </div>
          <List
           style={{marginTop:'10px', width:'300px'}}
           bordered
           dataSource={this.state.list}
           renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
                )
    }

    componentDidMount() {
        store.subscribe(this.onChange)
      }

    handleInputChange = (e) => {
        const action = {
            type: 'input_change',
            value: e.target.value
        }
        store.dispatch(action)
    }
    
    onChange = () => {
        this.setState(store.getState())
    }

    handleButton = () => {
        const newlist = [...this.state.list]
        newlist.push(this.state.inputValue)
        const action = {
            type: 'button_change',
            value: newlist
        }
        store.dispatch(action)
        console.log('777')
    }
}

export default ToduList;