import React from 'react';
import logo from './logo.svg';
import localStore from  'store';
import {Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton} from 'react-weui';
import './app.scss';

class App extends React.Component{


  state={
    name:'测试',
    phone:'',
    sex:'',
    price:1,

  }

  componentDidMount(){
    console.log(window)
    window.addEventListener('price', (event) => {
      console.log('price===>',event)
      this.setState({
        price:event.detail
      })
      // this.setState({ products: [...this.state.products, event.detail] });
    }, false);
    console.log(localStore.get('userInfo'))
  }

    
  render(){
     const prices = this.state.price;
    return(
      <div className='dsjkdhsdmhbsdsjkd'>
          <div className='top'>
          <div>子应用2的子应用2</div>
          <Preview>
            <PreviewHeader>
                <PreviewItem label="购买总数" value={prices} />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label="产品" value="意外医疗险" />
                <PreviewItem label="描述" value="最高700万意外身故/伤残保障" />
                <PreviewItem label="细节" value="180天-65周岁可投保，续保可至70周岁 " />
            </PreviewBody>
        </Preview>
          </div>
      </div>
    )
  }


}

export default App;
