export const STRING = {

    ...[
        'overview', 'technologies', 'projects', 'career', 'footer'
    ].reduce((acc, key) => {
        return {
            ...acc,
            [key]: key,
            [`${key}Title`]: key.toUpperCase().split('').join(' '),
        };
    }, {}),

    // AXIOS METHODS
    ...['get', 'post', 'put', 'delete'].reduce((name, axios) => ({
        ...name,
        [`axios${axios.charAt(0).toUpperCase() + axios.slice(1)}`]: axios,
    }), {}),

    // ACTION METHODS
    ...['retrieve', 'insert', 'modify', 'destroy'].reduce((name, action) => ({
        ...name,
        [`action${action.charAt(0).toUpperCase() + action.slice(1)}`]: action,
    }), {}),
    
    // STATE METHODS
    ...['failed', 'success', 'loading', 'fetchedData'].reduce((name, state) => ({
        ...name,
        [`state${state.charAt(0).toUpperCase() + state.slice(1)}`]: state,
    }), {}),

}