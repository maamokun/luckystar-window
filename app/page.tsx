import Image from 'next/image'
import { Center, Heading, Input, InputLeftAddon, InputGroup, Button } from '@chakra-ui/react'

import luckystar from './assets/luckystar.gif'

export default function Home() {
  return (
    <main className="">
        <Image src={luckystar.src} alt="Lucky Star" width={300} height={300} className='absolute inset-y-0 left-0' />
        <div className='absolute inset-y-0 right-20'>
          <Center>
            <Heading className='mt-3' size="md">H-hi there...</Heading>
            </Center>
            <Center>
            <Heading className='mt-2' size="md">Do you think I could have your</Heading>
            </Center>
            <Center>
            <Heading className='mt-2' size="md">credit card information, p-please?</Heading>
            </Center>
            <Center className='mt-4'>
              <InputGroup size="sm">
            <InputLeftAddon>Card number:</InputLeftAddon>
            <Input placeholder='' />
            </InputGroup>
            </Center>
            <Center className='mt-2'>
            <InputGroup size="sm">
            <InputLeftAddon>Expiry date:</InputLeftAddon>
            <Input placeholder='' />
            </InputGroup>
            </Center>
            <Center className='mt-2'>
            <InputGroup size="sm">
            <InputLeftAddon>Security code:</InputLeftAddon>
            <Input placeholder='' />
            </InputGroup>
            </Center>
            <Center>
            <Button className="mt-3" colorScheme='gray'>Th-thanks</Button>
            </Center>
        </div>
    </main>
  )
}
