'use client';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DraftsIcon from '@mui/icons-material/Drafts';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Drawer, DrawerBox, DrawerHeader, DrawerHeaderDivider } from './Sidebar.style';

interface MenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

interface MenuItems {
  section: string;
  items: MenuItem[];
}

const MENU_ITEMS: MenuItems[] = [
  {
    section: 'Main', items: [
      {
        text: 'Dashboard',
        icon: <GridViewIcon />,
        path: '/admin',
      },
      // {
      //   text: 'Inbox',
      //   icon: <AllInboxIcon />,
      //   path: '/admin/inbox',
      // },
      // {
      //   text: 'Starred',
      //   icon: <StarRateIcon />,
      //   path: '/admin/starred',
      // },
      {
        text: 'Resources',
        icon: <DraftsIcon />,
        path: '/admin/resources',
      },
    ]
  },
  {
    section: 'Account', items: [
      {
        text: 'Your Account',
        icon: <PersonIcon />,
        path: '/admin/account',
      },
      // {
      //   text: 'Settings',
      //   icon: <ManageAccountsIcon />,
      //   path: '/admin/account/settings',
      // },
      // {
      //   text: 'Users',
      //   icon: <SupervisorAccountIcon />,
      //   path: '/admin/account/users',
      // },
    ]
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerBox>
        <DrawerHeader>
          <ListItemText
            primaryTypographyProps={{
              fontWeight: '600',
              fontSize: '2.2rem',
              color: 'text.main',
              marginTop: '0.5rem'
            }}
            sx={[
              open
                ? {
                  opacity: 1,
                }
                : {
                  opacity: 0,
                },
            ]}
            primary="Acemyexam"
          />
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <DrawerHeaderDivider />
        <List>
          {MENU_ITEMS.map((section, idx) => (
            <>
              {section.section !== 'Main' && 
              <MenuSectionDivider key={idx} name={section.section} open={open} />
              }
              {section.items.map((item) => (
                <StyledListItem key={item.text} text={item.text} icon={item.icon} selected={pathname === item.path} path={item.path} open={open} />
              ))}
            </>
          ))}
        </List>
      </DrawerBox>
    </Drawer>
  );
}

const MenuSectionDivider = ({ name, open }: { name: string, open: boolean }) => {
  return <Box sx={{
    display: 'flex',
    gap: '0.8rem',
    alignItems: 'center',
    margin: '0.8rem 0',
    opacity: open ? 1 : 0,
    transition: 'opacity 0.1s ease-in-out',
  }}>
    <Box sx={{
      backgroundColor: 'accent.main',
      width: '1.4rem',
      height: '0.1rem',
    }}></Box>

    <Typography sx={{
      color: 'accent.main',
      fontSize: '1.2rem',
      fontWeight: '600',
      lineHeight: '150%',
    }}>
      {name}
    </Typography>

    <Box sx={{
      backgroundColor: 'accent.main',
      width: '100%',
      height: '0.1rem',
    }}></Box>
  </Box>;
};

interface StyledListItemProps extends MenuItem {
  open: boolean;
  selected: boolean;
}

export const StyledListItem: React.FC<StyledListItemProps> = ({ text, icon, selected, open, path }) => {
  const router = useRouter();

  return (
    <ListItem
      disablePadding
      sx={{
        display: 'block',
        backgroundColor: open && selected ? 'background.white' : '',
        borderRadius: '8px',
        marginBottom: '0.4rem',
      }}
    >
      <ListItemButton
        onClick={() => { router.push(path); }}
        sx={[
          {
            minHeight: 48,
            px: 2.5,
          },
          open
            ? {
              justifyContent: 'initial',
            }
            : {
              justifyContent: 'center',
            },
        ]}
      >
        <ListItemIcon
          sx={[
            {
              minWidth: 0,
              color: !selected ? 'accent.main' : 'text.light',
              borderRadius: '8px',
              padding: '0.5rem',
              justifyContent: 'center',
              backgroundColor: !selected ? 'background.white' : 'accent.main',
            },
            open
              ? {
                mr: 3,
              }
              : {
                mr: 'auto',
              },
          ]}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontWeight: '600 !important',
            fontSize: '1.6rem',
            color: !selected ? 'text.secondary' : 'text.main',
          }}
          sx={[
            open
              ? {
                opacity: 1,
              }
              : {
                opacity: 0,
              },
          ]}
        />
      </ListItemButton>
    </ListItem>
  );
};
