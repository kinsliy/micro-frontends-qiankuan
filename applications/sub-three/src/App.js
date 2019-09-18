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
     const prices = '$:'+this.state.price;
    return(
      <div className='dsjkdhsdmhbsdsjkd'>
          <div className='top'>
          <div>子应用2的子应用2</div>
          <Preview>
            <PreviewHeader>
                <PreviewItem label="Total" value={prices} />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label="Product" value="Name" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
            </PreviewBody>
            <PreviewFooter>
                <PreviewButton primary>Action</PreviewButton>
            </PreviewFooter>
        </Preview>
          </div>
      </div>
    )
  }


}

export default App;
