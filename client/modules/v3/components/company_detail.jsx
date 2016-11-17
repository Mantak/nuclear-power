import React from 'react';
import {latestArticles, apiLinks} from '/lib/mocking';
import {CommitteeArr} from '/lib/committees'

const Item = ({company}) => {
  const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  const imgBoxStyle = {
    flex: 0.37,
    height: deviceWidth/3,
  }
  const contentBoxStyle = {
    paddingLeft: 15,
    flex: 0.63,
    height: deviceWidth/3,
    fontSize: '0.95em'
  }
  const imgSrc = `/imgs/committee/${company.order}.jpg`
  return(
    <div className="weui-media-box">
      <div className="weui-flex">
        <div className="weui-flex__item" style={imgBoxStyle}>
          <img src={imgSrc} style={{height: '100%', width: '100%'}} alt='暂无图片'/>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{paddingTop: 15, paddingLeft: 15}}>
            <h4 className="ui brown header">{company.unit}</h4>
            <br />
            <p>职务: {company.title}</p>
            <p>姓名: {company.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

class CompanyDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('期刊详情')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    const order = FlowRouter.getQueryParam("order")
    const company = CommitteeArr.sort((a,b) => a.order - b.order)[order-1]
    return (
      <div>
        <div className="weui-panel" >
          <div className="weui-media-box">
            <Item company={company}/>
          </div>
        </div>

        <div className="weui-cells__title">公司简介</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>{company.description}</p>
            </div>
          </div>
        </div>


        <div style={{height: 15}}/>
        <div className="ui equal width center aligned padded grid" >
          <div className="row">
            <div className="orange column" onClick={()=>FlowRouter.go('/v3/companyapplication')}>
              申请入会
            </div>
          </div>
        </div>
        <div style={{height: 20}}/>
      </div>
    );
  }
}

export default CompanyDetail;




// import React from 'react';
// import {CommitteeArr} from '/lib/committees'
//
// class CompanyDetail extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMounted(){
//     DocHead.setTitle('图书详情')
//   }
//   render() {
//     const deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
//     const imgBoxStyle = {
//       flex: 0.3,
//       height: deviceWidth/3
//     }
//     const contentBoxStyle = {
//       flex: 0.7,
//       height: deviceWidth/3
//     }
//     return (
//       <div>
//         <div className="weui-flex" >
//           <div className="weui-flex__item" style={imgBoxStyle}>
//             <div></div>
//           </div>
//           <div className="weui-flex__item" style={contentBoxStyle}>
//             <div style={{padding: 15}}>
//               <p>公司: xxxx</p>
//               <p>理事: xxxx</p>
//             </div>
//           </div>
//         </div>
//         <hr/>
//         <div style={{padding: 10}}>
//           <h3>内容简介</h3>
//           <p style={{paddingBottom: 50}}>
//             兴通讯是全球领先的综合通信解决方案提供商。公司通过为全球160多个国家和地区的电信运营商和企业网客户提供创新技术与产品解决方案，让全世界用户享有语音、数据、多媒体、无线宽带等全方位沟通。公司成立于1985年，在香港和深圳两地上市，是中国最大的通信设备上市公司。
//           </p>
//         </div>
//         <hr/>
//         <div style={{paddingTop: 30}}>
//           <a href="/v3/companyapplication" className="weui-btn weui-btn_plain-default" style={{width: '40%', marginTop: 20}}>
//             申请入会
//           </a>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default CompanyDetail;
