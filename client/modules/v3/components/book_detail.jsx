import React from 'react';
import {Books1} from '/lib/books/ml1.js'

const Item = ({book}) => {
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
  const imgSrc = `/books/1/${book.order}.jpg`
  return(
    <div className="weui-media-box">
      <div className="weui-flex">
        <div className="weui-flex__item" style={imgBoxStyle}>
          <img src={imgSrc} style={{height: '100%', width: '100%'}} alt='暂无图片'/>
        </div>
        <div className="weui-flex__item" style={contentBoxStyle}>
          <div style={{padding: 5}}>
            <h4 className="ui brown header">{book.shuming}</h4>
            <p>作者: <span style={{color: 'grey'}}>{book.zuozhe}</span></p>
            <p>定价: <span style={{color: 'grey'}}>{book.dingjia}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('期刊详情')
    // DocHead.addMeta({name:"format-detection", content:"telephone=no"})
    const order = FlowRouter.getQueryParam("order")
    const book = Books1.sort((a,b) => a.order - b.order)[order-1]
    return (
      <div>
        <div className="weui-panel" >
          <div className="weui-media-box">
            <Item book={book}/>
        </div>
        </div>

        <div className="weui-cells__title">内容简介</div>
        <div className="weui-panel weui-panel_access">
          <div className="weui-panel__bd">
            <div className="weui-media-box weui-media-box_text">
              <p>{book.neirong}</p>
            </div>
          </div>
        </div>

        <div style={{height: 20}}/>
      </div>
    );
  }
}

export default BookDetail;
