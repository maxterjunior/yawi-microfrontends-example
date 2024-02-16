import { Layout, Menu, Typography } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menu } from '../core/menu';

const { Header, Content, Sider } = Layout;

const { Text } = Typography;

export const MenuComponent = (props) => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(window.innerWidth < 768)

    const location = useLocation().pathname

    const inicialPath = location.split('/').slice(1).join('/') || 'home'

    const siderOptions = (() => {
        if (window.innerWidth < 768) {
            return {
                collapsedWidth: 0,
            }
        } else {
            return {}
        }
    })()

    return (
        <Layout className='h-100'>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                width={200} breakpoint='sm'
                className='h-100'
                style={{ background: '#fff' }}
                {...siderOptions}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[inicialPath]}
                    style={{ height: '100%', borderRight: 0 }}
                    items={menu}
                    onClick={({ key }) => navigate(key as string)}
                />
            </Sider>
        </Layout>
    )

}
