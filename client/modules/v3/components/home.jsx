import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('原子能出版社')
    const sideLength = 125
    const boxStyle = {
      width: sideLength,
      height: sideLength,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    return (
      <div>
        <img src="/imgs/1.jpeg" width="100%"/>

          <div className="weui-panel weui-panel_access" style={{marginTop: 5}}>

          <div className="ui container" style={{paddingTop: 40}} >
            <div className="ui three column grid">
              <div className="center aligned column" onClick={()=>FlowRouter.go('/v3/journallist')}>
                <div className="statistic">
                  <div className="value">
                    <button className="ui circular linkedin icon button">
                      <i className="newspaper icon"></i>
                    </button>
                  </div>
                  <div className="label">
                    期刊投稿
                  </div>
                </div>
              </div>
              <div className="center aligned column" onClick={()=>FlowRouter.go('/v3/conferencelist')}>
                <div className="statistic">
                  <div className="value">
                    <button className="ui circular linkedin icon button">
                      <i className="list icon"></i>
                    </button>
                  </div>
                  <div className="label">
                    行业会议
                  </div>
                </div>
              </div>

              <div className="center aligned column" onClick={()=>FlowRouter.go('/v3/expertlist')}>
                <div className="statistic">
                  <div className="value">
                    <button className="ui circular linkedin icon button">
                      <i className="student icon"></i>
                    </button>
                  </div>
                  <div className="label">
                    核电专家
                  </div>
                </div>
              </div>
              <div className="center aligned column" onClick={()=>FlowRouter.go('/v3/companylist')}>
                <div className="statistic">
                  <div className="value">
                    <button className="ui circular linkedin icon button">
                      <i className="industry icon"></i>
                    </button>
                  </div>
                  <div className="label">
                    企业宣传
                  </div>
                </div>
              </div>

              <div className="center aligned column" onClick={()=>FlowRouter.go('/v3/bookpub')}>
                <div className="statistic">
                  <div className="value">
                    <button className="ui circular linkedin icon button">
                      <i className="book icon"></i>
                    </button>
                  </div>
                  <div className="label">
                    著作出版
                  </div>
                </div>
              </div>
              <div className="center aligned column" onClick={()=>FlowRouter.go('/v3/userinfo')}>
                <div className="statistic">
                  <div className="value">
                    <button className="ui circular linkedin icon button">
                      <i className="user icon"></i>
                    </button>
                  </div>
                  <div className="label">
                    个人中心
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{height: 35}} />
        </div>

        <div className="weui-panel weui-panel_access" >
          <h4 className="ui horizontal divider magenta header" style={{paddingTop: 15}}>
            <i className="red pointing down icon"></i>
            最新通知
          </h4>

          <div style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>
              <h4 className="weui-media-box__title">最近重要会议</h4>
              <p className="weui-media-box__desc">中国第二十五届核能大会将在上海举行，所有院士都会参加。日期12月20到24号</p>
              <div className="ui grid">
                <div className="eight wide column" style={{color: 'grey'}}>2016-10-18</div>
                <div className="right aligned eight wide column" style={{color: 'grey', paddingRight:25}}>小编</div>
              </div>
              <div className="ui divider"></div>
          </div>

          <div style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>
            <h4 className="weui-media-box__title">新近约稿</h4>
            <p className="weui-media-box__desc">北京热能学杂志社征集新型煤炭处理技术文章</p>
              <div className="ui grid">
                <div className="eight wide column" style={{color: 'grey'}}>2016-9-1</div>
                <div className="right aligned eight wide column" style={{color: 'grey', paddingRight:25}}>张小明</div>
              </div>
          </div>
        </div>
        <div style={{height: 10}}/>
      </div>
    );
  }
}

export default Home;
