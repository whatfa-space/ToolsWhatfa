import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // if (!success) {
  //   return new Response("err", {
  //     status: 0,
  //   });
  // }

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  }).then(() =>
    NextResponse.json({
      code: 200,
      message: "hello!10",
    })
  );
}
