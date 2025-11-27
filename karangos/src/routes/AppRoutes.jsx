import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/HomePage'
import CarsList from '../pages/cars/CarlsList'
import CustomersList from '../pages/customers/CustomersList'
import Comp from '../pages/new-comp/Comp'

export default function AppRoutes(){
    return <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/new-comp" element={<Comp />} />
    </Routes>
}