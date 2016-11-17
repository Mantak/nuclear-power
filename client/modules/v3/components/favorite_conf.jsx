import React from 'react';

const FavoriteConf = () => {
  DocHead.setTitle('会议关注')
  return (
    <div>
      <div/>
      <div className="weui-panel weui-panel_access" >
        <h4 className="ui horizontal divider magenta header" style={{paddingTop: 25, paddingBottom: 25}}>
          <i className="blue star icon"></i>
            会议关注
        </h4>

        <div style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>
          <h4 className="weui-media-box__title">纪念孙中山诞辰 150 周年学术研讨会</h4>
          <div className="ui grid">
            <div className="eight wide column" style={{color: 'grey'}}>2016-10-18</div>
            <div className="right aligned eight wide column" style={{color: 'grey', paddingRight:25}}>北京</div>
          </div>
          <div className="ui divider"></div>
        </div>

        <div style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>
          <h4 className="weui-media-box__title">北京热能学杂志社</h4>
          <div className="ui grid">
            <div className="eight wide column" style={{color: 'grey'}}>2016-9-1</div>
            <div className="right aligned eight wide column" style={{color: 'grey', paddingRight:25}}>Berlin</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoriteConf;
