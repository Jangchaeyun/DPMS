import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import CreateProjectForm from "../Project/CreateProjectForm";
import { CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="cursor-pointer">DPMS</p>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">새로운 프로젝트 만들기</Button>
          </DialogTrigger>
          <DialogContent>
            <CardHeader>새로운 프로젝트 만들기</CardHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
        <Button variant="ghost">업그레이드</Button>
      </div>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-orange-500"
            >
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>zzangsally</p>
      </div>
    </div>
  );
};

export default Navbar;
