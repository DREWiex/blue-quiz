import { Route, Routes, Navigate } from 'react-router-dom';
import { QuizPage } from '../pages';
import { ShowResults } from '../components';

export const AppRouter = () => {


    return (

        <Routes>
            <Route path='/' element={<QuizPage />} />
            <Route path='/results' element={<ShowResults />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>

    );

};