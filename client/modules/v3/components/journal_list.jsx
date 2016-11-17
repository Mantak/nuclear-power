import React from 'react';
import {journalArr} from '/lib/journals'

const JournalItem = ({journal}) => {
  const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const imgBoxStyle = {
    flex: 0.3,
    height: deviceWidth/3,
  }
  const contentBoxStyle = {
    paddingLeft: 15,
    flex: 0.7,
    height: deviceWidth/3,
    fontSize: '0.95em'
  }
  const imgSrc = `/imgs/j18/${journal.order}.jpg`
  return(
    <div className="weui-media-box">
      <div className="weui-flex" onClick={()=>FlowRouter.go(`/v3/journaldetail?order=${journal.order}`)}>
        <div className="weui-flex__item" style={imgBoxStyle}>
          <img src={imgSrc} style={{height: '100%', width: '100%'}} alt='暂无图片'/>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4 className="ui brown header">{journal.title}</h4>
            <p style={{color: 'grey'}}>主办单位: {journal.host_unit}</p>
            <p style={{color: 'grey'}}>出版周期: {journal.period}</p>
            <p style={{color: 'grey'}}>ISSN: {journal.issn}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


class JournalList extends React.Component {
  renderJournals(){
    return journalArr.sort( (a,b) => a.order - b.order ).map( (j) => <JournalItem journal={j} key={j.order}/> )
  }
  render(){
    DocHead.setTitle('期刊投稿')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    return (
      <div>
        <div className="ui blue two item inverted menu">
          <a className="active item">
            科技期刊
          </a>
          <a className="item" onClick={()=>FlowRouter.go('/v3/journalmanage')}>
            期刊管理
          </a>
        </div>

        <div className="weui-panel" style={{marginTop: -10}}>
          {this.renderJournals()}
        </div>
        <div style={{height: 10}}/>
      </div>
    )
  }
}

export default JournalList;
