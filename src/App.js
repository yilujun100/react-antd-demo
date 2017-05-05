import React, { Component } from 'react';

import './App.css';

// 引入Ant-Design样式
import 'antd/dist/antd.css';

// 引入react-router-dom模块
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// 引入antd模块
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const SubMenu = Menu.SubMenu;

// 引入单个页面
import Home from './components/Home';
import MyTable from './components/Table';
import MyForm from './components/Form';
import MyChart from './components/Chart';
import Calendar from './components/Calendar';

// 路由配置
const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/table',
    component: MyTable
  },
  {
    path: '/form',
    component: MyForm
  },
  {
    path: '/chart',
    component: MyChart
  },
  {
    path: '/calendar',
    component: Calendar
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      username: ''
    }
  }

  handleClick(event) {
    this.setState({current: event.key})
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    this.setState({username: 'yilujun'})
  }

  render() {
    return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <img src={require('./assets/images/logo.png')} width="50" id="logo" alt="logo" />
          <Menu theme="dark"
          onClick={this.handleClick.bind(this)}
          style={{ width: 185 }}
          defaultSelectedKeys={[this.state.current]}
          defaultOpenKeys={['sub1']}
          mode="inline"
          >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Item1</span></span>}>
            <Menu.Item key="1"><Link to="/table">Table</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/form">Form</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/chart">Chart</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/calendar">Calendar</Link></Menu.Item>
          </SubMenu>
          </Menu>
        </div>
        <div className="container">
          <Menu mode="horizontal">
          <SubMenu title={<span><Icon type="user" /><span>{ this.state.username }</span></span>}>
            <Menu.Item key="setting:1">layout</Menu.Item>
          </SubMenu>
          </Menu>
          <div className="content">           
            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
