import { CollectionData } from "@/constants/data";
import { NextResponse } from "next/server";

export async function GET() {
  if (CollectionData) {
    const body = {
      success: true,
      data: CollectionData,
    };
    return new NextResponse(JSON.stringify(body), { status: 200 });
  }

  const body = {
    success: false,
    data: {
      message: "No data found!",
    },
  };
  return new NextResponse(JSON.stringify(body), { status: 403 });
}
