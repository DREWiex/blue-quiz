import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, QuizPage } from '../pages';

export const AppRouter = () => {


    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/quiz' element={<QuizPage />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>

    );

};