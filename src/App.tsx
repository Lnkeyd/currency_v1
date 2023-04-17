import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Converter from './pages/Converter';

type Props = {}

const App = (props: Props) => {

  return (
    <ChakraProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/converter" component={Converter}/>
            </Switch>
        </BrowserRouter>
    </ChakraProvider>
  )
}

export default App