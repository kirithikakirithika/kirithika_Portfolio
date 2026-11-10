
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  FileText,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  LucideIcon,
  Menu,
  X
} from 'lucide-react';
import { data } from '../data';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface MenuItemProps {
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon: Icon,
  active,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center px-6 py-4 transition-all duration-300 relative group ${
      active
        ? 'text-black dark:text-white'
        : 'text-gray-500 dark:text-neutral-500 hover:text-black dark:hover:text-white'
    }`}
  >
    {active && (
      <motion.div
        layoutId="activeTab"
        className="absolute left-0 w-1.5 h-full bg-brand"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )}

    <Icon
      className={`w-5 h-5 mr-4 transition-transform group-hover:scale-110 ${
        active ? 'text-brand' : ''
      }`}
    />

    <span className="text-xs font-bold uppercase tracking-widest">
      {label}
    </span>
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-[120] p-3 rounded-full shadow-2xl bg-black text-white transition-all duration-300"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/80 z-[100]"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <div
        className={`w-64 h-full flex flex-col border-r fixed left-0 top-0 z-[110] transition-all duration-500 ease-in-out transform
          ${
            isOpen
              ? 'translate-x-0 shadow-2xl'
              : '-translate-x-full lg:translate-x-0'
          }
          bg-white dark:bg-black border-gray-100 dark:border-neutral-800`}
      >

        {/* PROFILE IMAGE */}
        <div className="p-8 pb-4">
          <div className="relative group">
            <div className="w-full aspect-square overflow-hidden relative">
              <img
                src={data.personal.sidebarImage}
                alt={data.personal.name}
                className="w-full h-full object-cover grayscale"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = data.personal.image;
                }}
              />

              <div className="absolute inset-0 border-b-8 border-brand pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-grow mt-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              active={activeSection === item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsOpen(false);
              }}
            />
          ))}
        </nav>

        {/* SOCIAL MEDIA LINKS */}
        <div className="p-8 flex justify-between">
          <a
            href={data.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-brand transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={data.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-brand transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${data.personal.email}`}
            aria-label="Email"
            className="text-gray-400 hover:text-brand transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
