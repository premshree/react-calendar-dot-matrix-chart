import * as React from "react";
import startOfWeek from "date-fns/startOfWeek";
import endOfMonth from "date-fns/endOfMonth";
import startOfMonth from "date-fns/startOfMonth";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
import differenceInWeeks from "date-fns/differenceInWeeks";
import differenceInDays from "date-fns/differenceInDays";
import differenceInMonths from "date-fns/differenceInMonths";
import addMonths from "date-fns/addMonths";
import getMonth from "date-fns/getMonth";

import config from "../config";
import { perfumes, perfumeCatgories } from "../test-data";
import { colors } from "../colors";
import { Square } from "./Square";
import "../styles.css";
import { differenceInCalendarWeeks, getWeeksInMonth, isAfter } from "date-fns";

const styles = {
  label: {
    fontFamily: "sans-serif",
    fill: "#ccc",
    fontSize: "0.4em",
  },
};

const { Fragment } = React;

type Data = {
  date: Date | string;
} & { [k: string]: string };

type MappedData = Record<
  string,
  {
    color: string;
    title: string;
  }
>;

type TooltipValue<T> = ((data: T) => string) | keyof T;

type MonthLabel = (month: number) => string;

type WeekLabel = (day: number) => string;

const isDate = (date: string | Date): date is Date => date instanceof Date;

function getColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 60 * Math.random()) +
    "%," +
    (65 + 10 * Math.random()) +
    "%)"
  );
}

const assignColorsToKeys = <C extends readonly string[]>(colors: C) => <
  T extends Data,
  K extends keyof T
>(
  data: T[],
  key: K,
) =>
  data.reduce((acc, curr, idx) => {
    if (acc[curr[key]] === undefined) {
      //const color = colors[Object.keys(acc).length];
      const color = getColor();
      if (color === undefined) {
        throw new Error("Ran out of colors!");
      }
      acc[curr[key]] = color;
    }
    return acc;
  }, {} as Record<string, string>);

const getTooltip = <T extends Data>(tooltipValue: TooltipValue<T>, data: T) => {
  if (typeof tooltipValue === "function") {
    return tooltipValue(data);
  } else {
    return data[tooltipValue];
  }
};

const mapData = <C extends readonly string[]>(colors: C) => <
  T extends Data,
  K extends keyof T
>(
  data: T[],
  key: K,
  tooltip: TooltipValue<T>,
) => {
  const colorMap = assignColorsToKeys(colors)(data, key);
  return data.reduce((acc, curr, idx) => {
    const dateString = isDate(curr.date)
      ? curr.date.toLocaleDateString()
      : new Date(curr.date).toLocaleDateString();
    if (acc[dateString] === undefined) {
      acc[dateString] = {
        title: getTooltip(tooltip, curr),
        color: colorMap[curr[key]],
      };
    }
    return acc;
  }, {} as MappedData);
};

const renderWeek = (mappedData: MappedData) => (
  startDate: Date,
  endDate: Date,
  weekIndex?: "first" | "last",
) => (xOffset = 0, yOffset = 0) => {
  const firstDayOfWeek = startOfWeek(startDate, {
    weekStartsOn: config.startOfWeek,
  });
  const range = differenceInDays(endDate, startDate);
  if (range < 0) {
    console.log([endDate, startDate]);
    return;
  }
  const week = Array(range)
    .fill(null)
    .map((_, idx) => {
      const day = addDays(firstDayOfWeek, idx);
      if (weekIndex === "first") {
        //console.log("first dayy of week: ", firstDayOfWeek.toString());
        if (
          differenceInDays(firstDayOfWeek, day) >=
          differenceInDays(firstDayOfWeek, startDate)
        ) {
          return null;
        }
      }
      // else if (weekIndex === "last") {
      //   if (
      //       differenceInDays(firstDayOfWeek, day) >=
      //       differenceInDays(firstDayOfWeek, startDate)
      //   ) {
      //     return null;
      //   }
      // }
      const dayColor =
        (mappedData[day.toLocaleDateString()] || {}).color || "#ccc";
      const dayTitle = (mappedData[day.toLocaleDateString()] || {}).title || "";
      // console.log(day.toLocaleDateString());
      // console.log(dayColor);
      return (
        <Square
          key={idx}
          x={xOffset}
          y={(yOffset + config.squareSize + config.squarePadding) * idx}
          fillColor={dayColor}
          title={dayTitle}
          value={day.getDate()}
        />
      );
    });
  return <>{week}</>;
};

interface CalendarDotMatrixProps<T extends Data> {
  startDate: Date;
  endDate: Date;
  data: T[];
  keyName: keyof T;
  tooltip?: TooltipValue<T>;
  monthLabel?: MonthLabel;
  weekLabel?: WeekLabel;
}

