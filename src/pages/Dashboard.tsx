
import { StatCard } from "@/components/dashboard/StatCard";
import { MessageStats } from "@/components/dashboard/MessageStats";
import { RecentMessages } from "@/components/dashboard/RecentMessages";
import { PropertiesOverview } from "@/components/dashboard/PropertiesOverview";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { 
  MessageSquare, 
  Home, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-charcoal">Dashboard</h1>
        <p className="text-medium-gray mt-1">Welcome back, John Doe</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Messages"
          value="248"
          icon={MessageSquare}
          trend={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Open Issues"
          value="15"
          icon={Home}
          description="Across all properties"
          trend={{ value: 8, positive: false }}
        />
        <StatCard 
          title="Response Time"
          value="1h 24m"
          icon={Clock}
          description="Average"
          trend={{ value: 15, positive: true }}
        />
        <StatCard 
          title="Auto-Response Rate"
          value="62%"
          icon={CheckCircle2}
          trend={{ value: 5, positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <MessageStats />
        <UpcomingEvents />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <RecentMessages />
        <PropertiesOverview />
      </div>
    </div>
  );
}
