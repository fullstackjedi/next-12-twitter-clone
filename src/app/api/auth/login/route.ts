import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body = await request.json()

  // VALIDATE BODY

  // CHECK FOR USER
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (!user) {
    return NextResponse.json(
      {
        message: 'Email or password is incorrect',
      },
      { status: 400 }
    )
  }

  // COMPARE PASSWORD
  const match = await bcrypt.compare(body.password, user.password)

  if (!match) {
    return NextResponse.json(
      {
        message: 'Email or password is incorrect',
      },
      { status: 400 }
    )
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || '', {
    expiresIn: '1d',
  })

  return NextResponse.json({
    message: 'Created user successfully',
    data: {
      user,
      token,
    },
  })
}
