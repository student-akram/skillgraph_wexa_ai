import { getRoadmap } from "../services/roadmapService.js";

export const fetchRoadmap=async(req,res)=>{

    try{

        const roadmap=await getRoadmap(req.params.skill);

        res.status(200).json(roadmap);

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:error.message

        });

    }

}