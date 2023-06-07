import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, QuizPage } from '../pages';
import { ShowResults } from '../components';

export const AppRouter = () => {


    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/results' element={<ShowResults />} />

            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>

    );

};