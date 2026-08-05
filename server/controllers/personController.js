import {
  getAllPersons,
  getPersonById
} from "../services/personService.js";

export const fetchPersons = async(req,res)=>{

    try{

        const persons=await getAllPersons();

        res.status(200).json(persons);

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

}

export const fetchPersonById=async(req,res)=>{

    try{

        const person=await getPersonById(req.params.id);

        if(!person){

            return res.status(404).json({

                success:false,
                message:"Person not found"

            });

        }

        res.status(200).json(person);

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

}