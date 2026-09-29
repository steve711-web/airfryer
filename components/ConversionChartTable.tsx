import { convertOvenToAirFryer, fToC } from "@/lib/convert";

const OVEN_TEMPS_F = [300, 325, 350, 375, 400, 425, 450];

export default function ConversionChartTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-panel/10">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-panel text-cream">
            <th scope="col" className="px-4 py-3 font-semibold">
              Oven Temp
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Air Fryer Temp
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Time Adjustment
            </th>
          </tr>
        </thead>
        <tbody>
          {OVEN_TEMPS_F.map((ovenF, i) => {
            const result = convertOvenToAirFryer(ovenF, 30);
            const ovenC = Math.round(fToC(ovenF));
            return (
              <tr
                key={ovenF}
                className={i % 2 === 0 ? "bg-cream" : "bg-panel/5"}
              >
                <td className="px-4 py-3 text-panel/80">
                  {ovenF}°F <span className="text-panel/40">({ovenC}°C)</span>
                </td>
                <td className="px-4 py-3 font-semibold text-panel">
                  {result.airFryerTempF}°F{" "}
                  <span className="font-normal text-panel/40">
                    ({result.airFryerTempC}°C)
                  </span>
                </td>
                <td className="px-4 py-3 text-panel/80">Reduce time by 20%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
