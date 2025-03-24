import emailjs from "emailjs-com";

import {
  windowActivityOutsidetempData,
  windowActivityRainData,
  roomTemperatureOutsidetempData,
  powerConsumptionOutsidetempData,
  powerConsumptionCalculatedPowerConsumption,
} from "@/fixtures";
import { toast } from "react-toastify";

export const checkConditionsAndSendEmail = (data: any) => {
  // WINDOW ACTIVITY
  const lastActivity = data.windowActivity?.[data.windowActivity.length - 1];
  if (lastActivity) {
    const rainTimeMatch = windowActivityRainData.find(
      (rain) => rain.time === lastActivity.Time,
    );
    const outsideTempMatch: any = windowActivityOutsidetempData.find(
      (temp) => temp.time === lastActivity.Time,
    );

    if (lastActivity["Window activity"] === "1" && rainTimeMatch) {
      if (rainTimeMatch.rain_in_1h === 1) {
        sendEmail(
          "Rain expected soon: The window is open in bedroom no.2 of the ground floor. Please close the window to prevent water damage.",
        );
      } else if (
        rainTimeMatch.rain_in_1h === 0 &&
        outsideTempMatch &&
        outsideTempMatch.temperature > 23
      ) {
        sendEmail(
          "AC running: The window is open in in bedroom no.2 of the ground floor, while the AC is running. Please close the window to avoid energy waste and straining the unit.",
        );
      }
    }
  }

  // ROOM TEMPERATURE
  const lastRoomTemp = data.roomTemperature?.[data.roomTemperature.length - 1];
  if (lastRoomTemp) {
    const outsideTempMatch: any = roomTemperatureOutsidetempData.find(
      (temp) => temp.time === lastRoomTemp.Time,
    );

    if (Number(lastRoomTemp.TEMPERATURE) > 23) {
      if (outsideTempMatch && outsideTempMatch.temperature > 23) {
        sendEmail(
          "High temperature alert: The room temperature in bedroom no.2 ground floor is too high. The Air Conditioning System will be turned on. Ensure that the windows are securely closed to maintain a comfortable room temperature.",
        );
      } else if (outsideTempMatch && outsideTempMatch.temperature < 23) {
        sendEmail(
          "High temperature alert: The room temperature has exceeded 23 °C. A malfunctioning air conditioning or heating system is suspected. Please check the systems.",
        );
      }
    }
  }

  // POWER CONSUMPTION
  const lastPowerConsumption =
    data.powerConsumption?.[data.powerConsumption.length - 1];

  if (lastPowerConsumption) {
    const outsideTempMatch: any = powerConsumptionOutsidetempData.find(
      (temp) => temp.time === lastPowerConsumption.Time,
    );
    const averagePower: any = powerConsumptionCalculatedPowerConsumption.find(
      (avg) => avg.time === lastPowerConsumption.Time,
    );

    if (
      outsideTempMatch &&
      (outsideTempMatch.temperature === 15 ||
        outsideTempMatch.temperature === 23)
    ) {
      sendEmail(
        "Power consumption exceedance alert: A rise in power consumptions is expected due to temperature extremes.",
      );
    } else if (
      averagePower &&
      Number(lastPowerConsumption["POWER CONSUMPTION"]) -
        averagePower.averagepowerconsumption >=
        2
    ) {
      sendEmail(
        "Average power consumption exceedance alert: The average power consumption has been exceeded by 2 kwH or more.",
      );
    }
  }
};

const sendEmail = (message: any) => {
  const templateParams = {
    from_name: "TwinStruct",
    to_name: "Farida",
    message: message,
    reply_to: "noreply.twinstruct@gmail.com",
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
      templateParams,
      process.env.NEXT_PUBLIC_ACCOUNT_ID ?? "",
    )
    .then((response) => {
      toast.success(`Email successfully sent!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((error) => {
      toast.error(`Failed to send the email!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
};
