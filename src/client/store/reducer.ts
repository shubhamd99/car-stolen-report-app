interface InitialState {
    complains: any[];
}

export const initialState: InitialState = {
    complains: []
};

export const reducer = (state: any, action: any) => {
    switch(action.type) {
        default:
            return state;
    };
};