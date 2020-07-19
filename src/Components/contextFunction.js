import React,{useState,useContext} from 'react'
import stateContext from './stateContext'

const cnt = useState(useContext(stateContext))

function f(val){
    cnt[1](val)
}export default f;