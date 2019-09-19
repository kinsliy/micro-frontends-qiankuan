import React from 'react';
import logo from './logo.svg';
import { withRouter } from "react-router";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Button ,Picker,CellsTitle,Form,FormCell,CellHeader,Label,CellBody,Input,CellFooter} from 'react-weui';
import './app.scss';

import localStore from 'store';
import topImg  from './top.jpeg';
import product  from './product.png'

class App extends React.Component{

  state = {
    picker_show: false,
    picker_value: '',
    picker_group: [
        {
            items: [
                {
                    label: '男'
                },
               
                {
                    label: '女'
                },
                
            ]
        }
    ],
};


componentDidMount(){
    console.log(window.location)
     console.log(window.myapp)
}

hide(){
    this.setState({
        picker_show: false,
        city_show: false
    })
}

changeName =(e) =>{
   this.setState({
     name:e.target.value
   })
}
changePhone=(e) =>{
  this.setState({
    phone:e.target.value
  })
}

getData =() =>{
    let that = this;
    const myEvent = new CustomEvent("userLogin", {
        detail: that.state,
    });
    window.dispatchEvent(myEvent);
    window.myapp.userinfo=this.state;
    localStore.set('userInfo',this.state)
    this.props.history.push('/#/topics')
   console.log(this.state)
}

   render(){
     return(
        <Router>
       <div  className='dksjdfsdkhwioewoejw'>
           {/* <div className='title'>子应用1</div> */}
          <div className='top'>
             <img alt='首页图片'  src='https://open-cdn.zhongan.com/dm/assembler/39aaa8ff7eca66802b0f5aa5753fb979.png'/>
          </div>

          <div className='middle'>
          <CellsTitle>请填写你的信息</CellsTitle>
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>姓名:</Label>
                    </CellHeader>
                    <CellBody>
                        <Input  value={this.state.name} onChange={this.changeName} type="text" placeholder="请输入你的姓名"/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>手机号:</Label>
                    </CellHeader>
                    <CellBody>
                        <Input  value={this.state.phone} onChange={this.changePhone}  type="tel" placeholder="请输入你的手机号"/>
                    </CellBody>
                </FormCell>
                <FormCell>
                        <CellHeader>
                            <Label>性别：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input
                                type="text"
                                onClick={e=>{
                                    e.preventDefault()
                                    this.setState({picker_show: true})
                                }}
                                placeholder="请选择"
                                value={this.state.picker_value}
                                readOnly={true}
                            />
                        </CellBody>
                    </FormCell>

                    <Picker
                    onChange={selected=>{
                        let value = ''
                        selected.forEach( (s, i)=> {
                            value = this.state.picker_group[i]['items'][s].label
                        })
                        this.setState({
                            picker_value: value,
                            picker_show: false
                        })
                    }}
                    groups={this.state.picker_group}
                    show={this.state.picker_show}
                    onCancel={e=>this.setState({picker_show: false})}
                />
               
              
            </Form>
          </div>
          <div className='bottom'>
            <CellsTitle>保险产品介绍</CellsTitle>
             <img alt='首页图片'  src='https://open-cdn.zhongan.com/dm/assembler/919b09b569b2e99e5ff14c44d514acbc.png'/>
             <img alt='首页图片'  src='https://open-cdn.zhongan.com/dm/assembler/32cbaea7a166a5617cf6e5f89c23571f.png'/>
             <img alt='首页图片'  src='https://open-cdn.zhongan.com/dm/assembler/eb9fa112dadcf82d712ca341d5479f98.png'/>
          </div>
         <div  className='nextButton'>
            <Router>
              {/* <Link to="/topics">Topics</Link> */}
            <Button onClick={this.getData}>下一步</Button> 
            </Router>
            
            
         </div>
       </div>
       </Router>
     )
   }

}

export default withRouter(App);
