import React from 'react';
import {ExpertArr} from '/lib/experts'
import {Color} from '/lib/util'

const Expert = ({expert}) => {
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
    borderTopColor: 'rgba(134,157,5,0.5)',
    marginLeft: 15,
    marginRight: 15
  }
  const imgSrc = `/imgs/experts/${expert.order}.jpg`
  return(
    <div>
      <div className="weui-flex" onClick={()=>FlowRouter.go(`/v3/expertdetail?order=${expert.order}`)} style={cardStyle}>
        <div className="weui-flex__item" style={imgBoxStyle}>
          <img src={imgSrc} style={imgStyle} alt='暂无图片'/>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4 className="ui brown header">{expert.name}</h4>
            <p style={{height:'2.95em', lineHeight: '1em', overflow: 'hidden'}}>单位: {expert.unit}</p>
            <p style={{height:'1.95em', lineHeight: '1em', overflow: 'hidden'}}>研究: {expert.research}</p>
          </div>
        </div>
      </div>
      <hr style={hrStyle}/>
    </div>
  )
}


class ExpertList extends React.Component {
  renderExperts(){
    return ExpertArr.sort( (a,b) => a.order - b.order ).map( (e) => <Expert expert={e} key={e.order}/> )
  }
  render(){
    DocHead.setTitle('学术委员')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    return (
      <div>
        <div className="ui equal width center aligned padded grid">
          <div className="row">
            <div className="olive column" >
              学术委员
            </div>
            <div className="brown column" onClick={()=>FlowRouter.go('/v3/committeelist')}>
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

export default ExpertList;

// , backgroundColor: 'rgba(134,157,5,0.05)'

// <div>
//   <div>
//     <div style={{padding: 15}}>
//       学术委员
//     </div>
//     <hr/>
//     <div className="ui grid container" style={{paddingTop: 10, paddingBottom: 20}} onClick={()=>FlowRouter.go('/v3/expertdetail')}>
//       <div className="four wide column">
//         <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/zmx.jpeg' style={{width: '100%'}}/>
//       </div>
//     </div>
//   </div>
//   <hr/>
//   <div>
//     <div style={{padding: 15}}>
//       编辑委员
//     </div>
//     <hr/>
//     <div className="ui grid container" style={{paddingTop: 10, paddingBottom: 20}} onClick={()=>FlowRouter.go('/v3/expertdetail')}>
//       <div className="four wide column">
//         <img src='/imgs/xingji.png' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/xingji.png' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/xingji.png' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/xingji.png' style={{width: '100%'}}/>
//       </div>
//     </div>
//   </div>
//   <hr/>
//   <div>
//     <div style={{padding: 15}}>
//       审稿专家
//     </div>
//     <hr/>
//     <div className="ui grid container" style={{paddingTop: 10, paddingBottom: 20}} onClick={()=>FlowRouter.go('/v3/expertdetail')}>
//       <div className="four wide column">
//         <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
//       </div>
//       <div className="four wide column">
//         <img src='/imgs/yujunsong.png' style={{width: '100%'}}/>
//       </div>
//     </div>
//   </div>
// </div>
