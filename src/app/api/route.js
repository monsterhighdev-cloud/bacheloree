import dbConnect from "@/backend/_db";
import User from "@/backend/model/user";
import { NextResponse } from "next/server";

export const GET = async () => {
  await dbConnect();

  const users = await User.find();
  console.log(users);

  return NextResponse.json(users);
};
