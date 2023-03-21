

const registrationsOffice="(313) 583-6500"
const billingOffice="(313) 593-5300"
const financialAid="umd-ask-ofa@umich.edu"
const newEnrollment="313-583-6500"
const advisingOffice="313-593-5576"

exports.helloWorld = (req, res) => {
  let message =  req.body.message ;
 

  if(message=="1"){

   res.status(200).json( {message:"Hello let's start chatting:Are you?1)current student  2) new student","1":"option1","2":"option2"});

  }else if(message=="option1"){
   
    return res.status(200).json({message:"which service you are looking for? 1) registrations 2)billing and statments 2)financial aid ","1":"option3","2":"option4","3":"option5"});
  }else if(message=="option2"){

 return res.status(200).json({message:"which service you are looking for? 1)new registrations 2)advising ","1":"option6","2":"option7"});
  }else if(message=="option3"){
 return res.status(200).send(`please contact registrations office : ${registrationsOffice} 
 thank for the chat`);

  }else if(message=="option4"){
 return res.status(200).send(`please contact billings office : ${billingOffice} 
 thank for the chat`);

  }else if(message=="option5"){
 return res.status(200).send(`please contact financial aid office : ${financialAid} 
 thank for the chat`);

  }else if(message=="option6"){
 return res.status(200).send(`please contact new enrollment office: ${newEnrollment} 
 thank for the chat`);

  }else if(message=="option7"){
 return res.status(200).send(`please contact advising office: ${advisingOffice} 
 thank for the chat`);

  }
  return res.status(400).send(`sorry I can not understand the message`);
    
 
};
