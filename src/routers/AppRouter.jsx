import { Route, Routes, Navigate } from 'react-router-dom';
import { QuizPage } from '../pages';

export const AppRouter = () => {


    return (

        <Routes>
            <Route path='/' element={<QuizPage />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>

    );

};