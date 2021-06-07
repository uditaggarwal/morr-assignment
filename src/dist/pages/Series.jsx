import React, { useState,useEffect } from 'react'
import popularSr from '../controllers/movieSeriesController'

export default function Series() {
    const [seriesData,setseriesData]=useState()
    const [pageLoad,setPageLoad]=useState(true)
    const [error,setError]=useState(false)
    useEffect(() => {
        setPageLoad(true)
        popularSr.popularSeries().then((res)=>{
           console.log(res)
        setseriesData(res)
        setPageLoad(false)
       }).catch((error)=>{
           setError(error)
       })
        return () => {}
    }, []) 


    return (
        <>
            {
                 pageLoad && !error? <p className="text-center m-4 txt-danger">loading ...</p> :
                <div className="seriess ">
                    <div className="tag rounded">
                       <h4 className="container p-4 mb-2 ">Popular Series</h4>
                    </div>
                    <div className="row container gx-0 mx-auto my-2">
                        
                        {
                            seriesData.map((value)=>{
                                return(
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                        <img src={value.images['Poster Art'].url} width="100%" height="200px" className="rounded" alt="" />
                                        <p className="text-center mt-2"> {value.title}</p>
                                    </div>

                                )
                            })
                        }
                        
                    </div>
                </div>
            }
            {
                error && <p className="text-center m-4 txt-danger">{error}</p>
            }
            
        </>
    )
}
