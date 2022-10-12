import React from 'react'
import { settingsLinks } from '../../utils/data'
import AunthenticatedLayout from '../AuthenticatedLayout'
import SettingsCard from './SettingsCard'

const PayrollSettings = () => {
    return (
        <AunthenticatedLayout >
            <div className='p-8 mt-8 space-y-8'>
                <div className='flex justify-between'>
                    <h2>Payroll Settings</h2>
                    <select name="" id="">
                        <option value="">Payroll Frequency</option>
                        <option value="">Monthly</option>
                        <option value="">Quaterly</option>
                        <option value="">Once</option>

                    </select>

                </div>
                <div className="cards grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
                   {settingsLinks.map((data) => {
                    return(
                    <SettingsCard key={data.id} title={data.title} desc={data.desc} />

                    )
                   })}
                  


                </div>

            </div>

        </AunthenticatedLayout>
    )
}

export default PayrollSettings