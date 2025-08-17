import { RecordingControl } from "@/components/RecordingControl";
import { SystemStatus } from "@/components/SystemStatus";
import { RecentRecordings } from "@/components/RecentRecordings";
import { VideoFileBrowser } from "@/components/VideoFileBrowser";
import { Warehouse, Package, Video } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Warehouse className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Warehouse Recording System</h1>
                <p className="text-sm text-muted-foreground">Packing Station Video Control Interface</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">Station ID: PKG-001</p>
                <p className="text-xs text-muted-foreground">Operator: John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Primary Controls */}
          <div className="lg:col-span-2 space-y-6">
            <RecordingControl />
            <VideoFileBrowser />
          </div>
          
          {/* Right Column - Status and Recent */}
          <div className="space-y-6">
            <SystemStatus />
            <RecentRecordings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
