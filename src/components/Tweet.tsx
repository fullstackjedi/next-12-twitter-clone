import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { Comment, Like, Retweet, Share } from '@twitter/ui/icons/Tweet'
import React from 'react'

const iconStyle = {
  size: 18,
  fill: '#ffffff80',
}

export const Tweet = () => {
  return (
    <Flex gap="1.5rem" px="2rem" py="1.5rem" borderTop="1px solid #ffffff30">
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />

      <Box>
        <Flex gap="1rem">
          <Text fontWeight="bold">Handle</Text>
          <Text opacity="0.7">@prosper</Text>
          <Text opacity="0.7">. 10m</Text>
        </Flex>

        <Box mt="0.5rem">
          <Text fontSize="1.3rem" lineHeight="2rem">
            Raptor V3 just achieved 350 bar chamber pressure (269 tons of
            thrust). Congrats to @SpaceX propulsion team! Starship Super Heavy
            Booster has 33 Raptors, so total thrust of 8877 tons or 19.5 million
            pounds.
          </Text>
        </Box>

        <Flex justify="space-between" mt="1rem">
          <TweetAction icon={<Comment {...iconStyle} />} count={20} />
          <TweetAction icon={<Retweet {...iconStyle} />} count={'1.3k'} />
          <TweetAction icon={<Like {...iconStyle} />} count={'1m'} />
          <TweetAction icon={<Share {...iconStyle} />} count="" />
        </Flex>
      </Box>
    </Flex>
  )
}

type TweetActionProps = {
  icon: React.ReactNode
  count: number | string
}

const TweetAction = ({ icon, count }: TweetActionProps) => {
  return (
    <Flex gap="1rem" align="center">
      <Box>{icon}</Box>
      <Text color="#ffffff80">{count}</Text>
    </Flex>
  )
}
