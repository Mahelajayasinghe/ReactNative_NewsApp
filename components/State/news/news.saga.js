import { takeLatest,put,take } from "redux-saga/effects";
import {REQUEST,SUCCESS} from '../../Utils/constants';
import newsActionTypes from './news.types';
import api from '../../api';

function* getArticles(action){
    const request = {
        action : newsActionTypes.GET_ARTICLES,
        api: api.getHeadLines,
    };
    yield put({type: REQUEST, payload: request});
}


export default function* watcherSaga(){
    yield takeLatest(newsActionTypes.GET_ARTICLES, getArticles);
}