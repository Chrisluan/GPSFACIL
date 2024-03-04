import React, {
  useState, useCallback, useEffect,
} from 'react';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import DeviceList from './DeviceList';
import BottomMenu from '../common/components/BottomMenu';
import StatusCard from '../common/components/StatusCard';
import { devicesActions } from '../store';
import usePersistedState from '../common/util/usePersistedState';
import EventsDrawer from './EventsDrawer';
import useFilter from './useFilter';
import MainToolbar from './MainToolbar';
import MainMap from './MainMap';
import MenuPaths from './MenuPaths';
import { useAttributePreference } from '../common/util/preferences';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  sidebar: {
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      left: 0,
      top: 0,
      height: `calc(100% - ${theme.spacing(3)})`,
      width: theme.dimensions.drawerWidthDesktop,
      margin: theme.spacing(1.5),
      zIndex: 3,
    },
    [theme.breakpoints.down('md')]: {
      height: '100%',
      width: '100%',
    },
  },
  header: {
    pointerEvents: 'auto',
    zIndex: 6,
  },
  footer: {
    pointerEvents: 'auto',
    zIndex: 5,
  },
  middle: {
    flex: 1,
    display: 'grid',
  },
  contentMap: {
    pointerEvents: 'auto',
    gridArea: '1 / 1',
  },
  contentList: {
    pointerEvents: 'auto',
    gridArea: '1 / 1',
    zIndex: 4,
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();

  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  const mapOnSelect = useAttributePreference('mapOnSelect', true);

  const selectedDeviceId = useSelector((state) => state.devices.selectedId);
  const positions = useSelector((state) => state.session.positions);
  const [filteredPositions, setFilteredPositions] = useState([]);
  const selectedPosition = filteredPositions.find((position) => selectedDeviceId && position.deviceId === selectedDeviceId);

  const [filteredDevices, setFilteredDevices] = useState([]);

  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = usePersistedState('filter', {
    statuses: [],
    groups: [],
  });
  const [filterSort, setFilterSort] = usePersistedState('filterSort', '');
  const [filterMap, setFilterMap] = usePersistedState('filterMap', false);

  const [devicesOpen, setDevicesOpen] = useState(desktop);
  const [eventsOpen, setEventsOpen] = useState(false);

  const onEventsClick = useCallback(() => setEventsOpen(true), [setEventsOpen]);

  useEffect(() => {
    if (!desktop && mapOnSelect && selectedDeviceId) {
      setDevicesOpen(false);
    }
  }, [desktop, mapOnSelect, selectedDeviceId]);

  useFilter(keyword, filter, filterSort, filterMap, positions, setFilteredDevices, setFilteredPositions);

  return (
    <div className={classes.root}>
      {desktop && (
        <>
          <MenuPaths>
            </MenuPaths>
          <MainMap
            filteredPositions={filteredPositions}
            selectedPosition={selectedPosition}
            onEventsClick={onEventsClick}
          />
        </>
        
      )}
      <div className={classes.sidebar}>
        <div className={classes.middle}>
          {!desktop && (
            
            <div className={classes.contentMap}>
              <MainMap
                filteredPositions={filteredPositions}
                selectedPosition={selectedPosition}
                onEventsClick={onEventsClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
