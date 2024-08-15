import { NextResponse } from "next/server";

export const GET = async () => {
  // await dbConnect();

  // const users = await User.find();
  // console.log(users);

  return NextResponse.json([]);
  // return NextResponse.json(users);
};
