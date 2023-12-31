import RocketIcon from '@mui/icons-material/Rocket';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import {IDashboardOrientation, IFilterButtons} from './types'
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { ViewCarouselIcon } from '@mui/icons-material/ViewCarousel';

export const filterButtons: IFilterButtons[] = [
    { 
      btnComponent: <RocketIcon />
      ,btnTitle: "Best"
    },
    { 
      btnComponent: <LocalFireDepartmentIcon />
      ,btnTitle: "Hot"
    },
    { 
      btnComponent: <NewReleasesIcon />
      ,btnTitle: "New"
    },
    { 
      btnComponent: <AlignVerticalTopIcon />
      ,btnTitle: "Top"
    },
]

export const dashboardOrientation: IDashboardOrientation[] = [
    {
        btnValue: 1,
        btnTitle: "Compact",
    },
    {
        btnValue: 2,
        btnTitle: "Classic"
    },
    {
        btnValue: 3,
        btnTitle: "Card"
    },
]