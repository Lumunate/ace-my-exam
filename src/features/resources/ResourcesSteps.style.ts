import { Card, Link, styled, Table, TableContainer, Typography } from '@mui/material';
import LinkNext from 'next/link';

interface ResourcesCardProps {
  height?: string;
}
interface ResourcesSmallCardProps {
  contentAlign?: string;
}

export const ResourcesStepsLink = styled(LinkNext)(({ theme }) => ({
  color: '#818181',
  textAlign: 'start',
  fontFamily: 'Lato, sans-serif',
  fontSize: '16px',
  fontWeight: '400',
  textTransform: 'capitalize',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const ResourcesCard = styled(Card)<ResourcesCardProps>(({ theme, height }) => ({
  background: '#FFF',
  padding: '30px 34px',
  borderRadius: '20px',
  boxShadow: '0px 4px 39.5px 0px rgba(0, 0, 0, 0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: height || '100%',
  justifyContent: 'center',
  cursor: 'pointer',
  [theme.breakpoints.down('xl')]: {
    padding: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    height:'100%',
  },
}));

export const ResourcesCardSmall = styled(Card)<ResourcesSmallCardProps>(({ contentAlign }) => ({
  background: '#FFF',
  padding: '0px 17px',
  borderRadius: '20px',
  boxShadow: '0px 0px 12.6px 0px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  justifyContent: contentAlign || 'start',
  alignItems: 'center',
  minHeight: '56px',
  height: '100%',
  cursor: 'pointer',
}));

export const ResourcesCardSmallDisabled = styled(ResourcesCardSmall)<ResourcesSmallCardProps>(() => ({
  background: '#E8E8E8',
  cursor: 'default',
}));

export const ResourcesCardSmallLoading = styled(ResourcesCardSmallDisabled)<ResourcesSmallCardProps>(() => ({
  animation: 'blink 1s linear infinite',
}));

export const ResourcesCardNumber = styled(Typography)(({ theme }) => ({
  color: '#00324C',
  fontSize: '50px',
  fontWeight: 700,
  textAlign: 'center',
  lineHeight: 'normal',
  fontFamily: 'Lato, sans-serif',
  [theme.breakpoints.down('xl')]: {
    fontSize: '32px',
  },
}));

export const ResourcesCardTitle = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontSize: '20px',
  fontWeight: 400,
  textAlign: 'center',
  fontFamily: 'Lato, sans-serif',
  marginTop: '10px',
  lineHeight: 'normal',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
  },
}));

export const ResourcesTableContainer = styled(TableContainer)({
  boxShadow: 'unset',
  padding: 'unset',
  backgroundColor: 'unset',
  borderRadius: 'unset',
});

export const StyledTable = styled(Table)(({ theme }) => ({
  '& .MuiTableHead-root .MuiTableCell-root': {
    color: '#000',
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Jost, sans-serif',
    border: 'none',
    padding: '15px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      padding: '10px 0',
    },
  },
  '& .MuiTableCell-root': {
    color: '#000000',
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: 'Jost, sans-serif',
    border: 'none',
    padding: '5px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      padding: '4px 0',
    },
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: '#FF7F7B',
  fontFamily: 'Jost, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  textDecoration: 'none',
  cursor: 'pointer',
  marginLeft: '8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    marginLeft: '4px',
  },
}));

export const TablePara = styled(Typography)(({ theme }) => ({
  color: '#818181',
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Jost, sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const BreadcrumbsHeading = styled(Typography)(({ theme }) => ({
  color: '#818181',
  fontFamily: 'lato, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '10px',
  },
}));