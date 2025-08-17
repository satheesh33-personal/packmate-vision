import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  HardDrive, 
  Wifi, 
  Server, 
  CheckCircle, 
  AlertTriangle,
  XCircle 
} from "lucide-react";

export const SystemStatus = () => {
  const statusItems = [
    {
      name: "Camera Connection",
      status: "online",
      icon: Camera,
      details: "HD Recording Ready"
    },
    {
      name: "Storage",
      status: "warning",
      icon: HardDrive,
      details: "78% Full (2.3TB Free)"
    },
    {
      name: "Network",
      status: "online",
      icon: Wifi,
      details: "Connected (52ms)"
    },
    {
      name: "API Service",
      status: "online",
      icon: Server,
      details: "Python Service Active"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "error":
        return <XCircle className="w-4 h-4 text-destructive" />;
      default:
        return <CheckCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "online":
        return "default";
      case "warning":
        return "secondary";
      case "error":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="border-border bg-gradient-to-br from-card to-muted/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Server className="w-6 h-6 text-primary" />
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {statusItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <Badge variant={getStatusVariant(item.status) as any}>
                    {item.status}
                  </Badge>
                </div>
              </div>
            );
          })}
          
          {/* Storage Progress */}
          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Storage Usage</span>
              <span className="text-sm text-muted-foreground">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};