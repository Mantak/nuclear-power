import React from 'react';
import {latestArticles, apiLinks} from '/lib/mocking';
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
      <div className="weui-flex">
        <div className="weui-flex__item" style={imgBoxStyle}>
          <img src={imgSrc} style={{height: '100%', width: '100%'}} alt='暂无图片'/>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4 className="ui brown header">{journal.title}</h4>
            <p>主办单位: <span style={{color: 'grey'}}>{journal.host_unit}</span></p>
            <p>出版周期: <span style={{color: 'grey'}}>{journal.period}</span></p>
            <p>ISSN:    <span style={{color: 'grey'}}>{journal.issn}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

class JournalDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('期刊详情')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    const order = FlowRouter.getQueryParam("order")
    const journal = journalArr.sort((a,b) => a.order - b.order)[order-1]
    return (
      <div>
        <div className="weui-panel" >
          <div className="weui-media-box">
            <JournalItem journal={journal}/>
        </div>
        </div>

        <div className="weui-cells__title">期刊简介</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>{journal.description}</p>
            </div>
          </div>
        </div>

        <div className="weui-cells__title">主要栏目</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>{journal.columns}</p>
            </div>
          </div>
        </div>

        <div className="weui-cells__title">投稿要求</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>{journal.criteria}</p>
            </div>
          </div>
        </div>

        <div style={{height: 15}}/>
        <div className="ui equal width center aligned padded grid" >
          <div className="row">
            <div className="orange column" onClick={()=>window.location.href = apiLinks.search}>
              稿件查询进度
            </div>
            <div className="grey column">
              缴纳版面费
            </div>
          </div>
        </div>
        <div style={{height: 20}}/>
      </div>
    );
  }
}

export default JournalDetail;
