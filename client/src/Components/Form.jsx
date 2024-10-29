import React, {useState} from 'react'
import {Button, Input} from "@material-tailwind/react"
import Loadingg from './Loading';

const Form = ({onSubmit}) => {
    const[formData, setFormData] = useState({
        keyword: "",
        count: "",
        email: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        setLoading(true);

        await onSubmit(formData);

        setLoading(false);
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4 text-base'>

        <div className='fields flex flex-col gap-2'>
            <div className='singer-name gap-2 flex items-center'>
                <p className='w-36'>Keyword: </p>
                <Input color='blue' type='text' size='sm' name='keyword' value={formData.keyword} onChange={handleChange} placeholder='What are you thinking about?'/>
            </div>
            <div className='videos-no gap-2 flex items-center'>
                <p className='w-36'>No. of images: </p>
                <Input color='blue' type='number' size='sm' name='count' value={formData.count} onChange={handleChange} placeholder='10'/>
            </div>
            <div className='email gap-2 flex items-center'>
                <p className='w-36'>Email Id: </p>
                <Input color='blue' type='email' size='sm' name='email' value={formData.email} onChange={handleChange} placeholder='abc@gmail.com'/>
            </div>
        </div>
        {/* <button type='submit' className='px-4 py-1 '>
            Submit
        </button> */}
        <Button type='submit' size='md' variant='gradient'>
            {loading? 'Loading...':'Submit'}
        </Button>

        <div className='p-2 flex align-middle justify-center'>
        {loading && <Loadingg/>}
        </div>
        
    </form>
  )
}

export default Form