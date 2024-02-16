import { CalendarOutlined, UserOutlined, FlagOutlined, UserAddOutlined, ToolOutlined, SolutionOutlined } from '@ant-design/icons';

// import { MenuProps } from "antd/es/menu/menu";
// export const menu: MenuProps['items'] = [
export const menu: any[] = [
    {
        label: 'Eventos',
        icon: <CalendarOutlined />,
        key: 'eventos',
    },
    {
        label: 'Pilotos',
        icon: <UserOutlined />,
        key: 'pilotos',
    },
    {
        label: 'Carreras',
        icon: <FlagOutlined />,
        key: 'carreras',
    },
    {
        label: 'Clasificatoria',
        icon:<SolutionOutlined />,
        key: 'Clasificatoria',
    },
    {
        label: 'Dispositivos',
        icon: <ToolOutlined />,
        key: 'dispositivos',
    },
    {
        label: 'Usuarios',
        icon: <UserAddOutlined />,
        key: 'usuarios',
        access: 1,
    },
    {
        label:'Todo',
        icon: <UserAddOutlined />,
        key: 'todo',
        access: 1,
    }
]