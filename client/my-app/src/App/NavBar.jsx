import React, { Component }  from 'react';
import "../Styles/NavBar.css"
import LoadingPage from "./LoadingPage";

export default function NavBar({setAccount}) {

        return <nav className="nav">
            <h1>Site Name</h1>
            <ul>
               <li>
                  <a href="/home">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcNJREFUSEvV1kFSwjAUBuD3OsNabiCcALclLOAEwgmUk6gnEU8gnqBuUrZ6AvEGuGamz3mYhjRNSRNgGLMBhiRf0iR/g3ChghdyIRomKe+BiHA0eokZfBRMeb4AojsFLlCIeSgeDFto6QXjQbCF/ij1KmbmrWEHOlbgOwAE461gF4pCfDBMUt4AQDDuhQ+h5QLH4AfhNmgs3giHoDG4E45BQ/EafAwagldgRzg8oRCPusMs60KncwuIn5VdTTSA7fYNJ5ONgXO7ByPRKiGj4V32Ajxb0adhtXNfAaBXBob65HZc1gAwMwZkw1xnjkIs+MsezvMpEHHHZjFh7vjak8lrFKKvzncdRpzhcLiswDoMiqILSZIpYAfTatWDovhq9SJIkj6m6Zqk3MNFMYEk2ZRPowYb60MmrAbFSTXw4Lz2nGScaBpGIWqb2H2cpHTBdjTaY+CXxti1xkfBeimquVziFfSkMzaWwZ55DT0LbM2cf+rHaz77k62xvaC7c807NU35mNXK2WDf0fp3MGdueZ3xTc73/zcKUcasrtt0jl257QOa/tf5bFZovgj83aWmsZpqtzRjshV8JOht7r3seXuIrPALW0s+LuCLHpsAAAAASUVORK5CYII="/>
                  </a>
               </li>
                <li>
                    <a href= "/send">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARhJREFUSEvt1cFxwkAMBdD/OXBNSqAEOGJdoBKcCqCFdJB04FRiLss5JSQd0IEyy5gZCF6Q5QVf2BnfdvUkrWZNDLQ4kIsn/LDOZ2m11vUrxuM1Rd6tmfeGG7QGMAVQUeTNgveHQ4jgFsBLA5rw3nDE1IFngT14Nrgr3gprCFuQahmSiz2qEwDxO65Pimz+70vBPjSRKUUunHTFrnJbD8Upr0wV5zPTkbIOV5eEU60uQa66BLq2l0WxNLVaQxhsuD4ArE+y/AXw4+0ARRamig+PwW5XQfXY7j2AJUW+vbgZvjd+c6rvVflNuLXy0WjG+dx95zGmCT7DyS8WRdn3rs1w8/cp254/TxKdYA+QOvOEc3bzaqzBWv0H3NtnH/iqLgAAAAAASUVORK5CYII="/>
                    </a>
                </li>
            </ul>
        </nav>

}
