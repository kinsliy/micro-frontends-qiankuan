import React from 'react';
import logo from './logo.svg';
import localStore from  'store';
import { Button ,Picker,CellsTitle,Form,FormCell,CellHeader,Label,CellBody,Input,CellFooter} from 'react-weui';
import './app.scss';

class App extends React.Component{


  state={
    name:'测试姓名',
    phone:'15698743728',
    sex:'男',
    num:1,

  }

  componentDidMount(){
    console.log(window.myapp);
    console.log(window.location)
    console.log('info===>',window.userInfo)
    window.addEventListener('userLogin', (event) => {
      console.log('userInfo===>',event)
      // this.setState({ products: [...this.state.products, event.detail] });
    }, false);
    console.log(localStore.get('userInfo'));
    const info =localStore.get('userInfo');
    if(info){
      this.setState({
        name:info.name,
        phone:info.phone,
        sex:info.picker_value,
     })
    }
    
  }

  add=()=>{
    this.setState({
      num:this.state.num+1,
    },()=>{
      let that =this;
      const myEvent = new CustomEvent("price", {
        detail: that.state.num,
       });
      window.dispatchEvent(myEvent);
    })
   
  }

  alert =() =>{
    alert('购买成功')
  }
    
  render(){
    return(
      <div className='dsjkdhsdmhbsdsjkd'>
          <div className='top'>
          {/* <div className='title'>下面是子应用2的子应用1</div> */}
          <CellsTitle>用户信息</CellsTitle>
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>姓名</Label>
                    </CellHeader>
                    <CellBody>
                        <Input disabled type="tel" value={this.state.name} />
                    </CellBody>
                </FormCell>
                <FormCell >
                    <CellHeader>
                        <Label>手机号:</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number"  disabled value={this.state.phone}/>
                    </CellBody>
                   
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>性别：</Label>
                    </CellHeader>
                    <CellBody>
                        <Input  disabled value={'男'}/>
                    </CellBody>
                </FormCell>
               
                
            </Form>
           
          </div>

          <div  className='middle'>
              <div className='num'>
                <div>保险您要买{this.state.num} 份</div>
                <Button onClick={this.add}  size='small' type='default' >添加份数</Button>
              </div>
              <div>
              <Button onClick={this.alert} >购买</Button>
              </div>
          </div>
      </div>
    )
  }


}

export default App;
