import React, {Component} from 'react'
import './App.css';

class App extends Component{
  data=["aaa","bbb","ccc"]
  constructor(props){
    super(props)
    this.state={
      list:this.data
    }
  }
  render(){
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className='container'>
      <p className='subtitle'>Show list</p>
        <List title='サンプルリスト'data={this.data} />
  
      </div>
    </div>
  }
}


class List extends Component{
  number = 1

  render(){
    let data = this.props.data;
    return(
      <div>
        <p className='h5 text-center'>{this.props.title}</p>
        <ul className='list-group'>
          {data.map((value, index) =>
          // インデックスじゃだめなのか→よかった
          <il className='list-group-item' >
            <Item index={index + 1} value={value}/>
            {/* +1するのはデフォで最初が0だから */}
          </il>
          )}
        </ul>
      </div>
    )
  }
}

class Item extends Component{
  itm = {
    fontSize:"16pt",
    color:"#00f",
    textDecoration:"underline",
    textDecorationColor:"#ddf"
  }
  num = {
    fontWeight:"bold",
    color:"red"
  }
  render(){
    return(
      <p style={this.itm}>
        <span style={this.num}>
          {/* spanはインライン */}
          [{this.props.index}]&nbsp;
          {/* nbspは改行禁止みたいな */}
        </span>
        {this.props.value}
      </p>
    )
  }
}


export default App;
