// import { AppDispatch, RootState } from 'app/store';
// import { useDispatch, useSelector } from 'react-redux';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, AppStore } from 'app/store'; //

type TypedRootState = ReturnType<AppStore['getState']>;

export const useAppSelector: TypedUseSelectorHook<TypedRootState> = useSelector;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();
