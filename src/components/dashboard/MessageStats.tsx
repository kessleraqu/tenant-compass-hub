
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "Mon", total: 12, autoReplied: 5 },
  { name: "Tue", total: 18, autoReplied: 8 },
  { name: "Wed", total: 24, autoReplied: 12 },
  { name: "Thu", total: 27, autoReplied: 15 },
  { name: "Fri", total: 21, autoReplied: 11 },
  { name: "Sat", total: 15, autoReplied: 7 },
  { name: "Sun", total: 10, autoReplied: 4 },
];

export function MessageStats() {
  return (
    <Card className="col-span-full xl:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Message Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFEFEF" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              stroke="#9CA3AF"
              fontSize={12}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#286AFF"
              activeDot={{ r: 6 }}
              strokeWidth={2}
              name="Total Messages"
            />
            <Line
              type="monotone"
              dataKey="autoReplied"
              stroke="#10B981"
              strokeWidth={2}
              name="Auto-replied"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
