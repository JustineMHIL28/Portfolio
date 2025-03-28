// Developer: Justine M. Hilario

export const STRING = {

    // TYPES
    ...[
        'overview', 'technologies', 'projects', 'career', 'footer',
        'introduction', 'my skills', 'work experience', 'find me on'
      ].reduce((acc, key) => {
        const normalizedKey = key.replace(/\s+/g, '').toLowerCase(); // Normalize key to avoid spaces
        return {
          ...acc,
            [normalizedKey]: key,                                                 // e.g., 'technologies': 'technologies'
            [`${normalizedKey}Title`]: key.toUpperCase().split('').join(' '),     // e.g., 'technologiesTitle': 'technologies'
            [`${normalizedKey}SubTitle`]: key.toUpperCase()                       // e.g., 'technologiesSubTitle': 'TECHNOLOGIES'
        };
    }, {}),

    // AXIOS METHODS
    ...['get', 'post', 'put', 'delete'].reduce((name, axios) => ({
        ...name,
        [`axios${axios.charAt(0).toUpperCase() + axios.slice(1)}`]: axios,
    }), {}),
    

}