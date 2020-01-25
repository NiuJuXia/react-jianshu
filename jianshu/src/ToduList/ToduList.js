import React , { Fragment }from 'react';
// 当父组件的render函数执行时,其子组件的render函数也会执行
// 当组件的props 或 state 发生改变 其render函数将被执行
import axios from 'axios'

class ToduList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          inputVaule: '',
          list: ['学英语','不学']
      }
      console.log()
  }
  render() {
      return(
          <Fragment>
              <div ref= { (div) => {this.div = div} }>
              <input
                value = { this.state.inputVaule }
                onChange = { this.handleInputChange }
              />
              <button onClick = { this.handleBtnClick }>提交</button>
              </div>
              <ul>
                {
                    this.state.list.map((item, index) => {
                        return <li key = {index} onClick = { this.handleItemDelete.bind(this,index) }> {item} </li>
                    })
                }
              </ul>
          </Fragment> 
      )
  }

  handleInputChange = (e) => {
      this.setState({
          inputVaule: e.target.value
      })
  }

  handleBtnClick = async () => {
      await this.setState((state) => ({
          list: [...state.list,state.inputVaule]
      }))
      this.setState(
          {inputVaule: ''}
      )
  }

  handleItemDelete = (index) => {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
        list: list
    })
  }

  componentDidMount() {
  axios.get('http://localhost:8000/api/blog/list')
  .then((msg)=>{console.log(msg)})
  .catch(()=>{console.log('error')})
}
}

export default  ToduList

//classNmme htmlFor v-html