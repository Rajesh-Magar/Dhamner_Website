import { useLang } from "../../context/LanguageContext";
import { Banknote, PieChart, TrendingDown, TrendingUp, Info } from "lucide-react";

const incomeData = [
  { mr: "मालमत्ता कर", en: "Property Tax", amount: 850000, color: "#f97316", pct: 28 },
  { mr: "पाणी कर", en: "Water Tax", amount: 420000, color: "#3b82f6", pct: 14 },
  { mr: "१५वा वित्त आयोग", en: "15th Finance Commission", amount: 1200000, color: "#8b5cf6", pct: 40 },
  { mr: "राज्य अनुदान", en: "State Grant", amount: 540000, color: "#10b981", pct: 18 },
];

const expenditureData = [
  { mr: "रस्ते व पायाभूत", en: "Roads & Infrastructure", amount: 950000, color: "#f97316", pct: 32 },
  { mr: "पाणी पुरवठा", en: "Water Supply", amount: 580000, color: "#3b82f6", pct: 19 },
  { mr: "स्वच्छता", en: "Sanitation", amount: 420000, color: "#10b981", pct: 14 },
  { mr: "शिक्षण", en: "Education", amount: 360000, color: "#8b5cf6", pct: 12 },
  { mr: "आरोग्य", en: "Health", amount: 300000, color: "#ec4899", pct: 10 },
  { mr: "इतर", en: "Others", amount: 390000, color: "#6b7280", pct: 13 },
];

function DonutChart({ data, total, centerLabel }) {
  let offset = 0;
  const r = 60, cx = 80, cy = 80, strokeW = 24;
  const circ = 2 * Math.PI * r;
  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth={strokeW} />
      {data.map((d, i) => {
        const dash = (d.pct / 100) * circ;
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={strokeW}
            strokeDasharray={`${dash} ${circ}`} strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`} />
        );
        offset += dash;
        return el;
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="10" fill="#6b7280">{centerLabel}</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1f2937">
        ₹{(total / 100000).toFixed(1)}L
      </text>
    </svg>
  );
}

const totalIncome = incomeData.reduce((s, d) => s + d.amount, 0);
const totalExp = expenditureData.reduce((s, d) => s + d.amount, 0);

export default function BudgetPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="bg-gradient-to-r from-green-700 to-emerald-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4"><div className="bg-white bg-opacity-20 p-4 rounded-full"><Banknote size={48} /></div></div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{lang === "mr" ? "वित्त व बजेट पारदर्शकता" : "Finance & Budget Transparency"}</h1>
        <p className="text-green-100">{lang === "mr" ? "आर्थिक वर्ष २०२४-२५" : "Financial Year 2024-25"}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">

        {/* Rupee Infographic */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-2">{lang === "mr" ? "आपला एक रुपया कुठे जातो?" : "Where Does Our Rupee Go?"}</h2>
          <p className="text-amber-600 text-sm mb-6">{lang === "mr" ? "प्रत्येक रुपयातून गावाच्या विकासावर होणारा खर्च" : "Expenditure breakdown per rupee on village development"}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {expenditureData.map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg" style={{ backgroundColor: d.color }}>
                  {d.pct}p
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center max-w-[80px]">{lang === "mr" ? d.mr : d.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Income & Expenditure Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Income */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><TrendingUp className="text-green-500" />{lang === "mr" ? "उत्पन्न स्रोत" : "Income Sources"}</h3>
            <div className="flex items-center gap-6">
              <DonutChart data={incomeData} total={totalIncome} centerLabel={lang === "mr" ? "एकूण" : "Total"} />
              <div className="flex-1 space-y-2">
                {incomeData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} /><span className="text-gray-600">{lang === "mr" ? d.mr : d.en}</span></div>
                    <div className="text-right"><span className="font-bold text-gray-800">{d.pct}%</span></div>
                  </div>
                ))}
                <div className="pt-2 border-t text-sm font-bold text-gray-700">{lang === "mr" ? "एकूण उत्पन्न:" : "Total Income:"} ₹{(totalIncome / 100000).toFixed(2)}L</div>
              </div>
            </div>
          </div>

          {/* Expenditure */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><TrendingDown className="text-red-500" />{lang === "mr" ? "खर्चाचे वाटप" : "Expenditure Breakdown"}</h3>
            <div className="flex items-center gap-6">
              <DonutChart data={expenditureData} total={totalExp} centerLabel={lang === "mr" ? "एकूण" : "Total"} />
              <div className="flex-1 space-y-2">
                {expenditureData.map((d, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} /><span className="text-gray-600">{lang === "mr" ? d.mr : d.en}</span></div>
                    <span className="font-bold text-gray-800">{d.pct}%</span>
                  </div>
                ))}
                <div className="pt-2 border-t text-sm font-bold text-gray-700">{lang === "mr" ? "एकूण खर्च:" : "Total Expenditure:"} ₹{(totalExp / 100000).toFixed(2)}L</div>
              </div>
            </div>
          </div>
        </div>

        {/* Surplus */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4">
          <Info size={24} className="text-green-600 shrink-0" />
          <div>
            <p className="font-bold text-green-800">{lang === "mr" ? "वार्षिक शिल्लक" : "Annual Surplus"}: ₹{((totalIncome - totalExp) / 100000).toFixed(2)}L</p>
            <p className="text-sm text-green-600">{lang === "mr" ? "हा निधी येत्या वर्षातील विकास कामांसाठी राखीव आहे." : "This fund is reserved for next year's development works."}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
