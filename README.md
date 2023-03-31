## shared repository (team-bounce)
##### by Neil Stackman

Rapid prototyping is a useful tool if you need to explore hard to visualise or difficult to describe concepts.  

NS Portal begins with app-ns-portal/index.tsx loading...  

import React from 'react';  
import Accordion from 'react-bootstrap/Accordion';  
import { TheGarage } from '../components/thegarage';  
import { MuiButtons } from '../components/muibuttons';  
import { RbsNavbar } from '../components/rbsnavbar';  
import { PRDataTable } from '../components/prdatatable';  
import '@fontsource/abel';  
import '@fontsource/roboto';  
import './index.css';  

The 'newly developed' parts of the Application are split between various folders in src/...
... Layout: contains parts needed by the index.tsx defined in webpack.config.js as the startup file.
... static: non react elements used by the application
... components: reusable react components like the four listed above
##### Data
The data is saved in a json file called /src/static/data/thegarageforms.json  

##### Use
npm run build will use webpack to prepare the /dist folder and start serving the app on localhost:3000  
npm start will run it in development mode, without a build  
