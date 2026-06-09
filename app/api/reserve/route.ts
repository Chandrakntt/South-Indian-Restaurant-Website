import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log('Reservation received:', data)

    return NextResponse.json(
      { message: 'Reservation confirmed', data },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process reservation' },
      { status: 500 }
    )
  }
}
