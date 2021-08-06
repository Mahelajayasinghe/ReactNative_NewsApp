import { SUCCESS } from '../../Utils/constants';
import newsActionsTypes from './news.types';

const initialState = {
    articles : [],
};

export default (state=initialState , {type,payload}) => {
    switch (type) {
        case newsActionsTypes.GET_ARTICLES+SUCCESS:
            return {
                ...state,
                articles: payload.articles
            };
        default:
            return state;
    }
};

