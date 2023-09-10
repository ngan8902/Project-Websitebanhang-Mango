import initStateRedux from './initData'


function reducer(state = initStateRedux, action) {
    console.log('State::::', state)
    switch(action.type) {
        case 'shopData':
            console.log('shopData::::', action)
            return {
                ...state,
                shopData: action.shopData
            }
        case 'themes':
            console.log('thems::::', action)
            return {
                ...state,
                themes: action.themes
            }    
        default:
            return state;    
    }
}

export default reducer