import React from 'react';
import { HeaderWrapper, Logo, HeaderWrapperAside, HeaderWrapperMiddle,
         HeaderWrapperMiddleItem, Span, NavSearch, HeaderWrapperAsideRight,
         Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoContent,
         SearchInfoContentItem
        } from './style.js'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import  * as actionCreators  from './store/actionCreators.js'


class Header extends React.Component {
    render() {
        const { focused,  handleInputFocus, handleInputBlur, list, page, mouseIn,
            handleMouseEnter, handleMouseLeave, handleChangePage, totalPage
        } = this.props 
        const newList = list.toJS()
        const pageList = []

        for(let i = (page - 1) * 4; i < page*4; i++){
            pageList.push(
                <SearchInfoContentItem key={i}>{newList[i]}</SearchInfoContentItem>
            )
        }
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
                     in = {focused}
                     timeout = {200}
                     classNames = 'slide'
                    >
                    <NavSearch
                      onFocus={handleInputFocus}
                      onBlur = {handleInputBlur}
                    >
                    </NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} 
                    style={{fontSize:`15px`}}>&#xe64d;</i>
                    <SearchInfo show = {focused || mouseIn} 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                        <SearchInfoTitle>
                            <div>热门搜索</div>
                            <i className='iconfont' ref={(icon)=>{this.spinIcon = icon}} >&#xe851;</i>
                            <div onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>换一批</div>
                        </SearchInfoTitle>
                        <SearchInfoContent>
                        {pageList}  
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
}

const mapStateToProps = (state) => {
    return{
      focused: state.get('header').get('focused'),
      list: state.getIn(['header', 'list']),
      page: state.getIn(['header','page']),
      mouseIn: state.getIn(['header','mouseIn']),
      totalPage: state.getIn(['header','totalPage'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus()  {
            const action = actionCreators.searchFocus()
            dispatch(action)
            dispatch(actionCreators.getList())
        },
    
        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },

        handleChangePage(page, totalPage, spin) {
            if(page<totalPage) {
                dispatch(actionCreators.pageChange(page+1))
            }else{
                dispatch(actionCreators.pageChange(1))
            }
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle){
                originAngle = parseInt(originAngle, 10)
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 180) +'deg)'
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);