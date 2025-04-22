import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    await dbConnect();

    try {
        const products = await Product.find({});
        return NextResponse.json({ message: "Connected" })
    } catch (err) {
        return NextResponse.json({ error: err.message });
    }
}