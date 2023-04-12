import hotBg from "../../assets/images/2902104.jpg";
import coldBg from "../../assets/images/2942776.jpg";
import defaultBg from "../../assets/images/wallpaperflare.com_wallpaper (1).jpg";

const formatBackground = (currentWeather) => {
    if (currentWeather === null) {
        return defaultBg;
    }
    if (currentWeather.main.temp < 20) {
        return coldBg;
    } 

    return hotBg;
}

export default formatBackground;
