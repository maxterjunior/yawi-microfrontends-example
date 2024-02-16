import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Layout, MenuProps, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const { Text } = Typography;

export const Nav = (props) => {

    const navigate = useNavigate()

    const avatarItems: MenuProps['items'] = [
        {
            key: '1',
            label: 'Cerrar sesión',
            icon: <LogoutOutlined />,
            onClick: () => {

            },
        }
    ];

    return (
        <Header className="header flex-between"
            style={{
                paddingLeft: 15,
                paddingRight: 15,
                background: '#15365D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '3.8rem'
            }}>
            <a className="flex" href="./">
                <img className="logo-page" src="https://www.yawi.pe/assets/images/logo-yawi.svg" alt="logo" style={{ width: '100px', height: '100%' }} />
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Text strong className='text-white-100 text-15 mr-10 '>{'Usuario'}</Text>
                <Dropdown menu={{ items: avatarItems }} placement="bottomLeft" arrow className='w-100px'>
                    <Avatar size={50} icon={<UserOutlined />} />
                    {/* <img className="logo-admin puntero" src="https://www.yawi.pe/assets/images/logo-yawi.svg" alt="logo-admin" /> */}
                </Dropdown>
            </div>
        </Header >
    )

}
