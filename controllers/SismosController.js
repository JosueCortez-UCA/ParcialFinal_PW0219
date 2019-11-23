const Sismo = require("../models/Sismo")

// GET

const getAll = (req, res)=>{
    Sismo.find((err, registers)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get",
        });

        if(registers){
            res.status(200).json(registers);
        }else{
            res.status(404).json({
                message: "There isn't any register",
            });
        }
    });
}

const getOneById = (req, res)=>{
    let id = req.params.id;

    Sismo.findById(id, (err, register)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get all",
        });

        if(register){
            res.status(200).json(register);
        }else{
            res.status(404).json({
                message: `There is not a register with id ${id}`,
            });
        }
    });  
}

// POST

const insert = (req, res)=>{
    let sismo = new Sismo(req.body);

    sismo.save((err, nSismo)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to insert",
        });

        res.status(200).json({
            message: "Insert was successful",
            register: nSismo
        });
    })
}

// PUT

const update = (req, res)=>{
    let sismo = req.body

    if(!sismo._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Sismo.update({_id: sismo._id}, sismo)
        .then(value =>{
            res.status(200).json({
                message: "update was successful"
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Something happend trying to update"
            });
        })

}

// DELETE

const deleteById = (req, res)=>{
    let sismo = req.body;

    if(!sismo._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Sismo.deleteOne({_id:sismo._id})
        .then(deleted=>{
            res.status(200).json({
                message: "delete was successful"
            });
        })
        .catch(err=>{
            res.status(500).json({
                message: "Something happend trying to delete"
            });
        })
}

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById,
}