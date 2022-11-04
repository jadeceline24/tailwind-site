import React from 'react'
import { ContentBox } from './useContent'

const Content = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center md:px-6 md:flex-row space-y-0'>
        <div className="md:flex-1 text-center md:text-left ">
            <h2 className='text-2xl text-darkBlue font-bold pt-20 pb-5 max-w-xs px-10 md:pt-10 mx-auto md:mx-0 md:text-3xl md:px-0'>What’s different about Manage?</h2>
            <p className='text-darkGrayBlue max-w-xs mx-auto md:mx-0'>Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams. </p>
        </div>
        <div className="md:flex-1">
            <ContentBox
            num={'01'}
            title={'Track company-wide progress'}
            text={'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'}
            />
            <ContentBox 
            num={'02'}
            title={'Advanced built-in reports'}
            text={'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'}
            />
            <ContentBox 
            num={'03'}
            title={'Everything you need in one place'}
            text={'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'}
            />
        </div>

    </div>
  )
}

export default Content