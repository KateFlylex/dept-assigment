import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import {deptActions} from '../store/dept/dept.slice';

const actions = {
  ...deptActions
}

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}
