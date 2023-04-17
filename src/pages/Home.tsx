import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Center, HStack, Heading, Select, Text, VStack } from '@chakra-ui/react'
import { getExchangeList } from '../service/requests'

const Home = () => {

    const BASE_VALUE = 'rub'
    const [baseCurrency, setBaseCurrency] = useState(BASE_VALUE)
    const [exchangeList, setExchangeList] = useState({})
    const [array, setArray] = useState<any>([])

    const getData = () => {
        return getExchangeList(baseCurrency).then(res => setExchangeList(res[baseCurrency]))
    }

    useEffect(() => {
        console.log(baseCurrency)
        getData()

        const interval = setInterval(() => {
            getData()
            console.log('updated!')
        }, 10000)

        return () => clearInterval(interval)

    }, [baseCurrency])

    useEffect(() => {
        for (let key in exchangeList) {
            let obj = {}
            obj[key] = exchangeList[key]
            setArray(prev => [...prev, obj])
        }
    }, [exchangeList])

  return (
    <>
        <Header/>
        <Center>
            <VStack pt='36px'>
                <Select value={baseCurrency} placeholder='Select base currency' onChange={(e) => setBaseCurrency(`${e.target.value}`.toLowerCase())}>
                    {array.map((item, id) => {
                        //Delete matches like 1rub = 1rub
                        if (Object.keys(item)[0] !== baseCurrency) {
                            return <option key={id}>
                                {`${Object.keys(item)}`.toUpperCase()}
                            </option>
                        }
                    })}
                </Select>
                <Heading size='xl' pt='24px' pb='24px'>
                    1 {baseCurrency.toUpperCase()} =
                </Heading>
                <Button onClick={getData}>
                    Refresh Data
                </Button>
                <VStack pt='24px'>
                    {array.map((item, id) => {
                        //Delete matches like 1rub = 1rub
                        if (Object.keys(item)[0] !== baseCurrency) {
                            return <Text key={id} cursor='pointer'  onClick={() => setBaseCurrency(Object.keys(item)[0])}>
                                {Object.keys(item)[0].toUpperCase()}: {item[Object.keys(item)[0]]}
                            </Text>
                        }
                    })}
                </VStack>
            </VStack>
        </Center>
    </>
  )
}

export default Home