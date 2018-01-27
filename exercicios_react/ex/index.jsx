import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro,Segundo} from './component'
import SilvaFamily from './silvaFamily'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Nascimento">
        <Member name="Espedito"/>
        <Member name="Jana"/>
    </Family>
    , document.getElementById('app')
)

/*
ReactDOM.render(
    <div>
        <Primeiro/>
        <Segundo/>
    </div>
 
, document.getElementById('app'))
*/