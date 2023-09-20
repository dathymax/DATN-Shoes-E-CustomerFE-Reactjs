import React from 'react'
import "./index.css"
import Button from '../../components/interaction/button/Button'
import ArrowRight from "../../assets/images/ArrowRight.png"

const HomePage = () => {
    return (
        <div>
            <div className='home__hero text-white'>
                <div className="container m-auto h-full">
                    <p className='home__hero-sneakers text-[96px]'>Sneakers -</p>
                    <p className='text-[96px]'>Flash Sale</p>
                    <p className='text-[20px]'>Trở nên khác biệt với bộ sưu tập giày Nike</p>
                    <div className="h-[60px]"></div>
                    <Button type='primary' style={{ width: "290px" }}>
                        <p className="flex items-center justify-center gap-3">
                            Khám phá ngay
                            <img src={ArrowRight} alt="ArrowRight" className='mt-[2px]' />
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage