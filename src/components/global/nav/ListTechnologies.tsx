// ? MUI
    import ListSubheader from '@mui/material/ListSubheader';
    import List from '@mui/material/List';
// ? DATA
    import data from '../../data/data'
// ? COMPONENTS
    import ListTopics from './ListTopics';

// Genera el menu de navegación - Imprimiendo: Nombre del sector (ListSubHeader) como FRONT-BACK, ETC .... & Nombre de las tecnologías (listTopics) como Html5, CSS3
const ListTechnologies = () => {

    return (
        <div className="menu__container">
            {
                data.menu.map((prof, i) => (
                    <List
                        key={i}
                        sx={{ width: '100%', maxWidth: 360, paddingBottom: 0}}
                        className="container__list"
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                        <ListSubheader className="list__header" component="div" id="nested-list-subheader">
                            {prof.name}
                        </ListSubheader>
                    }>
                        
                        <ListTopics data={prof.array}/>
                    </List>    
                ))
            }    
        </div>
    )
}

export default ListTechnologies; 













// <List
// sx={{ width: '100%', maxWidth: 360 }}
// className="container__list"
// component="nav"
// aria-labelledby="nested-list-subheader"
// subheader={
//     <ListSubheader className="list__header" component="div" id="nested-list-subheader">
//         Front-end
//     </ListSubheader>
// }>
// <ListItemButton>
//     <ListItemText primary="HTML5" />
// </ListItemButton>
// 
// <ListItemButton onClick={handleClick1}>
//     <ListItemText primary="CSS3" />
// </ListItemButton>
// <Collapse in={open1} timeout="auto" unmountOnExit>
//     <List component="div" disablePadding>
//         <ListItemButton sx={{ pl: 4 }}>
//             <NavLink to="/front/css/selectores">
//                 <ListItemText primary="Selectores" />
//             </NavLink>
//         </ListItemButton>
//         <ListItemButton sx={{ pl: 4 }}>
//             <ListItemText primary="CSS - MID" />
//         </ListItemButton>
//         <ListItemButton sx={{ pl: 4 }}>
//             <ListItemText primary="CSS - MASTER" />
//         </ListItemButton>
//     </List>
// </Collapse>
// 
// <ListItemButton>
//     <ListItemText primary="SCSS" />
// </ListItemButton>
// 
// <ListItemButton onClick={handleClick}>
//     <ListItemText primary="JS" />
// </ListItemButton>
//     <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//             <ListItemButton onClick={handleClick2} sx={{ pl: 4 }}>
//                     <ListItemText primary="JS - JR" />
//             </ListItemButton>
//             <Collapse in={openJSJR} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                     <ListItemButton sx={{ pl: 4 }}>
//                         <NavLink to="/front/js-jr">
//                             <ListItemText primary="DATOS" />
//                         </NavLink>
//                     </ListItemButton>
//                     <ListItemButton sx={{ pl: 4 }}>
//                         <ListItemText primary="OPERADORES" />
//                     </ListItemButton>
//                     <ListItemButton sx={{ pl: 4 }}>
//                         <ListItemText primary="FUNCIONES" />
//                     </ListItemButton>
//                 </List>
//             </Collapse>
// 
// 
// 
// 
// 
// 
//             <ListItemButton onClick={() => console.log("mid")} sx={{ pl: 4 }}>
//                 <ListItemText primary="JS - MID" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//                 <ListItemText primary="JS - MASTER" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//                 <ListItemText primary="JS - ADITIONAL" />
//             </ListItemButton>
//         </List>
//     </Collapse>
// 
// <ListItemButton>
//     <ListItemText primary="TS" />
// </ListItemButton>
// 
// <ListItemButton>
//     <ListItemText primary="REACT" />
// </ListItemButton>
// </List>
// 
// 
// 
// 
// <List
// sx={{ width: '100%', maxWidth: 360, bgcolor: '#000' }}
// component="nav"
// aria-labelledby="nested-list-subheader"
// subheader={
// <ListSubheader component="div" id="nested-list-subheader">
//     Back-end
// </ListSubheader>
// }>
// </List>