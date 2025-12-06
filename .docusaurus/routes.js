import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-humanoid-robotics-book/docs',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', 'b4f'),
    routes: [
      {
        path: '/physical-ai-humanoid-robotics-book/docs',
        component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', '844'),
        routes: [
          {
            path: '/physical-ai-humanoid-robotics-book/docs',
            component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs', '800'),
            routes: [
              {
                path: '/physical-ai-humanoid-robotics-book/docs/capstone-vla-manipulation',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/capstone-vla-manipulation', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/digital-twin-intro',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/digital-twin-intro', '543'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/hardware-setup',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/hardware-setup', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/humanoid-navigation',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/humanoid-navigation', 'e3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/intro',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/intro', '5ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/isaac-locomotion-training',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/isaac-locomotion-training', 'd52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/ros2-intro',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/ros2-intro', 'f46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics-book/docs/ros2-joint-control',
                component: ComponentCreator('/physical-ai-humanoid-robotics-book/docs/ros2-joint-control', 'f97'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/physical-ai-humanoid-robotics-book/',
    component: ComponentCreator('/physical-ai-humanoid-robotics-book/', '428'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
