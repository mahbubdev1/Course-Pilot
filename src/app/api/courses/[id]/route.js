import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db('Course-Pilot');

    const { id } = params; // Extract ID from params

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'Invalid course ID' },
        { status: 400 }
      );
    }

    const course = await db
      .collection('coursecollection')
      .findOne({ _id: new ObjectId(id) });

    if (!course) {
      return NextResponse.json(
        { message: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching course', error },
      { status: 500 }
    );
  }
}
