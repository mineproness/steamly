"use client"
import cookie from 'js-cookie'

export default function datauser(){
    return Number(cookie.get("userid"))
}