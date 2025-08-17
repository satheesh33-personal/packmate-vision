import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Calendar, 
  FolderOpen, 
  FileVideo, 
  Download,
  Eye,
  Package,
  Clock,
  Filter
} from "lucide-react";

export const VideoFileBrowser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("2024-01-17");

  const videoFiles = [
    {
      folder: "2024-01-17",
      files: [
        { orderNumber: "WH-2024-001234", time: "14:32:15", size: "124 MB", duration: "03:45" },
        { orderNumber: "WH-2024-001233", time: "14:15:22", size: "89 MB", duration: "02:18" },
        { orderNumber: "WH-2024-001232", time: "13:58:10", size: "156 MB", duration: "04:12" },
        { orderNumber: "WH-2024-001231", time: "13:42:33", size: "67 MB", duration: "01:55" },
        { orderNumber: "WH-2024-001230", time: "13:25:41", size: "112 MB", duration: "03:28" },
      ]
    },
    {
      folder: "2024-01-16",
      files: [
        { orderNumber: "WH-2024-001229", time: "16:45:12", size: "98 MB", duration: "02:45" },
        { orderNumber: "WH-2024-001228", time: "16:20:33", size: "145 MB", duration: "04:32" },
        { orderNumber: "WH-2024-001227", time: "15:55:21", size: "76 MB", duration: "01:48" },
      ]
    }
  ];

  const filteredFiles = videoFiles.filter(folder => 
    folder.folder === selectedDate && 
    folder.files.some(file => 
      file.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Card className="border-border bg-gradient-to-br from-card to-muted/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <FolderOpen className="w-6 h-6 text-primary" />
          Video File Browser
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search and Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="search" className="text-sm font-medium">
              Search Order Number
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter order number..."
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">
              Select Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* File Browser */}
        <div className="space-y-4">
          {filteredFiles.map((folder) => (
            <div key={folder.folder} className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                <Calendar className="w-5 h-5" />
                {folder.folder}
                <Badge variant="secondary" className="ml-2">
                  {folder.files.length} files
                </Badge>
              </div>
              
              <div className="space-y-2 pl-6">
                {folder.files
                  .filter(file => 
                    file.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((file) => (
                    <div 
                      key={file.orderNumber} 
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileVideo className="w-4 h-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium font-mono">{file.orderNumber}.mp4</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{file.time}</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {file.duration}
                            </div>
                            <span>{file.size}</span>
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
            </div>
          ))}
          
          {filteredFiles.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <FileVideo className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No video files found for the selected criteria</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};