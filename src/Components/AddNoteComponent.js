import React from 'react'
import { useForm } from 'react-hook-form';
// import "./addNote.css"
import { v4 as uuid } from "uuid";
export const AddNoteComponent = ({note, isUpdate}) => {
    // console.log(isUpdate)
    const {
        register,
        handleSubmit,
        //watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        let currentNotes = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

        

        if(isUpdate) {
          data.id = note.id
          let newCurrentNotes = currentNotes.map((x)=>{
            if(x.id === note.id) {
              x = data
            }
            return x;
          })
          localStorage.setItem("notes", JSON.stringify(newCurrentNotes))
        } 
        else {
          data.id = uuid().slice(0,8);
          currentNotes = [...currentNotes,data];
          localStorage.setItem("notes", JSON.stringify(currentNotes));
        }

      }; 

     
    
      //console.log(watch("example")); // you can watch individual input by pass the name of the input
      return (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input
                {...register("title", {
                required: true,
                value: note? note.title : ""
                
                })}
            />
            {errors?.title?.type === "required" && <p>This field is required</p>}


            <label>Description</label>
            <input {...register("description", {
                    required: true,
                    value: note? note.description : ""
                 })} />
            {errors?.description?.type === "required" && <p>This field is required</p>}


            <div>
            <label className='me-2'>priority</label>
            <select className="text-left" {...register("priority")} defaultValue={note? note.priority : 3}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            </div>

            <div>
            <label className='me-2'>Status</label>
            <select {...register("status")} defaultValue={note? note.status : "Pending"}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
                <option value="Failed">Failed</option>
            </select>
            </div>

            <div className='text-center'>
              <button type='reset' className='btn btn-outline-dark '>clear</button>
            </div>    

            <input type="submit" />
          </form>
        </>
      );
}
