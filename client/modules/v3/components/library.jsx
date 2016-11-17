import React from 'react';
import {Books1} from '/lib/books/ml1.js'
import {Books2} from '/lib/books/ml2.js'


const Book = ({book, group}) => {
  const imgUrl = `/books/${group}/${book.order}.jpg`
  const colStyle = {
    padding: 18,
    borderBottom: '0.5px solid',
    borderBottomColor: 'grey'
  }
  return(
    <div className="column" style={colStyle} onClick={()=>FlowRouter.go(`/v3/bookdetail?order=${book.order}`)}>
      <div className="image">
        <img src={imgUrl} style={{height: '100%', width: '100%'}} alt='暂无图片'/>
      </div>
      <div style={{fontSize: '0.8em'}}>{book.shuming}</div>
    </div>
  )
}

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    DocHead.setTitle('图书馆')

    return (
      <div>
        <div className="ui blue two item inverted menu">
          <a className="item" onClick={()=>FlowRouter.go('/v3/bookpub')}>
            图书出版
          </a>
          <a className="active item">
            图书馆
          </a>
        </div>
        <div className="weui-panel" style={{marginTop: -5}}>
          <div className="ui three column grid" style={{padding: 20}}>
            {
              Books1.map((b) => <Book book={b} group={1} key={b.shuming}/>)
            }
            {
              Books2.map((b) => <Book book={b} group={2} key={b.shuming}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Library;


// <h4 style={{paddingTop: 10}}>&nbsp;&nbsp;&nbsp; 新书目录 </h4>
// <hr />
// <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')} style={{paddingTop: 20}}>
//   <div className="weui-flex__item" style={{flex:0.1}} />
//   <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/bookdetail')}/>
//   <div className="weui-flex__item" style={{flex:0.2}} />
//   <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
//   <div className="weui-flex__item" style={{flex:0.1}} />
// </div>
// <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')} style={{paddingTop: 20}}>
//   <div className="weui-flex__item" style={{flex:0.1}} />
//   <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
//   <div className="weui-flex__item" style={{flex:0.2}} />
//   <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
//   <div className="weui-flex__item" style={{flex:0.1}} />
// </div>
// <div className="weui-flex" onClick={()=>FlowRouter.go('/v3/journaldetail')} style={{paddingTop: 20}}>
//   <div className="weui-flex__item" style={{flex:0.1}} />
//   <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
//   <div className="weui-flex__item" style={{flex:0.2}} />
//   <div className="weui-flex__item" style={imgBoxStyle} onClick={()=>FlowRouter.go('/v3/journalmanage')}/>
//   <div className="weui-flex__item" style={{flex:0.1}} />
// </div>
