import React from 'react'
import UpdateFood from '../components/UpdateFood'
import { useParams } from 'react-router-dom'
import MasterLayout from '../components/shared/MasterLayout'

const FoodEditPage = () => {
    const {id} = useParams()
    return (
        <MasterLayout>
            <UpdateFood id={id}/>
        </MasterLayout>
    )
}

export default FoodEditPage