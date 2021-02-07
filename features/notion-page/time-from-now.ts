import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function timeFromNow(datetime: string) {
  return dayjs(datetime,"YYYY-MM-DD").fromNow()
}