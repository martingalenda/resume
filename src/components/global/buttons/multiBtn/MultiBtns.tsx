import SpeedDial from '@mui/material/SpeedDial';
/* import SpeedDialAction from '@mui/material/SpeedDialAction'; */
import MoreVertIcon from '@mui/icons-material/MoreVert';
/* import { actions } from './actions'; */

const MultiBtns = () => {
    return (
      <div className="multiBtn">
        <SpeedDial
          ariaLabel="multiBtn"
          sx={{position: 'fixed',  bottom: '3em', right: '3em'}}
          FabProps={{ size: 'medium', style: { width: '3em', height: '3em' } }}
          icon={<MoreVertIcon />}
        >
          {/* actions.map(({action, i} : any) => (
            <SpeedDialAction
              key={i}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{width: '3em', height: '3em'}}
              onClick={action.action}
            />
          )) */}
        </SpeedDial>
      </div>
    )
}

export default MultiBtns