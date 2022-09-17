import { ReactElement, ReactNode } from "react";
import {Clear, Sunny, Cloudy, Rain} from '../../assets/icon/index';

interface WeatherIconList {
    name: string,
    icon: ReactNode | ReactElement;
}
export const weatherIconList: WeatherIconList[] = [
    {
        name: 'rain',
        icon: <Rain/>
    },
    {
        name: 'sunny',
        icon: <Sunny/>
    },
    {
        name: 'clouds',
        icon: <Cloudy/>
    },
    {
        name: 'clear',
        icon: <Clear/>
    }

]