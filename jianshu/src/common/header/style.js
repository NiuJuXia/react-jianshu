import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: fixed;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  width:100%;
  background:#fff;
  z-index:1;
`

export const HeaderWrapperAside = styled.div`
  height: 100%;
  flex: 187.5;
`

export const HeaderWrapperAsideRight = styled.div`
  height: 100%;
  flex: 187.5;
  display: flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
`

export const HeaderWrapperMiddle = styled.div`
  height: 100%;
  flex: 625;
  display: flex;
  position: relative;
`

export const HeaderWrapperMiddleItem = styled.div`
  padding: 15px;
  &.index {
   color: #ea6f5a;
   cursor: pointer;
   font-size: 17px;
  }
  &.app {
    color: #333;
    font-size: 17px;
    cursor: pointer;
  }
  &.Aa {
      padding: 15px 10px;
      font-size: 24px;
      color: #969696;
  }
  &.login {
    font-size: 15px;
    color: #969696;
  }
  &.gap {
      flex:1
  }
`

export const Span = styled.span`
  line-height: ${props => props.lineh ? props.lineh : '26px'};
`

export const Logo = styled.a.attrs({
    href:'/'
})`
  position: absolute;
  top:0;
  left:30px;
  display: block;
  width:100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
  padding:0 55px 0 20px;
  margin-left:20px;
  box-sizing:border-box;
  width:255px;
  height:38px;
  outline:none;
  border:1px;
  align-self:center;
  border: 1px solid #eee;
  border-radius:19px;
  background:#eee;
  font-size:14px;
`

export const Button = styled.div`
  height:38px;
  box-sizing:border-box;
  border: 1px solid rgba(236,97,73,.7);
  padding:6px 23px;
  border-radius:19px;
  margin-right:13px;
  font-size: 15px;
  color: ${props => props.type ? '#ea6f5a': '#fff'};
  background-color: ${props => props.type ? 'transparent': '#ea6f5a'};
  overflow:hidden;
`

export const SearchWrapper = styled.div`
 display: flex;
 position: relative;
 .zoom {
     position: absolute;
     right: 5px;
     bottom: 12px;
     width: 30px;
     line-height: 30px;
     border-radius: 15px;
     background: transparent;
     text-align: center;
 }
 & .iconfont.focused {
    background: #777;
    color: #fff;
  }
  .slide-enter-active {
    transition: all .2s ease-out;
    width:300px;
}
  .slide-enter-done {
    width:300px;
  }
  .slide-exit {
    width:300px;
  }
  .slide-exit-active {
    transition: all .2s ease-out;
    width:255px;
}
`

export const SearchInfo = styled.div`
  position:absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  display: ${props => props.show ? '': 'none'};
  background:#fff;
`

export const SearchInfoTitle = styled.div`
  position:relative;
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  display: flex;
  justify-content: center;
  &>:first-child{
    padding-right:100px;
  }
  cursor: pointer;
  .iconfont{
    display: block;
    transition: all .2s ease-in;
    font-size:12px;
    margin-right:2px;
    transform-origin:center center;
  }
`

export const SearchInfoContent = styled.div`
  display:flex;
  justify-content:flex-start;
  flex-wrap: wrap;
`

export const SearchInfoContentItem = styled.a`
  display: block;
  line-height:20px;
  padding:0 5px;
  margin-right:10px;
  margin-bottom:15px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
`