import { ADD_COMPLAINS, LOAD_COMPLAINS_LOADING, LOAD_COMPLAINS_ERROR, POST_COMPLAIN_SUCCESS, POST_COMPLAIN_FAILURE
, COMPLAIN_STATUS_CHANGE_SUCCESS, COMPLAIN_STATUS_CHANGE_FAILURE } from './types';
import Api from "./Api";


export const addComplains = () => (dispatch: any) => {
    dispatch({ type: LOAD_COMPLAINS_LOADING }); // we can set loading to true if we want to show loading
    Api.getComplains()
        .then((response: any) => response.json())
        .then(
            (data: any) => dispatch({ type: ADD_COMPLAINS, payload: data }),
            (error: any) => dispatch({ type: LOAD_COMPLAINS_ERROR, payload: error || 'Unexpected Error!!!' })
        )
};

export const postComplains = (complain: any) => (dispatch: any) => {
    Api.postComplains(complain)
        .then((response: any) => response.json())
        .then(
            (data: any) => {
                dispatch({ type: POST_COMPLAIN_SUCCESS, payload: null });
                dispatch(addComplains());
            },
            (error: any) => dispatch({ type: POST_COMPLAIN_FAILURE, payload: error || 'Unexpected Error!!!' })
        )
};


export const complainsStatusChange = (id: string, isCompleted: boolean) => (dispatch: any) => {
    Api.changeComplainStatus(id, isCompleted)
        .then((response: any) => response.json())
        .then(
            (data: any) => {
                dispatch({ type: COMPLAIN_STATUS_CHANGE_SUCCESS, payload: null });
                dispatch(addComplains());
            },
            (error: any) => dispatch({ type: COMPLAIN_STATUS_CHANGE_FAILURE, payload: error || 'Unexpected Error!!!' })
        )
};

export const assignUnassignStatus = (id: string | null, complainId: string | null) => (dispatch: any) => {
    if (id) {
    Api.assignUnassignStatus(id, complainId)
        .then((response: any) => response.json())
        .then(
            (data: any) => {
                // console.log("data", data)
                dispatch({ type: COMPLAIN_STATUS_CHANGE_SUCCESS, payload: null });
                dispatch(addComplains());
            },
            (error: any) => dispatch({ type: COMPLAIN_STATUS_CHANGE_FAILURE, payload: error || 'Unexpected Error!!!' })
        )
    }
};