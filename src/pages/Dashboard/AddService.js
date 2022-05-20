import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import fetcher from '../../api/fetcher';

const AddService = () => {
    const [imageURL, setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const serviceData = {
            ...data,
            image: imageURL
        };
        const res = await fetcher.post('service', serviceData)
        console.log(res);
        reset();
        setImageURL();
    };
    const handleUploadImage = e => {
        setIsLoading(true);
        const image = e.target.files[0];

        const formData = new FormData();
        formData.set('image', image)

        axios.post("https://api.imgbb.com/1/upload?key=c1e87660595242c0175f82bb850d3e15", formData)
            .then(res => {
                setImageURL(res.data.data.display_url);
                // console.log(res.data.data.display_url);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 p-5">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-2xl text-center font-semibold text-primary'>Add Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                {...register("serviceName", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Charge</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                {...register("serviceCharge", { required: true })}
                            />
                        </div>
                        <div className="form-control mt-5">
                            <label htmlFor='image' className={!isLoading ? 'btn' : 'btn loading'}>
                                {
                                    isLoading ? <p>Uploading Image</p> : <p>{imageURL ? 'Image Uploaded' : 'Upload Image'}</p>
                                }
                            </label>
                            <input
                                type="file"
                                id='image'
                                className="input input-bordered p-2 hidden"
                                onChange={handleUploadImage}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className={imageURL ? 'btn btn-primary' : 'btn btn-disabled'} type="submit" >
                                Add Services
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;