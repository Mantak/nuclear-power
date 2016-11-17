import React from 'react';

const FavoriteJournal = () => {
  DocHead.setTitle('期刊收藏')
  return (
    <div>
      <div/>
      <div className="weui-panel weui-panel_access" >
        <h4 className="ui horizontal divider magenta header" style={{paddingTop: 25, paddingBottom: 25}}>
          <i className="blue heart icon"></i>
            期刊收藏
        </h4>

        <div style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>
          <h4 className="weui-media-box__title">"十三五" 会计研究的八个思考</h4>
          <div className="ui grid">
            <div className="eight wide column" style={{color: 'grey'}}>2016-10-18</div>
            <div className="right aligned eight wide column" style={{color: 'grey', paddingRight:25}}>栾普贵</div>
          </div>
          <div className="ui divider"></div>
        </div>

        <div style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 20}}>
          <h4 className="weui-media-box__title">北京热能学杂志社</h4>
          <div className="ui grid">
            <div className="eight wide column" style={{color: 'grey'}}>2016-9-1</div>
            <div className="right aligned eight wide column" style={{color: 'grey', paddingRight:25}}>张小明</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoriteJournal;
