import React from 'react'
import {MdDashboard, MdSettings } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import {BiSupport} from "react-icons/bi"
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: 'Dashboard',        
        icon: <GoGraph />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Todos',
            path: '/allDashboard',
            icon: <MdDashboard/>
          },
          {
            title: 'pepito Perez',
            path: '/dashboardPersonal',
            icon: <MdDashboard />
          }
        ]
      },
    {
        title: 'Calendario',
        path: '/calendar',
        icon: <BsIcons.BsFillCalendarFill />,
        cName: 'nav-text'
    },
    {
        title: 'Administración',     
        icon: <MdSettings />,
    
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Configuración de notificaciones',
            path: '/notifications',
            icon: <RiIcons.RiMailSettingsFill />
          },
          {
            title: 'Soporte',
            path: '/support',
            icon: <BiSupport/>
          }
        ]
      }
];