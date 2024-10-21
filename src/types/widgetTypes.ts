// Type Imports
import type { CustomAvatarProps } from '@/@core/components/mui/Avatar';
import type { OptionsMenuType } from '@/@core/components/option-menu/types';
import type { ThemeColor } from '@/@core/types';

export type CardStatsVerticalProps = {
  title: string
  stats: string
  avatarIcon: string
  subtitle: string
  avatarColor?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
  avatarSkin?: CustomAvatarProps['skin']
  avatarSize?: number
  moreOptions?: OptionsMenuType
}
