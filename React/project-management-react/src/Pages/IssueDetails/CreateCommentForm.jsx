import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createComment } from "@/Redux/Comment/Action";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const CreateCommentForm = ({ issueId }) => {
  const dispatch = useDispatch();
  const form = useForm({
    // resolver: zod
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(createComment({ content: data.content, issueId }));
    console.log("comment", data);
  };
  return (
    <div>
      <Form {...form}>
        <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="w-[20rem]"
                      placeholder="코멘트 추가..."
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit">저장</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCommentForm;
