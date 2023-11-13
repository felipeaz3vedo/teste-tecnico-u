export const changeTimezone = (dateTime: Date, timezone: number): Date => {
  const dateTimeMiliseconds = dateTime.getTime();

  const selectedTimeZoneHoursInMiliseconds = timezone * 60 * 60 * 1000;

  const dateTimeWithTimezoneInMiliseconds =
    dateTimeMiliseconds + selectedTimeZoneHoursInMiliseconds;

  const dateTimeOnSelectedTimezone = new Date(
    dateTimeWithTimezoneInMiliseconds
  );

  return dateTimeOnSelectedTimezone;
};
