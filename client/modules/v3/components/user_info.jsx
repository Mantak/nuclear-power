import React from 'react';
import ColorThief from '/lib/color-thief.js'

class UserInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dominantColor: 'rgba(90,90,90,0.65)'
    }
  }
  handleAvatarLoaded(){
    const img = document.getElementById("avatar")
    let colorThief = new ColorThief();
    const c = colorThief.getColor(img)
    const rgbStr = `rgba(${c[0]},${c[1]},${c[2]}, 0.2)`
    this.setState({dominantColor: rgbStr})
  }
  render(){
    DocHead.setTitle("个人中心")
    const blurStyle = {
      backgroundImage: "url('/imgs/zmx.jpeg')",
      filter: "blur(15px)",
      backgroundSize: "cover",
      opacity: 0.6,
      position: 'absolute',
      width: '100%',
      height: 215
    }
    return (
      <div>
        <div>
          <div style={blurStyle}/>
          <div style={{padding: 15, position: 'relative', backgroundColor: this.state.dominantColor}}>
            <img
              id="avatar"
              className="ui small circular image"
              src='/imgs/zmx.jpeg'
              style={{display: 'block', margin: '0 auto'}}
              onLoad={this.handleAvatarLoaded.bind(this)}/>
            <p style={{textAlign: 'center', marginTop: 15, color: 'white'}}>张梦雪</p>
          </div>
        </div>

        <div className="weui-cells">
          <a className="weui-cell weui-cell_access" href="/v3/favj">
            <div className="weui-cell__bd">
              <p><i className="blue empty heart icon"/> 期刊收藏</p>
            </div>
            <div className="weui-cell__ft"/>
          </a>
          <a className="weui-cell weui-cell_access" href="/v3/favc">
            <div className="weui-cell__bd">
              <p><i className="blue empty star icon"/> 会议关注</p>
            </div>
            <div className="weui-cell__ft"/>
          </a>
          <a className="weui-cell weui-cell_access" href="/v3/feedback">
            <div className="weui-cell__bd">
              <p><i className="blue send outline icon"/> 意见反馈</p>
            </div>
            <div className="weui-cell__ft"/>
          </a>
        </div>
      </div>
    )
  }
};

export default UserInfo;


// <div>
//   <div className="weui-panel weui-panel_access" style={blurStyle}>
//     <div style={{padding: 15}}>
//       <img
//         id="avatar"
//         className="ui small circular image"
//         src='/imgs/zmx.jpeg'
//         style={{display: 'block', margin: '0 auto'}}/>
//     </div>
//     <p style={{textAlign: 'center', paddingBottom: 15}}> 张梦洁 </p>
//   </div>
// </div>
