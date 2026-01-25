import { GrAdd, GrFormSubtract } from "react-icons/gr";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";
import {
  useUpdateAttendedLectures,
  useUpdateTotalLectures,
} from "../hooks/useAllData";

function Card({ data }) {
  const { subject, totalLecs, attendedLecs, id } = data;
  const { mutate, isLoading } = useUpdateTotalLectures();
  const { mutate: addLecs, isLoading: isPending } = useUpdateAttendedLectures();

  const attendance =
    totalLecs === 0 
      ? "0.00"
      : Number((attendedLecs / totalLecs) * 100).toFixed(2);

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm p-4 flex">
      {/* Left section */}
      <div className="basis-[55%] flex flex-col gap-4">
        <div className="text-base font-semibold text-slate-800">{subject}</div>

        <div className="flex items-center justify-between text-sm text-slate-700">
          <span>TotalLecs</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{totalLecs}</span>
            <PlusIcon
              onClick={() => mutate({ id, totalLecs, delta: 1 })}
              disabled={isLoading}
            />
            <MinusIcon
              onClick={() => mutate({ id, totalLecs, delta: -1 })}
              disabled={isLoading || totalLecs === 0}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700">
          <span>Attended</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{attendedLecs}</span>
            <PlusIcon
              onClick={() => addLecs({ id, attendedLecs, delta: 1 })}
              disabled={isPending || attendedLecs === totalLecs}
            />
            <MinusIcon
              onClick={() => addLecs({ id, attendedLecs, delta: -1 })}
              disabled={isPending || attendedLecs === 0}
            />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="basis-[45%] flex items-center justify-center border-l border-slate-200">
        <div className="text-center">
          <p
            className={`text-2xl sm:text-3xl font-semibold ${
              attendance < 75 ? "text-red-500" : "text-emerald-600"
            }`}
          >
            {attendance}%
          </p>
          <p className="text-xs text-slate-500 mt-1">Attendance</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
