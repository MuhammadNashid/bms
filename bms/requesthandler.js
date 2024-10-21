import movieSchema from './model/moviem.js'

export async function addMovie(req,res) {

    console.log(req.body);

    const{...datas}=req.body

    await movieSchema.create({...datas}).then(()=>{
        res.status(201).send({msg:"Successfull"})
    }).catch((error)=>{
        res.status(404).send({error:error})
    })  
    
}

export async function getMovies(req, res) {
    console.log("get data");

    const data = await movieSchema.find();
    console.log(data);
    res.status(200).send(data); 
}

export async function getMovie(req,res) {
    console.log(req.params);
    const {id}=req.params;
    const data=await movieSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
    
    
}

export async function update(req,res) {
    console.log(req.params);
    console.log(req.body);
    const {...data}=req.body
    await movieSchema.updateOne({_id:req.params.id},{$set:{...data}}).then(()=>{
        res.status(201).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({error:error})
        
    })
    
    
    
}

export async function deleteemp(req, res) {
    console.log(req.params); 
    const { id } = req.params;  
    const data = await movieSchema.deleteOne({ _id: id })
        .then(() => {
            res.status(201).send({ msg: "Deleted" });
        })
        .catch((error) => {
            res.status(500).send({ error });
        });
}