import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body = await request.json()

  // VALIDATE BODY

  // CHECK IF USER EXISTS
  const userExists = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (userExists) {
    return NextResponse.json(
      {
        message: 'User already exists',
      },
      { status: 400 }
    )
  }

  // HASH PASSWORD
  const hashedPassword = await bcrypt.hash(body.password, 10)

  // SAVE TO DATABASE
  const user = await prisma.user.create({
    data: {
      ...body,
      password: hashedPassword,
    },
  })

  return NextResponse.json({
    message: 'Created user successfully',
    data: user,
  })
}
