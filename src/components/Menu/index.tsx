import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
import LabelIcon from '@mui/icons-material/Label';
import { ReactAdminFunctionalComponent } from '@src/@types/react-admin';

export type MenuRawProps = {
  onMenuClick: () => void;
  logout: React.ReactNode;
};
// @ts-ignore
const MenuRaw: ReactAdminFunctionalComponent<MenuRawProps> = ({
  onMenuClick,
  logout,
}: MenuRawProps) => {
  const isXSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const open = useSelector((state: any) => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources);
  return (
    <div>
      {resources.map((resource) => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={
            (resource.options && resource.options.label) || resource.name
          }
          leftIcon={createElement(resource.icon)}
          onClick={onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      <MenuItemLink
        to="/api-test"
        primaryText="Api Developer test"
        leftIcon={<LabelIcon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
      />
      {isXSmall && logout}
    </div>
  );
};

export const Menu = withRouter(MenuRaw);
