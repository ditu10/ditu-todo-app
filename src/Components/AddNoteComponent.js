import React from 'react'
import { useForm } from 'react-hook-form';
import "./addNote.css"

export const AddNoteComponent = () => {
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example")); // you can watch individual input by pass the name of the input
      return (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input
                {...register("title", {
                required: true,
                maxLength: 20,
                // pattern: /^[A-Za-z]+$/i
                })}
            />
            {errors?.title?.type === "required" && <p>This field is required</p>}

            {/* {errors?.title?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )} */}
            {/* {errors?.title?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )} */}

            <label>Description</label>
            <input {...register("description", {
                //  pattern: /^[A-Za-z]+$/i 
                    required: true
                 })} />
            {errors?.description?.type === "required" && <p>This field is required</p>}
            {/* {errors?.lastName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )} */}

            <div>
            <label>priority</label>
            <select className="text-left" {...register("priority")} defaultValue={3}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={2}>4</option>
                <option value={3}>5</option>
            </select>
            </div>

            <div>
            <label>Status</label>
            <select {...register("status")} defaultValue="Pending">
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
                <option value="Failed">Failed</option>
            </select>
            </div>

            
            
            <input type="submit" />
          </form>
        </>
      );
}
