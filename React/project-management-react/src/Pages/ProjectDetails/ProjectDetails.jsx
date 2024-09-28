import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";

const ProjectDetails = () => {
  const handleProjectInvitation = () => {};
  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-800 pb-10 w-full">
              <h1 className="text-lg font-semibold pb-5">
                Day Project Management System
              </h1>
              <div className="space-y-5 pb-10 text-sm">
                <p className="w-full md:max-w-lg lg:max-w-xl">
                  Day Project Management System
                </p>
                <div className="flex">
                  <p className="w-36">프로젝트 리더 :</p>
                  <p>Band Aid</p>
                </div>
                <div className="flex">
                  <p className="w-36">멤버 :</p>
                  <div className="flex items-center gap-2">
                    {[1, 1, 1, 1].map((item) => (
                      <Avatar className="cursor-pointer" key={item}>
                        <AvatarFallback>B</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger>
                      <DialogClose>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleProjectInvitation}
                          className="ml-2"
                        >
                          <span>초대</span>
                          <PlusIcon className="w-3 h-3" />
                        </Button>
                      </DialogClose>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>사용자 초대</DialogHeader>
                      <InviteUserForm />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex">
                  <p className="w-36">카테고리 :</p>
                  <p>풀스텍</p>
                </div>
                <div className="flex">
                  <p className="w-36">프로젝트 리더 :</p>
                  <Badge>Band Aid</Badge>
                </div>
              </div>
              <section>
                <p className="py-5 border-b text-lg -tracking-wider">할 일</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pending" title="할 일 리스트" />
                  <IssueList status="in_progress" title="진행 중" />
                  <IssueList status="done" title="완료" />
                </div>
              </section>
            </div>
          </ScrollArea>
          <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
