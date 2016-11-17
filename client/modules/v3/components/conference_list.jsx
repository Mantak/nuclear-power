import React from 'react';
import {ConferenceArr} from '/lib/conference'

const Conf = (props) => {

  return(
    <div className="weui-media-box weui-media-box_text" style={{paddingTop: 30, paddingBottom: 15}} onClick={()=>FlowRouter.go('/v3/conferencedetail')}>
      <h3 className="weui-media-box__title" style={{color: "#0E6EB8"}}>{props.title}</h3>
      <div style={{height: 10}}/>
      <div className="weui-flex" >
        <div className="weui-flex__item" style={{flex: 0.4, fontSize: '0.8em'}}>
          <i className="teal calendar icon" /> <span style={{color:'grey'}}>{props.time}</span>
        </div>
        <div className="weui-flex__item" style={{flex: 0.05}}/>
        <div className="weui-flex__item" style={{flex: 0.55, fontSize: '0.8em'}}>
          <i className="teal marker icon" /><span style={{color:'grey'}}>{props.location}</span>
        </div>
      </div>
    </div>
  )
}


class ConferenceList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    DocHead.setTitle('行业会议')
    return (
      <div>
        <div className="weui-panel weui-panel_access">
          <h3 className='ui brown header'style={{marginTop: 25, marginLeft: 10, marginBottom: 25}}>本学科近三个月内即将召开的学术会议</h3>
          <div className='ui divider'/>
          <div className="weui-panel__bd">
            {
              ConferenceArr.map( (conf) => <Conf {...conf} key={conf.order}/> )
            }
          </div>
        </div>

      </div>
    );
  }
}

export default ConferenceList;
