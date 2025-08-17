import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Play, Square, Camera, Package, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export const RecordingControl = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [systemStatus, setSystemStatus] = useState<"online" | "offline" | "error">("online");

  const handleStartRecording = () => {
    if (!orderNumber.trim()) {
      toast.error("Please enter an order number to start recording");
      return;
    }
    
    setIsRecording(true);
    setRecordingDuration(0);
    toast.success(`Recording started for order ${orderNumber}`);
    
    // Simulate recording duration counter
    const interval = setInterval(() => {
      setRecordingDuration(prev => prev + 1);
    }, 1000);
    
    // Store interval for cleanup
    (window as any).recordingInterval = interval;
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    clearInterval((window as any).recordingInterval);
    toast.success(`Recording saved for order ${orderNumber}`);
    setOrderNumber("");
    setRecordingDuration(0);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusColor = () => {
    switch (systemStatus) {
      case "online": return "success";
      case "offline": return "secondary";
      case "error": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <Card className="border-border bg-gradient-to-br from-card to-muted/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Camera className="w-6 h-6 text-primary" />
            Recording Control
          </CardTitle>
          <Badge variant={getStatusColor() as any} className="flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            System {systemStatus}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Order Input */}
        <div className="space-y-2">
          <Label htmlFor="orderNumber" className="text-sm font-medium">
            Order Number
          </Label>
          <div className="flex gap-2">
            <Package className="w-5 h-5 text-muted-foreground mt-2.5" />
            <Input
              id="orderNumber"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Scan or enter order number"
              disabled={isRecording}
              className="font-mono text-lg"
            />
          </div>
        </div>

        {/* Recording Status */}
        {isRecording && (
          <div className="p-4 bg-recording/10 border border-recording/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-recording rounded-full animate-pulse" />
                <span className="font-medium text-recording-foreground">Recording in progress</span>
              </div>
              <div className="flex items-center gap-1 text-lg font-mono">
                <Clock className="w-4 h-4" />
                {formatDuration(recordingDuration)}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Order: {orderNumber}
            </p>
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleStartRecording}
            disabled={isRecording || systemStatus !== "online"}
            variant="default"
            size="lg"
            className="flex-1 h-12 text-lg font-semibold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Recording
          </Button>
          
          <Button
            onClick={handleStopRecording}
            disabled={!isRecording}
            variant="destructive"
            size="lg"
            className="flex-1 h-12 text-lg font-semibold bg-gradient-to-r from-recording to-recording/80 hover:from-recording/90 hover:to-recording/70"
          >
            <Square className="w-5 h-5 mr-2" />
            Stop Recording
          </Button>
        </div>

        {/* Instructions */}
        <div className="p-3 bg-info/10 border border-info/20 rounded-lg">
          <p className="text-sm text-info-foreground">
            <strong>Instructions:</strong> Enter order number, click Start Recording, complete packing process, then Stop Recording to save video file.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};