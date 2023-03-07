import { createElement } from 'react';
import { useMediaQuery } from '@mui/material';
import { Menu as ReactAdminMenu, useResourceDefinitions } from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';

export const Menu = () => {
  const isXSmall = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const resources = useResourceDefinitions();

  return (
    <ReactAdminMenu>
      {Object.keys(resources).map((name) => (
        <ReactAdminMenu.Item
          key={name}
          to={`/${name}`}
          primaryText={
            (resources[name].options && resources[name].options.label) || name
          }
          leftIcon={createElement(resources[name].icon)}
        />
      ))}
      <ReactAdminMenu.Item
        to="/api-test"
        primaryText="Api Developer test"
        leftIcon={<LabelIcon />}
      />
    </ReactAdminMenu>
  );
};
