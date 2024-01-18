import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import LeftNav from './Components/LefNav/LeftNav';
import Home from './Components/Home/Home';

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className="App">
      <LeftNav />
      <Home />
      {/* <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
        <Sidebar collapsed={collapsed}>
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
            <MenuItem> Examples</MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ padding: 10 }}>
          <div>
            <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
              Collapse
            </button>
          </div>
        </main>
      </div> */}
    </div>
  );
}

export default App;
