import api from '../api'
import * as constant from '../constant'


const getCategory = async (dispatch) => {
    try {
        const {data} = await api.catetgory()
        dispatch({ type: constant.GET_CATEGORY, payload: data})
        // console.log(data);
    } catch (error) {
        dispatch({ type: constant.FAIL_CATEGORY, payload: error})
    }
}

export {getCategory} 