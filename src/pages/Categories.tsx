import React, {useState} from 'react'
import axios from 'axios';

export default function Categories() {
    const [name, setCategory] = useState<string>('')  
    const [error, setError] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const handleSubmit = async(e:any) => {
        e.preventDefault();

        try {
            const {data} = await axios.post(`/categories`, {name: name});
            setError(false);
            setCategory('');
            setSuccess(true);
            return data;
        } catch (error) {
            console.log(error)
            setError(true);
            setSuccess(false);     
        }
    }


    return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center my-4 login'>
        {error && <span className='text-center text-red-500 mt-3 font-bold text-2xl'>An Error Occurred</span>}
        <p className='text-3xl italic font-extrabold'>
            Category
        </p>
        <br/>
        <input type='text' value={name} onChange={(e) => setCategory(e.target.value)} placeholder='Create new category here...'
        className='m-4 h-8 w-[40%]'/>
        <button type="submit" className="self-center w-20 md:w-40 items-center rounded-lg text-white p-2 mt-5 cursor-pointer bg-green-600">
            Save
        </button>
        
        {success && <span className='text-center text-green-500 mt-5  text-3xl'>Added new category!</span>}
    </form>
  )
}
