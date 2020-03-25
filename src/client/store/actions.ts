import { ADD_COMPLAINS } from './types';

export const addComplains = (complains: any[]) => ({
    type: ADD_COMPLAINS,
    payload: complains
});