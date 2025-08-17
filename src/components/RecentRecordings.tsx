import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Download, 
  Eye, 
  Clock, 
  Package,
  Calendar,
  FileVideo 
} from "lucide-react";

export const RecentRecordings = () => {
  const recentRecordings = [
    {
      id: 1,
      orderNumber: "WH-2024-001234",
      date: "2024-01-17",
      time: "14:32:15",
      duration: "03:45",
      fileSize: "124 MB",
      status: "completed"
    },
    {
      id: 2,
      orderNumber: "WH-2024-001233",
      date: "2024-01-17",
      time: "14:15:22",
      duration: "02:18",
      fileSize: "89 MB",
      status: "completed"
    },
    {
      id: 3,
      orderNumber: "WH-2024-001232",
      date: "2024-01-17",
      time: "13:58:10",
      duration: "04:12",
      fileSize: "156 MB",
      status: "completed"
    },
    {
      id: 4,
      orderNumber: "WH-2024-001231",
      date: "2024-01-17",
      time: "13:42:33",
      duration: "01:55",
      fileSize: "67 MB",
      status: "completed"
    },
    {
      id: 5,
      orderNumber: "WH-2024-001230",
      date: "2024-01-17",
      time: "13:25:41",
      duration: "03:28",
      fileSize: "112 MB",
      status: "processing"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "processing":
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
          <Video className="w-6 h-6 text-primary" />
          Recent Recordings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentRecordings.map((recording) => (
            <div 
              key={recording.id} 
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileVideo className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium font-mono">{recording.orderNumber}</span>
                    <Badge variant={getStatusVariant(recording.status) as any}>
                      {recording.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {recording.date} {recording.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {recording.duration}
                    </div>
                    <span>{recording.fileSize}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Button variant="outline" className="w-full">
            View All Recordings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};