import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserList = () => {
  return (
    <>
      <div className="space-y-3">
        <div className="border rounded-md">
          <p className="py-2 px-3">{"Band Aid" || "Unassigned"}</p>
        </div>
        <div className="py-2 group hover:bg-slate-300 cursor-pointer flex items-center space-x-4 rounded-md border px-4">
          <Avatar>
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm leading-none">Band Aid</p>
            <p className="text-sm leading-none">@bandaid</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
