import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('Course-Pilot');
    const courses = await db.collection('coursecollection').find({}).toArray();

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching courses', error },
      { status: 500 }
    );
  }
}
