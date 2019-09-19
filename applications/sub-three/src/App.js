import React from 'react';
import logo from './logo.svg';
import localStore from  'store';
import {Preview, PreviewHeader,CellsTitle, PreviewFooter, PreviewBody, PreviewItem, PreviewButton} from 'react-weui';
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
          <CellsTitle>产品展示</CellsTitle>
          <div className='topImg'>
             <img alt='首页图片'  src='https://open-cdn.zhongan.com/dm/assembler/872e9737ff4904b1b623d199b778e0e3.jpg'/>
          </div>
          <div className='topImg'>
             <img alt='首页图片'  src='https://open-cdn.zhongan.com/dm/assembler/b81c05ca381146e3d2654bbc73b9a8be.jpg'/>
          </div>
          <div className='topImg'>
             <img alt='首页图片'  src='https://open-cdn.zhongan.com/dm/assembler/d6e315c2a782e3bf0cfcbc028e08e12a.jpg'/>
          </div>
          {/* <div className='title'>下面是子应用2的子应用2</div> */}
          <Preview>
            <PreviewHeader>
                <PreviewItem label="购买总数" value={prices} />
            </PreviewHeader>
            <PreviewHeader>
                <PreviewItem label="保费总金额" value={prices*16} />
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
