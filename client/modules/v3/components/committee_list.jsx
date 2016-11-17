import React from 'react';
import {CommitteeArr} from '/lib/committees'
import {Color} from '/lib/util'

const Committee = ({committee}) => {
  const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const imgBoxStyle = {
    flex: 0.35,
    height: deviceWidth/3,
  }
  const contentBoxStyle = {
    paddingLeft: 15,
    flex: 0.65,
    height: deviceWidth/3,
    fontSize: '0.95em'
  }
  const imgStyle = {
    height: '100%',
    width: '100%'
  }
  const cardStyle = {
    padding: 15
  }
  const hrStyle ={
    display: 'block',
    height: 1,
    border: 0,
    borderTop: '0.5px solid',
    borderTopColor: 'rgba(118,74,45,0.5)',
    marginLeft: 15,
    marginRight: 15
  }
  const imgSrc = `/imgs/committee/${committee.order}.jpg`
  return(
    <div>
      <div className="weui-flex" onClick={()=>FlowRouter.go(`/v3/journaldetail?order=${expert.order}`)} style={cardStyle}>
        <div className="weui-flex__item" style={imgBoxStyle}>
          <img src={imgSrc} style={imgStyle} alt='暂无图片'/>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4>公司名称: {committee.unit}</h4>
            <p style={{height:'1.2em', lineHeight: '1em', overflow: 'hidden'}}>常务理事: {committee.name}</p>
            <p style={{height:'2.95em', lineHeight: '1em', overflow: 'hidden'}}>简介: {committee.description}</p>
          </div>
        </div>
      </div>
      <hr style={hrStyle}/>
    </div>
  )
}


class CommitteeList extends React.Component {
  renderExperts(){
    return CommitteeArr.sort( (a,b) => a.order - b.order ).map( (e) => <Committee committee={e} key={e.order}/> )
  }
  render(){
    DocHead.setTitle('编辑委员')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    return (
      <div>
        <div className="ui equal width center aligned padded grid">
          <div className="row">
            <div className="olive column" onClick={()=>FlowRouter.go('/v3/expertlist')}>
              学术委员
            </div>
            <div className="brown column" >
              编辑委员
            </div>
            <div className="teal column"  onClick={()=>FlowRouter.go('/v3/reviewerlist')}>
              审稿专家
            </div>
          </div>
        </div>

        <div className="weui-panel" style={{marginTop: 0}}>
          {this.renderExperts()}
        </div>
        <div style={{height: 10}}/>
      </div>
    )
  }
}

export default CommitteeList;

// backgroundColor: 'rgba(118,74,45,0.05)'}}
