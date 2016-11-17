
import React from 'react';
import {CommitteeArr} from '/lib/committees'
import {Color} from '/lib/util'

const Committee = ({committee}) => {
  const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const imgBoxStyle = {
    flex: 0.37,
    height: deviceWidth/3,
  }
  const gapBoxStyle = {
    flex: 0.03,
    height: deviceWidth/3,
  }
  const contentBoxStyle = {
    paddingLeft: 15,
    flex: 0.6,
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
      <div className="weui-flex" onClick={()=>FlowRouter.go(`/v3/companydetail?order=${committee.order}`)} style={cardStyle}>
        <div className="weui-flex__item" style={imgBoxStyle}>
          <img src={imgSrc} style={imgStyle} alt='暂无图片'/>
        </div>
        <div style={gapBoxStyle}/>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4 className="ui blue header">{committee.unit}</h4>
            <p style={{height:'1em', lineHeight: '1em', overflow: 'hidden'}}>职务: <span style={{color: 'grey'}}>{committee.title}</span> </p>
            <p style={{height:'1em', lineHeight: '1em', overflow: 'hidden'}}>姓名: <span style={{color: 'grey'}}>{committee.name}</span> </p>
            <p style={{height:'2.35em', lineHeight: '1.3em', overflow: 'hidden'}}>简介: <span style={{color: 'grey'}}>{committee.description} </span></p>
          </div>
        </div>
      </div>
      <hr style={hrStyle}/>
    </div>
  )
}


class CompanyList extends React.Component {
  renderExperts(){
    return CommitteeArr.sort( (a,b) => a.order - b.order ).map( (e) => <Committee committee={e} key={e.order}/> )
  }
  render(){
    DocHead.setTitle('企业宣传')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    return (
      <div>
        <div className="weui-panel weui-panel_access" style={{marginTop: 0}}>
          <h3 className='ui brown header'style={{marginTop: 25, marginLeft: 10, marginBottom: 25}}>理事单位</h3>
          <div className='ui divider'/>
          {this.renderExperts()}        </div>
        <a
          className="weui-btn weui-btn_primary"
          href="javascript:"
          onClick={()=>{FlowRouter.go('/v3/companyapplication')}}
          style={{width: '70%', marginTop: 20, marginBottom: 25}}>
          申请入会
        </a>
        <div style={{height: 30}}/>
      </div>
    )
  }
}

export default CompanyList;

// backgroundColor: 'rgba(118,74,45,0.05)'}}














// import React from 'react';
//
// class CompanyList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMounted(){
//     DocHead.setTitle('企业宣传')
//   }
//   render() {
//     const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
//     const imgBoxStyle = {
//       flex: 0.3,
//       height: deviceWidth/3,
//       padding: 10
//     }
//     const contentBoxStyle = {
//       flex: 0.7,
//       height: deviceWidth/3,
//       paddingTop: 10
//     }
//     return (
//       <div>
//         <h3>理事长单位</h3>
//         <hr/>
//         <div className="weui-flex" style={{paddingTop: 10}} style={{borderBottom: 'thin solid'}} onClick={()=>{FlowRouter.go('/v3/companydetail')}}>
//           <div className="weui-flex__item" style={imgBoxStyle}>
//             <div style={{border: 'thin solid', width: '80%', height: '80%', margin: 'auto' }}></div>
//           </div>
//           <div className="weui-flex__item" style={contentBoxStyle}>
//             <div style={{padding: 5}}>
//               <p>中国核工业集团公司</p>
//               <p>理事长: 钱智民</p>
//             </div>
//           </div>
//         </div>
//
//         <div className="weui-flex" style={{paddingTop: 10}} style={{borderBottom: 'thin solid'}} onClick={()=>{FlowRouter.go('/v3/companydetail')}}>
//           <div className="weui-flex__item" style={imgBoxStyle}>
//             <div style={{border: 'thin solid', width: '80%', height: '80%', margin: 'auto' }}></div>
//           </div>
//           <div className="weui-flex__item" style={contentBoxStyle}>
//             <div style={{padding: 5}}>
//               <p>中国核工业集团公司</p>
//               <p>理事长: 钱智民</p>
//             </div>
//           </div>
//         </div>
//
//         <div className="weui-flex" style={{paddingTop: 10}} style={{borderBottom: 'thin solid'}} onClick={()=>{FlowRouter.go('/v3/companydetail')}}>
//           <div className="weui-flex__item" style={imgBoxStyle}>
//             <div style={{border: 'thin solid', width: '80%', height: '80%', margin: 'auto' }}></div>
//           </div>
//           <div className="weui-flex__item" style={contentBoxStyle}>
//             <div style={{padding: 5}}>
//               <p>中国核工业集团公司</p>
//               <p>理事长: 钱智民</p>
//             </div>
//           </div>
//         </div>
//
//
//         <div className="weui-flex">
//           <div className="weui-flex__item" style={{flex: '0.2'}}/>
//           <div className="weui-flex__item" style={{flex: '0.6'}}>
//             <button className="fluid ui linkedin button" style={{marginTop: 20}} onClick={()=>{FlowRouter.go('/v3/companyapplication')}}>
//               <i className="building icon"></i>
//               申请入会
//             </button>
//           </div>
//           <div className="weui-flex__item" style={{flex: '0.2'}}/>
//         </div>
//
//       </div>
//     );
//   }
// }
//
// export default CompanyList;