const renderWeeks = <T extends Data>(args: CalendarDotMatrixProps<T>) => {
  const { startDate, endDate, data, keyName, tooltip } = args;
  const mappedData = mapData(colors)(data, keyName, tooltip);
  const weekCount = differenceInCalendarWeeks(endDate, startDate, {
    weekStartsOn: config.startOfWeek,
  });
  return Array(weekCount)
    .fill(null)
    .map((_, idx) => {
      const weekStartDate = addDays(startDate, idx * config.daysInWeek);
      const weekFromWeekStartDate = addDays(weekStartDate, config.daysInWeek);
      // const weekEndDate = isAfter(weekFromWeekStartDate, endDate)
      //   ? endDate
      //   : weekFromWeekStartDate;
      const weekEndDate = weekFromWeekStartDate;
      if (idx === weekCount - 1) {
        console.log("weekStartDate = ", weekStartDate);
        console.log("weekFromWeekStartDate = ", weekFromWeekStartDate);
        console.log("weekEndDate = ", weekEndDate);
        console.log(addDays(startDate, (idx - 1) * config.daysInWeek));
      }
      // if (isAfter(weekStartDate, weekEndDate)) {
      //   return null;
      // }
      return (
        <Fragment key={idx}>
          {renderWeek(mappedData)(
            weekStartDate,
            weekEndDate,
            idx === 0 ? "first" : idx === weekCount - 1 ? "last" : undefined,
          )((config.squareSize + config.squarePadding) * idx)}
        </Fragment>
      );
    });
};

const renderWeekLabels = ({ weekLabel }: { weekLabel: WeekLabel }) => {
  console.log(weekLabel);
  return Array(config.daysInWeek)
    .fill(null)
    .map((_, idx) => {
      return (
        <Fragment key={idx}>
          <text
            x={0}
            y={(config.squareSize + config.squarePadding) * idx}
            width={config.squareSize}
            height={config.squareSize}
            style={styles.label}
          >
            {weekLabel(idx)}
          </text>
        </Fragment>
      );
    });
};

const renderMonthLabels = ({
  startDate,
  endDate,
  monthLabel,
}: {
  startDate: Date;
  endDate: Date;
  monthLabel: MonthLabel;
}) => {
  const monthCount = differenceInMonths(endDate, startDate);
  return Array(monthCount)
    .fill(null)
    .map((_, idx) => {
      const currMonth = startOfMonth(addMonths(startDate, idx));
      const weeksSinceStartDate = Math.abs(
        differenceInWeeks(currMonth, startDate),
      );
      const weeksInMonth = getWeeksInMonth(currMonth);
      const weeksLeftSinceStartDate = weeksSinceStartDate - weeksInMonth;
      console.log(weeksLeftSinceStartDate);
      if (weeksSinceStartDate < 0) {
        return null;
      }
      return (
        <Fragment key={idx}>
          <text
            x={(config.squareSize + 1) * weeksSinceStartDate}
            y={10}
            width={config.squareSize}
            height={config.squareSize}
            style={styles.label}
          >
            {monthLabel(getMonth(currMonth))}
          </text>
        </Fragment>
      );
    });
};

const CalendarDotMatrix = <T extends Data>({
  startDate,
  endDate,
  data,
  keyName,
  tooltip = keyName,
  monthLabel = (month) => config.monthLabels[month],
  weekLabel = (day) => config.weekLabels[day],
}: CalendarDotMatrixProps<T>) => {
  const weekCount = differenceInCalendarWeeks(endDate, startDate) + 1;
  console.log(weekCount);
  const rect = (
    <svg
      className={"react-calendar-dot-matrix-chart"}
      viewBox={`0 0 ${
        weekCount * (config.squareSize + config.squarePadding) +
        config.squarePadding * 12
      } ${
        config.daysInWeek * (config.squareSize + config.squarePadding + 1) +
        config.squareSize
      }`}
    >
      <g>{renderMonthLabels({ startDate, endDate, monthLabel })}</g>
      <g
        transform={`translate(0, ${
          (config.squareSize + config.squarePadding + 1) * 2
        })`}
      >
        {renderWeekLabels({ weekLabel })}
      </g>
      <g
        transform={`translate(${config.squareSize + 10}, ${
          config.squareSize + config.squarePadding * 2 + config.squareSize / 2
        })`}
      >
        {renderWeeks({ startDate, endDate, data, keyName, tooltip })}
      </g>
    </svg>
  );
  return rect;
};

const formatDate = (date: string) => format(new Date(date), "MMM do yyyy");

export const Display: React.FC = () => (
  <div>
    <CalendarDotMatrix
      startDate={new Date("2020-04-21")}
      endDate={new Date("2021-04-23")}
      data={perfumes}
      keyName={"name"}
      tooltip={(data) => `${formatDate(data.date)}: ${data.name}`}
    />
    {/*<CalendarDotMatrix*/}
    {/*  startDate={new Date("2020-03-21")}*/}
    {/*  endDate={new Date("2021-04-15")}*/}
    {/*  data={perfumeCatgories}*/}
    {/*  keyName={"category"}*/}
    {/*  tooltip={(data) => `${formatDate(data.date)}: ${data.category}`}*/}
    {/*/>*/}
  </div>
);
