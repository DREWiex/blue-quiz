import { useDispatch } from 'react-redux';
import { setEcoMode, setMeatLess, setRecycle, setShowerLess, setSmartBlue, setWashMachine, setWaterReUse } from '../store/slices/challengesSlice';

export const useReserve = () => {

  const dispatch = useDispatch();

  const addChallenge = ({ target }) => {

    switch (target.id) {
      case 'smartBlue':
        dispatch(setSmartBlue())
        break;
      case 'meatLess':
        dispatch(setMeatLess())
        break;
      case 'ecoMode':
        dispatch(setEcoMode())
        break;
      case 'showerLess':
        dispatch(setShowerLess())
        break;
      case 'washMachine':
        dispatch(setWashMachine())
        break;
      case 'waterReUse':
        dispatch(setWaterReUse())
        break;
      case 'recycle':
        dispatch(setRecycle())
        break;

    }
  }

  return { addChallenge };

};