import {
    ArrowRightIcon,
    ArrowLeftIcon,
    HomeIcon,
    CogIcon,
    UserIcon,
    EllipsisVerticalIcon,
  } from '@heroicons/react/24/outline';
  import icone1 from "../../assets/images/459413633_1022437936559467_5852599836659945321_n-removebg-preview.png";
  import { useState } from 'react';
  import SidebarItem from './sidebarItem';
  
  // This sidebar component is for both mobile and desktop, positioned on the right side
  export function Sidebar({ children, expanded, setExpanded }: any) {
    return (
      <div className="relative">
        {/* 
          This div is used to create the background overlay when the sidebar is expanded
          It is only visible on mobile screens
        */}
        <div
          className={`fixed inset-0 -z-10 block bg-gray-400 ${expanded ? 'block sm:hidden' : 'hidden'}`}
        />
        <aside
          className={`fixed right-0 top-0 h-screen transition-all ${expanded ? 'w-5/6 sm:w-64' : 'w-0 sm:w-20'}`}
        >
          <nav className="flex h-full flex-col border-l bg-white shadow-sm">
            <div className="flex items-center justify-between p-4 pb-2">
              <img
                src={icone1}
                className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
                alt=""
              />
              <div className={`${expanded ? '' : 'hidden sm:block'}`}>
                <button
                  onClick={() => setExpanded((curr: boolean) => !curr)}
                  className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
                >
                  {expanded ? (
                    <ArrowLeftIcon className="h-6 w-6" />
                  ) : (
                    <ArrowRightIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            <ul className="flex-1 px-3">{children}</ul>
            <div className="flex border-t p-3">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Mark+Ruffalo"
                alt="User Avatar"
                className="h-10 w-10 rounded-md"
              />
              <div
                className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}`}
              >
                {/* <div className="leading-4">
                  <h4 className="font-semibold">Mark Ruffalo</h4>
                  <span className="text-xs text-gray-600">mark@gmail.com</span>
                </div> */}
                <EllipsisVerticalIcon className="h-6 w-6" />
              </div>
            </div>
          </nav>
        </aside>
      </div>
    );
  }
  
//   export default function MakeSidebar() {
//     const [expanded, setExpanded] = useState(true);
//     const navBarItems = [
//       {
//         icon: <HomeIcon />,
//         text: 'Home',
//         active: true,
//       },
//       {
//         icon: <UserIcon />,
//         subMenu: [
//           {
//             icon: <UserIcon />,
//             text: 'Profile',
//           },
//           {
//             icon: <CogIcon />,
//             text: 'Settings',
//           },
//         ],
//         text: 'Profile',
//       },
//       {
//         icon: <CogIcon />,
//         text: 'Settings',
//       },
//     ];
  
//     // Right-aligned sidebar
//     return (
//       <Sidebar expanded={expanded} setExpanded={setExpanded}>
//         {navBarItems.map((item, index) => (
//           <SidebarItem key={index} expanded={expanded} {...item} />
//         ))}
//       </Sidebar>
//     );
//  }
  