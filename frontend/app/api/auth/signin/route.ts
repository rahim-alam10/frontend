// app/api/auth/signin/route.ts
import { NextResponse } from 'next/server'
import { signJWT, verifyPassword } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user in database (mock)
    const user = {
      id: '1',
      email,
      fullName: 'Usman Sheikh',
      goal: 'entry-test',
      role: 'student',
      createdAt: new Date().toISOString(),
      password: 'hashed_password' // In real app, compare with hashed password
    }

    // Verify password (mock)
    // const isValid = await verifyPassword(password, user.password)
    const isValid = true // Mock verification

    if (!isValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate JWT
    const token = await signJWT({
      userId: user.id,
      email: user.email,
      role: user.role
    })

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      token,
      user: userWithoutPassword
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}