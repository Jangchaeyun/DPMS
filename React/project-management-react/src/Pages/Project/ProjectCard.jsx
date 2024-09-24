import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";

const ProjectCard = () => {
  return (
    <Card className="p-5 w-full lg:max-w-3xl">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h1 className="cursor-pointer font-bold text-lg">
                Day Project Management System
              </h1>
              <DotFilledIcon />
              <p className="text-sm text-gray-400">풀스텍</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="rounded-full" variant="ghost" size="icon">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>수정</DropdownMenuItem>
                  <DropdownMenuItem>삭제</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="text-gray-500 text-sm">프로젝트 관리 시스템</p>
        </div>
        <div>
            
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
