import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Center, HStack, IconButton, NumberInput, NumberInputField, Select } from '@chakra-ui/react'
import { BsArrowLeftRight } from 'react-icons/bs'
import { getCurrencyList, getExchange } from '../service/requests'
import useDebounce from '../hooks/useDebounce'

const Converter = () => {

    const [currencies, setCurrencies] = useState<any>({})
    const [array, setArray] = useState<any>([])
    const [quantity, setQuantity] = useState(0)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [targetQuantity, setTargetQuantity] = useState(0)
    const debouncedQuantity = useDebounce<number>(quantity, 500)

    useEffect(() => {
        getCurrencyList().then(res => setCurrencies(res))
    }, [])

    //Потому что сервер возвращает список валют через свойства одного объекта...
    useEffect(() => {
        for (let key in currencies) {
            let obj = {}
            obj[key] = currencies[key]
            setArray(prev => [...prev, obj])
        }
    }, [currencies])

    useEffect(() => {
        if (!quantity) {
            setTargetQuantity(0)
        }
        if (quantity && from && to) {
            getExchange(from.toLowerCase(), to.toLowerCase()).then(res => setTargetQuantity(res[Object.keys(res)[1]] * quantity))
        }
    }, [from, to, debouncedQuantity])

  return (
    <>
        <Header/>
        <Center>
            <HStack pt='200px'>
                <NumberInput>
                    <NumberInputField value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
                </NumberInput>
                <Select placeholder='From' w='100px' value={from} onChange={(e) => setFrom(e.target.value)}>
                    {array.map((item, id) => <option key={id}>
                        {`${Object.keys(item)}`.toUpperCase()}
                    </option>)}
                </Select>
                <IconButton aria-label='Reverse currencies'
                    icon={<BsArrowLeftRight/>}
                    onClick={() => {
                        let swap = from
                        setFrom(to)
                        setTo(swap)
                    }}
                />
                <NumberInput value={targetQuantity}>
                    <NumberInputField />
                </NumberInput>
                <Select placeholder='To' w='100px' value={to} onChange={(e) => setTo(e.target.value)}>
                    {array.map((item, id) => <option key={id}>
                        {`${Object.keys(item)}`.toUpperCase()}
                    </option>)}
                </Select>
            </HStack>
        </Center> 
    </>
  )
}

export default Converter