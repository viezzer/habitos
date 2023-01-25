import { Dimensions, TouchableOpacity, TouchableOpacityProps } from "react-native";
import clsx from 'clsx'

import { generateProgressPercentage } from "../utils/generate-progress-percentage";
import dayjs from "dayjs";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface Props extends TouchableOpacityProps{
    amountOfHabits?: number;
    completedHabits?: number;
    date: Date;

}

export function HabitDay({amountOfHabits = 0, completedHabits = 0, date, ...rest}: Props) {
    const acomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, completedHabits) : 0;
    const today = dayjs().startOf('day').toDate()
    const isCurrentDay = dayjs(date).isSame(today)

    return (
        <TouchableOpacity
            className={clsx("rounded-lg border-2 m-1", {
                ["bg-zinc-900 border-zinc-800"]: acomplishedPercentage === 0,
                ["bg-violet-900 border-violet-700"]: acomplishedPercentage > 0 && acomplishedPercentage < 20,
                ["bg-violet-800 border-violet-600"]: acomplishedPercentage >= 20 && acomplishedPercentage < 40,
                ["bg-violet-700 border-violet-500"]: acomplishedPercentage >= 40 && acomplishedPercentage < 60,
                ["bg-violet-600 border-violet-500"]: acomplishedPercentage >= 60 && acomplishedPercentage < 80,
                ["bg-violet-500 border-violet-400"]: acomplishedPercentage >= 80,
                ["border-white border-4"]: isCurrentDay,
            })}
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            activeOpacity={0.7}
            {...rest}
        />
    )
}