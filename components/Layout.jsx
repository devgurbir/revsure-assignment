
import Link from 'next/link';
import { Layout, Menu, Row } from 'antd';
const { Header, Content, Sider } = Layout;


const NextLayout = ({children}) => {
  return (
    <Layout className="layout">
    <Header className="header">
      <div className="logo">
        <h3><Link href="/">Logo</Link></h3>
      </div>
    </Header>
    <Layout>
      <Sider className="sidebar" >          
        <Menu id="menu" style={{color: "#fff"}}>        
            <Menu.Item key="column-chart"><Link href="/columnchart">Column Chart</Link></Menu.Item>
            <Menu.Item key="signup"><Link href="/signup">Sign Up</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="site-layout-background content" >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default NextLayout