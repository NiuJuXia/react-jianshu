import React from 'react';
import { HeaderWrapper, Logo, HeaderWrapperAside, HeaderWrapperMiddle,
         HeaderWrapperMiddleItem, Span, NavSearch, HeaderWrapperAsideRight,
         Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoContent,
         SearchInfoContentItem
        } from './style.js'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import  * as actionCreators  from './store/actionCreators.js'
import axios from 'axios'

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderWrapperAside>
                  <Logo/>
                </HeaderWrapperAside>
                <HeaderWrapperMiddle>
                    <HeaderWrapperMiddleItem className='index'>
                        <Span>
                        首页
                        </Span>
                    </HeaderWrapperMiddleItem>
                    <HeaderWrapperMiddleItem className='app'>
                        <Span>
                        下载app
                        </Span>
                    </HeaderWrapperMiddleItem>
                    <SearchWrapper>
                    <CSSTransition
                     in = {this.props.focused}
                     timeout = {200}
                     classNames = 'slide'
                    >
                    <NavSearch
                      onFocus={this.props.handleInputFocus}
                      onBlur = {this.props.handleInputBlur}
                    >
                    </NavSearch>
                    </CSSTransition>
                    <i className={this.props.focused ? 'focused iconfont' : 'iconfont'} 
                    style={{fontSize:`15px`}}>&#xe64d;</i>
                    <SearchInfo show = {this.props.focused}>
                        <SearchInfoTitle>
                            <div>热门搜索</div>
                            <div>换一批</div>
                        </SearchInfoTitle>
                        <SearchInfoContent>
                        <SearchInfoContentItem>12qqqq</SearchInfoContentItem>
                        <SearchInfoContentItem>1qqq3</SearchInfoContentItem>
                        <SearchInfoContentItem>1q4</SearchInfoContentItem>
                        <SearchInfoContentItem>15</SearchInfoContentItem>
                        <SearchInfoContentItem>16</SearchInfoContentItem>
                        <SearchInfoContentItem>17</SearchInfoContentItem>
                        </SearchInfoContent>
                    </SearchInfo>
                    </SearchWrapper>
                    <HeaderWrapperMiddleItem className='gap'>
                    </HeaderWrapperMiddleItem>
                    <HeaderWrapperMiddleItem className='Aa'>
                        <Span >
                         <i className='iconfont' style={{fontSize:`24px`}}>&#xe636;</i>
                        </Span>
                    </HeaderWrapperMiddleItem>
                    <HeaderWrapperMiddleItem className='login'>
                        <Span>
                        登录
                        </Span>
                    </HeaderWrapperMiddleItem>
                </HeaderWrapperMiddle>
                <HeaderWrapperAsideRight>
                    <Button  type='write'>
                        <Span lineh='24px'>
                        注册
                        </Span>
                    </Button>
                    <Button>
                      <Span lineh='24px'>
                        <i className='iconfont' style={{fontSize:`15px`}}>&#xe6e5;</i>
                        &nbsp;
                        写文章
                      </Span>
                    </Button>
                </HeaderWrapperAsideRight>
            </HeaderWrapper>
        )
    }

    componentDidMount() {
        axios.get('/api/users/recommended',{
            params: {
                seen_ids:'9988193%2C301940%2C7133325%2C3730494%2C3950651',
                count:5,
                only_unfollowed:true
            }
        })
      .then((msg)=>{console.log(msg)})
      .catch(()=>{console.log('error')})
      }
}

const mapStateToProps = (state) => {
    return{
      focused: state.get('header').get('focused')
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus()  {
            const action = actionCreators.searchFocus()
            dispatch(action)
        },
    
        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);