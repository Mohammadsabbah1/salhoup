import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useHistory } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  subMenu?: { icon: React.ReactNode; text: string; path?: string }[]; // Add optional path here
  expanded: boolean;
  path?: string; // Path for the main sidebar item
}

const SidebarItem = ({ icon, text, active, subMenu, expanded, path }: SidebarItemProps) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const history = useHistory(); // Initialize the history object
  
    return (
      <>
        {/* Sidebar item */}
        <li
          className={`mb-2 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100 ${
            active ? 'bg-gray-100' : ''
          }`}
          onClick={() => {
            if (subMenu) {
              setSubMenuOpen((open) => !open);
            } else if (path) {
              history.push(path); // Navigate if a path is provided
            }
          }}
        >
          <span className="flex items-center space-x-3">
            {icon}
            <span
              className={`text-md font-medium transition-all ${
                expanded ? 'block' : 'hidden'
              }`}
            >
              {text}
            </span>
          </span>
          {/* Toggle submenu icon */}
          {subMenu && expanded && (
            <span className="ml-auto">
              {subMenuOpen ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </span>
          )}
        </li>
  
        {/* Submenu items */}
        {subMenu && subMenuOpen && expanded && (
          <ul className="ml-6">
            {subMenu.map((item, index) => (
              <li
                key={index}
                className="mb-2 flex cursor-pointer items-center space-x-2 rounded-md p-2 hover:bg-gray-100"
                onClick={() => item.path && history.push(item.path)} // Navigate on submenu item click
              >
                {item.icon}
                <span className="text-md font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };
  
  export default SidebarItem;
  