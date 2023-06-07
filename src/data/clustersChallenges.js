import { useSelector } from 'react-redux';

export const clustersChallenges = () => {

    const { cluster1, cluster2 } = useSelector(state => state.challenges);
    
    const arrayChallenges = [

        {
            cluster: 'saver',
            title: 'Enhorabuena eres un perfil ahorrador',
            description: 'Sigue así y si quieres ahorrar más, acepta el reto del agua',
            challenges: [
                {
                    id: 'smartBlue',
                    text: 'Instala SmartBlue en casa y ahorra hasta 160 litros cada día.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/saver/01.png`,
                    state: cluster1.smartBlue
                },
                {
                    id: 'meatLess',
                    text: 'Disminuye tu ingesta de productos cárnicos 1 o 2 días en semana.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/saver/02.png`,
                    state: cluster1.meatLess //! propiedadDeInitialStateQueCorrespondeASaver.meatLess
                },
                {
                    id: 'ecoMode',
                    text: 'Usa el Modo ECO y ahorra 20 litros extra cada lavado.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/saver/03.png`,
                    state: cluster1.ecoMode //! propiedadDeInitialStateQueCorrespondeASaver.ecoMode
                },
                {
                    id: 'showerLess',
                    text: 'Acorta tu ducha 2 minutos y ahorra 30 litros cada día.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/saver/04.png`,
                    state: cluster1.showerLess //! propiedadDeInitialStateQueCorrespondeASaver.showerLess
                },
                {
                    id: 'washMachine',
                    text: 'Usa tu lavavajillas y lavadora solo cuando estén llenos y ahorra 65 litros.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/saver/05.png`,
                    state: cluster1.washMachine //! propiedadDeInitialStateQueCorrespondeASaver.washMachine
                }
            ]
        },
    
        {
            cluster: 'spender',
            title: 'Vaya, eres un perfil derrochador',
            description: 'Está en tus manos reducir tu huella, acepta el reto del agua',
            challenges: [
                {
                    id: 'smartBlue',
                    text: 'Instala SmartBlue en casa y ahorra hasta 30 € cada mes.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/spender/01.png`,
                    state: cluster2.smartBlue //! propiedadDeInitialStateQueCorrespondeASpender.smartBlue
                },
                {
                    id: 'waterReUse',
                    text: 'Usa un depósito para reutilizar agua que no usas, como el agua que corre mientras se calienta.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/spender/02.png`,
                    state: cluster2.waterReUse //! propiedadDeInitialStateQueCorrespondeASpender.waterReUse
                },
                {
                    id: 'recycle',
                    text: 'Recicla todo el plástico, papel o cristal que sea posible y ahorra hasta 20 litros al mes.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/spender/03.png`,
                    state: cluster2.recycle //! propiedadDeInitialStateQueCorrespondeASpender.recycle
                },
                {
                    id: 'meatLess',
                    text: 'Disminuye tu ingesta de productos cárnicos 1 o 2 días en semana.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/spender/04.png`,
                    state: cluster2.meatLess //! propiedadDeInitialStateQueCorrespondeASpender.meatLess
                },
                {
                    id: 'ecoMode',
                    text: 'Usa el Modo ECO y ahorra 1 € con cada lavado.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/spender/05.png`,
                    state: cluster2.ecoMode //! propiedadDeInitialStateQueCorrespondeASpender.ecoMode
                },
                {
                    id: 'showerLess',
                    text: 'Acorta tu ducha 2 minutos y ahorra 4 € cada mes.',
                    icon: `${import.meta.env.VITE_URL_BASE}/assets/results/clusters/spender/06.png`,
                    state: cluster2.showerLess //! propiedadDeInitialStateQueCorrespondeASpender.showerLess
                },
            ]
        }
    
    ];

    return arrayChallenges;

};