export const getBackground = (weatherId) => {
    let backgroundImg;
    if(weatherId < 300){backgroundImg = 'sun'}
    else if(weatherId >= 300 && weatherId < 500){backgroundImg = 'drizzle'}
    else if(weatherId >= 500 && weatherId < 600){backgroundImg = 'rain'}
    else if(weatherId >= 600 && weatherId < 700){backgroundImg = 'snow'}
    else if(weatherId >= 700 && weatherId < 800){backgroundImg = 'atmosphere'}
    else if(weatherId > 800){backgroundImg = 'clouds'}
    else {backgroundImg = 'clear'}
    return backgroundImg;
};