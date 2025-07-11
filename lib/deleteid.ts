const deleteid = (json : Object) : any=>{
  if(!json) return null
    const filted = {}
      for(let a in json){
          if(a == "_id"){
            
          }else{
            if(a == "id"){
              filted[a] = Number(json.id)
            }else{
              filted[a] = json[a]
            }
          }
      }
      return filted
  }
  export default deleteid