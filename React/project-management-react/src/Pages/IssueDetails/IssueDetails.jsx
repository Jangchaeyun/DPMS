import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssueById } from "@/Redux/Issue/Action";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();
  const dispatch = useDispatch();
  const { issue } = useSelector((store) => store);

  const handleUpdateIssueStatus = (status) => {
    console.log(status);
  };

  useEffect(() => {
    dispatch(fetchIssueById(issueId));
  }, [issueId]);

  return (
    <div className="px-20 py-8 text-gray-600">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-600">
              {issue.issueDetails.title}
            </h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-600">설명</h2>
              <p className="text-gray-600 text-sm mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-5">
              <h1 className="pb-3">활동</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value="all">모두</TabsTrigger>
                  <TabsTrigger value="comments">코멘트</TabsTrigger>
                  <TabsTrigger value="history">기록</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  여기에서 계정을 변경하세요
                </TabsContent>
                <TabsContent value="comments">
                  <CreateCommentForm issueId={issueId} />
                  <div className="mt-8 space-y-6">
                    {[1, 1, 1].map((item) => (
                      <CommentCard key={item} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  여기에서 변경된 기록을 확인하세요
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="할 일" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">할 일</SelectItem>
              <SelectItem value="in_progress">진행 중</SelectItem>
              <SelectItem value="done">완료</SelectItem>
            </SelectContent>
          </Select>
          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">상세</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">할당</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>F</AvatarFallback>
                    </Avatar>
                    <p>Fourever</p>
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">라벨</p>
                  <p>None</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">상태</p>
                  <Badge>진행 중</Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">릴리즈</p>
                  <p>28-09-2024</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">보고자</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                    <p>Band Aid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
