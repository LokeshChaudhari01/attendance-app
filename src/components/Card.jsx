import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";
import {
  useUpdateAttendedLectures,
  useUpdateTotalLectures,
} from "../hooks/useAllData";

function Card({ data }) {
  const { id, subject, attended, total, canBunk, moreToAttend } = data;

  const { mutate: updateTotal, isLoading: totalLoading } =
    useUpdateTotalLectures();

  const { mutate: updateAttended, isLoading: attendedLoading } =
    useUpdateAttendedLectures();

  const percentage =
    total === 0 ? "0.00" : ((attended / total) * 100).toFixed(2);

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm p-4 flex">
      {/* Left */}
      <div className="basis-[55%] flex flex-col gap-4">
        <div className="text-base font-semibold text-slate-800">{subject}</div>

        {/* Total lectures */}
        <div className="flex items-center justify-between text-sm text-slate-700">
          <span>Total Lecs</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{total}</span>
            <PlusIcon
              onClick={() =>
                updateTotal({
                  attendanceId: id,
                  deltaTotal: 1,
                  deltaAttended: 0,
                })
              }
              disabled={totalLoading}
            />
            <MinusIcon
              onClick={() =>
                updateTotal({
                  attendanceId: id,
                  deltaTotal: -1,
                  deltaAttended: 0,
                })
              }
              disabled={totalLoading || total === 0 || total === attended}
            />
          </div>
        </div>

        {/* Attended lectures */}
        <div className="flex items-center justify-between text-sm text-slate-700">
          <span>Attended</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{attended}</span>
            <PlusIcon
              onClick={() =>
                updateAttended({
                  attendanceId: id,
                  deltaTotal: 0,
                  deltaAttended: 1,
                })
              }
              disabled={attendedLoading || attended === total}
            />
            <MinusIcon
              onClick={() =>
                updateAttended({
                  attendanceId: id,
                  deltaTotal: 0,
                  deltaAttended: -1,
                })
              }
              disabled={attendedLoading || attended === 0}
            />
          </div>
        </div>
        {total > 0 && (
          <p className="text-xs text-slate-600 mt-1">
            {percentage < 75 ? (
              <>
                 Attend next{" "}
                <span className="font-medium text-red-600">{moreToAttend}</span>{" "}
                class{moreToAttend !== 1 && "es"}
              </>
            ) : (
              <>
                You can bunk{" "}
                <span className="font-medium text-emerald-600">{canBunk}</span>{" "}
                class{canBunk !== 1 && "es"} 
              </>
            )}
          </p>
        )}
      </div>

      {/* Right */}
      <div className="basis-[45%] flex items-center justify-center border-l border-slate-200">
        <div className="text-center">
          <p
            className={`text-2xl sm:text-3xl font-semibold ${
              percentage < 75 ? "text-red-500" : "text-emerald-600"
            }`}
          >
            {percentage}%
          </p>
          <p className="text-xs text-slate-500 mt-1">Attendance</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
