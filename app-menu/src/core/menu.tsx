import { CalendarOutlined, UserOutlined, FlagOutlined, UserAddOutlined, ToolOutlined, SolutionOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { MenuProps } from "antd/es/menu/menu";

export const menu: MenuProps['items'] = [
    // export const menu: any[] = [
    {
        label: 'Eventos',
        icon: <CalendarOutlined />,
        key: 'eventos',
    },
    {
        label: 'TODOs',
        icon: <UnorderedListOutlined />,
        key: 'todo',
        children: [
            {
                label: 'Pendientes',
                key: 'todo/pendientes',
            },
            {
                label: 'Completados',
                key: 'todo/completados',
            },
        ]
    },
    {
        label:'Counter',
        icon: <FlagOutlined />,
        key: 'counter',
    }
]