import {Route, Routes} from 'react-router-dom';
//pages
import Setting from './pages/Configuracion';
import Calendar from './pages/Calendario';
import Schedule from './pages/Agenda';
import ScheduleForm from './pages/Agenda/Form';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Index from './pages/index';


const Rutas = () => (
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/inicio" element={<Schedule/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/configuracion" element={<Setting/>}/>
        <Route path="/calendario" element={<Calendar/>}/>
        <Route path="/agendar" element={<ScheduleForm/>}/>
    </Routes>
);
export default Rutas;