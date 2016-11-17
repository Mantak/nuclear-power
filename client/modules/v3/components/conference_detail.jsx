import React from 'react';

class ConferenceDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const labelStyle = { flex: 0.25, textAlign: 'right' }
    return (
      <div className="weui-panel weui-panel_access">
        <div style={{textAlign: 'center'}}>
          <h3 className='ui brown header' style={{paddingTop: 35}}>纪念孙中山诞辰150周年学术研讨会</h3>
        </div>
        <div className="ui divider"></div>
        <div className="weui-flex" style={{padding: 10}}>
          <div className="weui-flex__item" style={labelStyle}>
            时间:
          </div>
          <div style={{flex: 0.05}}/>
          <div className="weui-flex__item" style={{flex: 0.7, color: 'grey'}}>
            10月14日~10月15日
          </div>
        </div>
        <div className="weui-flex" style={{padding: 10}}>
          <div className="weui-flex__item" style={labelStyle}>
            地点:
          </div>
          <div style={{flex: 0.05}}/>
          <div className="weui-flex__item" style={{flex: 0.7, color: "#0E6EB8"}}>
            武汉九州通衢大酒店
          </div>
        </div>
        <div className="weui-flex" style={{padding: 10}}>
          <div className="weui-flex__item" style={labelStyle}>
            主办:
          </div>
          <div style={{flex: 0.05}}/>
          <div className="weui-flex__item" style={{flex: 0.7, color: 'grey'}}>
            湖北省法学会诉讼法学研究会
          </div>
        </div>
        <div className="weui-flex" style={{padding: 10}}>
          <div className="weui-flex__item" style={labelStyle}>
            简介:
          </div>
          <div style={{flex: 0.05}}/>
          <div className="weui-flex__item" style={{flex: 0.7, color: 'grey'}}>
            经研究决定，湖北省法学会诉讼法学研究会2016年年会将于2016年10月14日（周五）至15日（周六）召开，本届年会由湖北省人民检察院武汉铁路运输分院承办。
          </div>
        </div>
        <div className="weui-flex" style={{padding: 10}}>
          <div className="weui-flex__item" style={labelStyle}>
            投稿邮箱:
          </div>
          <div style={{flex: 0.05}}/>
          <div className="weui-flex__item" style={{flex: 0.7, color: 'grey'}}>
            2015101060044@whu.edu.cn
          </div>
        </div>
        <div className="weui-flex" style={{padding: 10}}>
          <div className="weui-flex__item" style={labelStyle}>
            联系方式:
          </div>
          <div style={{flex: 0.05}}/>
          <div className="weui-flex__item" style={{flex: 0.7, color: 'grey'}}>
            陈亮13659813752
          </div>
        </div>

        <a className="weui-btn weui-btn_primary" href="javascript:" style={{width: '70%', marginTop: 10, marginBottom: 25}}>关注，添加到会议日历</a>

        <hr/>
      </div>
    );
  }
}

export default ConferenceDetail;
