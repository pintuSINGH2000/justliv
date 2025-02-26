import { useState, useEffect } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuVolleyball } from "react-icons/lu";
import { FiMusic } from "react-icons/fi";
import { GiJesterHat } from "react-icons/gi";
import { RiGeminiFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const localizer = momentLocalizer(moment);
const events = [
  {
    id: 1,
    title: "Meeting with Team",
    start: new Date(2025, 1, 27, 2, 0),
    end: new Date(2025, 1, 27, 11, 30),
    theme: "music",
  },
  {
    id: 2,
    title: "Client Call",
    start: new Date(2025, 1, 3, 14, 0),
    end: new Date(2025, 1, 3, 15, 0),
    theme: "ball",
  },
  {
    id: 3,
    title: "Project Deadline",
    start: new Date(2025, 1, 27, 12, 0),
    end: new Date(2025, 1, 27, 22, 0),
    theme: "ball",
  },
  {
    id: 4,
    title: "Client Call",
    start: new Date(2025, 1, 9, 14, 0),
    end: new Date(2025, 1, 9, 15, 0),
    theme: "ball",
  },
  {
    id: 5,
    title: "Client Call",
    start: new Date(2025, 1, 10, 14, 0),
    end: new Date(2025, 1, 10, 20, 0),
    theme: "ball",
  },
  {
    id: 6,
    title: "Client Call",
    start: new Date(2025, 1, 9, 11, 0),
    end: new Date(2025, 1, 9, 15, 0),
    theme: "hat",
  },
  {
    id: 7,
    title: "Meeting with Team",
    start: new Date(2025, 1, 26, 1, 0),
    end: new Date(2025, 1, 26, 5, 30),
    theme: "hat",
  },
  {
    id: 8,
    title: "Meeting with Team",
    start: new Date(2025, 1, 28, 11, 0),
    end: new Date(2025, 1, 28, 21, 30),
    theme: "ball",
  },
];
const CustomDateCell = ({ value, children }) => {
  const dateStr = moment(value).format("D");
  const filteredEvents = events.filter((event) =>
    moment(event.start).isSame(value, "day")
  );
  return (
    <div
      className={`h-full w-full flex py-2 flex-col mx-0.5 my-1  items-center rounded-xl justify-flex-start border-none bg-[#f9f9f9] text-gray-600" ${
        filteredEvents.length > 0
          ? filteredEvents[0].theme !== "hat"
            ? "orange-pink"
            : "blue"
          : null
      }`}
    >
      <div style={{ fontSize: "14px" }}>{dateStr}</div>
      <div className="flex flex-col justify-between h-screen mt-5">
        {filteredEvents.slice(0, 2).map((event) => (
          <div key={event.id}>
            {event.theme === "hat" ? (
              <GiJesterHat />
            ) : event.theme === "music" ? (
              <FiMusic />
            ) : (
              <LuVolleyball />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomEvent = ({ event }) => {
  let eventIcon;
  if (event.theme === "hat") eventIcon = <GiJesterHat className="text-black" />;
  else if (event.theme === "music")
    eventIcon = <FiMusic className="text-black" />;
  else eventIcon = <LuVolleyball className="text-black" />;
  return (
    <div
      className={`flex items-start gap-1 p-1 bg-red h-full w-wull flex-col border-0  text-black ${
        event.theme === "hat"
          ? "bg-blue-200"
          : event.theme === "music"
          ? "bg-pink-200"
          : "bg-orange"
      }`}
    >
      {eventIcon}
      <div className="font-bold lato">{event.title}</div>
      <div className="text-xs text-gray-500">Brine</div>
    </div>
  );
};

const CustomDayHeader = ({ date, currentDay, setCurrentDay }) => {
  const startOfWeek = moment(date).startOf("week");
  const days = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.clone().add(i, "days")
  );
  return (
    <div className="flex justify-around bg-white p-2">
      {days.map((day, index) => (
        <div
          key={index}
          className={`text-center ${
            moment(currentDay).isSame(day, "day")
              ? "text-pink-500 bg-pink-200 rounded p-2"
              : "hover:text-pink-500"
          } `}
          onClick={() => setCurrentDay(day.toDate())}
        >
          <span className="">{day.format("ddd")}</span>
          <br />
          <span className="text-sm font-bold">{day.format("DD")}</span>
          {moment(currentDay).isSame(day, "day") && (
            <div className="rounded-full w-1 h-1 bg-pink-500 mt-2 mx-auto"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const CustomDayView = ({ events, currentDate }) => {
  const filteredEvents = events.filter((event) =>
    moment(event.start).isSame(currentDate, "day")
  );

  return (
    <div className="p-4  w-full text-start">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <div
            key={event.id}
            className={`text-black p-3 rounded-xl mb-2 w-full flex flex-col gap-3 items-start relative ${
              event.theme === "hat"
                ? "bg-blue-200"
                : event.theme === "music"
                ? "pink-orange"
                : "bg-orange"
            }`}
            style={{ height: "135px" }}
          >
            <div className="flex gap-3 text-gray-500 ">
              <div className="rounded-full w-2 h-2 bg-blue-500 mt-2 mx-auto"></div>
              {moment(event.start).format("hh:mm A")} -{" "}
              {moment(event.end).format("hh:mm A")}
            </div>
            <div className="flex gap-3 items-center lato font-bold">
              <div key={event.id}>
                {event.theme === "hat" ? (
                  <GiJesterHat />
                ) : event.theme === "music" ? (
                  <FiMusic />
                ) : (
                  <LuVolleyball />
                )}
              </div>
              {event.title}
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <div className="p-1 rounded-full  bg-white opacity-25">
                <RiGeminiFill className="text-yellow-800" />
              </div>{" "}
              Brine
            </div>
            <BsThreeDotsVertical className="absolute right-3.5 top-16" />
          </div>
        ))
      ) : (
        <p className="text-gray-500">No events today</p>
      )}
    </div>
  );
};

export default function CustomCalendar() {
  const [view, setView] = useState(Views.WEEK);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDataChange = (action) => {
    let newDate = new Date(currentDate);
    if (action === "NEXT") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (action === "PREV") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (action === "TODAY") {
      newDate = new Date();
    }
    setCurrentDate(newDate);
  };

  return (
    <div
      className="max-w-3xl mx-auto p-5 bg-white shadow-lg rounded-lg"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4 fraunces">Calendar</h1>
        <div className="text-pink-500 font-bold lato">+ New event</div>
      </div>
      <div className="flex justify-center mb-4 bg-gray-100 rounded-md py-2">
        {["day", "week", "month"].map((type) => (
          <button
            key={type}
            onClick={() => setView(type)}
            className={`px-4 py-1 mx-2 rounded-md  text-[#5e5f68] font-medium transition-all duration-300 w-1/3 ${
              view === type && "bg-white shadow-md"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      {view === "month" && (
        <div className="flex justify-between items-center">
          <span className="fraunces text-2xl font-semibold">
            <span className="text-3xl font-bold">
              {currentDate.toLocaleString("en-US", { month: "long" })}
            </span>{" "}
            {currentDate.getFullYear()}
          </span>
          <span className="flex gap-3">
            <MdKeyboardArrowLeft
              className=" text-2xl cursor-pointer"
              onClick={() => handleDataChange("PREV")}
            />
            <MdKeyboardArrowRight
              className=" text-2xl cursor-pointer"
              onClick={() => handleDataChange("NEXT")}
            />
          </span>
        </div>
      )}
      <div
        className={`${
          view === "day"
            ? "hide-time-gutter auto-time-height"
            : view === "week"
            ? "auto-time-height"
            : ""
        }`}
      >
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          view={view}
          events={events}
          date={currentDate}
          onView={(newView) => setView(newView)}
          style={{ height: 600 }}
          components={{
            dateCellWrapper: CustomDateCell,
            event: view === "week" && CustomEvent,
            day: {
              header: (props) => (
                <CustomDayHeader
                  {...props}
                  currentDay={currentDate}
                  setCurrentDay={setCurrentDate}
                />
              ),
            },
          }}
        />
        {view === "day" && (
          <div className="w-full">
            <CustomDayView events={events} currentDate={currentDate} />
          </div>
        )}
      </div>
    </div>
  );
}
